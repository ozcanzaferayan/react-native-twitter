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
  isMainSection?: boolean;
};

interface Style {
  container: ViewStyle;
}

interface StyleProps {
  isMainSection: boolean;
}

export const TrendingContainer: React.FC<Props> = props => {
  const styles = customStyles({isMainSection: props.isMainSection ? true : false});
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


const customStyles = (props: StyleProps) =>
StyleSheet.create<Style>({
  container: {
    marginBottom: 14,
    backgroundColor: props.isMainSection ? 'transparent' : "rgb(21, 24, 28)",
    borderRadius: 14
  }
});