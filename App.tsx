import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import RideDetailsScreen from './screens/RideDetailsScreen';
import ConfirmBookingScreen from './screens/ConfirmBookingScreen';
import MyBookings from './screens/MyBookings';
import ConfirmationScreenr from './screens/ConfirmationScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="RideDetails" component={RideDetailsScreen} options={{ title: 'Ride Details' }} />
        <Stack.Screen name="ConfirmBooking" component={ConfirmBookingScreen} options={{ title: 'Confirm Booking' }} />
        <Stack.Screen name="MyBookings" component={MyBookings} options={{ title: 'My Bookings' }} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreenr} options={{ title: 'Confirmation' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
