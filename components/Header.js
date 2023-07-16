import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to {name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'powderblue',
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});