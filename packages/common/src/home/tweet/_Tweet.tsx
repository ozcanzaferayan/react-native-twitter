import { View, TextInput, Image, Text } from "react-native";
import React from "react";
import I18n from "i18n-js";
import spacing from "../../res/styles/spacing";
import colors from "../../res/styles/colors";
import IcHome from "../../res/icons/IcHome";
import MenuButton from "../../menu/MenuButton";
import ProfileImage from "../../components/ProfileImage";
import TweetButton from "./TweetButton";


interface Props {
    // text: String;
}

export const Tweet: React.FC<Props> = props => {
  const uri = 'https://tr.gravatar.com/userimage/35267385/d63195914ffdf306f9e955ec8064832f.jpeg';
    return (
        <View style={{flexDirection:'row', padding: 18, borderBottomWidth: spacing.hairline, borderColor: colors.hairline }}>
        <ProfileImage/>
        <View style={{marginStart: 18, flex: 1, }}>
          <View style={{justifyContent:'space-between', flexDirection: 'row'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color:colors.text}}>Zafer AYAN <Text style={{fontWeight: 'normal', fontSize: 14, color:colors.textFaded}}>@ZaferAyan · 5d</Text></Text>
          
          <IcHome fill={colors.textFaded} width={spacing.icon} height={spacing.iconTweet}/>
          </View>
          
          <Text style={{fontSize: 16, color: colors.text}}>Yeni bir blog yazısı hazırladım. TypeScript Nedir? </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 18, flex: 1}}>
            <TweetButton text="3"/>
            <TweetButton text="9"/>
            <TweetButton text="135"/>
            <TweetButton/>
          </View>
        </View>
      </View>
    );
}

export default Tweet;