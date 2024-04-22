import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Alert } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Perform sign up logic here
    // For demo, we'll just log the user details
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Show alert message for successful sign up
    Alert.alert('Success', 'Sign up successful!', [
      { text: 'OK', onPress: () => navigation.navigate('Home') }
    ]);
  };

  return (
    <ImageBackground source={require('./background.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
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
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Sign Up" onPress={handleSignUp} />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
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

export default SignUpScreen;
