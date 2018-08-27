import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { green, darkGrey, red, white } from '../utils/colors';

class Quiz extends Component {

  state = {
    score: 0,
    card: 0
  };

  render() {
    const { cards, title } = this.props;
    const { card } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.counter}>{this.state.card}/{cards.length}</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>{cards[card].question}</Text>
        </View>
        <TouchableOpacity
          style={styles.flip}>
          <Text style={styles.flipText}>Flip!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: green}]}>
          <Text style={styles.buttonText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: red}]}>
          <Text style={styles.buttonText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  counter: {
    fontSize: 18,
    padding: 10,
    alignSelf: 'center'
  },
  card: {
    width: '75%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: darkGrey,
    borderRadius: 5
  },
  cardText: {
    fontSize: 25,
    color: green
  },
  flip: {
    alignSelf: 'center',
    padding: 10
  },
  flipText: {
    color: green
  },
  button: {
    width: 100,
    height: 45,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: white,
    textAlign: 'center'
  }
});

const mapStateToProps = (decks, { navigation }) => {
  const { title } = navigation.state.params;
  return {
    cards: decks[title].questions,
    title
  };
}

export default connect(mapStateToProps)(Quiz);
