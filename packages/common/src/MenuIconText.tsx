import React from 'react';
import {Text, View, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface Style {
  text: TextStyle;
  container: ViewStyle;
}

type Props = {
  text: string;
  Icon: React.FC<SvgProps>;
  color?: string;
}

interface StyleProps {
  color: string;
}

const MenuIconText: React.FC<Props> = props => {
  const Icon = props.Icon;
  const color = props.color == null ? '#ffffff' : props.color;

  const styles = customStyles({ color: color});
  return (
    <View style={styles.container}>
    <Icon fill={color} width={24} height={24} />
    <Text style={styles.text}>{props.text}</Text>
  </View>
  );
}
const customStyles = (props: StyleProps) =>
  StyleSheet.create<Style>({
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    text: {
      fontSize: 18,
      marginStart: 5,
      marginEnd: 5,
      fontWeight: "bold",
      paddingStart: 10,
      color: props.color,

    },
  });
export default MenuIconText;