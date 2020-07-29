import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 0 }} />
      <View style={styles.container}>
        <Header />
        <ItemList />
        <Footer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#451400",
  },
});
