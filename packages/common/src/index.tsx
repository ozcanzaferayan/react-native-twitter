import React from "react";
import { Image, View, ViewStyle, StyleSheet } from 'react-native';
import IcBookmarks from "./icons/IcBookmarks";
import IcDiscover from './icons/IcDiscover';
import IcHome from './icons/IcHome';
import IcLists from "./icons/IcLists";
import IcMessages from "./icons/IcMessages";
import IcMore from "./icons/IcMore";
import IcNotifications from './icons/IcNotifications';
import IcTwitter from "./icons/IcTwitter";
import MenuButton from "./MenuButton";
import MenuIconText from "./MenuIconText";
import MenuProfile from "./MenuProfile";
import MenuLogo from "./MenuLogo";
import MenuListItem from "./MenuListItem";

interface PropsApp {
  text: String;
}

interface Style {
  container: ViewStyle;
  containerMenuItems: ViewStyle;
}

export const App: React.FC<PropsApp> = props => {
  const uri = 'https://tr.gravatar.com/userimage/35267385/d63195914ffdf306f9e955ec8064832f.jpeg';
   return (
    <View style={styles.container}>
      <View style={styles.containerMenuItems}>
          <MenuListItem><MenuLogo Icon={IcTwitter} /></MenuListItem>
          <MenuListItem><MenuIconText text="Anasayfa" Icon={IcHome}/></MenuListItem>
          <MenuListItem><MenuIconText text="Keşfet" Icon={IcDiscover}/></MenuListItem>
          <MenuListItem><MenuIconText text="Bildirimler" Icon={IcNotifications} /></MenuListItem>
          <MenuListItem><MenuIconText text="Mesajlar" Icon={IcMessages} /></MenuListItem>
          <MenuListItem><MenuIconText text="Yer İşaretleri" Icon={IcBookmarks} /></MenuListItem>
          <MenuListItem><MenuIconText text="Listeler" Icon={IcLists} /></MenuListItem>
          <MenuListItem><MenuProfile  text="Profil" uri={uri} /></MenuListItem>
          <MenuListItem><MenuIconText text="Daha fazla" Icon={IcMore}/></MenuListItem>
          <MenuListItem><MenuButton text="Tweetle"/></MenuListItem>
      </View>
    </View>
  );
};

const styles =
  StyleSheet.create<Style>({
    container: {
      backgroundColor: '#000',
      flex: 1,
    },
    containerMenuItems: {
      backgroundColor: "#111",
      flex: 1,
      width: 275,
      paddingStart: 18,
      paddingEnd: 18
    },
  });

export default App;
