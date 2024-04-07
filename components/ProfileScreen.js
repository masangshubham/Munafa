import React from "react";
import { View, Text } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card>
        <Card.Content>
          <Title>User Details</Title>
          <Paragraph>Email: user@example.com</Paragraph>
          <Paragraph>Phone: +1234567890</Paragraph>
        </Card.Content>
      </Card>
      <Text>Previous Transactions</Text>
      {/* List of previous transactions */}
    </View>
  );
};

export default ProfileScreen;
