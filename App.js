import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/HomeScreen"; 
import { SafeAreaProvider } from "react-native-safe-area-context";
import RegisterScreen from "./components/RegisterScreen";
import { LogBox } from "react-native";
const Stack = createStackNavigator();

export default function App() {
  LogBox.ignoreAllLogs();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userNameApp, setUserNameApp] = useState("");
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={isSignedIn ? "Home" : "Login"}
        >
          <Stack.Screen name="Login">
            {(props) => (
              <LoginScreen {...props} setIsSignedIn={setIsSignedIn} setUserNameApp={setUserNameApp}/>
            )}
          </Stack.Screen>
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} setIsSignedIn={setIsSignedIn} userNameApp={userNameApp}/>}
          </Stack.Screen>
          <Stack.Screen name="Register">
            {(props) => <RegisterScreen {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
