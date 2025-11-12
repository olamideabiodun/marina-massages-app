import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

interface Service {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  durations: { minutes: number; price: number }[];
}

export default function ServiceDetailScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchService();
  }, [params.id]);

  const fetchService = async () => {
    try {
      const serviceDoc = await getDoc(doc(db, 'services', params.id as string));
      
      if (serviceDoc.exists()) {
        setService({
          id: serviceDoc.id,
          ...serviceDoc.data(),
        } as Service);
      }
    } catch (error) {
      console.error('Error fetching service:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </Pressable>
          <Text style={styles.title}>Service Details</Text>
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#b8860b" />
          <Text style={styles.loadingText}>Loading service...</Text>
        </View>
      </View>
    );
  }

  if (!service) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </Pressable>
          <Text style={styles.title}>Service Details</Text>
        </View>
        <View style={styles.errorContainer}>
          <Ionicons name="alert-circle-outline" size={64} color="#ccc" />
          <Text style={styles.errorText}>Service not found</Text>
        </View>
      </View>
    );
  }

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
              onPress={() => router.push(`/booking-flow?serviceId=${service.id}&serviceName=${service.name}&duration=${duration.minutes}&price=${duration.price}`)}
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
          onPress={() => router.push(`/booking-flow?serviceId=${service.id}&serviceName=${service.name}&duration=${service.durations[0].minutes}&price=${service.durations[0].price}`)}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  errorText: {
    marginTop: 16,
    fontSize: 18,
    color: '#999',
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