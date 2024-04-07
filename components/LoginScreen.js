import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://munafabackend.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      console.log(data);
      // On successful login, navigate to the home screen
      setErrorMessage("");
      navigation.navigate("Home");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}>
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
      <Button
        mode="contained"
        onPress={handleLogin}
        style={{ marginBottom: 10 }}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("Register")}
      >
        Register
      </Button>
      {errorMessage && <Text style={{ color: "red" }}>{errorMessage}</Text>}
    </View>
  );
};

export default LoginScreen;
