import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import DeckList from './components/DeckList';
import { green } from './utils/colors';

function MyStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <MyStatusBar backgroundColor={green} barStyle="light-content" />
        <DeckList/>
      </View>
    );
  }
}
