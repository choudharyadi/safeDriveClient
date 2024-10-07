import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity, 
  Dimensions
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const windowWidth = Dimensions.get('window').width;

const ExploreScreen: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerIcon} onPress={() => router.push('/Info')}>
            <Feather name="info" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.notificationContainer} 
            onPress={() => router.push('/Notification')}
          >
            <Feather name="bell" size={24} color="white" />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>25</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.carCard}>
          <Text style={styles.nearestCarText}>YOUR CAR</Text>
          <Image style={styles.carImage} source={require('../../resources/images/vehicle.png')} />
          <Text style={styles.carNameText}>Fortuner GR</Text>
          <View style={styles.carDetailsView}>
            <View style={styles.carDetailsDataView}>
              <View style={styles.carDetailsData}>
                <Feather name="map-pin" size={16} color="#787878" />
                <Text style={styles.carDetailsText}>{" > 870 KM"}</Text>
              </View>
              <View style={styles.carDetailsSpaceView} />
              <View style={styles.carDetailsData}>
                <Feather name="droplet" size={16} color="#787878" />
                <Text style={styles.carDetailsText}>{" 50 L"}</Text>
              </View>
            </View>
            <Text style={styles.carAmount}>$ 45,00/h</Text>
          </View>
        </View>

        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Driving Stats</Text>
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
          <TouchableOpacity 
            style={styles.detailedStatsButton}
            onPress={() => router.push('/DetailedStats')}
          >
            <Text style={styles.detailedStatsButtonText}>View Detailed Stats</Text>
            <Feather name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.mapCard}>
          <Image style={styles.mapImage} source={require('../../resources/images/map.png')} />
        </View>
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
  headerIcon: {
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
  carCard: {
    width: '100%',
    backgroundColor: '#22222E',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  nearestCarText: {
    fontFamily: 'Barlow-Regular',
    letterSpacing: 3,
    fontSize: 16,
    color: '#787878',
    marginBottom: 10,
  },
  carImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  carNameText: {
    fontFamily: 'Barlow-SemiBold',
    fontSize: 22,
    color: 'white',
    marginBottom: 10,
  },
  carDetailsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  carDetailsDataView: {
    flexDirection: 'row',
  },
  carDetailsData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carDetailsText: {
    fontFamily: 'Barlow-Regular',
    fontSize: 16,
    color: '#787878',
  },
  carDetailsSpaceView: {
    width: windowWidth * 0.05,
  },
  carAmount: {
    fontFamily: 'Barlow-SemiBold',
    fontSize: 16,
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
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
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
  detailedStatsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF4081',
    borderRadius: 10,
    padding: 15,
  },
  detailedStatsButtonText: {
    fontFamily: 'Barlow-SemiBold',
    fontSize: 16,
    color: 'white',
  },
  mapCard: {
    width: '100%',
    height: 150,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  moreCarsSection: {
    backgroundColor: '#22222E',
    borderRadius: 20,
    padding: 20,
  },
  moreCarsTextCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  moreCarsText: {
    fontFamily: 'Barlow-Regular',
    fontSize: 16,
    color: '#d4d4d4',
  },
  carNameCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  carNameDetailsCard: {
    flex: 1,
  },
  carNameTextBottomCard: {
    fontFamily: 'Barlow-Bold',
    fontSize: 22,
    color: 'white',
    marginBottom: 5,
  },
  carInfo: {
    flexDirection: 'row',
  },
  carDetailsBottomText: {
    fontFamily: 'Barlow-Regular',
    fontSize: 16,
    color: 'white',
  },
  arrowBg: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 30,
  },
  line: {
    backgroundColor: '#4b4b4b',
    height: 1,
    marginVertical: 15,
  },
});

export default ExploreScreen;