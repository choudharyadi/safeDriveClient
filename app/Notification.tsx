import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';

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

const NotificationsScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ArrowLeft color="#fff" size={24} />
        <Text style={styles.headerTitle}>Notifications</Text>
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
    backgroundColor: '#1C1C1E',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#8E8E93',
    fontSize: 16,
    marginLeft: 16,
    marginBottom: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2C2C2E',
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#3A3A3C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
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
    color: '#8E8E93',
    fontSize: 14,
  },
  timeAgo: {
    color: '#8E8E93',
    fontSize: 12,
  },
});

export default NotificationsScreen;