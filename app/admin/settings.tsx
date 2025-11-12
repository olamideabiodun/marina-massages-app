import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AdminSettingsScreen() {
  const router = useRouter();
  const [workingHoursEnabled, setWorkingHoursEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </Pressable>
        <Text style={styles.title}>Settings</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Working Hours Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Working Hours</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Enable Working Hours</Text>
              <Text style={styles.settingDescription}>
                Set your regular weekly schedule
              </Text>
            </View>
            <Switch
              value={workingHoursEnabled}
              onValueChange={setWorkingHoursEnabled}
              trackColor={{ false: '#ddd', true: '#b8860b' }}
              thumbColor="#fff"
            />
          </View>

          {workingHoursEnabled && (
            <>
              <View style={styles.dayRow}>
                <Text style={styles.dayName}>Monday</Text>
                <Text style={styles.dayHours}>10:00 AM - 6:00 PM</Text>
                <Pressable>
                  <Ionicons name="create-outline" size={20} color="#b8860b" />
                </Pressable>
              </View>
              <View style={styles.dayRow}>
                <Text style={styles.dayName}>Tuesday</Text>
                <Text style={styles.dayHours}>10:00 AM - 6:00 PM</Text>
                <Pressable>
                  <Ionicons name="create-outline" size={20} color="#b8860b" />
                </Pressable>
              </View>
              <View style={styles.dayRow}>
                <Text style={styles.dayName}>Wednesday</Text>
                <Text style={styles.dayHours}>10:00 AM - 6:00 PM</Text>
                <Pressable>
                  <Ionicons name="create-outline" size={20} color="#b8860b" />
                </Pressable>
              </View>
              <View style={styles.dayRow}>
                <Text style={styles.dayName}>Thursday</Text>
                <Text style={styles.dayHours}>10:00 AM - 6:00 PM</Text>
                <Pressable>
                  <Ionicons name="create-outline" size={20} color="#b8860b" />
                </Pressable>
              </View>
              <View style={styles.dayRow}>
                <Text style={styles.dayName}>Friday</Text>
                <Text style={styles.dayHours}>10:00 AM - 6:00 PM</Text>
                <Pressable>
                  <Ionicons name="create-outline" size={20} color="#b8860b" />
                </Pressable>
              </View>
              <View style={styles.dayRow}>
                <Text style={styles.dayName}>Saturday</Text>
                <Text style={styles.dayHours}>Closed</Text>
                <Pressable>
                  <Ionicons name="create-outline" size={20} color="#b8860b" />
                </Pressable>
              </View>
              <View style={styles.dayRow}>
                <Text style={styles.dayName}>Sunday</Text>
                <Text style={styles.dayHours}>Closed</Text>
                <Pressable>
                  <Ionicons name="create-outline" size={20} color="#b8860b" />
                </Pressable>
              </View>
            </>
          )}
        </View>

        {/* Block Off Time Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Blocked Time</Text>
          <Text style={styles.sectionDescription}>
            Block specific dates or time ranges (vacation, administrative time, etc.)
          </Text>

          <View style={styles.blockedItem}>
            <View style={styles.blockedInfo}>
              <Text style={styles.blockedDate}>Dec 24 - Dec 26, 2025</Text>
              <Text style={styles.blockedReason}>Holiday Break</Text>
            </View>
            <Pressable>
              <Ionicons name="trash-outline" size={20} color="#d32f2f" />
            </Pressable>
          </View>

          <View style={styles.blockedItem}>
            <View style={styles.blockedInfo}>
              <Text style={styles.blockedDate}>Jan 15, 2026 - 2:00 PM to 4:00 PM</Text>
              <Text style={styles.blockedReason}>Training Session</Text>
            </View>
            <Pressable>
              <Ionicons name="trash-outline" size={20} color="#d32f2f" />
            </Pressable>
          </View>

          <Pressable style={styles.addButton}>
            <Ionicons name="add-circle-outline" size={20} color="#b8860b" />
            <Text style={styles.addButtonText}>Add Blocked Time</Text>
          </Pressable>
        </View>

        {/* Service Configuration */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services</Text>
          
          <View style={styles.serviceItem}>
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceName}>Therapeutic Massage</Text>
              <Text style={styles.serviceDetails}>60 min - $150 • 90 min - $200</Text>
            </View>
            <Pressable>
              <Ionicons name="create-outline" size={20} color="#b8860b" />
            </Pressable>
          </View>

          <View style={styles.serviceItem}>
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceName}>Correction Massage</Text>
              <Text style={styles.serviceDetails}>90 min - $220 • 120 min - $280</Text>
            </View>
            <Pressable>
              <Ionicons name="create-outline" size={20} color="#b8860b" />
            </Pressable>
          </View>

          <View style={styles.serviceItem}>
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceName}>Lymphatic Drainage</Text>
              <Text style={styles.serviceDetails}>60 min - $160 • 90 min - $210</Text>
            </View>
            <Pressable>
              <Ionicons name="create-outline" size={20} color="#b8860b" />
            </Pressable>
          </View>

          <Pressable style={styles.addButton}>
            <Ionicons name="add-circle-outline" size={20} color="#b8860b" />
            <Text style={styles.addButtonText}>Add New Service</Text>
          </Pressable>
        </View>

        {/* Booking Policies */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Booking Policies</Text>
          
          <View style={styles.policyItem}>
            <Text style={styles.policyLabel}>Cancellation Window</Text>
            <Text style={styles.policyValue}>24 hours</Text>
            <Pressable>
              <Ionicons name="create-outline" size={20} color="#b8860b" />
            </Pressable>
          </View>

          <View style={styles.policyItem}>
            <Text style={styles.policyLabel}>Booking Buffer Time</Text>
            <Text style={styles.policyValue}>15 minutes</Text>
            <Pressable>
              <Ionicons name="create-outline" size={20} color="#b8860b" />
            </Pressable>
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
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 12,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  settingInfo: {
    flex: 1,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a2e',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: '#666',
  },
  dayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dayName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a2e',
    width: 100,
  },
  dayHours: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
  blockedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff3e0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  blockedInfo: {
    flex: 1,
  },
  blockedDate: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a2e',
    marginBottom: 4,
  },
  blockedReason: {
    fontSize: 12,
    color: '#666',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginTop: 8,
    gap: 8,
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#b8860b',
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a2e',
    marginBottom: 4,
  },
  serviceDetails: {
    fontSize: 14,
    color: '#666',
  },
  policyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  policyLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a2e',
  },
  policyValue: {
    fontSize: 14,
    color: '#666',
    marginRight: 12,
  },
});