import React, { useState } from "react";
import { View, Button } from "react-native";
import { CreditCardInput } from "react-native-payment-card";

const AddCard = () => {
  const [cardData, setCardData] = useState({});
  const [submittedData, setSubmittedData] = useState({});

  const handleCardChange = (cardInputData) => {
    setCardData(cardInputData);
  };

  const handleSubmit = () => {
    setSubmittedData(cardData);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
        marginBottom: 0,
      }}
    >
      <CreditCardInput
        autoFocus
        requiresName
        requiresCVC
        labelStyle={{ color: "black" }}
        inputStyle={{ color: "black" }}
        validColor={"black"}
        invalidColor={"red"}
        placeholderColor={"darkgray"}
        onChange={handleCardChange}
      />
      <View style={{ marginTop: -50 }}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default AddCard;
