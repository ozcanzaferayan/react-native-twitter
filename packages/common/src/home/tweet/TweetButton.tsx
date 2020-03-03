import React from "react";
import spacing from "../../res/styles/spacing";
import colors from "../../res/styles/colors";
import IcHome from "../../res/icons/IcHome";
import { View, Text } from "react-native";
import { tsPropertySignature } from "@babel/types";
import { SvgProps } from "react-native-svg";


type Props = {
  text?: String;
  icon: React.FC<SvgProps>;
}

export const PostButton: React.FC<Props> = (props) => {
  const Icon = props.icon;
  return (
    <View style={{flexDirection: 'row', marginEnd: 75, alignItems:'center'}}>
    <Icon fill={colors.textFaded} width={spacing.iconTweetAction} height={spacing.icon} style={{ marginRight: 12}} />
    <Text style={{color: colors.textFaded, fontSize: 16}}>{props.text}</Text>
    </View>
  );
}

export default PostButton;