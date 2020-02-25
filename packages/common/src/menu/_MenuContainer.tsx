import React from "react";
import { View, Platform, ViewStyle, StyleSheet } from "react-native";
import MenuItem from "./MenuItem";
import MenuLogo from "./MenuLogo";
import IcTwitter from "../res/icons/IcTwitter";
import MenuIconText from "./MenuIconText";
import IcHome from "../res/icons/IcHome";
import IcDiscover from "../res/icons/IcDiscover";
import IcNotifications from "../res/icons/IcNotifications";
import IcMessages from "../res/icons/IcMessages";
import IcBookmarks from "../res/icons/IcBookmarks";
import IcLists from "../res/icons/IcLists";
import MenuProfile from "./MenuProfile";
import IcMore from "../res/icons/IcMore";
import MenuButton from "./MenuButton";
import I18n from '../utils/i18n';

interface Props {
}
  
  interface Style {
    container: ViewStyle;
  }
  
  export const MenuContainer: React.FC<Props> = props => {
    const uri = 'https://tr.gravatar.com/userimage/35267385/d63195914ffdf306f9e955ec8064832f.jpeg';
     return (
        // @ts-ignore 
        <View style={styles.container}
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
        </View>
    );
  };
  
  const styles =
    StyleSheet.create<Style>({

      container: {
        width: 275,
        paddingStart: 18,
        paddingEnd: 18
      },
    });
  
  export default MenuContainer;
  