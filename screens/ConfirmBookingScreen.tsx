import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ImageBackground } from 'react-native';

const BookingScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bookings, setBookings] = useState([]);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBooking = () => {
    if (!name || !email || !phone) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }
    setBookingDetails({ name, email, phone });
  };

  const confirmBooking = () => {
    Alert.alert(
      'Booking Confirmed',
      'Your ride has been booked successfully. The driver will reach out to your mobile number.',
      [
        { text: 'OK', onPress: () => {
          setBookings([...bookings, bookingDetails]);
          navigation.navigate('Home');
        }}
      ]
    );
  };

  return (
    <ImageBackground source={require('./car-background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {bookingDetails ? (
          <View style={styles.bookingDetailsContainer}>
            <Text style={styles.heading}>Booking Details:</Text>
            <Text style={styles.detail}>Name: {bookingDetails.name}</Text>
            <Text style={styles.detail}>Email: {bookingDetails.email}</Text>
            <Text style={styles.detail}>Phone: {bookingDetails.phone}</Text>
            <Button title="Confirm Booking" onPress={confirmBooking} />
          </View>
        ) : (
          <>
            <Text style={styles.heading}>Please enter your details:</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
            <Button title="Book Ride" onPress={handleBooking} />
          </>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = {
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  bookingDetailsContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  detail: {
    marginBottom: 5,
    color: 'white',
  },
};

export default BookingScreen;
