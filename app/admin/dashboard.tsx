import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AdminDashboardScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Admin Dashboard</Text>
        <Text style={styles.subtitle}>Marina Massages NYC</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Ionicons name="calendar" size={32} color="#b8860b" />
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Today's Appointments</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="cash" size={32} color="#b8860b" />
            <Text style={styles.statNumber}>$850</Text>
            <Text style={styles.statLabel}>Today's Revenue</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          
          <Pressable 
            style={styles.actionCard}
            onPress={() => router.push('/admin/appointments')}
          >
            <Ionicons name="calendar-outline" size={24} color="#1a1a2e" />
            <View style={styles.actionText}>
              <Text style={styles.actionTitle}>View Appointments</Text>
              <Text style={styles.actionSubtitle}>Manage your schedule</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </Pressable>

          <Pressable 
            style={styles.actionCard}
            onPress={() => router.push('/admin/communication')}
          >
            <Ionicons name="chatbubbles-outline" size={24} color="#1a1a2e" />
            <View style={styles.actionText}>
              <Text style={styles.actionTitle}>Messages</Text>
              <Text style={styles.actionSubtitle}>3 unread messages</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </Pressable>

          <Pressable 
            style={styles.actionCard}
            onPress={() => router.push('/admin/settings')}
          >
            <Ionicons name="settings-outline" size={24} color="#1a1a2e" />
            <View style={styles.actionText}>
              <Text style={styles.actionTitle}>Settings</Text>
              <Text style={styles.actionSubtitle}>Manage availability</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </Pressable>
        </View>
        
        {/* Today's Schedule Preview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today's Schedule</Text>
          <View style={styles.appointmentCard}>
            <View style={styles.appointmentTime}>
              <Text style={styles.timeText}>10:00 AM</Text>
            </View>
            <View style={styles.appointmentDetails}>
              <Text style={styles.clientName}>Jane Smith</Text>
              <Text style={styles.serviceName}>Therapeutic Massage - 60 min</Text>
            </View>
          </View>
          <View style={styles.appointmentCard}>
            <View style={styles.appointmentTime}>
              <Text style={styles.timeText}>2:00 PM</Text>
            </View>
            <View style={styles.appointmentDetails}>
              <Text style={styles.clientName}>John Doe</Text>
              <Text style={styles.serviceName}>Lymphatic Drainage - 90 min</Text>
            </View>
          </View>
        </View>
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
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#b8860b',
  },
  content: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 16,
  },
  actionCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionText: {
    flex: 1,
    marginLeft: 16,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a2e',
  },
  actionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  appointmentCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  appointmentTime: {
    backgroundColor: '#b8860b',
    padding: 12,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  timeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  appointmentDetails: {
    marginLeft: 16,
    flex: 1,
  },
  clientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a2e',
  },
  serviceName: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});