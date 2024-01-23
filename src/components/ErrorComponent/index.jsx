import React from "react";
import { View, Text } from "react-native";

const ErrorComponent = ({ messages }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    {messages.map((message, index) => (
      <Text key={index} style={{ color: "red", marginTop: 10 }}>
        {message}
      </Text>
    ))}
  </View>
);

export default ErrorComponent;
