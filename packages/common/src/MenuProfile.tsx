import React from 'react';
import {Text, View, StyleSheet, TextStyle, ViewStyle, Image} from 'react-native';

interface Style {
  text: TextStyle;
  container: ViewStyle;
}

type Props = {
  text: string;
  color?: string;
  uri: string;
}

interface StyleProps {
  color: string;
}

const MenuProfile: React.FC<Props> = props => {
  const color = props.color == null ? '#ffffff' : props.color;
  const styles = customStyles({ color: color});
  return (
    <View style={styles.container}>
    <Image source={{uri: props.uri}} style={{width:24, height:24, borderRadius: 24}} />
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
      fontSize: 18,
      marginStart: 5,
      marginEnd: 5,
      fontWeight: "bold",
      paddingStart: 10,
      color: props.color
    },
  });
export default MenuProfile;