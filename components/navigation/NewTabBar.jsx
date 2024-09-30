import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MyTabBar({ state, descriptors, navigation }) {
    return (
        <LinearGradient
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        colors={['#3E2E7F', '#322961', '#282545']}
        style={styles.tabBar}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ?? options.title ?? route.name;
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          if (index === 2) { // Center button
            return (
              <TouchableOpacity
                key={index}
                onPress={onPress}
                style={styles.centerButton}
              >
                <LinearGradient
                  start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                  colors={['#1D1A2B','#231E39','#473689']}
                  style={styles.centerButtonGradient}
                >
                  <Ionicons name="apps" size={24} color="white" />
                </LinearGradient>
              </TouchableOpacity>
            );
          }
  
          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={styles.tabButton}
            >
              <Ionicons
                name={options.tabBarIcon({ focused: isFocused }).props.name}
                size={30}
                color={isFocused ? 'white' : 'rgba(255,255,255,0.6)'}
              />
            </TouchableOpacity>
          );
        })}
      </LinearGradient>
    );
  }

  const styles = StyleSheet.create({
    tabBar: {
      flexDirection: 'row',
      borderRadius: 20,
      position:'absolute',
      bottom: -5,
      paddingBottom: 5,
      marginVertical: 30,
      marginHorizontal: 10,
      paddingHorizontal: 15
    },
    tabButton: {
      flex: 1,
      margin:5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    centerButton: {
      flex: 1,
      margin:15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    centerButtonGradient: {
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });