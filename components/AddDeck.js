import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet } from 'react-native';
import Dialog from "react-native-dialog";
import { formatDeck } from '../utils/helpers';
import { addDeck } from '../actions';
import { submitDeck } from '../utils/api';
import { red } from '../utils/colors';

class AddDeck extends Component {

  state = {
    title: '',
    label: ''
  };

  handleChange = (title) => {
    this.setState({title});
  };

  handleCancel = () => {
    // Reset deck title, label & then dismiss dialog
    this.setState({title: '', label: ''});
    this.props.onDismiss();
  };

  handleSubmit = () => {
    const { title } = this.state;
    const { decks } = this.props;

    // Title empty
    if (title.length === 0) {
      this.setState({label: 'Deck title cannot be empty!'});
    }
    // Title already exists
    else if (Object.keys(decks).includes(title)) {
      this.setState({label: 'Deck title already exists!'});
    }
    // Deck submission - Update Redux & DB, then route to new deck
    else {
      const deck = formatDeck(title);
      this.props.dispatch(addDeck(deck));
      submitDeck(deck);
      this.props.onSubmit(title);
      this.handleCancel();
    }
  };

  render() {

    const { title, label} = this.state;

    return (
      <Dialog.Container visible={this.props.visible}>
        <Dialog.Title>New Deck</Dialog.Title>
        <Dialog.Description>
          Give a nice title to your new deck.
        </Dialog.Description>
        <Dialog.Input
          placeholder="Deck title"
          value={title}
          onChangeText={this.handleChange}/>
        <Text style={styles.label}>{label}</Text>
        <Dialog.Button label="Cancel" onPress={this.handleCancel}/>
        <Dialog.Button label="Submit" onPress={this.handleSubmit}/>
      </Dialog.Container>
    );
  }
}

const styles = StyleSheet.create({
  label : {
    color: red,
    alignSelf: 'center',
    paddingBottom: 10
  }
});

const mapStateToProps = (decks) => ({ decks });

export default connect(mapStateToProps)(AddDeck);
