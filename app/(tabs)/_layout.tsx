import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
// import LinearGradient from 'react-native-linear-gradient';
import  MyTabBar from "../../components/navigation/NewTabBar"
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (

      <Tabs
        tabBar={props => <MyTabBar {...props}/>}
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
        }}>

        <Tabs.Screen
          name="index"
          options={{
            title: 'Index',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="camera"
          options={{
            title: 'camera',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="map"
          options={{
            title: 'map',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'map' : 'map-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'profile',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ?  'person' : 'person-outline' } color={color} />
            ),
          }}
        />
       
      </Tabs>
  );
}
