/**
 * @format
 */
import { App } from 'common/src/index';
import * as React from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import { name as appName } from './app.json';

const Encapsulator = () => {
  return (
    <SafeAreaView>
      <App text="Mobil" />
    </SafeAreaView>
  );
};

AppRegistry.registerComponent(appName, () => Encapsulator);
