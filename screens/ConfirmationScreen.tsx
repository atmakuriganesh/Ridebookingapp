import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const ConfirmationScreen = ({ route }) => {
  // Extract booking details from route params
  const { name, email, phone } = route.params;

  return (
    <ImageBackground source={require('./background.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Booking Confirmation</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.text}>{email}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.text}>{phone}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
});

export default ConfirmationScreen;
