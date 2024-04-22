import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const RideDetailsScreen = ({ route, navigation }) => {
  const { ride } = route.params;

  return (
    <ImageBackground source={require('./background.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.heading}>Ride Details:</Text>
          <View style={styles.tableContainer}>
            <View style={styles.row}>
              <Text style={styles.label}>From:</Text>
              <Text style={styles.text}>{ride.from}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>To:</Text>
              <Text style={styles.text}>{ride.to}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Time:</Text>
              <Text style={styles.text}>{ride.time}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ConfirmBooking', { ride })}
          >
            <Text style={styles.buttonText}>Confirm Booking</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Go back to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  detailsContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
    maxWidth: 500,
    width: '80%', // Adjust the width as needed
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
  },
  tableContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    color: '#ffffff',
  },
  text: {
    fontSize: 16,
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
  },
});

export default RideDetailsScreen;
