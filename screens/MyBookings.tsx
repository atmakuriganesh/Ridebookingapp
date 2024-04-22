import React from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';

const MyBookings = ({ navigation, route }) => {
  // Access the ride object from route.params
  const { ride } = route.params || {};

  // Dummy data for demonstration
  const availableRides = [
    { id: 1, from: 'University Pavilion', to: 'Heights', time: '8:00 AM', Rider: 'Ganesh', persons: 4, cost: '$10/person' },
    { id: 2, from: 'Whitfield', to: 'Burlington', time: '12:00 PM', Rider: 'Keerthi', persons: 2, cost: '$15/person'},
    { id: 3, from: 'Ludlow', to: 'Cinemark', time: '3:30 PM', Rider: 'Anirudh', persons: 3, cost: '$12/person' },
    { id: 4, from: 'Ohio Avenue', to: 'Mason', time: '5.00 PM', Rider: 'Gayathri', persons: 5, cost: '$8/person' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Rides:</Text>
      <ScrollView style={styles.scrollContainer}>
        {availableRides.map(ride => (
          <View key={ride.id} style={styles.rideContainer}>
            <Text style={styles.rideText}>From: {ride.from}</Text>
            <Text style={styles.rideText}>To: {ride.to}</Text>
            <Text style={styles.rideText}>Time: {ride.time}</Text>
            <Text style={styles.rideText}>Rider: {ride.Rider}</Text>
            <Text style={styles.rideText}>Persons: {ride.persons}</Text>
            <Text style={styles.rideText}>Cost: {ride.cost}</Text>
            <Button title="View Details" onPress={() => navigation.navigate('RideDetails', { ride })} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  rideContainer: {
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  rideText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default MyBookings;
