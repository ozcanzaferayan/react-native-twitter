import { View, TextInput, Image, Text } from "react-native";
import React from "react";
import I18n from "i18n-js";
import spacing from "../../res/styles/spacing";
import colors from "../../res/styles/colors";
import IcHome from "../../res/icons/IcHome";
import MenuButton from "../../menu/MenuButton";
import ProfileImage from "../../components/ProfileImage";
import TweetButton from "./TweetButton";
import IcCaret from "../../res/icons/IcCaret";


interface Props {
    // text: String;
}

export const Tweet: React.FC<Props> = props => {
  const uri = 'https://tr.gravatar.com/userimage/35267385/d63195914ffdf306f9e955ec8064832f.jpeg';
    return (
        <View style={{paddingHorizontal: 14, borderBottomWidth: spacing.hairline, borderColor: colors.hairline }}>
          <View style={{minHeight: 9}}></View>
          <View style={{flexDirection:'row'}} >
          <ProfileImage style={{marginHorizontal: 5}}/>
          <View style={{marginHorizontal: 5, flex: 1 }}>
            <View style={{justifyContent:'space-between', flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color:colors.text}}>Zafer AYAN <Text style={{fontWeight: 'normal', fontSize: 14, color:colors.textFaded}}>@ZaferAyan · 5d</Text></Text>

            <IcCaret fill={colors.textFaded} width={spacing.iconCaret} height={spacing.iconCaret}/>
            </View>

            <Text style={{fontSize: 14, color: colors.text, marginTop: 2}}>Yeni bir blog yazısı hazırladım. TypeScript Nedir? </Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 7, flex: 1}}>
              <TweetButton text="3"/>
              <TweetButton text="9"/>
              <TweetButton text="135"/>
              <TweetButton/>
            </View>
          </View>
        </View>
        <View style={{minHeight: 9}}></View>
      </View>
    );
}

export default Tweet;