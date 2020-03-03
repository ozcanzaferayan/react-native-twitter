import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import MenuContainer from "../../menu/_MenuContainer";
import spacing from "../../res/styles/spacing";
import colors from "../../res/styles/colors";
import I18n from "i18n-js";
import IcHome from "../../res/icons/IcHome";
import TweetBox from "../tweetBox/_TweetBox";
import Tweet from "../tweet/_Tweet";
import IcPopularTweets from "../../res/icons/IcPopularTweets";


type Props = {
    // text: String;
  }

  interface Style {
    containerFeed: ViewStyle;
  }

export const TweetContainer: React.FC<Props> = props => {
    return (
        <View style={styles.containerFeed}>
          <View style={{ height: 49, paddingRight: 14, paddingLeft: 14, alignItems:'center', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: spacing.hairline, borderColor: colors.hairline, }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.text }}>{I18n.t('menu.home')}</Text>
            <IcPopularTweets fill={colors.primary} width={spacing.iconSettings} height={spacing.iconSettings}/>
          </View>
          <View style={{ paddingTop: 9, paddingHorizontal:14, borderBottomWidth: 9, borderColor: colors.hairline }}>
            <TweetBox />
          </View>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
        </View>
    );
  };
  export default TweetContainer;

  const styles =
  StyleSheet.create<Style>({
    containerFeed: {
      borderRightWidth: 1,
      borderLeftWidth: 1,
      borderColor: 'rgb(47, 51, 54)',
      maxWidth: 600,
      width: '100%'
    },
  });