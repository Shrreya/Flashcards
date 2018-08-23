import React from 'react';
import { View } from 'react-native';
import MyStatusBar from './components/MyStatusBar';
import AppNavigator from './components/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <MyStatusBar/>
        <AppNavigator/>
      </View>
    );
  }
}
