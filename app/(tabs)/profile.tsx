import React , { useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ProfileScreen: React.FC = () => {
  const router = useRouter();
  // very real data
  const userData = {
    name: "John Doe",
    username: "DoeDrivng",
    avatarUrl: "safeDrive/assets/images/profile.png",
    events: 7,
    eventsIncrease: 2,
    invitations: 97,
    favorites: 98,
    notifications: 25,
  };

  const menuItems = [
    { icon: 'info', text: 'Bio', screen: 'Bio' },
    // { icon: 'settings', text: 'Settings', screen: 'Notification' }, 
    { icon: 'users', text: 'Kids', screen: 'BioScreen' },
    // { icon: 'credit-card', text: 'Wallet', screen: 'BioScreen' },
    { icon: 'log-out', text: 'Log out', screen: 'BioScreen' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
          <TouchableOpacity style={styles.settingsButton} 
          onPress={() => router.push('/Settings')}
          >
            <Feather name="settings" size={24} color="white"/>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.notificationContainer} 
            onPress={() => router.push('/Notification')}
          >
            <Feather name="bell" size={24} color="white" />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>{userData.notifications}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.profileInfo}>
          <Image source={require('../../resources/images/profile.png')} style={styles.avatar} />
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.username}>@{userData.username}</Text>
        </View>

        <View style={styles.stats}>
          <View style={styles.statItem}>
            <View style={styles.statValueContainer}>
              <Text style={styles.statValue}>{userData.events}</Text>
              <View style={styles.statIncrease}>
                <Text style={styles.statIncreaseText}>+{userData.eventsIncrease}</Text>
              </View>
            </View>
            <Text style={styles.statLabel}>Alerts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{userData.invitations}</Text>
            <Text style={styles.statLabel}>Drive Score</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{userData.favorites}</Text>
            <Text style={styles.statLabel}>Total Drive Minutes</Text>
          </View>
        </View>

        <View style={styles.menuItemsContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem} onPress={() => router.push(`/${item.screen}` as string)}>
              <View style={styles.menuItemLeft}>
                <Feather name={item.icon as any} size={20} color="#8E8E93" />
                <Text style={styles.menuItemText}>{item.text}</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#8E8E93" />
            </TouchableOpacity>
          ))}
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
  settingsButton: {
    padding: 5,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationBadge: {
    backgroundColor: '#FF4081',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -10,
    marginTop: -10,
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
    borderRadius: 20,
    marginBottom: 15,
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
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    backgroundColor: '#22222E',
    borderRadius: 15,
    padding: 15,
  },
  statItem: {
    alignItems: 'center',
  },
  statValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  statIncrease: {
    backgroundColor: '#FF4081',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginLeft: 5,
  },
  statIncreaseText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  menuItems: {
    marginTop: 20,
  },
  menuItemIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#22222E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuItemsContainer: {
    backgroundColor: '#22222E',
    borderRadius: 15,
    marginTop: 20,
    padding: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 15,
  },
});

export default ProfileScreen;