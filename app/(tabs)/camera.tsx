import { Image, StyleSheet, Platform, Button, Text, TouchableOpacity, View } from 'react-native';
// import ImageToBase64 from 'react-native-image-base64';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRef, useState } from 'react';
import { CameraType, CameraView, useCameraPermissions,  } from 'expo-camera';
import RNFetchBlob from 'rn-fetch-blob';
import React from 'react';

export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [base64, setBase64] = useState("");
  const ref = useRef(null)
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }
  const takePhoto = async () => {
    if (ref.current) {
      try {
        let photo, base64 = await ref.current.takePictureAsync({
          quality: 1, // Maximum quality
          base64: true, // Include the base64 representation of the image
        });
        setBase64(base64.base64);  // Store the base64 image string
        console.log("Photo taken:", base64.uri);
        sendImageToServer(base64.base64)
      } catch (error) {
        console.error("Error taking photo:", error);
      }
    }
  };

  const sendImageToServer = async (base64: String) => {
    if (!base64) {
      console.log("No image to send");
      return;
    }

    try {
      const response = await fetch(`http://192.168.0.155:8080/sendImage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"image":base64})  // Send base64 image as JSON
      });

      const contentType = response.headers.get('Content-Type');
      const data = contentType && contentType.includes('application/json')
        ? await response.json()
        : await response.text();

      console.log('Response Data:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={ref}>
        <View style={styles.buttonContainer}>
        <View style={styles.buttonContainer2}>
        
        </View>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    flexDirection: "column-reverse"
  },
  buttonContainer: {
    
    backgroundColor: '#171721',
    flexDirection: "column-reverse",
    margin: 0,
    height: 400,
    borderRadius: 45
  },
  buttonContainer2: {
    
    backgroundColor: '#FF4081',
    margin: 0,
    height: 300,
    borderRadius: 45
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});