import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SettingsScreen: React.FC = () => {
  const router = useRouter();

  const settingsItems = [
    { icon: 'lock', text: 'Privacy', hasSwitch: false },
    { icon: 'bell', text: 'Notifications', hasSwitch: true },
    { icon: 'eye', text: 'Appearance', hasSwitch: false },
    { icon: 'help-circle', text: 'Help & Support', hasSwitch: false },
    { icon: 'info', text: 'About', hasSwitch: false },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
          <View style={{ width: 24 }} /> 
        </View>

        <View style={styles.settingsContainer}>
          {settingsItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.settingItem}>
              <View style={styles.settingItemLeft}>
                <View style={styles.iconContainer}>
                  <Feather name={item.icon as any} size={20} color="white" />
                </View>
                <Text style={styles.settingItemText}>{item.text}</Text>
              </View>
              {item.hasSwitch ? (
                <Switch
                  trackColor={{ false: "#3E3E3E", true: "#6C5CE7" }}
                  thumbColor={true ? "#f4f3f4" : "#f4f3f4"}
                  ios_backgroundColor="#3E3E3E"
                />
              ) : (
                <Feather name="chevron-right" size={20} color="#8E8E93" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
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
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  settingsContainer: {
    backgroundColor: '#22222E',
    borderRadius: 15,
    marginBottom: 30,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A36',
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#2A2A36',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  settingItemText: {
    fontSize: 16,
    color: 'white',
  },
  logoutButton: {
    backgroundColor: '#FF4081',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;