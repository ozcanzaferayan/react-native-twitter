import React from "react";
import { View, Text } from "react-native";
import colors from "../../res/styles/colors";
import spacing from "../../res/styles/spacing";
import I18n from "i18n-js";
export function FollowButton({}) {
  return (
    <View
      style={{
        borderColor: colors.primary,
        borderRadius: spacing.radius,
        borderWidth: spacing.hairline,
        paddingStart: 14,
        paddingEnd: 14,
        height: 28,
        justifyContent: "center"
      }}
    >
      <Text
        style={{
          color: colors.primary,
          fontWeight: "bold"
        }}
      >
        {I18n.t("home.follow")}
      </Text>
    </View>
  );
}
