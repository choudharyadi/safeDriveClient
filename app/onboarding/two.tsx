import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

interface FormData {
  name: string;
  email: string;
  age: string;
  drivingExperience: string;
}

interface SignupPageOneProps {
  onNext: (data: FormData) => void;
}

const SignupPageOne: React.FC<SignupPageOneProps> = ({ onNext }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    age: '',
    drivingExperience: '',
  });

  const [focusedField, setFocusedField] = useState<keyof FormData | null>(null);

  const handleSubmit = () => {
    onNext(formData);
  };

  return (
    <View style={styles.outerContainer}>
      <LinearGradient
        colors={['#6366F1', '#4F46E5']}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.safeArea}>
          <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.content}>
              <LinearGradient
                colors={['rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.05)']}
                style={styles.cardContainer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.welcomeText}>Welcome to SafeDrive!</Text>
                <Text style={styles.title}>Create Your Account</Text>
                
                <View style={styles.formContainer}>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                      style={[
                        styles.input,
                        focusedField === 'name' && styles.inputFocused
                      ]}
                      placeholder="John Doe"
                      placeholderTextColor="rgba(255, 255, 255, 0.5)"
                      value={formData.name}
                      onChangeText={(text) => setFormData({ ...formData, name: text })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput
                      style={[
                        styles.input,
                        focusedField === 'email' && styles.inputFocused
                      ]}
                      placeholder="you@example.com"
                      placeholderTextColor="rgba(255, 255, 255, 0.5)"
                      keyboardType="email-address"
                      value={formData.email}
                      onChangeText={(text) => setFormData({ ...formData, email: text })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      autoCapitalize="none"
                    />
                  </View>

                  <View style={styles.rowContainer}>
                    <View style={[styles.inputContainer, styles.halfWidth]}>
                      <Text style={styles.label}>Age</Text>
                      <TextInput
                        style={[
                          styles.input,
                          focusedField === 'age' && styles.inputFocused
                        ]}
                        placeholder="25"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        keyboardType="numeric"
                        value={formData.age}
                        onChangeText={(text) => setFormData({ ...formData, age: text })}
                        onFocus={() => setFocusedField('age')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </View>

                    <View style={[styles.inputContainer, styles.halfWidth]}>
                      <Text style={styles.label}>Driving Experience</Text>
                      <TextInput
                        style={[
                          styles.input,
                          focusedField === 'drivingExperience' && styles.inputFocused
                        ]}
                        placeholder="5 years"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        keyboardType="numeric"
                        value={formData.drivingExperience}
                        onChangeText={(text) => setFormData({ ...formData, drivingExperience: text })}
                        onFocus={() => setFocusedField('drivingExperience')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </View>
                  </View>
                </View>

                <TouchableOpacity 
                  style={styles.nextButton}
                  onPress={handleSubmit}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={['#9333EA', '#7E41FF']}
                    style={styles.buttonGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Text style={styles.nextButtonText}>Continue</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#171721',
  },
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  cardContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 30,
    padding: 24,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  welcomeText: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 32,
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: 16,
    color: '#FFFFFF',
    fontSize: 16,
  },
  inputFocused: {
    borderColor: '#9333EA',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    ...Platform.select({
      ios: {
        shadowColor: '#9333EA',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  nextButton: {
    width: '100%',
    height: 56,
    borderRadius: 28,
    overflow: 'hidden',
  },
  buttonGradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignupPageOne;