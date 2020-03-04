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
import spacing from "../../../res/styles/spacing";
import IcHome from "../../../res/icons/IcHome";
import I18n from "i18n-js";
import colors from "../../../res/styles/colors";
import { SearchBar } from "./SearchBar";
import { WhoToFollowContainer } from './WhoToFollowContainer';

type Props = {
  showTrending?: boolean;
}

interface Style {
  container: ViewStyle;
  text: TextStyle;
}

interface StyleProps {
  // isMainSection: boolean;
}



export const RightSectionContainer: React.FC<Props> = props => {
  const styles = customStyles({});
  return (
    <View style={styles.container}>
      <SearchBar />
      {
        props.showTrending &&
        <TrendingContainer/>
      }
      <WhoToFollowContainer />
    </View>
  );
};

const customStyles = (props: StyleProps) =>
StyleSheet.create<Style>({
  container: {
    marginLeft: 30,
    width: 350,
    padding: 5,
    paddingTop: 9,
  },

  text: {
    fontSize: spacing.textMenu,
    fontWeight: "bold",
    color: colors.text
  },
});

export default RightSectionContainer;
