import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomNavigation } from "react-native-paper";
import Home from "./Home";
import ScanScreen from "./ScanScreen";
import ProfileScreen from "./ProfileScreen";
import AddCard from "./AddCard";
import { useState } from "react";

function HomeScreen({ setIsSignedIn }) {
  const navigation = useNavigation();
  const [cardData, setCardData] = useState({});
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", focusedIcon: "home", unfocusedIcon: "home-outline"},
    { key: "scan", title: "Scan", focusedIcon: "camera", unfocusedIcon: "camera-outline"},
    { key: "profile", title: "Profile", focusedIcon: "account", unfocusedIcon: "account-outline"},
    {key: "addCard", title: "Add Card", focusedIcon: "credit-card", unfocusedIcon: "credit-card-outline"}
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => <Home cardData={cardData} />,
    scan: () => <ScanScreen setIsSignedIn={setIsSignedIn} />,
    profile: () => <ProfileScreen setCardData={setCardData} />,
    addCard: () => <AddCard />
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
