import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Car3DModel = () => (
  <View style={styles.carContainer}>
    <View style={styles.carShadow} />
    <View style={styles.carBody}>
      <View style={styles.carTop} />
      <View style={styles.carWindshield} />
      <View style={styles.carWindow} />
    </View>
    <View style={styles.wheelWell1} />
    <View style={styles.wheelWell2} />
    <View style={styles.wheel1} />
    <View style={styles.wheel2} />
  </View>
);

export default function DriverStatistics({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Vehicle</Text>
          <TouchableOpacity onPress={() => {/* Handle settings */}}>
            <Ionicons name="settings-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <Car3DModel />

        <View style={styles.carInfo}>
          <Text style={styles.carInfoText}>Electric Sedan</Text>
          <TouchableOpacity>
            <Text style={styles.carInfoLink}>View Details</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mainStats}>
          <Text style={styles.statValue}>327 mi</Text>
          <Text style={styles.statLabel}>Range</Text>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Ionicons name="speedometer-outline" size={24} color="#8E8EFF" />
            <Text style={styles.statItemValue}>65 mph</Text>
            <Text style={styles.statItemLabel}>Avg Speed</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="time-outline" size={24} color="#8E8EFF" />
            <Text style={styles.statItemValue}>2h 15m</Text>
            <Text style={styles.statItemLabel}>Drive Time</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="leaf-outline" size={24} color="#8E8EFF" />
            <Text style={styles.statItemValue}>89%</Text>
            <Text style={styles.statItemLabel}>Efficiency</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="flash-outline" size={24} color="#8E8EFF" />
            <Text style={styles.statItemValue}>45 kWh</Text>
            <Text style={styles.statItemLabel}>Energy Used</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.detailsButton}
          onPress={() => navigation.navigate('DetailedStats')}
        >
          <Text style={styles.detailsButtonText}>View Detailed Statistics</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

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
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  carContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  carShadow: {
    position: 'absolute',
    bottom: 10,
    width: 180,
    height: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 50,
    transform: [{ scaleX: 2 }],
  },
  carBody: {
    width: 240,
    height: 70,
    backgroundColor: '#4A90E2',
    borderRadius: 20,
    position: 'absolute',
    bottom: 50,
  },
  carTop: {
    width: 150,
    height: 60,
    backgroundColor: '#4A90E2',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    position: 'absolute',
    top: -30,
    left: 45,
  },
  carWindshield: {
    width: 90,
    height: 40,
    backgroundColor: '#87CEFA',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 10,
    position: 'absolute',
    top: -25,
    left: 55,
    transform: [{ skewX: '-20deg' }],
  },
  carWindow: {
    width: 60,
    height: 35,
    backgroundColor: '#87CEFA',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 40,
    position: 'absolute',
    top: -25,
    right: 45,
    transform: [{ skewX: '30deg' }],
  },
  wheelWell1: {
    width: 60,
    height: 40,
    backgroundColor: '#2C3E50',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    bottom: 20,
    left: 40,
  },
  wheelWell2: {
    width: 60,
    height: 40,
    backgroundColor: '#2C3E50',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    bottom: 20,
    right: 40,
  },
  wheel1: {
    width: 50,
    height: 50,
    backgroundColor: '#34495E',
    borderRadius: 25,
    position: 'absolute',
    bottom: 15,
    left: 45,
  },
  wheel2: {
    width: 50,
    height: 50,
    backgroundColor: '#34495E',
    borderRadius: 25,
    position: 'absolute',
    bottom: 15,
    right: 45,
  },
  carInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  carInfoText: {
    color: 'white',
    fontSize: 18,
  },
  carInfoLink: {
    color: '#8E8EFF',
    fontSize: 18,
  },
  mainStats: {
    alignItems: 'center',
    marginBottom: 30,
  },
  statValue: {
    fontSize: 64,
    fontWeight: 'bold',
    color: 'white',
  },
  statLabel: {
    fontSize: 18,
    color: '#8E8EFF',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statItem: {
    width: '48%',
    backgroundColor: '#2C2C2E',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
  },
  statItemValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  statItemLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  detailsButton: {
    backgroundColor: '#8E8EFF',
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});