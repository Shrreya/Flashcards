import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { green, lightGrey, white } from '../utils/colors';

class Deck extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  });

  addCard = () => {
    // TODO : route to add card screen
  };

  startQuiz = () => {
    // TODO : route to quiz screen
  }

  render() {

    const { deck } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {deck.title}
        </Text>
        <Text style={styles.cardCount}>
          {deck.questions.length} cards
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.addCard}>
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.startQuiz}>
          <Text style={styles.buttonText}>Start Quiz</Text>
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
  title: {
    fontSize: 30,
    color: green
  },
  cardCount: {
    fontSize: 20,
    color: lightGrey
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
  return { deck: decks[title] };
}

export default connect(mapStateToProps)(Deck);
