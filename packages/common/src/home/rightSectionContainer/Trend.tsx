import React from "react";
import { TextStyle, View, Text, StyleSheet } from "react-native";
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
export function Trend({}) {
  return <View style={{
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 9,
    paddingBottom: 9,
    borderBottomWidth: spacing.hairline,
    borderColor: colors.hairline,
    justifyContent: "space-between"
  }}>
        <View style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      flex: 1
    }}>
          <Text style={{
        fontSize: 12,
        color: "rgb(110, 118, 125)"
      }}>
            {I18n.t("home.trendingOn", {
          place: "Türkiye"
        })}
          </Text>
          <IcHome width={spacing.iconTrendingCaret} height={spacing.iconTrendingCaret} fill="rgb(110, 118, 125)" style={{
        marginLeft: 13
      }} />
        </View>
        <Text style={styles.trendingTitleText}>#COVID-19</Text>
        <View style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      flex: 1,
      marginTop: 2
    }}>
          <Text style={{
        fontSize: 14,
        color: "rgb(110, 118, 125)"
      }}>
            45 B Tweet
          </Text>
        </View>
      </View>;
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
