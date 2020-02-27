import {App} from 'common/src/index';
import * as React from "react";
import { AppRegistry } from "react-native";

const Encapsulator = () => {
  return <App  />;
};

AppRegistry.registerComponent("App", () => Encapsulator);
AppRegistry.runApplication("App", {
  initialProps: {},
  rootTag: document.getElementById("root")
});
