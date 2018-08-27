import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class AddCard extends Component {

  state = {
    question: '',
    answer: ''
  };

  update = (input, text) => {
    this.setState({
      [input]: text
    });
  };

  render() {
    return (
      <View>
        <TextInput
          value={this.state.question}
          onChangeText={(text) => this.update('question', text)}
        />
        <TextInput
          value={this.state.answer}
          onChangeText={(text) => this.update('answer', text)}
        />
      </View>
    );
  }
}

const mapStateToProps = (decks, { navigation }) => {
    const { title } = navigation.state.params;
    return { title };
}

export default connect(mapStateToProps)(AddCard);
