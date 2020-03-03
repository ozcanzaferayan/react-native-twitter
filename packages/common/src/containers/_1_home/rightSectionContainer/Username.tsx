import React from "react";
import { Text } from "react-native";
import colors from "../../../res/styles/colors";

export function Username({}) {
  return (
    <Text
      style={{
        fontWeight: "normal",
        fontSize: 14,
        color: colors.textFaded
      }}
    >
      @ZaferAyan
    </Text>
  );
}
