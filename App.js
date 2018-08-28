import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { View } from 'react-native';
import MyStatusBar from './components/MyStatusBar';
import AppNavigator from './components/AppNavigator';
import { setLocalNotification } from './utils/api';

export default class App extends Component {

  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex:1}}>
          <MyStatusBar/>
          <AppNavigator/>
        </View>
      </Provider>
    );
  }
}
