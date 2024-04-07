import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomNavigation } from "react-native-paper";
import Home from "./Home";
import ScanScreen from "./ScanScreen";
import ProfileScreen from "./ProfileScreen";

function HomeScreen({ setIsSignedIn }) {
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", focusedIcon: "home", unfocusedIcon: "home-outline"},
    { key: "scan", title: "Scan", focusedIcon: "camera", unfocusedIcon: "camera-outline"},
    { key: "profile", title: "Profile", focusedIcon: "account", unfocusedIcon: "account-outline"},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    scan: ScanScreen,
    profile: ProfileScreen,
  });

  const handleLogout = () => {
    setIsSignedIn(false);
    navigation.navigate("Login");
  };

  return (
    <BottomNavigation
    navigationState={{ index, routes }}
    onIndexChange={setIndex}
    renderScene={renderScene}
  />
  );
}

export default HomeScreen;
