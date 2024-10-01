import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Svg, Circle, Path } from 'react-native-svg';

const OnboardingFirstScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Svg height="200" width="200" viewBox="0 0 100 100">
          <Circle cx="50" cy="50" r="40" fill="#8A2BE2" />
          <Path d="M50 20 L50 80 M20 50 L80 50" stroke="white" strokeWidth="2" />
          <Circle cx="30" cy="30" r="10" fill="#87CEFA" />
          <Path d="M70 70 L75 75 L70 80 L65 75 Z" fill="#87CEFA" />
        </Svg>
        <Text style={styles.title}>Find events</Text>
        <Text style={styles.subtitle}>Use recommendations with filters and a map to search</Text>
        <View style={styles.dots}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8A2BE2',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginTop: 10,
  },
  dots: {
    flexDirection: 'row',
    marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'white',
  },
  buttonContainer: {
    padding: 20,
  },
  button: {
    backgroundColor: '#6A1B9A',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  skipText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
  },
});

export default OnboardingFirstScreen;