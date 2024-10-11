import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const InformationScreen: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { fontWeight: 'bold' }]}>Information</Text>
          <View style={{ width: 24 }} /> 
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How It Works</Text>
          <Text style={styles.sectionText}>
            Our app uses advanced technology to enhance your driving experience and safety:
          </Text>
          <View style={styles.bulletPoint}>
            <Feather name="camera" size={18} color="#FF4081" />
            <Text style={styles.bulletText}>
              Front-facing camera captures your face while driving
            </Text>
          </View>
          <View style={styles.bulletPoint}>
            <Feather name="cpu" size={18} color="#FF4081" />
            <Text style={styles.bulletText}>
              Machine Learning algorithms analyze your attention level in real-time
            </Text>
          </View>
          <View style={styles.bulletPoint}>
            <Feather name="alert-circle" size={18} color="#FF4081" />
            <Text style={styles.bulletText}>
              Alerts you if signs of distraction or drowsiness are detected
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Collection</Text>
          <Text style={styles.sectionText}>
            We collect the following data to provide you with accurate insights:
          </Text>
          <View style={styles.bulletPoint}>
            <Feather name="eye" size={18} color="#FF4081" />
            <Text style={styles.bulletText}>
              Facial features and eye movements (processed on-device)
            </Text>
          </View>
          <View style={styles.bulletPoint}>
            <Feather name="map-pin" size={18} color="#FF4081" />
            <Text style={styles.bulletText}>
              GPS location data for trip tracking
            </Text>
          </View>
          <View style={styles.bulletPoint}>
            <Feather name="clock" size={18} color="#FF4081" />
            <Text style={styles.bulletText}>
              Duration and timestamp of each trip
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ML Detection</Text>
          <Text style={styles.sectionText}>
            Our ML model is trained to detect:
          </Text>
          <View style={styles.bulletPoint}>
            <Feather name="eye-off" size={18} color="#FF4081" />
            <Text style={styles.bulletText}>
              Eyes closing for extended periods (drowsiness)
            </Text>
          </View>
          <View style={styles.bulletPoint}>
            <Feather name="smartphone" size={18} color="#FF4081" />
            <Text style={styles.bulletText}>
              Head movements indicating distraction
            </Text>
          </View>
          <View style={styles.bulletPoint}>
            <Feather name="alert-triangle" size={18} color="#FF4081" />
            <Text style={styles.bulletText}>
              Signs of emotional distress or anger
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Privacy</Text>
          <Text style={styles.sectionText}>
            We take your privacy seriously:
          </Text>
          <View style={styles.bulletPoint}>
            <Feather name="lock" size={18} color="#FF4081" />
            <Text style={styles.bulletText}>
              All facial data is processed on-device and never stored or transmitted
            </Text>
          </View>
          <View style={styles.bulletPoint}>
            <Feather name="shield" size={18} color="#FF4081" />
            <Text style={styles.bulletText}>
              Trip data is encrypted and stored securely
            </Text>
          </View>
          <View style={styles.bulletPoint}>
            <Feather name="x-circle" size={18} color="#FF4081" />
            <Text style={styles.bulletText}>
              We never sell your personal data to third parties
            </Text>
          </View>
          <View style={styles.bulletPoint}>
            <Feather name="trash-2" size={18} color="#FF4081" />
            <Text style={styles.bulletText}>
              You can delete all your data at any time from the settings
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.privacyButton}>
          <Text style={styles.privacyButtonText}>Read Full Privacy Policy</Text>
          <Feather name="external-link" size={24} color="white" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#171721',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontFamily: 'Barlow-SemiBold',
    fontSize: 20,
    color: 'white',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontFamily: 'Barlow-SemiBold',
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  sectionText: {
    fontFamily: 'Barlow-Regular',
    fontSize: 16,
    color: '#d4d4d4',
    marginBottom: 10,
  },
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bulletText: {
    fontFamily: 'Barlow-Regular',
    fontSize: 16,
    color: '#d4d4d4',
    marginLeft: 10,
    flex: 1,
  },
  privacyButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF4081',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  privacyButtonText: {
    fontFamily: 'Barlow-SemiBold',
    fontSize: 16,
    color: 'white',
  },
});

export default InformationScreen;