import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function BookingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Bookings</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
        <Text style={styles.placeholder}>No upcoming appointments</Text>

        <Text style={styles.sectionTitle}>Past Appointments</Text>
        <Text style={styles.placeholder}>No past appointments</Text>
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
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1a1a2e',
    marginTop: 20,
    marginBottom: 16,
  },
  placeholder: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
});