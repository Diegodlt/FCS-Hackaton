import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import React from 'react';
import HomeScreen from './components/HomeScreen';
import First from './components/First'
import ARtest from './components/ARtest';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    First: First,
    ARtest: ARtest
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
