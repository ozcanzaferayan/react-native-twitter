import { TrendingContainer } from './TrendingContainer';
import {
  ViewStyle,
  View,
  TextInput,
  Text,
  TextStyle,
  StyleSheet
} from "react-native";
import React from "react";
import spacing from "../../res/styles/spacing";
import IcHome from "../../res/icons/IcHome";
import I18n from "i18n-js";
import colors from "../../res/styles/colors";
import { SearchBar } from "./SearchBar";
import { WhoToFollowContainer } from './WhoToFollowContainer';

type Props = {
  // text: String;
};

interface Style {
  container: ViewStyle;
  text: TextStyle;
}



export const RightSectionContainer: React.FC<Props> = props => {
  const uri =
    "https://tr.gravatar.com/userimage/35267385/d63195914ffdf306f9e955ec8064832f.jpeg";
  return (
    <View style={styles.container}>
      <SearchBar/>
      <TrendingContainer />
      <WhoToFollowContainer />
    </View>
  );
};

const styles = StyleSheet.create<Style>({
  container: {
    marginLeft: 30,
    width: 350,
    padding: 5
  },

  text: {
    fontSize: spacing.textMenu,
    fontWeight: "bold",
    color: colors.text
  },
});

export default RightSectionContainer;
