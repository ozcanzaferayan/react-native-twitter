import React from "react";
import {
  View,
  StyleSheet,
  ScrollView
} from "react-native";
import { Routes } from "./Routes";

export const App: React.FC = () => (
  <ScrollView style={styles.container}>
    <View style={{justifyContent: 'center', flexDirection: 'row'}}>
      <Routes/>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000"
  },
});

export default App;
