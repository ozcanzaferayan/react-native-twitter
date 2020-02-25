import { ViewStyle, View, TextInput, Text, TextStyle, StyleSheet } from "react-native";
import React from "react";
import spacing from "../../res/styles/spacing";
import IcHome from "../../res/icons/IcHome";
import I18n from "i18n-js";
import colors from "../../res/styles/colors";


type Props = {
  // text: String;
}

interface Style {
  container: ViewStyle;
  text: TextStyle;
  trendingTitleText: TextStyle;
}

export const RightSectionContainer: React.FC<Props> = props => {
  const uri = 'https://tr.gravatar.com/userimage/35267385/d63195914ffdf306f9e955ec8064832f.jpeg';
  return (
  <View style={styles.container}>
        <View style={{ flexDirection:'row', marginBottom:9, alignItems:'center', backgroundColor: '#202327', borderRadius: spacing.radius}}>
          <IcHome width={spacing.iconSearch} height={spacing.iconSearch} fill='#6e767d' style={{marginLeft: 13}}/>
          <View style={{padding: 10}}>
          <TextInput style={{color: '#d9d9d9'}}  placeholder={I18n.t('home.searchOnTwitter')}/>
          </View>
        </View>
        <View style={{ marginBottom:9, backgroundColor: 'rgb(21, 24, 28)', borderRadius: 14}}>
          <View style={{ flexDirection:'row', paddingStart: 14, paddingEnd: 14, paddingTop: 9, paddingBottom: 9, borderBottomWidth: spacing.hairline, borderColor: colors.hairline,justifyContent: 'space-between' }}>
            <Text style={styles.text}>{I18n.t('home.trendsForYou')}</Text>
            <IcHome width={spacing.iconSettings} height={spacing.iconSettings} fill='#6e767d' style={{marginLeft: 13}}/>
          </View>
          <View style={{ paddingStart: 14, paddingEnd: 14, paddingTop: 9, paddingBottom: 9, borderBottomWidth: spacing.hairline, borderColor: colors.hairline,justifyContent: 'space-between' }}>
            <View style={{flexDirection:'row', alignItems: 'center', justifyContent:'space-between', flex:1}}>
              <Text style={{fontSize: 12, color:'rgb(110, 118, 125)'}}>{I18n.t('home.trendingOn', {place: 'Türkiye'})}</Text>
              <IcHome width={spacing.iconTrendingCaret} height={spacing.iconTrendingCaret} fill='rgb(110, 118, 125)' style={{marginLeft: 13}}/>
            </View>
            <Text style={styles.trendingTitleText}>#COVID-19</Text>
            <View style={{flexDirection:'row', alignItems: 'center', justifyContent:'space-between', flex:1, marginTop: 2}}>
              <Text style={{fontSize: 14, color:'rgb(110, 118, 125)'}}>45 B Tweet</Text>
            </View>
          </View>
          <View style={{ flexDirection:'row', marginStart: 14, marginEnd: 14, marginTop: 9, marginBottom: 9, justifyContent: 'space-between' }}>
            <Text style={{fontSize: 14, color: colors.primary}}>{I18n.t('home.showMore')}</Text>
            <IcHome width={spacing.iconSettings} height={spacing.iconSettings} fill='rgb(110, 118, 125)' style={{marginLeft: 13}}/>
          </View>
        </View>
      </View>
  )};

  const styles =
  StyleSheet.create<Style>({
    container: {
      marginLeft: 30,
      width: 350,
      padding:5
    },

    text: {
      fontSize: spacing.textMenu,
      fontWeight: "bold",
      color: colors.text,
    },
    trendingTitleText: {
      marginTop: 2,
      fontSize: 14,
      fontWeight: "bold",
      color: colors.text,
    }
  });

  export default RightSectionContainer;