import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';

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

const RecentDrive: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()} >
          <ArrowLeft color="#fff" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{width: 24}} />
      </View>
      <ScrollView style={styles.scrollView}>
        {Object.entries(notifications).map(([date, items]) => (
          <View key={date} style={styles.section}>
            <Text style={styles.sectionTitle}>{date}</Text>
            {items.map((item, index) => (
              <NotificationCard key={index} item={item} />
            ))}
          </View>
        ))}
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
    padding: 10,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
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
});

export default RecentDrive;