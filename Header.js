import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Build Your</Text>
      <Text style={styles.headerSubText}>Burrito</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: "white",
  },
  headerText: {
    paddingTop: 20,
    fontSize: 15,
    fontWeight: "bold",
    color: "rgb(75,25,20)",
  },
  headerSubText: {
    fontSize: 25,
    paddingBottom: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "rgb(75,25,20)",
  },
});

export default Header;
