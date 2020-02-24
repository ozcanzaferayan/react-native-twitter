import React, { useState, FunctionComponent } from "react";
import {
  Image,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  TextStyle,
  ViewStyle,
  Platform,
  ImageStyle
} from "react-native";

export enum MenuItemType {
  Logo = 1,
  Item,
  Profile,
  Button
}

type MenuItemProps = {
  text?: String;
  Icon?: React.FC<SvgProps>;
  uri?: string;
  type?: MenuItemType;
};
export const MenuItem: React.FC<MenuItemProps> = props => {
  const colorBackgroundNormal = "rgba(29, 161, 249, 0)";
  const colorBackgroundHover = "rgba(29, 161, 249, 0.1)";
  const colorBackgroundPress = "rgba(29, 161, 249, 0.2)";
  const colorTextNormal = "rgba(217,217,217,1.00)";
  const colorTextHover = "rgba(29,161,242,1.00)";
  const [color, setColor] = useState(colorTextNormal);
  const [colorBackground, setBackgroundColor] = useState(colorBackgroundNormal);
  let styles = customStyles({ color: color, colorBackground: colorBackground });
  const Icon = (props.type == MenuItemType.Item ||
  props.type == MenuItemType.Logo
    ? props.Icon
    : Image) as React.ElementType;

  let component = null;
  switch (props.type) {
    case MenuItemType.Logo:
      component = <Icon fill={color} width={26} height={26} />;
      break;
    case MenuItemType.Button:
      component = (
        <>
          <View style={styles.buttonContainer}>
            <Text style={styles.button}>Tweetle</Text>
          </View>
        </>
      );
      break;
    case MenuItemType.Profile:
      component = (
        <>
          <Icon source={{ uri: props.uri }} style={styles.profileImage} />
          <Text style={styles.text}>{props.text}</Text>
        </>
      );
      break;
    default:
      component = (
        <>
          <Icon fill={color} width={24} height={24} />
          <Text style={styles.text}>{props.text}</Text>
        </>
      );
  }
  return (
    <TouchableHighlight
      underlayColor={colorBackgroundPress}
      style={styles.touchableHighlight}
      onPress={() => console.log(`TODO: Navigate to ${props.text}`)}
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
      <View style={styles.touchableHighlightChildrenContainer}>
        {component}
      </View>
    </TouchableHighlight>
  );
};

interface Style {
  text: TextStyle;
  container: ViewStyle;
  touchableHighlight: ViewStyle;
  touchableHighlightChildrenContainer: ViewStyle;
  profileImage: ImageStyle;
  button: TextStyle;
  buttonContainer: ViewStyle;
}

interface StyleProps {
  color: string;
  colorBackground: string;
}

const customStyles = (props: StyleProps) =>
  StyleSheet.create<Style>({
    container: {
      paddingTop: 4,
      paddingBottom: 4
    },
    touchableHighlight: {
      backgroundColor: props.colorBackground,
      borderRadius: 9999,
      padding: 9,
      marginBottom: 4
    },
    touchableHighlightChildrenContainer: {
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
    profileImage: {
      width: 24,
      height: 24,
      borderRadius: 24
    },
    button: {
      color: "#ffffff",
      fontWeight: "bold",
      fontSize: 14
    },
    buttonContainer: {
      backgroundColor: "rgb(29, 161, 242)",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      height: 44,
      borderRadius: 44
    }
  });
export default MenuItem;
