import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AdminAppointmentsScreen() {
  const router = useRouter();
  const [view, setView] = useState<'day' | 'week' | 'month'>('day');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </Pressable>
        <Text style={styles.title}>Appointments</Text>
      </View>

      {/* View Selector */}
      <View style={styles.viewSelector}>
        <Pressable 
          style={[styles.viewButton, view === 'day' && styles.viewButtonActive]}
          onPress={() => setView('day')}
        >
          <Text style={[styles.viewButtonText, view === 'day' && styles.viewButtonTextActive]}>
            Day
          </Text>
        </Pressable>
        <Pressable 
          style={[styles.viewButton, view === 'week' && styles.viewButtonActive]}
          onPress={() => setView('week')}
        >
          <Text style={[styles.viewButtonText, view === 'week' && styles.viewButtonTextActive]}>
            Week
          </Text>
        </Pressable>
        <Pressable 
          style={[styles.viewButton, view === 'month' && styles.viewButtonActive]}
          onPress={() => setView('month')}
        >
          <Text style={[styles.viewButtonText, view === 'month' && styles.viewButtonTextActive]}>
            Month
          </Text>
        </Pressable>
      </View>

      {/* Date Navigation */}
      <View style={styles.dateNav}>
        <Pressable style={styles.navButton}>
          <Ionicons name="chevron-back" size={24} color="#1a1a2e" />
        </Pressable>
        <Text style={styles.dateText}>Wednesday, Nov 12, 2025</Text>
        <Pressable style={styles.navButton}>
          <Ionicons name="chevron-forward" size={24} color="#1a1a2e" />
        </Pressable>
      </View>

      <ScrollView style={styles.content}>
        {/* Appointments List */}
        <View style={styles.appointmentCard}>
          <View style={styles.appointmentHeader}>
            <View style={styles.timeSlot}>
              <Text style={styles.timeText}>10:00 AM</Text>
              <Text style={styles.durationText}>60 min</Text>
            </View>
            <View style={styles.appointmentInfo}>
              <Text style={styles.clientName}>Jane Smith</Text>
              <Text style={styles.serviceType}>Therapeutic Massage</Text>
              <Text style={styles.contactInfo}>📧 jane@email.com</Text>
            </View>
          </View>
          <View style={styles.appointmentActions}>
            <Pressable style={styles.actionButton}>
              <Ionicons name="create-outline" size={20} color="#b8860b" />
              <Text style={styles.actionButtonText}>Edit</Text>
            </Pressable>
            <Pressable style={styles.actionButton}>
              <Ionicons name="chatbubble-outline" size={20} color="#b8860b" />
              <Text style={styles.actionButtonText}>Message</Text>
            </Pressable>
            <Pressable style={styles.actionButton}>
              <Ionicons name="close-circle-outline" size={20} color="#d32f2f" />
              <Text style={[styles.actionButtonText, { color: '#d32f2f' }]}>Cancel</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.appointmentCard}>
          <View style={styles.appointmentHeader}>
            <View style={styles.timeSlot}>
              <Text style={styles.timeText}>2:00 PM</Text>
              <Text style={styles.durationText}>90 min</Text>
            </View>
            <View style={styles.appointmentInfo}>
              <Text style={styles.clientName}>John Doe</Text>
              <Text style={styles.serviceType}>Lymphatic Drainage</Text>
              <Text style={styles.contactInfo}>📧 john@email.com</Text>
            </View>
          </View>
          <View style={styles.appointmentActions}>
            <Pressable style={styles.actionButton}>
              <Ionicons name="create-outline" size={20} color="#b8860b" />
              <Text style={styles.actionButtonText}>Edit</Text>
            </Pressable>
            <Pressable style={styles.actionButton}>
              <Ionicons name="chatbubble-outline" size={20} color="#b8860b" />
              <Text style={styles.actionButtonText}>Message</Text>
            </Pressable>
            <Pressable style={styles.actionButton}>
              <Ionicons name="close-circle-outline" size={20} color="#d32f2f" />
              <Text style={[styles.actionButtonText, { color: '#d32f2f' }]}>Cancel</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.emptySlot}>
          <Text style={styles.emptySlotText}>4:00 PM - Available</Text>
        </View>
      </ScrollView>

      {/* Add Appointment Button */}
      <Pressable style={styles.fab}>
        <Ionicons name="add" size={28} color="#fff" />
      </Pressable>
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
  viewSelector: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    gap: 8,
  },
  viewButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  viewButtonActive: {
    backgroundColor: '#b8860b',
  },
  viewButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  viewButtonTextActive: {
    color: '#fff',
  },
  dateNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  navButton: {
    padding: 8,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a2e',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  appointmentCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#b8860b',
  },
  appointmentHeader: {
    flexDirection: 'row',
  },
  timeSlot: {
    marginRight: 16,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  durationText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  appointmentInfo: {
    flex: 1,
  },
  clientName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 4,
  },
  serviceType: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  contactInfo: {
    fontSize: 12,
    color: '#999',
  },
  appointmentActions: {
    flexDirection: 'row',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    gap: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  actionButtonText: {
    fontSize: 14,
    color: '#b8860b',
    fontWeight: '500',
  },
  emptySlot: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderStyle: 'dashed',
    alignItems: 'center',
  },
  emptySlotText: {
    fontSize: 14,
    color: '#999',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#b8860b',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});