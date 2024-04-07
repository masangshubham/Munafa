import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const RegisterScreen = ({ navigation }) => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [email, setEmail] = useState('');
 const [errorMessage, setErrorMessage] = useState('');

 const handleRegister = async () => {
    try {
      const response = await fetch('https://munafabackend.onrender.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          email,
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log(data);
      // On successful registration, navigate to the login screen
      navigation.navigate('Login');
    } catch (error) {
      setErrorMessage(error.message);
    }
 };

 return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={{ marginBottom: 10 }}
        mode="outlined"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        style={{ marginBottom: 10 }}
        mode="outlined"
        secureTextEntry
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 10 }}
        mode="outlined"
      />
      <Button mode="contained" onPress={handleRegister} style={{ marginBottom: 10 }}>
        Register
      </Button>
      <Button
        mode="outlined"
        
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </Button>
      {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
    </View>
 );
};

export default RegisterScreen;
