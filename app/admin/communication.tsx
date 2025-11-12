import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AdminCommunicationScreen() {
  const router = useRouter();
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </Pressable>
        <Text style={styles.title}>Communication Center</Text>
      </View>

      <View style={styles.contentContainer}>
        {/* Client List */}
        <View style={styles.clientList}>
          <Text style={styles.sectionTitle}>Messages</Text>
          
          <Pressable 
            style={[styles.clientItem, selectedClient === '1' && styles.clientItemActive]}
            onPress={() => setSelectedClient('1')}
          >
            <View style={styles.clientInfo}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>JS</Text>
              </View>
              <View style={styles.clientDetails}>
                <Text style={styles.clientName}>Jane Smith</Text>
                <Text style={styles.lastMessage}>Can I reschedule to 3pm?</Text>
              </View>
            </View>
            <View style={styles.clientMeta}>
              <Text style={styles.timestamp}>10:30 AM</Text>
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText}>2</Text>
              </View>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.clientItem, selectedClient === '2' && styles.clientItemActive]}
            onPress={() => setSelectedClient('2')}
          >
            <View style={styles.clientInfo}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>JD</Text>
              </View>
              <View style={styles.clientDetails}>
                <Text style={styles.clientName}>John Doe</Text>
                <Text style={styles.lastMessage}>Thank you for yesterday!</Text>
              </View>
            </View>
            <View style={styles.clientMeta}>
              <Text style={styles.timestamp}>Yesterday</Text>
            </View>
          </Pressable>

          <Pressable 
            style={[styles.clientItem, selectedClient === '3' && styles.clientItemActive]}
            onPress={() => setSelectedClient('3')}
          >
            <View style={styles.clientInfo}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>SJ</Text>
              </View>
              <View style={styles.clientDetails}>
                <Text style={styles.clientName}>Sarah Johnson</Text>
                <Text style={styles.lastMessage}>Is 60 min enough for...</Text>
              </View>
            </View>
            <View style={styles.clientMeta}>
              <Text style={styles.timestamp}>2 days ago</Text>
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText}>1</Text>
              </View>
            </View>
          </Pressable>
        </View>

        {/* Message Thread */}
        <View style={styles.messageThread}>
          {selectedClient ? (
            <>
              <View style={styles.threadHeader}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>JS</Text>
                </View>
                <View>
                  <Text style={styles.threadName}>Jane Smith</Text>
                  <Text style={styles.threadInfo}>jane@email.com • (555) 123-4567</Text>
                </View>
              </View>

              <ScrollView style={styles.messagesContainer}>
                <View style={styles.messageClient}>
                  <Text style={styles.messageText}>
                    Hi Marina! I have an appointment tomorrow at 2pm. Is it possible to reschedule to 3pm instead?
                  </Text>
                  <Text style={styles.messageTime}>10:25 AM</Text>
                </View>

                <View style={styles.messageClient}>
                  <Text style={styles.messageText}>
                    Can I reschedule to 3pm?
                  </Text>
                  <Text style={styles.messageTime}>10:30 AM</Text>
                </View>

                <View style={styles.messageAdmin}>
                  <Text style={styles.messageText}>
                    Hi Jane! Yes, 3pm works perfectly. I've updated your appointment.
                  </Text>
                  <Text style={styles.messageTime}>10:35 AM</Text>
                </View>
              </ScrollView>

              <View style={styles.messageInput}>
                <TextInput
                  style={styles.input}
                  placeholder="Type your message..."
                  value={message}
                  onChangeText={setMessage}
                  multiline
                />
                <Pressable style={styles.sendButton}>
                  <Ionicons name="send" size={20} color="#fff" />
                </Pressable>
              </View>
            </>
          ) : (
            <View style={styles.emptyState}>
              <Ionicons name="chatbubbles-outline" size={64} color="#ccc" />
              <Text style={styles.emptyStateText}>Select a conversation to start messaging</Text>
            </View>
          )}
        </View>
      </View>
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
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  clientList: {
    width: '35%',
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a2e',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  clientItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    alignItems: 'center',
  },
  clientItemActive: {
    backgroundColor: '#f5f5f5',
  },
  clientInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#b8860b',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  clientDetails: {
    flex: 1,
  },
  clientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 4,
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
  },
  clientMeta: {
    alignItems: 'flex-end',
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  unreadBadge: {
    backgroundColor: '#b8860b',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 20,
    alignItems: 'center',
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  messageThread: {
    flex: 1,
    backgroundColor: '#fff',
  },
  threadHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  threadName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a2e',
  },
  threadInfo: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  messagesContainer: {
    flex: 1,
    padding: 16,
  },
  messageClient: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 12,
    borderBottomLeftRadius: 4,
    maxWidth: '70%',
    marginBottom: 12,
  },
  messageAdmin: {
    alignSelf: 'flex-end',
    backgroundColor: '#b8860b',
    padding: 12,
    borderRadius: 12,
    borderBottomRightRadius: 4,
    maxWidth: '70%',
    marginBottom: 12,
  },
  messageText: {
    fontSize: 14,
    color: '#1a1a2e',
    lineHeight: 20,
  },
  messageTime: {
    fontSize: 11,
    color: '#999',
    marginTop: 4,
  },
  messageInput: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 12,
    maxHeight: 100,
    fontSize: 14,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#b8860b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#999',
    marginTop: 16,
    textAlign: 'center',
  },
});