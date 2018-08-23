import React from 'react';
import { View } from 'react-native';
import DeckList from './components/DeckList';
import { white, green } from './utils/colors';
import { createStackNavigator } from 'react-navigation';
import MyStatusBar from './components/MyStatusBar';

const AppNavigator = createStackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      title: 'FLASHCARDS',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: green,
      }
    }
  }
});

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
