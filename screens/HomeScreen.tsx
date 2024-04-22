import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // Dummy data for demonstration
  const availableRides = [
    { id: 1, from: 'University Pavilion', to: 'Heights', time: '8:00 AM', Rider: 'Ganesh' },
    { id: 2, from: 'Whitfield', to: 'Burlington', time: '12:00 PM', Rider: 'Keerthi'},
    { id: 3, from: 'Ludlow', to: 'Cinemark', time: '3:30 PM', Rider: 'Anirudh' },
    { id: 4, from: 'Ohio Avenue', to: 'Mason', time: '5.00 PM', Rider: 'Gayathri' },
  ];

  return (
    <ImageBackground source={require('./background.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Available Rides:</Text>
        {availableRides.map(ride => (
          <View key={ride.id} style={styles.rideContainer}>
            <Text style={styles.rideText}>From: {ride.from}</Text>
            <Text style={styles.rideText}>To: {ride.to}</Text>
            <Text style={styles.rideText}>Time: {ride.time}</Text>
            <Text style={styles.rideText}>Name: {ride.Rider}</Text>
            <Button title="View Details" onPress={() => navigation.navigate('RideDetails', { ride })} />
          </View>
        ))}
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        <Button title="Go to Ride Details" onPress={() => navigation.navigate('MyBookings')} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default HomeScreen;
