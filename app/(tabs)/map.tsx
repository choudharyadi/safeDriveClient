import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo
import MapView, { Overlay } from 'react-native-maps';

export default function TabFiveScreen () {
  return (
    <View style={styles.container}>
            <MapView userInterfaceStyle="dark" style={styles.map} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C2C2E',
    borderRadius: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  searchText: {
    color: '#666',
    marginLeft: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  categoryButtonText: {
    color: 'white',
  },
  categoryButtonTextActive: {
    color: 'white',
    fontWeight: 'bold',
  },
  welcomeCard: {
    backgroundColor: '#8E8EFF',
    margin: 16,
    borderRadius: 16,
    padding: 16,
  },
  welcomeTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  welcomeSubtitle: {
    color: 'white',
    fontSize: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  exploreSection: {
    padding: 16,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  venueGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  venueCard: {
    width: '48%',
    marginBottom: 16,
    backgroundColor: '#2C2C2E',
    borderRadius: 16,
    overflow: 'hidden',
  },
  venueImage: {
    width: '100%',
    height: 120,
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 15,
    padding: 5,
  },
  venueInfo: {
    padding: 10,
  },
  venueName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  venueType: {
    color: '#666',
    fontSize: 14,
  },
  venueDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  venueDistance: {
    color: '#666',
    fontSize: 12,
    marginRight: 10,
  },
  venueRating: {
    color: '#666',
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2C2C2E',
    paddingVertical: 10,
  },
  navItem: {
    padding: 10,
  },
  navItemActive: {
    backgroundColor: '#8E8EFF',
    borderRadius: 20,
  },
});
