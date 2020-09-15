import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import ReadScreen from './screens/ReadScreen';
import WriteScreen from './screens/WriteScreen'; 


export default function App() {
  return (
    <AppContainer />
  );
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen : WriteScreen},
  Read : {screen : ReadScreen},
});

const AppContainer = createAppContainer(TabNavigator); 










/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/


