import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import DeckList from './components/DeckList';
import { white, green } from './utils/colors';
import { createStackNavigator } from 'react-navigation';

function MyStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

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
        <MyStatusBar backgroundColor={green} barStyle="light-content" />
        <AppNavigator/>
      </View>
    );
  }
}
