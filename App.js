import React from 'react';
import SignupLoginScreen from './Screens/SignupLoginScreen';
import GoodDonateScreen from './Screens/GoodsDonate'
import GoodRequestScreen from './Screens/GoodsRequest'
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
  GoodsRequest : {screen:GoodRequestScreen},
  GoodsDonate : {screen:GoodDonateScreen},
})

const switchNavigator = createSwitchNavigator({
  Login : {screen : SignupLoginScreen},
  BottomTabNavigator : {screen : TabNavigator}
})

const AppContainer = createAppContainer(switchNavigator)

