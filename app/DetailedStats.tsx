import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width: screenWidth } = Dimensions.get('window');

const DetailedStatsScreen: React.FC = () => {
  const router = useRouter();

  const data = [
    { name: 'Mon', distance: 50 },
    { name: 'Tue', distance: 70 },
    { name: 'Wed', distance: 60 },
    { name: 'Thu', distance: 80 },
    { name: 'Fri', distance: 65 },
    { name: 'Sat', distance: 90 },
    { name: 'Sun', distance: 75 },
  ];

  const maxDistance = Math.max(...data.map(item => item.distance));

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { fontWeight: 'bold' }]}>Detailed Driving Stats</Text>
          <View style={{ width: 24 }} /> 
        </View>

        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Weekly Overview</Text>
          <View style={styles.chartContainer}>
            {data.map((item, index) => (
              <View key={index} style={styles.barContainer}>
                <View style={[styles.bar, { height: (item.distance / maxDistance) * 150 }]} />
                <Text style={styles.barLabel}>{item.name}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Detailed Stats</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Feather name="clock" size={24} color="#787878" />
              <Text style={styles.statValue}>12h 30m</Text>
              <Text style={styles.statLabel}>Time Focused</Text>
            </View>
            <View style={styles.statItem}>
              <Feather name="map" size={24} color="#787878" />
              <Text style={styles.statValue}>523 km</Text>
              <Text style={styles.statLabel}>Total Distance</Text>
            </View>
            <View style={styles.statItem}>
              <Feather name="trending-up" size={24} color="#787878" />
              <Text style={styles.statValue}>65 km/h</Text>
              <Text style={styles.statLabel}>Avg Speed</Text>
            </View>
          </View>
        </View>

        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Additional Metrics</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Feather name="zap" size={24} color="#787878" />
              <Text style={styles.statValue}>85%</Text>
              <Text style={styles.statLabel}>Efficiency</Text>
            </View>
            <View style={styles.statItem}>
              <Feather name="activity" size={24} color="#787878" />
              <Text style={styles.statValue}>32</Text>
              <Text style={styles.statLabel}>Trips</Text>
            </View>
            <View style={styles.statItem}>
              <Feather name="dollar-sign" size={24} color="#787878" />
              <Text style={styles.statValue}>$145</Text>
              <Text style={styles.statLabel}>Fuel Savings</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.exportButton}>
          <Text style={styles.exportButtonText}>Export Data</Text>
          <Feather name="download" size={24} color="white" />
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
  statsCard: {
    backgroundColor: '#22222E',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  statsTitle: {
    fontFamily: 'Barlow-SemiBold',
    fontSize: 18,
    color: 'white',
    marginBottom: 15,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 180,
  },
  barContainer: {
    alignItems: 'center',
    width: (screenWidth - 80) / 7, // Adjust based on padding and number of bars
  },
  bar: {
    width: 20,
    backgroundColor: '#FF4081',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  barLabel: {
    color: '#787878',
    fontSize: 12,
    marginTop: 5,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontFamily: 'Barlow-Bold',
    fontSize: 18,
    color: 'white',
    marginTop: 5,
  },
  statLabel: {
    fontFamily: 'Barlow-Regular',
    fontSize: 14,
    color: '#787878',
    marginTop: 5,
  },
  exportButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF4081',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  exportButtonText: {
    fontFamily: 'Barlow-SemiBold',
    fontSize: 16,
    color: 'white',
  },
});

export default DetailedStatsScreen;