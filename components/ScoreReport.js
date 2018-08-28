import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { green, white } from '../utils/colors';
import { setLocalNotification, clearLocalNotification } from '../utils/api';

class ScoreReport extends Component {

  componentDidMount() {
    // Reset local notification when quiz is completed
    clearLocalNotification().then(setLocalNotification);
  }

  render() {
    const { navigation } = this.props;
    const { score, total, title } = navigation.state.params;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.score}>
          You scored {score} out of {total}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push('Quiz', { title })}>
          <Text style={styles.buttonText}>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Deck', { title })}>
          <Text style={styles.buttonText}>Back to Deck</Text>
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
    color: green,
    padding: 10
  },
  score: {
    fontSize: 20,
    padding: 10
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

export default ScoreReport;
