import { ViewStyle, View, Text } from "react-native";
import React from "react";

type Props = {
    text: String;
  }
  
  interface Style {
    container: ViewStyle;
  }
  
  export const OtherScreen: React.FC<Props> = props => {
    const uri = 'https://tr.gravatar.com/userimage/35267385/d63195914ffdf306f9e955ec8064832f.jpeg';
    return (
      <View>
        <Text>1111</Text>
      </View>
    );
  };
  
  
  export default OtherScreen;
  