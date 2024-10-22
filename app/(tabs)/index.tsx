import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, TextInput, Dimensions, Modal, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

interface Venue {
  id: number;
  name: string;
  type: string;
  distance: string;
  rating: number;
  imageUrl: any;
}

export default function Setting() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All activities');
  const [filteredVenues, setFilteredVenues] = useState<Venue[]>([]);
  const [favoriteVenues, setFavoriteVenues] = useState<Set<number>>(new Set());
  const [showWelcomeCard, setShowWelcomeCard] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [lastDriveStats, setLastDriveStats] = useState({
    route: 'Home to Work',
    duration: '45 minutes',
    distractions: 3,
    safetyScore: 85,
    speedData: [20, 35, 50, 40, 35, 45, 30, 25]
  });

  const categories = ['All Drives', 'Last Week', 'Poor Scores', 'Long Drives'];

  const venues: Venue[] = [
    { id: 1, name: 'Rahul - 0', type: 'November 15, 2024', distance: '1.5 kms', rating: 99, imageUrl: require('../../assets/images/map1.png') },
    { id: 2, name: 'Aditya - 0', type: 'November 35, 2024', distance: '2.3 kms', rating: 98, imageUrl: require('../../assets/images/map2.png') },
    { id: 3, name: 'Ayden - 10', type: 'Oct 12, 2024', distance: '3.0 kms', rating: 90, imageUrl: require('../../assets/images/map4.png') },
    { id: 4, name: 'Vinil - 2', type: 'Oct 18, 2024', distance: '1.8 kms', rating: 95, imageUrl: require('../../assets/images/map3.png') },
  ];

  const [filterOptions, setFilterOptions] = useState({
    openNow: false,
    rating4Plus: false,
    freeEntry: false,
    distance5km: false,
  });

  useEffect(() => {
    filterVenues();
  }, [searchQuery, activeCategory]);

  const toggleHeart = (id: number) => {
    setFavoriteVenues(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const filterVenues = () => {
    let filtered = venues;
    if (searchQuery) {
      filtered = filtered.filter(venue =>
        venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        venue.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (activeCategory !== 'All activities') {
      filtered = filtered.filter(() => Math.random() > 0.5);
    }
    setFilteredVenues(filtered);
  };

  const renderVenueCard = ({ item }: { item: Venue }) => (
    <View style={styles.venueCard}>
      <Image
        source={item.imageUrl}
        style={styles.venueImage}
      />
      <TouchableOpacity style={styles.favoriteButton} onPress={() => toggleHeart(item.id)}>
        <Ionicons
          name={favoriteVenues.has(item.id) ? "heart" : "heart-outline"}
          size={20}
          color={favoriteVenues.has(item.id) ? 'red' : 'white'}
        />
      </TouchableOpacity>
      <View style={styles.venueInfo}>
        <Text style={styles.venueName}>{item.name}</Text>
        <Text style={styles.venueType}>{item.type}</Text>
        <View style={styles.venueDetails}>
          <Ionicons name="location-outline" size={16} color="white" />
          <Text style={styles.venueDistance}>{item.distance}</Text>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.venueRating}>{item.rating}</Text>
        </View>
      </View>
    </View>
  );

  const renderContent = () => (
    <>
      <View style={styles.statsCard}>
        <Text style={styles.statsTitle}>Last Drive Statistics</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statsItem}>
            <Ionicons name="map-outline" size={24} color="#8E8EFF" />
            <View>
              <Text style={styles.statsLabel}>Route</Text>
              <Text style={styles.statsValue}>{lastDriveStats.route}</Text>
            </View>
          </View>
          <View style={styles.statsItem}>
            <Ionicons name="time-outline" size={24} color="#8E8EFF" />
            <View>
              <Text style={styles.statsLabel}>Duration</Text>
              <Text style={styles.statsValue}>{lastDriveStats.duration}</Text>
            </View>
          </View>
          <View style={styles.statsItem}>
            <Ionicons name="alert-circle-outline" size={24} color="#8E8EFF" />
            <View>
              <Text style={styles.statsLabel}>Distractions</Text>
              <Text style={styles.statsValue}>{lastDriveStats.distractions}</Text>
            </View>
          </View>
          <View style={styles.statsItem}>
            <Ionicons name="shield-checkmark-outline" size={24} color="#8E8EFF" />
            <View>
              <Text style={styles.statsLabel}>Safety Score</Text>
              <Text style={styles.statsValue}>{lastDriveStats.safetyScore}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.chartTitle}>Speed Over Time</Text>
        <LineChart
          data={{
            labels: ['', '', '', '', '', '', '', ''],
            datasets: [{ data: lastDriveStats.speedData }]
          }}
          width={Dimensions.get('window').width - 64}
          height={200}
          chartConfig={{
            backgroundColor: '#1E1E1E',
            backgroundGradientFrom: '#1E1E1E',
            backgroundGradientTo: '#1E1E1E',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(142, 142, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>


      <FlatList
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.categoryButton, activeCategory === item && styles.activeCategoryButton]}
            onPress={() => setActiveCategory(item)}
          >
            <Text style={[styles.categoryButtonText, activeCategory === item && styles.activeCategoryButtonText]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      />

      {showWelcomeCard && (
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Welcome Back To SafeDrive</Text>
          <Text style={styles.welcomeSubtitle}>Where we have fun and stay safe</Text>
          <TouchableOpacity style={styles.closeButton} onPress={() => setShowWelcomeCard(false)}>
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.exploreSection}>
        <Text style={styles.sectionTitle}>Kid Drives</Text>
        <FlatList
          data={filteredVenues}
          renderItem={renderVenueCard}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.venueGrid}
        />
      </View>
    </>
  );

  const renderFilterOption = (label: string, optionKey: keyof typeof filterOptions) => (
    <View style={styles.filterOption}>
      <Text style={styles.filterOptionText}>{label}</Text>
      <Switch
        value={filterOptions[optionKey]}
        onValueChange={(value) => setFilterOptions({ ...filterOptions, [optionKey]: value })}
        trackColor={{ false: "#767577", true: "#8E8EFF" }}
        thumbColor={filterOptions[optionKey] ? "#f4f3f4" : "#f4f3f4"}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="scan-outline" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Type to search"
            placeholderTextColor="#666"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity onPress={() => setShowFilters(true)}>
          <Ionicons name="options-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={[1]}
        renderItem={() => renderContent()}
        keyExtractor={() => 'content'}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={showFilters}
        onRequestClose={() => setShowFilters(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filters</Text>
            {renderFilterOption("Only Kids", "openNow")}
            {renderFilterOption("Only Mine", "rating4Plus")}
            {renderFilterOption("Last Year", "freeEntry")}
            {renderFilterOption("Within 5km", "distance5km")}
            <TouchableOpacity style={styles.modalButton} onPress={() => setShowFilters(false)}>
              <Text style={styles.modalButtonText}>Apply Filters</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#171721',
    paddingTop: 29,
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
  searchInput: {
    flex: 1,
    color: 'white',
    marginLeft: 10,
  },
  statsCard: {
    backgroundColor: '#2C2C2E',
    margin: 16,
    borderRadius: 16,
    padding: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  statsTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statsItem: {
    width: '48%',
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsLabel: {
    color: '#999',
    fontSize: 14,
    marginLeft: 8,
  },
  statsValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  chartTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#2C2C2E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: 300,
  },
  modalTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  filterOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  filterOptionText: {
    color: 'white',
    fontSize: 16,
  },
  modalButton: {
    backgroundColor: '#8E8EFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    paddingHorizontal: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#2C2C2E',
  },
  activeCategoryButton: {
    backgroundColor: '#8E8EFF',
  },
  categoryButtonText: {
    color: 'white',
  },
  activeCategoryButtonText: {
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
    color: 'white',
    fontSize: 14,
  },
  venueDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  venueDistance: {
    color: 'white',
    fontSize: 12,
    marginRight: 10,
  },
  venueRating: {
    color: 'white',
    fontSize: 12,
  },
});