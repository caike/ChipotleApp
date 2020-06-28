import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Header from "./Header";
import ItemList from "./ItemList";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 0 }} />
      <SafeAreaView style={styles.container}>
        <Header />
        <ItemList />
        <Footer />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#451400",
  },
});
