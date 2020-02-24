import React, {useState} from 'react';
import {Text, View, StyleSheet, TextStyle, ViewStyle, TouchableHighlight, Platform} from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface Style {
  touchableHighlight: ViewStyle;
}

type Props = {
  children: React.ReactElement;
}

interface StyleProps {
  color: string;
  colorBackground: string;
}

const MenuListItem: React.FC<Props> = props => {
  const colorBackgroundNormal = "rgba(29, 161, 249, 0)";
  const colorBackgroundHover = "rgba(29, 161, 249, 0.1)";
  const colorBackgroundPress = "rgba(29, 161, 249, 0.2)";
  const colorTextNormal = "rgba(217,217,217,1.00)";
  const colorTextHover = "rgba(29,161,242,1.00)";
  const [color, setColor] = useState(colorTextNormal);
  const [colorBackground, setBackgroundColor] = useState(colorBackgroundNormal);
  let styles = customStyles({ color: color, colorBackground: colorBackground });
  return (
<TouchableHighlight
      underlayColor={colorBackgroundPress}
      style={styles.touchableHighlight}
      onPress={() => console.log(`TODO: Navigate`)}
      // onPress={() => console.log(`TODO: Navigate to ${props.text}`)}
      {...Platform.select({
        web: {
          onMouseEnter: () => {
            setColor(colorTextHover);
            setBackgroundColor(colorBackgroundHover);
          },
          onMouseLeave: () => {
            setColor(colorTextNormal);
            setBackgroundColor(colorBackgroundNormal);
          }
        }
      })}
    >
      {React.cloneElement(props.children, { color: color })}
    </TouchableHighlight>
  );
}
const customStyles = (props: StyleProps) =>
  StyleSheet.create<Style>({
    touchableHighlight: {
      backgroundColor: props.colorBackground,
      borderRadius: 9999,
      padding: 9,
      marginBottom: 4,
    },
  });
export default MenuListItem;