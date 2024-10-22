import React, { useRef, useState, useEffect } from 'react';
import { Image, StyleSheet, Platform, Button, Text, TouchableOpacity, View, Modal } from 'react-native';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';

export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [currentText, setCurrentText] = useState<string>("Loading the face model...");
  const [currentAdditionalText, setCurrentAdditionalText] = useState<string | null>(null); // For two texts
  const [isTextLooping, setIsTextLooping] = useState(false);

  const ref = useRef(null);
  const [pressedButton, setPressedButton] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Array of texts to cycle through with respective display durations (in milliseconds)
  const texts = [
    { text: "Loading the face model...", duration: 200 },
    { text: "Analyzing your face", duration: 300 },
    { text: "Let's roll", duration: 150 },
    { text: "Drive Score: 100 ", duration: 400, additionalText: "Alerts : 0" },
    { text: "Drive Score: 98 ", duration: 200, additionalText: "Alerts : 0" }
  ];

  const handleButtonPressIn = (buttonName: string) => {
    setPressedButton(buttonName);
    setModalVisible(true);
    
    // Start text looping when the button is pressed
    setIsTextLooping(true);
  };

  const handleButtonPressOut = () => {
    setPressedButton(null);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const isPressed = (buttonName: string) => {
    return buttonName === pressedButton;
  };

  useEffect(() => {
    if (isTextLooping) {
      let currentIndex = 0;

      const updateText = () => {
        const { text, duration, additionalText } = texts[currentIndex];
        setCurrentText(text);
        setCurrentAdditionalText(additionalText || null);

        currentIndex += 1;

        if (currentIndex < texts.length) {
          setTimeout(updateText, duration);  // Schedule the next text update
        } else {
          setIsTextLooping(false);  // Stop the loop once we reach the end
        }
      };

      updateText();  // Start the text loop

    }
  }, [isTextLooping]);

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

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={ref}>

        <View style={styles.buttonContainer2}>
          <View style={styles.accContainer}>
            {pressedButton != null ?
            
            <View style={styles.textContainer}>
              <Text style={styles.textP}>
                {currentText}
              </Text>
              {currentAdditionalText && (
                <Text style={styles.textP}>
                  {currentAdditionalText}
                </Text>
              )}
            </View>
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
            <Text style={styles.modalText}>You are distracted driving. Bring your attention back to the road.</Text>
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
  textContainer: {
    flexDirection: 'row',  // Align texts side by side
    justifyContent: 'center',
    width: 350,  // Fixed width for the container to avoid width changes
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
});
