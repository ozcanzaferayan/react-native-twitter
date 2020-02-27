import { View, TextInput, Image, Platform } from "react-native";
import React from "react";
import I18n from "i18n-js";
import spacing from "../../res/styles/spacing";
import colors from "../../res/styles/colors";
import IcHome from "../../res/icons/IcHome";
import MenuButton from "../../menu/MenuButton";
import ProfileImage from "../../components/ProfileImage";
import IcPhoto from "../../res/icons/IcPhoto";
import IcGif from "../../res/icons/IcGif";
import IcSurvey from "../../res/icons/IcSurvey";
import IcEmoji from "../../res/icons/IcEmoji";
import IcOthers from "../../res/icons/IcOthers";


interface Props {
    // text: String;
}

export const TweetBox: React.FC<Props> = props => {
  const uri = 'https://tr.gravatar.com/userimage/35267385/d63195914ffdf306f9e955ec8064832f.jpeg';
    return (
        <View style={{ flexDirection: 'row' }}>
        <ProfileImage style={{marginHorizontal: 5}}/>
        <View style={{ marginStart: 5, flex: 1 }}>
            <TextInput placeholder={I18n.t('home.whatsHappening')} multiline={true} numberOfLines={2} style={{ fontSize: spacing.textMenu, fontWeight: 'normal', color: colors.text,  paddingVertical: 9 }} />
            <View style={{ flexDirection: 'row', marginTop: 18, justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{width:35, height:35, borderWidth:1, justifyContent: 'center', alignItems:'center'}}><IcPhoto fill={colors.primary} width={spacing.iconTweetBox} height={spacing.iconTweetBox}/></View>
                    <View style={{width:35, height:35, borderWidth:1, justifyContent: 'center', alignItems:'center'}}><IcGif fill={colors.primary} width={spacing.iconTweetBox} height={spacing.iconTweetBox}/></View>
                    <View style={{width:35, height:35, borderWidth:1, justifyContent: 'center', alignItems:'center'}}><IcSurvey fill={colors.primary} width={spacing.iconTweetBox} height={spacing.iconTweetBox}/></View>
                    <View style={{width:35, height:35, borderWidth:1, justifyContent: 'center', alignItems:'center'}}><IcEmoji fill={colors.primary} width={spacing.iconTweetBox} height={spacing.iconTweetBox}/></View>
                    <View style={{width:35, height:35, borderWidth:1, justifyContent: 'center', alignItems:'center'}}><IcOthers fill={colors.primary} width={spacing.iconTweetBox} height={spacing.iconTweetBox}/></View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <IcHome fill={colors.primary} width={spacing.icon} height={spacing.icon} style={{ marginEnd: 18 }} />

                    <View style={{ height: 35, borderColor: colors.hairline, borderLeftWidth: spacing.hairline, marginEnd: 18 }}></View>
                    <IcHome fill={colors.primary} width={spacing.icon} height={spacing.icon} style={{ marginEnd: 18 }} />
                    <MenuButton text={I18n.t('menu.tweet')} />
                </View>
            </View>
        </View>
        </View>
    );
}

export default TweetBox;