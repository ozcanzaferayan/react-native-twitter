import { View, TextInput, Image, Platform, NativeSyntheticEvent, TextInputChangeEventData, Text } from "react-native";
import React, { useState } from "react";
import I18n from "i18n-js";
import spacing from "../../../res/styles/spacing";
import colors from "../../../res/styles/colors";
import IcHome from "../../../res/icons/IcHome";
import MenuButton from "../../../menu/MenuButton";
import ProfileImage from "../../../components/ProfileImage";
import IcPhoto from "../../../res/icons/IcPhoto";
import IcGif from "../../../res/icons/IcGif";
import IcSurvey from "../../../res/icons/IcSurvey";
import IcEmoji from "../../../res/icons/IcEmoji";
import IcOthers from "../../../res/icons/IcOthers";
import IcTweetEditPogressBar from "../../../res/icons/IcTweetEditPogressBar";
import IcTweetAppend from "../../../res/icons/IcTweetAppend";
import TweetButton from "./TweetButton";


interface Props {
    // text: String;
}

export const TweetBox: React.FC<Props> = props => {
    const maxRowCount = 29;
    const minRowCount = 1;
    const textareaLineHeight =  25;
    const initCircleRadius = 9;
    const [currText, setCurrText] = useState("");
    const [scrollHeight, setScrollHeight] = useState(0);
    const [circleRadius, setCircleRadius] = useState(initCircleRadius);
    const characterLimit = 280;
    const characterRemainWarning = 20;
    const [characterRemaining, setCharacterRemain] = useState(characterRemainWarning);
    const [isCharacterRemainingVisible, setCharacterRemainVisible] = useState(false);
    const [strokeDasharray, setStrokeDashArray] = useState(2 * Math.PI * circleRadius);
    const [strokeDashoffset, setCircle] = useState(strokeDasharray - (strokeDasharray * (currText.length / characterLimit)));
    const [rowCount, setRowCount] = useState(minRowCount);



    // Similiar behavior: https://codepen.io/JaKto/pen/qeBpZM?
    const handleChange = (e:any) => {
        let currText = e.target.value;
        let remainLetterCount = characterLimit - currText.length;
        if (remainLetterCount <= 20) {
            setCharacterRemainVisible(true);
            setCharacterRemain(remainLetterCount);
            setCircleRadius(14);
            setStrokeDashArray(2 * Math.PI * 14);
        } else {
            setCharacterRemainVisible(false);
            setCharacterRemain(remainLetterCount);
            setCircleRadius(initCircleRadius);
            setStrokeDashArray(2 * Math.PI * initCircleRadius);
        }
        setCurrText(currText);
        setScrollHeight(e.target.scrollHeight);
        setCircle(strokeDasharray - (strokeDasharray * (currText.length / characterLimit)));
    }
    const handleKeyPress = (e:any) => {
        if (e.which != 8) return; // !backspace
        if (currText === '') return;
        const rowCount = e.target.value.split('\n').length;
        if (rowCount === maxRowCount) return;
        setScrollHeight(rowCount * textareaLineHeight);
    }

    return (
        <View style={{ flexDirection: 'row' }}>
        <ProfileImage style={{marginHorizontal: 5}}/>
        <View style={{ marginStart: 5, marginEnd: 5, marginBottom: 9, flex: 1 }}>
            <TextInput
            placeholder={I18n.t('home.whatsHappening')}
            multiline={true}
            // onChangeText={(text) => handleChangeText(text)}
            onChange={(e) => handleChange(e)}
            onKeyPress={(e) => handleKeyPress(e)}
            numberOfLines={rowCount}
            style={{ fontSize: spacing.textMenu, fontWeight: 'normal', lineHeight: textareaLineHeight, color: colors.text,  paddingVertical: 9, height: scrollHeight === 0 ? 'inherit' : scrollHeight }} />
            <View style={{ flexDirection: 'row', marginTop: 18, justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{width:35, height:35, borderWidth:1, justifyContent: 'center', alignItems:'center'}}><IcPhoto fill={colors.primary} width={spacing.iconTweetBox} height={spacing.iconTweetBox}/></View>
                    <View style={{width:35, height:35, borderWidth:1, justifyContent: 'center', alignItems:'center'}}><IcGif fill={colors.primary} width={spacing.iconTweetBox} height={spacing.iconTweetBox}/></View>
                    <View style={{width:35, height:35, borderWidth:1, justifyContent: 'center', alignItems:'center'}}><IcSurvey fill={colors.primary} width={spacing.iconTweetBox} height={spacing.iconTweetBox}/></View>
                    <View style={{width:35, height:35, borderWidth:1, justifyContent: 'center', alignItems:'center'}}><IcEmoji fill={colors.primary} width={spacing.iconTweetBox} height={spacing.iconTweetBox}/></View>
                    <View style={{width:35, height:35, borderWidth:1, justifyContent: 'center', alignItems:'center'}}><IcOthers fill={colors.primary} width={spacing.iconTweetBox} height={spacing.iconTweetBox}/></View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{justifyContent: 'center', alignItems:'center', flex: 1, flexDirection: 'row', marginEnd: 18}}>
                        <IcTweetEditPogressBar
                        passiveStrokeColor={characterRemaining <= -10 ? colors.background : colors.hairline}
                        fill={
                            characterRemaining <= -10 ? colors.background :
                            characterRemaining <= 0 ? colors.danger :
                            isCharacterRemainingVisible ? colors.warning : colors.primary} width={spacing.icon} height={spacing.icon} style={{ overflow: 'visible', transform:[{ rotateZ: '-90deg'}]}} strokeoffset={strokeDashoffset} r={circleRadius} strokearray={strokeDasharray} />
                        <Text style={{textAlign:'center', fontSize: 13, color: characterRemaining <= 0 ? colors.danger : colors.characterRemaining, position: 'absolute', display: isCharacterRemainingVisible ? 'flex' : 'none'}}>{characterRemaining}</Text>
                    </View>
                    <View style={{ height: 35, borderColor: colors.hairline, borderLeftWidth: spacing.hairline, marginEnd: 18 }}></View>
                    <View style={{borderRadius: spacing.radius, borderWidth: 1, borderColor: colors.primary, width: 28, height: 28, justifyContent: 'center', alignItems: 'center', marginEnd: 18}}>
                    <IcTweetAppend fill={colors.primary} width={spacing.iconTweetAppend} height={spacing.iconTweetAppend} />
                    </View>
                    <TweetButton text={I18n.t('menu.tweet')} />
                </View>
            </View>
        </View>
        </View>
    );
}

export default TweetBox;