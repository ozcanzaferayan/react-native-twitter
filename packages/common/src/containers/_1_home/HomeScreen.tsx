import React from "react";
import { View, StyleSheet, Text } from "react-native";
import TweetContainer from "./tweetContainer/TweetContainer";
import RightSectionContainer from "./rightSectionContainer/RightSectionContainer";

export const HomeScreen: React.FC = props => (
  <>
    <TweetContainer />
    <RightSectionContainer showTrending/>
  </>
);

const styles = StyleSheet.create({
  container: {}
});

export default HomeScreen;
