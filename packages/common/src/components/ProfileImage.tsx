import { View, TextInput, Image } from "react-native";
import React from "react";


interface Props {
    // text: String;
}

export const ProfileImage: React.FC<Props> = props => {
  const uri = 'https://tr.gravatar.com/userimage/35267385/d63195914ffdf306f9e955ec8064832f.jpeg';
    return (
        <Image source={{ uri: uri }} style={{ width: 48, height: 48, borderRadius: 48 }} />
    );
}

export default ProfileImage;