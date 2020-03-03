import React from "react";
import {
  Image,
  View,
  ViewStyle,
  StyleSheet,
  Text,
  Platform,
  TextInput,
  TextStyle,
  FlexStyle,
  AppRegistry,
  ScrollView
} from "react-native";
import IcBookmarks from "./res/icons/IcBookmarks";
import IcDiscover from "./res/icons/IcDiscover";
import IcLists from "./res/icons/IcLists";
import IcMessages from "./res/icons/IcMessages";
import IcMore from "./res/icons/IcMore";
import IcNotifications from "./res/icons/IcNotifications";
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
import TweetBox from "./containers/_1_home/tweetBox/_TweetBox";
import ProfileImage from "./components/ProfileImage";
import Tweet from "./containers/_1_home/tweet/_Tweet";
import TweetContainer from "./containers/_1_home/tweetContainer/TweetContainer";
import RightSectionContainer from "./containers/_1_home/rightSectionContainer/RightSectionContainer";
import { Router, Link, Route } from "./Router/index";
import { Routes } from "./Routes";

export const Home = () => <Text>Home</Text>;

export const About = () => <Text>About</Text>;

export const App: React.FC = props => (
  // <Routes/>
  <ScrollView>
    <View style={styles.container}>
      <MenuContainer />
      <TweetContainer />
      <RightSectionContainer />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    // paddingTop: 25,
    // padding: 10,
    flexDirection: "row",
    justifyContent: 'center'
  },
});

export default App;
