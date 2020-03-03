import { Trend } from "./Trend";
import { TrendsMore } from "./TrendsMore";
import { TrendsForYou } from "./TrendsForYou";
import React from "react";
import { View, Text, StyleSheet, TextStyle, ViewStyle } from "react-native";
import spacing from "../../../res/styles/spacing";
import colors from "../../../res/styles/colors";
import I18n from "i18n-js";
import IcHome from "../../../res/icons/IcHome";

type Props = {
  // text: String;
};

interface Style {
  container: ViewStyle;
}

export function TrendingContainer({}) {
  return (
    <View style={styles.container}>
      <TrendsForYou />
      <Trend />
      <Trend />
      <Trend />
      <Trend />
      <Trend />
      <TrendsMore />
    </View>
  );
}

const styles = StyleSheet.create<Style>({
  container: {
    marginBottom: 14,
    backgroundColor: "rgb(21, 24, 28)",
    borderRadius: 14
  }
});
