import React from "react"
import { Router, Route } from './Router/index';
import { View, StyleSheet, ViewStyle, Platform } from "react-native";
import DiscoverScreen from "./containers/_2_discover/DiscoverScreen";
import NotificationsScreen from "./containers/_3_notifications/NotificationsScreen";
import MenuItem from "./menu/MenuItem";
import MenuLogo from "./menu/MenuLogo";
import MenuIconText from "./menu/MenuIconText";
import IcTwitter from "./res/icons/IcTwitter";
import I18n from './utils/i18n';
import IcHome from "./res/icons/IcHome";
import IcDiscover from "./res/icons/IcDiscover";
import IcNotifications from "./res/icons/IcNotifications";
import IcMessages from "./res/icons/IcMessages";
import IcBookmarks from "./res/icons/IcBookmarks";
import IcLists from "./res/icons/IcLists";
import MenuProfile from "./menu/MenuProfile";
import MenuButton from "./menu/MenuButton";
import IcMore from "./res/icons/IcMore";
import HomeScreen from "./containers/_1_home/HomeScreen";
import MessagesScreen from "./containers/_4_messages/MessagesScreen";
import BookmarksScreen from "./containers/_5_bookmarks/BookmarksScreen";
import ListsScreen from "./containers/_6_lists/ListsScreen";
import ProfileScreen from "./containers/_7_profile/ProfileScreen";
import {MyLink} from './menu/MyLink';

interface Style {
    container: ViewStyle;
  }

export const Routes = () => {
    const uri = 'https://tr.gravatar.com/userimage/35267385/d63195914ffdf306f9e955ec8064832f.jpeg';
    return (
        <Router>

            <View style={styles.container}
                {...Platform.select({
                web: {
                    accessibilityRole: 'banner'
                }
                })}
                >
                <MyLink to="/home"><MenuItem><MenuLogo Icon={IcTwitter} /></MenuItem></MyLink>
                <MyLink to="/home"><MenuItem><MenuIconText text={I18n.t('menu.home')} Icon={IcHome}/></MenuItem></MyLink>
                <MyLink to="/discover"><MenuItem><MenuIconText text={I18n.t('menu.discover')} Icon={IcDiscover}/></MenuItem></MyLink>
                <MyLink to="/notifications"><MenuItem><MenuIconText text={I18n.t('menu.notifications')} Icon={IcNotifications} /></MenuItem></MyLink>
                <MyLink to="/messages"><MenuItem><MenuIconText text={I18n.t('menu.messages')} Icon={IcMessages} /></MenuItem></MyLink>
                <MyLink to="/bookmarks"><MenuItem><MenuIconText text={I18n.t('menu.bookmarks')} Icon={IcBookmarks} /></MenuItem></MyLink>
                <MyLink to="/lists"><MenuItem><MenuIconText text={I18n.t('menu.lists')} Icon={IcLists} /></MenuItem></MyLink>
                <MyLink to="/profile"><MenuItem><MenuProfile  text={I18n.t('menu.profile')} uri={uri} /></MenuItem></MyLink>
                <MyLink to="/more"><MenuItem><MenuIconText text={I18n.t('menu.more')} Icon={IcMore}/></MenuItem></MyLink>
                <MyLink to="/tweet"><MenuItem><MenuButton text={I18n.t('menu.tweet')}/></MenuItem></MyLink>
            </View>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/home" component={HomeScreen} />
            <Route exact path="/discover" component={DiscoverScreen} />
            <Route exact path="/notifications" component={NotificationsScreen} />
            <Route exact path="/messages" component={MessagesScreen} />
            <Route exact path="/bookmarks" component={BookmarksScreen} />
            <Route exact path="/lists" component={ListsScreen} />
            <Route exact path="/profile" component={ProfileScreen} />
            <Route exact path="/more" component={ProfileScreen} />
            <Route exact path="/tweet" component={ProfileScreen} />
        </Router>
    )
}

const styles =
StyleSheet.create<Style>({

  container: {
    width: 275,
    paddingStart: 18,
    paddingEnd: 18,
  },
});


{/* <View style={styles.container}
{...Platform.select({
  web: {
    accessibilityRole: 'banner'
  }
})}
>
  <MenuItem><MenuLogo Icon={IcTwitter} /></MenuItem>
  <MenuItem><MenuIconText text={I18n.t('menu.home')} Icon={IcHome}/></MenuItem>
  <MenuItem><MenuIconText text={I18n.t('menu.discover')} Icon={IcDiscover}/></MenuItem>
  <MenuItem><MenuIconText text={I18n.t('menu.notifications')} Icon={IcNotifications} /></MenuItem>
  <MenuItem><MenuIconText text={I18n.t('menu.messages')} Icon={IcMessages} /></MenuItem>
  <MenuItem><MenuIconText text={I18n.t('menu.bookmarks')} Icon={IcBookmarks} /></MenuItem>
  <MenuItem><MenuIconText text={I18n.t('menu.lists')} Icon={IcLists} /></MenuItem>
  <MenuItem><MenuProfile  text={I18n.t('menu.profile')} uri={uri} /></MenuItem>
  <MenuItem><MenuIconText text={I18n.t('menu.more')} Icon={IcMore}/></MenuItem>
  <MenuItem><MenuButton text={I18n.t('menu.tweet')}/></MenuItem>
</View> */}