import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ServiceDetailScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();

  // Mock service data (in real app, this would come from database)
  const services: any = {
    '1': {
      name: 'Therapeutic Massage',
      description: 'A comprehensive therapeutic massage designed to address muscle tension, improve circulation, and promote overall wellness. This treatment combines various techniques including deep tissue, Swedish, and trigger point therapy, all tailored to your specific needs and health goals.',
      benefits: [
        'Reduces muscle tension and pain',
        'Improves circulation and flexibility',
        'Promotes relaxation and stress relief',
        'Enhances overall body awareness',
      ],
      durations: [
        { minutes: 60, price: 150 },
        { minutes: 90, price: 200 },
        { minutes: 120, price: 250 },
      ],
    },
    '2': {
      name: 'Correction Massage',
      description: 'Specialized corrective techniques focusing on posture, alignment, and structural balance. This advanced therapy addresses chronic issues and movement patterns that contribute to pain and dysfunction.',
      benefits: [
        'Corrects postural imbalances',
        'Addresses chronic pain patterns',
        'Improves body alignment',
        'Enhances movement quality',
      ],
      durations: [
        { minutes: 90, price: 220 },
        { minutes: 120, price: 280 },
      ],
    },
    '3': {
      name: 'Lymphatic Drainage',
      description: 'Gentle, rhythmic massage technique that supports the lymphatic system, helping to reduce fluid retention, boost immunity, and promote natural detoxification.',
      benefits: [
        'Reduces swelling and fluid retention',
        'Supports immune system function',
        'Promotes natural detoxification',
        'Improves skin health',
      ],
      durations: [
        { minutes: 60, price: 160 },
        { minutes: 90, price: 210 },
      ],
    },
  };

  const service = services[params.id as string] || services['1'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </Pressable>
        <Text style={styles.title}>Service Details</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.serviceName}>{service.name}</Text>
        <Text style={styles.description}>{service.description}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Benefits</Text>
          {service.benefits.map((benefit: string, index: number) => (
            <View key={index} style={styles.benefitItem}>
              <Ionicons name="checkmark-circle" size={20} color="#b8860b" />
              <Text style={styles.benefitText}>{benefit}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Duration & Pricing</Text>
          {service.durations.map((duration: any, index: number) => (
            <Pressable
              key={index}
              style={styles.optionCard}
              onPress={() => router.push(`/booking-flow?serviceId=${params.id}&duration=${duration.minutes}&price=${duration.price}`)}
            >
              <View style={styles.optionInfo}>
                <Text style={styles.optionDuration}>{duration.minutes} minutes</Text>
                <Text style={styles.optionPrice}>${duration.price}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#b8860b" />
            </Pressable>
          ))}
        </View>

        <Pressable 
          style={styles.bookButton}
          onPress={() => router.push(`/booking-flow?serviceId=${params.id}`)}
        >
          <Text style={styles.bookButtonText}>Book Appointment</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1a1a2e',
    padding: 24,
    paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  serviceName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 12,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  benefitText: {
    fontSize: 15,
    color: '#666',
    marginLeft: 12,
    flex: 1,
  },
  optionCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 12,
  },
  optionDuration: {
    fontSize: 18,
    color: '#1a1a2e',
    fontWeight: '500',
  },
  optionPrice: {
    fontSize: 18,
    color: '#b8860b',
    fontWeight: 'bold',
  },
  bookButton: {
    backgroundColor: '#b8860b',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 40,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});