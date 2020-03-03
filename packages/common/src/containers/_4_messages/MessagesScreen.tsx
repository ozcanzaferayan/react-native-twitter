import React from "react";
import {
  View,
  StyleSheet,
  Text,
} from "react-native";
import TweetContainer from "../_1_home/tweetContainer/TweetContainer";
import RightSectionContainer from "../_1_home/rightSectionContainer/RightSectionContainer";


export const MessagesScreen: React.FC = props => (
  <>
  <TweetContainer />
  <RightSectionContainer />
</>
);

const styles = StyleSheet.create({
  container: {
  },
});

export default MessagesScreen;
