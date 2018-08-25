import React from 'react';
import { Platform } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { Ionicons } from '@expo/vector-icons'
import { white, green } from '../utils/colors';

const fabIcon = <Ionicons
  name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
  color={white}
  size={32}/>;

const actions = [{
  name: 'add_deck',
  icon: fabIcon
}];

export default function Fab (props) {
  return (
    <FloatingAction
      overrideWithAction
      distanceToEdge={15}
      actions={actions}
      color={green}
      onPressItem={props.onPressItem}
    />
  );
}
