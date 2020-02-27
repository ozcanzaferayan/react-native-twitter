import React from "react"
import { Router, Switch, Route, Link } from './Router/index';
import App, { Home, About } from "./index";
import { OtherScreen } from "./otherScreen";
import { OtherScreen2 } from "./otherScreen2";
import { View, Text } from "react-native";


export const Routes = () => {
    return (
        <Router>
            <View>
                <Link to="/" underlayColor="#dd0000">
                    <Text>Home</Text>
                </Link>
                <Link
                    to="/about"
                    underlayColor="#dd0000">
                    <Text>About</Text>
                </Link>
            </View>
            <Route exact path="/" component={OtherScreen} />
            <Route path="/about" component={OtherScreen2} />
        </Router>
    )
}