import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback, TouchableHighlight, Modal, Alert, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Polyline } from 'react-native-maps';
import { ArrowDown, ArrowLeft } from 'lucide-react-native';
import { router } from 'expo-router';

export default function MapBox() {
  const [modalVisible, setModalVisible] = useState(false);
  const [lastDriveStats] = useState({
    route: 'Home to Work',
    duration: '45 minutes',
    distractions: 3,
    safetyScore: 85,
    speedData: [20, 35, 50, 40, 35, 45, 30, 25]
  });
  interface NotificationItem {
    type: 'invitation' | 'invitation_cancelled' | 'booking_confirmed' | 'booking_cancelled';
    title: string;
    date: string;
    time: string;
    icon: string;
    timeAgo: string;
  }

  const notifications: { [key: string]: NotificationItem[] } = {
    Today: [
      { type: 'invitation', title: 'VR Realm 247', date: '29 Oct', time: '07:00 PM', icon: '🏛️', timeAgo: '3m ago' },
      { type: 'invitation_cancelled', title: 'Level 57', date: '03 Oct', time: '05:00 PM', icon: '🎮', timeAgo: '2h ago' },
    ],
    Recently: [
      { type: 'booking_confirmed', title: 'WE-R', date: '03 Oct', time: '05:00 PM', icon: '🌅', timeAgo: '3 days ago' },
      { type: 'booking_cancelled', title: 'Level 57', date: '03 Oct', time: '05:00 PM', icon: '🏝️', timeAgo: '4 days ago' },
      { type: 'booking_confirmed', title: 'Golden Gate', date: '01 Oct', time: '07:00 PM', icon: '🌉', timeAgo: '5 days ago' },
    ],
    'Last week': [
      { type: 'invitation', title: 'VR Realm 247', date: '29 Oct', time: '07:00 PM', icon: '🎭', timeAgo: '12 days ago' },
      { type: 'booking_confirmed', title: 'VR Realm 247', date: '03 Oct', time: '05:00 PM', icon: '🌊', timeAgo: '3 days ago' },
    ],
  };

  const NotificationCard: React.FC<{ item: NotificationItem }> = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.dateTime}>{`${item.date} - ${item.time}`}</Text>
      </View>
      <Text style={styles.timeAgo}>{item.timeAgo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        userInterfaceStyle="dark"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Polyline coordinates={[{ latitude: 37.8025259, longitude: -122.4351431 }, { latitude: 37.7896386, longitude: -122.421646 }, { latitude: 37.7665248, longitude: -122.4161628 }, { latitude: 37.7734153, longitude: -122.4577787 }, { latitude: 37.7948605, longitude: -122.4596065 },]} strokeColor="#000" strokeWidth={6} />
        {/* Add Polyline or other map components here if needed */}
      </MapView>

      <View style={styles.overlay} pointerEvents="box-none">
        <View style={styles.topSpace} pointerEvents="none" />
        <View>
          <View style={styles.buttonContainer}>
            {/* <TouchableHighlight onPress={() => setModalVisible(true)}> */}
            <Ionicons style={styles.moreIcon} name="caret-up-sharp" size={34} color="#8E8EFF" onPress={() => setModalVisible(true)} />
            {/* </TouchableHighlight> */}

            <View style={styles.buttonContainer2}>
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
              </View>
            </View>
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // style={styles.container}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.container}>
          <SafeAreaView style={styles.container}>

            <View style={styles.headerTitle}>
            <TouchableOpacity style={styles.backButton} onPress={() => setModalVisible(false)} >
              <ArrowDown color="#fff" size={24} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Notifications</Text>
            <View style={{ width: 24 }} />
            </View>
            {/* <ScrollView style={styles.scrollView}> */}
            {Object.entries(notifications).map(([date, items]) => (
              <View key={date} style={styles.section}>
                <Text style={styles.sectionTitle}>{date}</Text>
                {items.map((item, index) => (
                  <NotificationCard key={index} item={item} />
                ))}
              </View>
            ))}
            {/* </ScrollView> */}
          </SafeAreaView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: '#171721',
    borderRadius: 55

  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topSpace: {
    flex: 1,
  }, backButton: {
    padding: 5,
  },
  headerTitle: {
    margin: 15,
    color: '#fff',
    flexDirection: "row",
    fontSize: 18,
    alignSelf: "center",
    fontWeight: 'bold',
    alignItems: "center"
  },
  scrollView: {
    backgroundColor: "#888",
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#888',
    fontSize: 12,
    marginLeft: 20,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#22222E',
    marginHorizontal: 20,
    marginVertical: 4,
    borderRadius: 10,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#2A2A36',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 18,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateTime: {
    color: '#888',
    fontSize: 14,
  },
  timeAgo: {
    color: '#888',
    fontSize: 12,
  },
  buttonContainer: {
    backgroundColor: '#282545',
    height: 380,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  buttonContainer2: {

    // backgroundColor: 'rgba(255, 255, 255, 0.1)',
    height: 320,
    marginTop: 5,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  statsCard: {
    flex: 1,
    backgroundColor: '#171721',
    // marginHorizontal: 16,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,

    padding: 16,
  },

  statsTitle: {
    color: 'white',
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 10
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
  moreIcon: {
    alignSelf: "center",
    margin: 15
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    
  },

});