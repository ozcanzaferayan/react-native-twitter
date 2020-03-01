import * as React from 'react';
import { AppRegistry, SafeAreaView, Text, Image } from 'react-native';
import { name as appName } from './app.json';
import Firefox from './firefox.svg';

const App = () => {
  return (
    <Firefox/>
  );
};

AppRegistry.registerComponent(appName, () => App);
