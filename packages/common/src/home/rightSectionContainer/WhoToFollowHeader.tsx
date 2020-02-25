import React from "react";
import { View, Text, StyleSheet, TextStyle } from "react-native";
import spacing from "../../res/styles/spacing";
import colors from "../../res/styles/colors";
import I18n from "i18n-js";
import IcHome from "../../res/icons/IcHome";

type Props = {
  // text: String;
};

interface Style {
  // container: ViewStyle;
  text: TextStyle;
  trendingTitleText: TextStyle;
}

export function WhoToFollowHeader({}) {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 9,
        paddingBottom: 9,
        borderBottomWidth: spacing.hairline,
        borderColor: colors.hairline,
        justifyContent: "space-between"
      }}
    >
      <Text style={styles.text}>{I18n.t("home.whoToFollowHeader")}</Text>
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
