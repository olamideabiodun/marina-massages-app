import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const router = useRouter();

  const services = [
    {
      id: '1',
      name: 'Therapeutic Massage',
      description: 'Deep tissue work targeting muscle tension and pain relief',
      duration: '60-120 min',
      priceFrom: 150,
      icon: 'hand-left' as const,
    },
    {
      id: '2',
      name: 'Correction Massage',
      description: 'Specialized techniques for posture and alignment issues',
      duration: '90-120 min',
      priceFrom: 220,
      icon: 'fitness' as const,
    },
    {
      id: '3',
      name: 'Lymphatic Drainage',
      description: 'Gentle massage to support lymphatic system function',
      duration: '60-90 min',
      priceFrom: 160,
      icon: 'water' as const,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Marina Massages NYC</Text>
        <Text style={styles.subtitle}>Premium Therapeutic Services</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Our Services</Text>
        
        {services.map((service) => (
          <Pressable
            key={service.id}
            style={styles.serviceCard}
            onPress={() => router.push(`/service-detail?id=${service.id}`)}
          >
            <View style={styles.serviceIcon}>
              <Ionicons name={service.icon} size={32} color="#b8860b" />
            </View>
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
              <View style={styles.serviceMeta}>
                <Text style={styles.serviceDuration}>
                  <Ionicons name="time-outline" size={14} color="#666" /> {service.duration}
                </Text>
                <Text style={styles.servicePrice}>From ${service.priceFrom}</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#ccc" />
          </Pressable>
        ))}

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Featured In</Text>
          <View style={styles.mediaLogos}>
            <Text style={styles.mediaText}>VOGUE</Text>
            <Text style={styles.mediaDivider}>•</Text>
            <Text style={styles.mediaText}>FORBES</Text>
          </View>
        </View>
      </View>
    </ScrollView>
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
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#b8860b',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 16,
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  serviceIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff9f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
  },
  serviceMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  serviceDuration: {
    fontSize: 13,
    color: '#666',
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b8860b',
  },
  infoSection: {
    marginTop: 32,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  mediaLogos: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  mediaText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a2e',
    letterSpacing: 2,
  },
  mediaDivider: {
    fontSize: 18,
    color: '#ccc',
  },
});