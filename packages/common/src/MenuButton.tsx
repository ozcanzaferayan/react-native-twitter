import React from 'react';
import {Text, View, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface Style {
  button: TextStyle;
  buttonContainer: ViewStyle;
}

type Props = {
  text: string;
}

const MenuButton: React.FC<Props> = props => {

  return (
    <View style={styles.buttonContainer}>
            <Text style={styles.button}>{props.text}</Text>
          </View>
  );
}
const styles =
  StyleSheet.create<Style>({
    button: {
      color: "#ffffff",
      fontWeight: "bold",
      fontSize: 14
    },
    buttonContainer: {
      backgroundColor: "rgb(29, 161, 242)",
      alignItems: "center",
      justifyContent: "center",
      height: 44,
      borderRadius: 44
    }
  });
export default MenuButton;