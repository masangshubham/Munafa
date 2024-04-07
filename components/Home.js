import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Title, Paragraph, List } from "react-native-paper";

// Sample transactions data
const transactions = [
  {
    id: 1,
    name: "John Doe",
    date: "2024-04-01",
    amount: 100,
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "2024-04-02",
    amount: 50,
  },
  // Add more transactions as needed
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Title style={styles.cardTitle}>User Name</Title>
          <Paragraph style={styles.cardText}>
            Card Number: **** **** **** ****
          </Paragraph>
          <Paragraph style={styles.cardText}>Expires: 12/24</Paragraph>
          <View style={styles.cardProvider}>
            <Paragraph style={styles.cardText}>Provider:</Paragraph>
            {/* Replace 'visa' with the actual provider icon */}
            <Card.Cover
              source={require("../utils/visa.png")}
              style={styles.providerIcon}
            />
          </View>
        </Card.Content>
      </Card>
      <List.Section>
        <List.Subheader>Recent Transactions</List.Subheader>
        {transactions.map((transaction) => (
          <List.Item
            key={transaction.id}
            title={transaction.name}
            description={`${transaction.date} - $${transaction.amount}`}
            right={() => <List.Icon icon="currency-usd" />}
          />
        ))}
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    elevation: 5,
  },
  cardContent: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardText: {
    fontSize: 16,
  },
  cardProvider: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  providerIcon: {
    width: 30,
    height: 20,
    marginLeft: 5,
  },
});

export default HomeScreen;
