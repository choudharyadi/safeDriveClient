import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const OnboardingScreen2: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#868be4', '#868be4']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/two.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <LinearGradient
            colors={['#20203688', '#202036']}
            style={styles.cardContainer}
          >
            <Text style={styles.title}>SECOND THING TO DO</Text>
            <Text style={styles.subtitle}>
              Use recommendations with filters and a map to search
            </Text>
            <View style={styles.dotContainer}>
              <View style={styles.dot} />
              <View style={[styles.dot, styles.activeDot]} />
              <View style={styles.dot} />
            </View>
            <TouchableOpacity style={styles.nextButton}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#868be4', 
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    width: width,
    height: height * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  cardContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 40,
    width: '100%',
    alignItems: 'center',
    height: height * 0.5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#8F90A6',
    textAlign: 'center',
    marginBottom: 20,
  },
  dotContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 4,
    opacity: 0.5,
  },
  activeDot: {
    opacity: 1,
    backgroundColor: '#FFFFFF',
  },
  nextButton: {
    backgroundColor: '#7E41FF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  skipText: {
    color: '#8F90A6',
    fontSize: 14,
  },
});

export default OnboardingScreen2;