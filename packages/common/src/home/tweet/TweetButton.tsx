import React from "react";
import spacing from "../../res/styles/spacing";
import colors from "../../res/styles/colors";
import IcHome from "../../res/icons/IcHome";
import { View, Text } from "react-native";
import { tsPropertySignature } from "@babel/types";


type Props = {
  text?: String;
}

export const PostButton: React.FC<Props> = (props) => {
  return (
    <View style={{flexDirection: 'row', marginEnd: 75, alignItems:'center'}}>
    <IcHome fill={colors.textFaded} width={spacing.iconTweet} height={spacing.icon} style={{ marginRight: 12}} />
    <Text style={{color: colors.textFaded, fontSize: 16}}>{props.text}</Text>
    </View>
  );
}

export default PostButton;