import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from "react-native-dialog";
import { formatDeck } from '../utils/helpers';
import { addDeck } from '../actions';
import { submitDeck } from '../utils/api';

class AddDeck extends Component {

  state = {
    title: ''
  };

  handleChange = (title) => {
    this.setState({title});
  };

  handleCancel = () => {
    // Reset deck title & dismiss
    this.setState({title: ''});
    this.props.onDismiss();
  };

  handleSubmit = () => {
    // TODO: empty title error handling
    
    const deck = formatDeck(this.state.title);
    // Update Redux & DB
    this.props.dispatch(addDeck(deck));
    submitDeck(deck);

    this.handleCancel();
  };

  render() {
    return (
      <Dialog.Container visible={this.props.visible}>
        <Dialog.Title>New Deck</Dialog.Title>
        <Dialog.Description>
          Give a nice title to your new deck.
        </Dialog.Description>
        <Dialog.Input
          placeholder="Deck title"
          value={this.state.title}
          onChangeText={this.handleChange}/>
        <Dialog.Button label="Cancel" onPress={this.handleCancel}/>
        <Dialog.Button label="Submit" onPress={this.handleSubmit}/>
      </Dialog.Container>
    );
  }
}

export default connect()(AddDeck);
