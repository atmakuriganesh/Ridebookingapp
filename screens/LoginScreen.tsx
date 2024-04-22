import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    // For demo, let's assume successful login if email and password are not empty
    if (email && password) {
      // Show alert message for successful login
      Alert.alert('Success', 'Login successful', [
        { text: 'OK', onPress: () => navigation.navigate('Home') }
      ]);
    } else {
      // Show alert message for empty email or password
      Alert.alert('Error', 'Please enter valid email and password');
    }
  };

  return (
    <ImageBackground source={require('./background.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
        <Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')} />
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff', // Text color
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    backgroundColor: '#ffffff', // Input field background color
  },
});

export default LoginScreen;
