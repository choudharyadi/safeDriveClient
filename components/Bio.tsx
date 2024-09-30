import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const BioScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="settings" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Bio</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="bell" size={24} color="white" />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>25</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.profileInfo}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png' }}
            style={styles.avatar}
          />
          <View style={styles.cameraIconContainer}>
            <Feather name="camera" size={20} color="white" />
          </View>
          <Text style={styles.name}>Fedelica Toraka</Text>
          <Text style={styles.username}>@kohaku</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>NAME</Text>
            <TextInput
              style={styles.input}
              value="Fedelica Toraca"
              placeholderTextColor="#666"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>EMAIL</Text>
            <TextInput
              style={styles.input}
              value="f.toraka@gmail.com"
              placeholderTextColor="#666"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>MOBILE</Text>
            <View style={styles.phoneInputContainer}>
              <TouchableOpacity style={styles.countryCodeButton}>
                <Text style={styles.countryCodeText}>+971</Text>
                <Feather name="chevron-down" size={20} color="white" />
              </TouchableOpacity>
              <TextInput
                style={styles.phoneInput}
                value="807 18 04"
                placeholderTextColor="#666"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>ADD ANOTHER ACCOUNT</Text>
            <TouchableOpacity style={styles.addAccountButton}>
              <Feather name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.updateButton}>
            <Text style={styles.updateButtonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
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
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  iconButton: {
    padding: 5,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF4081',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginBottom: 15,
  },
  cameraIconContainer: {
    position: 'absolute',
    right: 135,
    bottom: 55,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 15,
    padding: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    color: '#888',
  },
  form: {
    marginTop: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#22222E',
    borderRadius: 10,
    padding: 15,
    color: 'white',
    fontSize: 16,
  },
  phoneInputContainer: {
    flexDirection: 'row',
  },
  countryCodeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#22222E',
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
  },
  countryCodeText: {
    color: 'white',
    marginRight: 5,
  },
  phoneInput: {
    flex: 1,
    backgroundColor: '#22222E',
    borderRadius: 10,
    padding: 15,
    color: 'white',
    fontSize: 16,
  },
  addAccountButton: {
    backgroundColor: '#22222E',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  updateButton: {
    backgroundColor: '#6C5CE7',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  updateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BioScreen;