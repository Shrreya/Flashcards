import React, { Component } from 'react';
import Dialog from "react-native-dialog";

export default class AddDeck extends Component {

  state = {
    name: ''
  };

  handleChange = (name) => {
    this.setState({name});
  };

  handleCancel = () => {
    // Reset deck name & dismiss
    this.setState({name: ''});
    this.props.onDismiss();
  };

  handleSubmit = () => {
    // TODO : Save new deck
    this.handleCancel();
  };

  render() {
    return (
      <Dialog.Container visible={this.props.visible}>
        <Dialog.Title>New Deck</Dialog.Title>
        <Dialog.Description>
          Give a nice name to your new deck.
        </Dialog.Description>
        <Dialog.Input
          placeholder="Deck name"
          value={this.state.name}
          onChangeText={this.handleChange}/>
        <Dialog.Button label="Cancel" onPress={this.handleCancel}/>
        <Dialog.Button label="Submit" onPress={this.handleSubmit}/>
      </Dialog.Container>
    );
  }
}
