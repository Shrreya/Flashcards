import React from 'react';
import { View, StatusBar } from 'react-native';
import { green } from '../utils/colors';
import { Constants } from 'expo';

export default function MyStatusBar () {
  return (
    <View style={{ backgroundColor: green, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={green} barStyle="light-content" />
    </View>
  );
}
