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

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ExploreScreen: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerIcon} onPress={() => router.push('/Information')}>
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

        <View style={styles.profileAndMapSection}>
          <TouchableOpacity style={styles.profileCard} onPress={() => router.push('/Profile')}>
            <Image source={require('../../resources/images/man.png')} style={styles.avatarImage} />
            <Text style={styles.personNameText}>Jane Cooper</Text>
            <Text style={styles.personAmountText}>$ 4,253</Text>
          </TouchableOpacity>
          <View style={styles.mapCard}>
            <Image style={styles.mapImage} source={require('../../resources/images/map.png')} />
          </View>
        </View>

        <View style={styles.moreCarsSection}>
          <View style={styles.moreCarsTextCard}>
            <Text style={styles.moreCarsText}>More Cars</Text>
            <Feather name="more-horizontal" size={24} color="#d4d4d4" />
          </View>
          <TouchableOpacity style={styles.carNameCard}>
            <View style={styles.carNameDetailsCard}>
              <Text style={styles.carNameTextBottomCard}>Corolla Cross</Text>
              <View style={styles.carInfo}>
                <View style={styles.carDetailsData}>
                  <Feather name="map-pin" size={16} color="white" />
                  <Text style={styles.carDetailsBottomText}>{" > 4 KM"}</Text>
                </View>
                <View style={styles.carDetailsSpaceView} />
                <View style={styles.carDetailsData}>
                  <Feather name="droplet" size={16} color="white" />
                  <Text style={styles.carDetailsBottomText}>{" 50 L"}</Text>
                </View>
              </View>
            </View>
            <View style={styles.arrowBg}>
              <Feather name="chevron-right" size={24} color="#282931" />
            </View>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.carNameCard}>
            <View style={styles.carNameDetailsCard}>
              <Text style={styles.carNameTextBottomCard}>Ionic 5</Text>
              <View style={styles.carInfo}>
                <View style={styles.carDetailsData}>
                  <Feather name="map-pin" size={16} color="white" />
                  <Text style={styles.carDetailsBottomText}>{" > 8 KM"}</Text>
                </View>
                <View style={styles.carDetailsSpaceView} />
                <View style={styles.carDetailsData}>
                  <Feather name="battery" size={16} color="white" />
                  <Text style={styles.carDetailsBottomText}>{" 80%"}</Text>
                </View>
              </View>
            </View>
            <View style={styles.arrowBg}>
              <Feather name="chevron-right" size={24} color="#282931" />
            </View>
          </TouchableOpacity>
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
  profileAndMapSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profileCard: {
    width: '45%',
    backgroundColor: '#22222E',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  personNameText: {
    fontFamily: 'Barlow-Medium',
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
  personAmountText: {
    fontFamily: 'Barlow-Bold',
    fontSize: 16,
    color: '#FF4081',
  },
  mapCard: {
    width: '45%',
    height: 150,
    borderRadius: 20,
    overflow: 'hidden',
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