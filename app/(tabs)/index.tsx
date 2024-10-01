import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo

export default function Setting () {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="scan-outline" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#666" />
          <Text style={styles.searchText}>Type to search</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="options-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <ScrollView horizontal>
          <View style={styles.categoriesContainer}>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryButtonTextActive}>All activites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>With friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Solo play</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Favor</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Adithya</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Welcome to Chicago</Text>
          <Text style={styles.welcomeSubtitle}>Try to find interesting</Text>
          <TouchableOpacity style={styles.closeButton}>
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.exploreSection}>
          <Text style={styles.sectionTitle}>Explore</Text>
          <View style={styles.venueGrid}>
            {[1, 2, 3, 4].map((item) => (
              <View key={item} style={styles.venueCard}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/150' }}
                  style={styles.venueImage}
                />
                <TouchableOpacity style={styles.favoriteButton}>
                  <Ionicons name="heart-outline" size={20} color="white" />
                </TouchableOpacity>
                <View style={styles.venueInfo}>
                  <Text style={styles.venueName}>Venue name</Text>
                  <Text style={styles.venueType}>Virtual Reality game</Text>
                  <View style={styles.venueDetails}>
                    <Ionicons name="location-outline" size={16} color="#666" />
                    <Text style={styles.venueDistance}>1.5 kms</Text>
                    <Ionicons name="star" size={16} color="#FFD700" />
                    <Text style={styles.venueRating}>4.8</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
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

