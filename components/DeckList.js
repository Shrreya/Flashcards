import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Fab from './Fab';
import AddDeck from './AddDeck';

export default class DeckList extends Component {

  state = {
    visible : false
  };

  showDialog = () => {
    this.setState({visible: true});
  };

  closeDialog = () => {
    this.setState({visible: false});
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>All Decks Listed Here</Text>
        <AddDeck
          visible={this.state.visible}
          onDismiss={this.closeDialog}
        />
        <Fab
          onPressItem={this.showDialog}
        />
      </View>
    );
  }
}
