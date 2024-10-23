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
  emergencyContact: string;
  emergencyPhone: string;
  familyMembers: string;
  carMake: string;
  carModel: string;
  carYear: string;
}

interface SignupPageTwoProps {
  onBack: () => void;
  onSubmit: (data: FormData) => void;
}

const SignupPageTwo: React.FC<SignupPageTwoProps> = ({ onBack, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    emergencyContact: '',
    emergencyPhone: '',
    familyMembers: '',
    carMake: '',
    carModel: '',
    carYear: '',
  });

  const [focusedField, setFocusedField] = useState<keyof FormData | null>(null);

  const handleSubmit = () => {
    onSubmit(formData);
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
                <Text style={styles.title}>Additional Information</Text>
                
                <View style={styles.formContainer}>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Emergency Contact Name</Text>
                    <TextInput
                      style={[
                        styles.input,
                        focusedField === 'emergencyContact' && styles.inputFocused
                      ]}
                      placeholder="Jane Doe"
                      placeholderTextColor="rgba(255, 255, 255, 0.5)"
                      value={formData.emergencyContact}
                      onChangeText={(text) => setFormData({ ...formData, emergencyContact: text })}
                      onFocus={() => setFocusedField('emergencyContact')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Emergency Contact Phone</Text>
                    <TextInput
                      style={[
                        styles.input,
                        focusedField === 'emergencyPhone' && styles.inputFocused
                      ]}
                      placeholder="(555) 555-5555"
                      placeholderTextColor="rgba(255, 255, 255, 0.5)"
                      keyboardType="phone-pad"
                      value={formData.emergencyPhone}
                      onChangeText={(text) => setFormData({ ...formData, emergencyPhone: text })}
                      onFocus={() => setFocusedField('emergencyPhone')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Family Members</Text>
                    <TextInput
                      style={[
                        styles.input,
                        focusedField === 'familyMembers' && styles.inputFocused
                      ]}
                      placeholder="John, Jane, Jim"
                      placeholderTextColor="rgba(255, 255, 255, 0.5)"
                      value={formData.familyMembers}
                      onChangeText={(text) => setFormData({ ...formData, familyMembers: text })}
                      onFocus={() => setFocusedField('familyMembers')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </View>

                  <Text style={styles.sectionTitle}>Vehicle Information</Text>
                  
                  <View style={styles.rowContainer}>
                    <View style={[styles.inputContainer, styles.thirdWidth]}>
                      <Text style={styles.label}>Make</Text>
                      <TextInput
                        style={[
                          styles.input,
                          focusedField === 'carMake' && styles.inputFocused
                        ]}
                        placeholder="Toyota"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        value={formData.carMake}
                        onChangeText={(text) => setFormData({ ...formData, carMake: text })}
                        onFocus={() => setFocusedField('carMake')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </View>

                    <View style={[styles.inputContainer, styles.thirdWidth]}>
                      <Text style={styles.label}>Model</Text>
                      <TextInput
                        style={[
                          styles.input,
                          focusedField === 'carModel' && styles.inputFocused
                        ]}
                        placeholder="Camry"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        value={formData.carModel}
                        onChangeText={(text) => setFormData({ ...formData, carModel: text })}
                        onFocus={() => setFocusedField('carModel')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </View>

                    <View style={[styles.inputContainer, styles.thirdWidth]}>
                      <Text style={styles.label}>Year</Text>
                      <TextInput
                        style={[
                          styles.input,
                          focusedField === 'carYear' && styles.inputFocused
                        ]}
                        placeholder="2024"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        keyboardType="numeric"
                        value={formData.carYear}
                        onChangeText={(text) => setFormData({ ...formData, carYear: text })}
                        onFocus={() => setFocusedField('carYear')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity 
                    style={styles.backButton}
                    onPress={onBack}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.backButtonText}>Back</Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                    style={styles.submitButton}
                    onPress={handleSubmit}
                    activeOpacity={0.8}
                  >
                    <LinearGradient
                      colors={['#9333EA', '#7E41FF']}
                      style={styles.buttonGradient}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    >
                      <Text style={styles.submitButtonText}>Complete</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
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
    paddingVertical: 40,
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 32,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 16,
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
  thirdWidth: {
    width: '31%',
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  backButton: {
    flex: 1,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  submitButton: {
    flex: 1,
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
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignupPageTwo;