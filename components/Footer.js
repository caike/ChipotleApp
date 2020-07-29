import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const Footer = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        fontSize: 24,
        backgroundColor: "#451400",
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#451400",
          height: 80,
          width: width,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            padding: 20,
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
            textTransform: "uppercase",
          }}
        >
          Add to bag
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
