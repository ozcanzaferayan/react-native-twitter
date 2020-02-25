import { Trend } from "./Trend";
import { TrendsMore } from "./TrendsMore";
import { TrendsForYou } from "./TrendsForYou";
import React from "react";
import { View, Text, StyleSheet, TextStyle, ViewStyle } from "react-native";
import spacing from "../../res/styles/spacing";
import colors from "../../res/styles/colors";
import I18n from "i18n-js";
import IcHome from "../../res/icons/IcHome";
import { WhoToFollowHeader } from "./WhoToFollowHeader";
import { WhoToFollowMore } from "./WhoToFollowMore";
import { WhoToFollowPerson } from "./WhoToFollowPerson";

type Props = {
  // text: String;
};

interface Style {
  container: ViewStyle;
}

export function WhoToFollowContainer({}) {
  return (
    <View style={styles.container}>
      <WhoToFollowHeader />
      <WhoToFollowPerson />
      <WhoToFollowPerson />
      <WhoToFollowPerson />
      <WhoToFollowMore />
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
