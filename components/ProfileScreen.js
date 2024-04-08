import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Card, List } from "react-native-paper";
import transactions from "../utils/transactions.json";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  // Sample user data
  const user = {
    name: "User15",
    phone: "123456789",
    email: "User15@g.com",
  };

  return (
    // <SafeAreaView>
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <Card style={styles.card}>
      <Card.Title title="User Details" titleStyle={styles.title} />
      <Card.Content>
        <Text style={styles.detail}>Name: {user.name}</Text>
        <Text style={styles.detail}>Phone: {user.phone}</Text>
        <Text style={styles.detail}>Email: {user.email}</Text>
      </Card.Content>
    </Card>

      <List.Section>
        <List.Subheader style={styles.subheader}>Transactions</List.Subheader>
        <ScrollView>
          {transactions.map((transaction) => (
            <List.Item
              key={transaction.id}
              title={transaction.name}
              description={`${transaction.date}`}
              right={() => (
                <Text style={styles.amount}>${transaction.amount}</Text>
              )}
              style={styles.listItem}
            />
          ))}
        </ScrollView>
      </List.Section>
    </SafeAreaView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  subheader: {
    fontSize: 20, // Make the subheader size larger
    fontWeight: "bold",
    marginBottom: 5,
  },
  listItem: {
    paddingVertical: 10, // Add vertical padding to list items
    borderBottomWidth: 1, // Add a bottom border to list items
    borderBottomColor: "#ddd", // Set the color of the bottom border
  },
  amount: {
    fontWeight: "bold", // Make the amount bold
    textAlign: "right", // Align the amount to the right
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
    color: '#5D0E41',
  },
  card: {
    marginBottom: 20,
    elevation: 5,
    backgroundColor: '#EEEEEE',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00224D',
    marginTop: 20,
  },
});

export default ProfileScreen;
