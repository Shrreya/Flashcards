import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { green, white, darkGrey, red } from '../utils/colors';
import { formatCard } from '../utils/helpers';
import { addCardToDeck } from '../actions';
import { submitCardToDeck } from '../utils/api';

class AddCard extends Component {

  state = {
    question: '',
    answer: '',
    label: ''
  };

  update = (input, text) => {
    this.setState({
      [input]: text
    });
  };

  handleSubmit = () => {
    const { question, answer } = this.state;
    // Question and/or answer empty
    if (question.length === 0 || answer.length === 0) {
      this.setState({label: 'Question and/or answer cannot be empty!'});
    }
    // Card submission - Update Redux & DB, then route back to deck
    else {
      const card = formatCard(question, answer);
      const { title } = this.props.navigation.state.params;
      this.props.dispatch(addCardToDeck(card, title));
      submitCardToDeck(card, title);
      this.setState({question: '', answer: '', label: ''});
      this.props.navigation.goBack();
    }
  };

  render() {

    const { question, answer, label } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          multiline
          placeholder='Enter your question here'
          value={question}
          onChangeText={(text) => this.update('question', text)}
        />
        <TextInput
          style={styles.input}
          multiline
          placeholder='Enter your answer here'
          value={answer}
          onChangeText={(text) => this.update('answer', text)}
        />
        <Text
          style={styles.label}
        >
          {label}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '75%',
    height: 50,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: darkGrey,
    borderRadius: 5
  },
  label: {
    color: red
  },
  button: {
    height: 45,
    backgroundColor: green,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: white,
    textAlign: 'center'
  }
});

const mapStateToProps = (decks, { navigation }) => {
  const { title } = navigation.state.params;
  return { title };
}

export default connect(mapStateToProps)(AddCard);
