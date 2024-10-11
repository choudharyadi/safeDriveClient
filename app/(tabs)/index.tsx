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
  imageUrl: string;
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

  const categories = ['All activities', 'With friends', 'Solo play', 'Favor', 'Adithya'];

  const venues: Venue[] = [
    { id: 1, name: 'VR World', type: 'Virtual Reality game', distance: '1.5 kms', rating: 4.8, imageUrl: 'https://www.vazata.com/wp-content/uploads/2020/06/virtual-reality.jpg' },
    { id: 2, name: 'Escape Room', type: 'Puzzle game', distance: '2.3 kms', rating: 4.6, imageUrl: 'https://media.istockphoto.com/id/980907458/vector/escape-room-neon-signs-vector-escape-room-design-template-neon-sign-light-banner-neon.jpg?s=612x612&w=0&k=20&c=sCFBVUkr6AYDZXXSs8EYBFwx1mWUZnLKJuB7eyHQfJ4=' },
    { id: 3, name: 'Laser Tag', type: 'Action game', distance: '3.0 kms', rating: 4.5, imageUrl: 'data:image/jpeg;base64,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' },
    { id: 4, name: 'Bowling Alley', type: 'Sports', distance: '1.8 kms', rating: 4.3, imageUrl: 'https://images.pexels.com/photos/344034/pexels-photo-344034.jpeg' },
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
        source={{ uri: item.imageUrl }}
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
          <Ionicons name="star" size={16} color="#FFD700"/>
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
          <Text style={styles.welcomeTitle}>Welcome to Chicago</Text>
          <Text style={styles.welcomeSubtitle}>Try to find interesting activities</Text>
          <TouchableOpacity style={styles.closeButton} onPress={() => setShowWelcomeCard(false)}>
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.exploreSection}>
        <Text style={styles.sectionTitle}>Explore</Text>
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
        onValueChange={(value) => setFilterOptions({...filterOptions, [optionKey]: value})}
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
            {renderFilterOption("Open Now", "openNow")}
            {renderFilterOption("4+ Star Rating", "rating4Plus")}
            {renderFilterOption("Free Entry", "freeEntry")}
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
    flex: 1,
    backgroundColor: '#171721',
    paddingBottom: 0,
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