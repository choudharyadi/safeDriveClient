import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';

type PermissionStatus = 'granted' | 'denied' | 'undetermined';

export default function HomeScreen(): JSX.Element {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={CameraType.back}>
        <View style={styles.overlay}>
          <View style={styles.topBar}>
            <TouchableOpacity>
              <Ionicons name="person" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>AR Camera</Text>
            <TouchableOpacity>
              <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.arElements}>
            <View style={styles.pinMarker}>
              <Ionicons name="location" size={30} color="#4B0082" />
            </View>
          </View>
          <View style={styles.bottomBar}>
            {['grid', 'square', 'apps', 'chatbubble', 'person'].map((iconName) => (
              <TouchableOpacity key={iconName} style={styles.iconButton}>
                <Ionicons name={iconName as any} size={24} color="white" />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column' as const,
    justifyContent: 'space-between',
  },
  topBar: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  arElements: {
    flex: 1,
    alignItems: 'center' as const,
    justifyContent: 'center',
  },
  pinMarker: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    padding: 5,
  },
  bottomBar: {
    flexDirection: 'row' as const,
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center' as const,
  },
  iconButton: {
    padding: 10,
    marginTop: 10,
  },
});