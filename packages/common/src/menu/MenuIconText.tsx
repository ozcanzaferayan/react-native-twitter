import React from 'react';
import {Text, View, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import Svg, { Path, SvgProps } from 'react-native-svg';
import spacing from '../res/styles/spacing';
import colors from '../res/styles/colors';

interface Style {
  text: TextStyle;
  container: ViewStyle;
}

type Props = {
  text: string;
  Icon: React.FC<SvgProps>;
  color?: string;
  match?: boolean;
}

interface StyleProps {
  color: string;
}

const MenuIconText: React.FC<Props> = props => {
  const Icon = props.Icon;
  const color = props.match ? colors.primary :
  props.color == null ? colors.text : props.color;


  const styles = customStyles({ color: color});
  return (
    <View style={styles.container}>
    <Icon fill={color} width={spacing.icon} height={spacing.icon} />
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
      fontSize: spacing.textMenu,
      marginStart: 5,
      marginEnd: 5,
      fontWeight: "bold",
      paddingStart: 10,
      color: props.color,

    },
  });
export default MenuIconText;