import React from "react";
import { View, StyleSheet, Text } from "react-native";
import TweetContainer from "../_1_home/tweetContainer/TweetContainer";
import RightSectionContainer from "../_1_home/rightSectionContainer/RightSectionContainer";
import SearchBar from "../_1_home/rightSectionContainer/SearchBar";
import { TrendingContainer } from "../_1_home/rightSectionContainer/TrendingContainer";
import spacing from "../../res/styles/spacing";
import colors from "../../res/styles/colors";

export const DiscoverScreen: React.FC = props => (
  <>
    <View style={styles.container}>
      <SearchBar style={{marginHorizontal: spacing.iconCaret, marginTop: 9}}/>
      <View style={{
      borderBottomWidth: spacing.hairline,
      borderColor: colors.hairline,
      }}/>

      <TrendingContainer isMainSection />
    </View>
    <RightSectionContainer/>
  </>
);

const styles = StyleSheet.create({
  container: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "rgb(47, 51, 54)",
    width: "100%",
    maxWidth: 600
  }
});

export default DiscoverScreen;
