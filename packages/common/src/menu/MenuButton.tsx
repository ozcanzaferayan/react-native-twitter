import React from "react";
import { Text, View, StyleSheet, TextStyle, ViewStyle } from "react-native";
import colors from "../res/styles/colors";
import spacing from "../res/styles/spacing";

interface Style {
  button: TextStyle;
  buttonContainer: ViewStyle;
}

type Props = {
  text: string;
};

const MenuButton: React.FC<Props> = props => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.button}>{props.text}</Text>
    </View>
  );
};
const styles = StyleSheet.create<Style>({
  button: {
    color: colors.textButton,
    fontWeight: "bold",
    fontSize: spacing.textButton
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    height: spacing.heightMenuTweetButton,
    borderRadius: spacing.radius,
    padding: 18
  }
});
export default MenuButton;
