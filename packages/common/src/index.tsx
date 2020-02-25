import React from "react";
import { Image, View, ViewStyle, StyleSheet, Text, Platform, TextInput, TextStyle, FlexStyle } from 'react-native';
import IcBookmarks from "./res/icons/IcBookmarks";
import IcDiscover from './res/icons/IcDiscover';
import IcLists from "./res/icons/IcLists";
import IcMessages from "./res/icons/IcMessages";
import IcMore from "./res/icons/IcMore";
import IcNotifications from './res/icons/IcNotifications';
import IcTwitter from "./res/icons/IcTwitter";
import MenuButton from "./menu/MenuButton";
import MenuIconText from "./menu/MenuIconText";
import MenuProfile from "./menu/MenuProfile";
import MenuLogo from "./menu/MenuLogo";
import MenuItem from "./menu/MenuItem";
import MenuContainer from "./menu/_MenuContainer";
import IcHome from "./res/icons/IcHome";
import colors from "./res/styles/colors";
import spacing from "./res/styles/spacing";
import I18n from "i18n-js";
import TweetBox from "./home/tweetBox/_TweetBox";
import ProfileImage from "./components/ProfileImage";
import Tweet from "./home/tweet/_Tweet";
import TweetContainer from "./home/tweetContainer/TweetContainer";
import RightSectionContainer from "./home/rightSectionContainer/RightSectionContainer";

type Props = {
  text: String;
}

interface Style {
  container: ViewStyle;
}

export const App: React.FC<Props> = props => {
  const uri = 'https://tr.gravatar.com/userimage/35267385/d63195914ffdf306f9e955ec8064832f.jpeg';
  return (
    <View style={styles.container}>
      <MenuContainer/>
      <TweetContainer/>
      <RightSectionContainer/>
    </View>
  );
};

const styles =
  StyleSheet.create<Style>({
    // @ts-ignore
    container: {
      backgroundColor: '#000',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      ...Platform.select({
        web: {
          overflow: 'auto',
        },
        default: {
          overflow: 'scroll',
        },
      }),
    }
  });

export default App;
