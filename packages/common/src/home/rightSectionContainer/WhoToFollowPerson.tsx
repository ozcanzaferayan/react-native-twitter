import { Name } from "./Name";
import { Username } from "./Username";
import { FollowButton } from "./FollowButton";
import React from "react";
import { TextStyle, View, Text, StyleSheet, ViewStyle } from "react-native";
import spacing from "../../res/styles/spacing";
import colors from "../../res/styles/colors";
import I18n from "i18n-js";
import IcHome from "../../res/icons/IcHome";
import ProfileImage from "../../components/ProfileImage";

type Props = {
  // text: String;
};

interface Style {
  container: ViewStyle;
  containerName: ViewStyle;
}
export function WhoToFollowPerson({}) {
  return (
    <View style={styles.container}>
      <ProfileImage />
      <View style={styles.containerName}>
        <Name />
        <Username />
      </View>
      <FollowButton />
    </View>
  );
}

const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: "row",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 9,
    paddingBottom: 9,
    borderBottomWidth: spacing.hairline,
    borderColor: colors.hairline,
    alignItems: "center"
  },
  containerName: {
    marginLeft: 14,
    flex: 1
  }
});
