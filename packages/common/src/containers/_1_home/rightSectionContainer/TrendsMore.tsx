import React from "react";
import { TextStyle, View, Text, StyleSheet } from "react-native";
import colors from "../../../res/styles/colors";
import I18n from "i18n-js";
import IcHome from "../../../res/icons/IcHome";
import spacing from "../../../res/styles/spacing";

type Props = {
  // text: String;
};

interface Style {
  // container: ViewStyle;
  text: TextStyle;
  trendingTitleText: TextStyle;
}

export function TrendsMore({}) {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 14,
        justifyContent: "space-between"
      }}
    >
      <Text
        style={{
          fontSize: 14,
          color: colors.primary
        }}
      >
        {I18n.t("home.showMore")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create<Style>({
  text: {
    fontSize: spacing.textMenu,
    fontWeight: "bold",
    color: colors.text
  },
  trendingTitleText: {
    marginTop: 2,
    fontSize: 14,
    fontWeight: "bold",
    color: colors.text
  }
});
