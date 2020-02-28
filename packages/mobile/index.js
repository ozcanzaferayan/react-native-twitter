import * as React from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import { name as appName } from './app.json';
import { SvgXml } from 'react-native-svg';
import Android from './android.svg';

const App = () => {
  return (
    <SvgXml width="100%" height="100%" xml={Android} />
  );
};

AppRegistry.registerComponent(appName, () => App);
