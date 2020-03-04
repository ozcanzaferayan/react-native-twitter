import React from 'react';
import {Text, View, StyleSheet, TextStyle, ViewStyle, Image, ImageStyle} from 'react-native';
import spacing from '../res/styles/spacing';
import colors from '../res/styles/colors';

interface Style {
  text: TextStyle;
  container: ViewStyle;
  image: ImageStyle;
}

type Props = {
  text: string;
  color?: string;
  uri: string;
  match?: boolean;
}

interface StyleProps {
  color: string;
  borderWidth: number;
}

const MenuProfile: React.FC<Props> = props => {
  const color =
    props.match ? colors.primary
    : props.color == null ? '#ffffff'
    : props.color;
  const styles = customStyles({ color: color, borderWidth: props.match ? 3 : 0});
  return (
    <View style={styles.container}>
    <Image source={{uri: props.uri}} style={styles.image} />
    <Text style={styles.text}>{props.text}</Text>
  </View>
  );
}
const customStyles = (props: StyleProps) =>
  StyleSheet.create<Style>({
    container: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1
    },
    text: {
      fontSize: spacing.textMenu,
      marginStart: 5,
      marginEnd: 5,
      fontWeight: "bold",
      paddingStart: 10,
      color: props.color
    },
    image: {
      width:spacing.icon,
      height:spacing.icon,
      borderRadius: spacing.radius,
      borderWidth: props.borderWidth,
      borderColor: colors.primary,
    }
  });
export default MenuProfile;