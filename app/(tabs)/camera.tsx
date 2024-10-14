import React, { useRef, useState } from 'react';
import { Image, StyleSheet, Platform, Button, Text, TouchableOpacity, View, Modal } from 'react-native';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
// import RNFetchBlob from 'rn-fetch-blob';

export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [base64, setBase64] = useState<string>("");
  const [text, setText] = useState<string>("Loading the face model...");

  const ref = useRef(null);
  const [pressedButton, setPressedButton] = useState<string | null>(null);

  const handleButtonPressIn = (buttonName: string) => {
    setPressedButton(buttonName);
    // setTimeout()
    setModalVisible(true);
  };

  const handleButtonPressOut = () => {
    setPressedButton(null);
  };
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const isPressed = (buttonName: string) => {
    return buttonName === pressedButton;
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  }

  // const takePhoto = async () => {
  //   if (ref.current) {
  //     try {
  //       const photo = await ref.current.takePictureAsync({
  //         quality: 1,
  //         base64: true,
  //       });
  //       setBase64(photo.base64 || "");  // Ensure base64 is defined
  //       console.log("Photo taken:", photo.uri);
  //       sendImageToServer(photo.base64 || "");
  //     } catch (error) {
  //       console.error("Error taking photo:", error);
  //     }
  //   }
  // };

  // const sendImageToServer = async (base64: string) => {
  //   if (!base64) {
  //     console.log("No image to send");
  //     return;
  //   }

  //   try {
  //     const response = await fetch(`http://192.168.0.155:8080/sendImage`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ image: base64 }),
  //     });

  //     const contentType = response.headers.get('Content-Type');
  //     const data = contentType && contentType.includes('application/json')
  //       ? await response.json()
  //       : await response.text();

  //     console.log('Response Data:', data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={ref}>

        
        <View style={styles.buttonContainer2}>
          <View style={styles.accContainer}>
            {pressedButton != null ?
            
            <Text style={styles.textP}>
              {text}
            </Text>
            :
            <TouchableOpacity
            style={[
              styles.button,
              styles.infoButton,
              isPressed('info') && styles.buttonPressed,
            ]}
            onPressIn={() => handleButtonPressIn('info')}
            onPressOut={handleButtonPressOut}
          >
            <Text style={styles.buttonText}>Start Drive</Text>
          </TouchableOpacity>

            }
            
          </View>
        </View>

      </CameraView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.overlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Warning</Text>
            <Text style={styles.modalText}>You are distracted driving. Bring your Attention back to the road </Text>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.buttonText}>Dismiss</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(130, 50, 50, 0.6)',
  },
  accContainer: {
    height: 150,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 90,
    borderRadius: 60,
    borderWidth: 0.2,
    borderColor: '#eee',
    borderBottomWidth: 8,
    marginVertical: 10,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  infoButton: {
    backgroundColor: '#4a3b8f',
    borderColor: '#0e3860',
    shadowColor: '#282545',
  },
  camera: {
    flex: 1,
    flexDirection: 'column-reverse',
  },

  buttonContainer: {
    backgroundColor: '#171721',
    flexDirection: 'column-reverse',
    margin: 0,
    height: 380,
    borderRadius: 45,
  },
  buttonContainer2: {
    backgroundColor: 'white',
    margin: 0,
    height: 270,
    // alignContent: "center",
    // justifyContent: "center",
    borderRadius: 45,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textP: {
    color: '#4a3b8f',
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalView: {
    width: '80%',
    backgroundColor: '#FF4C4C',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#C70000',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  // buttonText: {
  //   color: 'white',
  //   fontWeight: 'bold',
  // },
});
