import 'dotenv/config';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const seedData = async () => {
  console.log('🌱 Starting to seed data...');

  try {
    // Seed Services
    console.log('Adding services...');
    
    const services = [
      {
        id: 'therapeutic-massage',
        name: 'Therapeutic Massage',
        description: 'A comprehensive therapeutic massage designed to address muscle tension, improve circulation, and promote overall wellness. This treatment combines various techniques including deep tissue, Swedish, and trigger point therapy.',
        icon: 'hand-left',
        active: true,
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
      {
        id: 'correction-massage',
        name: 'Correction Massage',
        description: 'Specialized corrective techniques focusing on posture, alignment, and structural balance. This advanced therapy addresses chronic issues and movement patterns that contribute to pain and dysfunction.',
        icon: 'fitness',
        active: true,
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
      {
        id: 'lymphatic-drainage',
        name: 'Lymphatic Drainage',
        description: 'Gentle, rhythmic massage technique that supports the lymphatic system, helping to reduce fluid retention, boost immunity, and promote natural detoxification.',
        icon: 'water',
        active: true,
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
    ];

    for (const service of services) {
      await setDoc(doc(db, 'services', service.id), {
        name: service.name,
        description: service.description,
        icon: service.icon,
        active: service.active,
        benefits: service.benefits,
        durations: service.durations,
        createdAt: new Date(),
      });
      console.log(`Added service: ${service.name}`);
    }

    // Seed Working Hours
    console.log('Adding working hours...');
    await setDoc(doc(db, 'settings', 'working-hours'), {
      enabled: true,
      schedule: {
        monday: { open: '10:00', close: '18:00', enabled: true },
        tuesday: { open: '10:00', close: '18:00', enabled: true },
        wednesday: { open: '10:00', close: '18:00', enabled: true },
        thursday: { open: '10:00', close: '18:00', enabled: true },
        friday: { open: '10:00', close: '18:00', enabled: true },
        saturday: { open: '00:00', close: '00:00', enabled: false },
        sunday: { open: '00:00', close: '00:00', enabled: false },
      },
      updatedAt: new Date(),
    });
    console.log('Added working hours');

    // Seed Booking Policies
    console.log('Adding booking policies...');
    await setDoc(doc(db, 'settings', 'booking-policies'), {
      cancellationWindowHours: 24,
      bufferTimeMinutes: 15,
      advanceBookingDays: 30,
      updatedAt: new Date(),
    });
    console.log('Added booking policies');

    // Seed Sample Appointments (for testing)
    console.log('Adding sample appointments...');
    const today = new Date();
    const appointments = [
      {
        clientName: 'Jane Smith',
        clientEmail: 'jane@email.com',
        clientPhone: '(555) 123-4567',
        serviceId: 'therapeutic-massage',
        serviceName: 'Therapeutic Massage',
        duration: 60,
        price: 150,
        date: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
        status: 'confirmed',
        notes: '',
        createdAt: new Date(),
      },
      {
        clientName: 'John Doe',
        clientEmail: 'john@email.com',
        clientPhone: '(555) 987-6543',
        serviceId: 'lymphatic-drainage',
        serviceName: 'Lymphatic Drainage',
        duration: 90,
        price: 210,
        date: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 0),
        status: 'confirmed',
        notes: 'First time client',
        createdAt: new Date(),
      },
    ];

    for (const appointment of appointments) {
      await addDoc(collection(db, 'appointments'), appointment);
      console.log(`Added appointment for: ${appointment.clientName}`);
    }

    console.log('');
    console.log('Seeding completed successfully!');
    console.log('Your database is now ready to use.');
    
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

seedData();