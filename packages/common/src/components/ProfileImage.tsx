import { View, TextInput, Image, StyleProp, ViewStyle, ImageStyle } from "react-native";
import React from "react";


interface Props {
    style?: StyleProp<ImageStyle>
}

export const ProfileImage: React.FC<Props> = props => {
  const imageUri = 'https://tr.gravatar.com/userimage/35267385/d63195914ffdf306f9e955ec8064832f.jpeg';
    return (
        <View style={props.style}>
        <Image source={{ uri: imageUri }} style={{ width: 46, height: 46, borderRadius: 46}} />
        </View>
    );
}

export default ProfileImage;