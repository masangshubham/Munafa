import React from "react";
import { View, Text } from "react-native";
import { Card, List } from "react-native-paper";
import CardDisplay from "./CardDisplay";
import { SafeAreaView } from "react-native-safe-area-context";
import transactions from "../utils/transactions.json";
import { StyleSheet } from "react-native";

const HomeScreen = ({ cardData }) => {
  const recentTransactions = transactions.slice(0, 5);
  console.log(cardData);
  return (
    <SafeAreaView>
      <CardDisplay cardData={cardData} />

      <List.Section>
        <List.Subheader style={styles.subheader}>
          Recent Transactions
        </List.Subheader>
        {recentTransactions.map((transaction) => (
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
      </List.Section>
    </SafeAreaView>
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
});

export default HomeScreen;
