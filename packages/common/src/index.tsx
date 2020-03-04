import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  ScrollViewBase
} from "react-native";
import { Routes } from "./Routes";

export const App: React.FC = () => (
  <ScrollView style={styles.container}>
    {/* <ScrollViewBase style={{flex: 1}}> */}
    <View style={{justifyContent: 'center', flexDirection: 'row'}}>
      <Routes/>
    </View>
    {/* </ScrollViewBase> */}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000"
  },
});

export default App;
