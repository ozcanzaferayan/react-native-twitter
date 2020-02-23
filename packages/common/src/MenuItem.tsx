import React, { useState } from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";

interface MenuItemProps {
  text: String;
  iconSrc: String;
  isFillable: Boolean;
}

export const MenuItem: React.FC<MenuItemProps> = props => {
  const colorBackgroundNormal = "rgba(29, 161, 249, 0)";
  const colorBackgroundHover = "rgba(29, 161, 249, 0.1)";
  const colorBackgroundPress = "rgba(29, 161, 249, 0.2)";
  const colorNormal = "rgba(217,217,217,1.00)";
  const colorHover = "rgba(29,161,242,1.00)";
  const [color, setColor] = useState(colorNormal);
  const [colorBackground, setBackgroundColor] = useState(colorBackgroundNormal);
  return (
    <View style={{ paddingTop: 4, paddingBottom: 4 }}>
      <TouchableHighlight
        underlayColor={colorBackgroundPress}
        style={{
          backgroundColor: colorBackground,
          borderRadius: 9999,
          padding: 9
        }}
        onPress={() => console.log(`TODO: Navigate to ${props.text}`)}
        onMouseEnter={() => {
          setColor(colorHover);
          setBackgroundColor(colorBackgroundHover);
        }}
        onMouseLeave={() => {
          setColor(colorNormal);
          setBackgroundColor(colorBackgroundNormal);
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Image
            resizeMode="contain"
            style={{
              height: 25,
              width: 25,
              borderRadius: 25
            }}
            source={{
              uri: props.iconSrc.replace("{{color}}", color)
            }}
          />
          <Text
            style={{
              fontSize: 18,
              marginStart: 5,
              marginEnd: 5,
              fontWeight: "bold",
              paddingStart: 10,
              color: color
            }}
          >
            {props.text}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
