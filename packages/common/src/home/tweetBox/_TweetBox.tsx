import { View, TextInput, Image } from "react-native";
import React from "react";
import I18n from "i18n-js";
import spacing from "../../res/styles/spacing";
import colors from "../../res/styles/colors";
import IcHome from "../../res/icons/IcHome";
import MenuButton from "../../menu/MenuButton";
import ProfileImage from "../../components/ProfileImage";


interface Props {
    // text: String;
}

export const TweetBox: React.FC<Props> = props => {
  const uri = 'https://tr.gravatar.com/userimage/35267385/d63195914ffdf306f9e955ec8064832f.jpeg';
    return (
        <View style={{ flexDirection: 'row' }}>
        <ProfileImage/>
        <View style={{ marginStart: 18, flex: 1 }}>
    {/*
    //@ts-ignore*/}
            <TextInput placeholder={I18n.t('home.whatsHappening')} multiline='true' numberOfLines={2} style={{ fontSize: spacing.textMenu, fontWeight: 'bold', outline: 'none', color: colors.text, width: '100%' }} />
            <View style={{ flexDirection: 'row', marginTop: 18, justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <IcHome fill={colors.primary} width={spacing.icon} height={spacing.icon} style={{ marginEnd: 18 }} />
                    <IcHome fill={colors.primary} width={spacing.icon} height={spacing.icon} style={{ marginEnd: 18 }} />
                    <IcHome fill={colors.primary} width={spacing.icon} height={spacing.icon} style={{ marginEnd: 18 }} />
                    <IcHome fill={colors.primary} width={spacing.icon} height={spacing.icon} style={{ marginEnd: 18 }} />
                    <IcHome fill={colors.primary} width={spacing.icon} height={spacing.icon} style={{ marginEnd: 18 }} />
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