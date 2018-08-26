import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Deck extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });

  render() {
    return (
      <View>
        <Text>
          Deck here
        </Text>
      </View>
    );
  }
}

export default Deck;
