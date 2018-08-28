import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { green, transparentGrey, red, white } from '../utils/colors';

class Quiz extends Component {

  state = {
    score: 0,
    card: 0,
    flipText: 'answer'
  };

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
    this.frontOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    })
    this.backOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1]
    })
  }

  flipCard = () => {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue,{
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
      this.setState({flipText: 'answer'});
    } else {
      Animated.spring(this.animatedValue,{
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
      this.setState({flipText: 'question'});
    }
  }

  render() {
    const { cards, title } = this.props;
    const { card, flipText } = this.state;

    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate }
      ]
    }
    const backAnimatedStyle = {
      transform: [
        { rotateY: this.backInterpolate }
      ]
    }

    return (
      <View style={styles.container}>
        <Text style={styles.counter}>{this.state.card}/{cards.length}</Text>
        <View>
          <Animated.View style={[styles.cardFront, frontAnimatedStyle, {opacity: this.frontOpacity}]}>
            <Text style={styles.cardText}>{cards[card].question}</Text>
          </Animated.View>
          <Animated.View style={[styles.cardFront, styles.cardBack, backAnimatedStyle, {opacity: this.backOpacity}]}>
            <Text style={styles.cardText}>{cards[card].answer}</Text>
          </Animated.View>
        </View>
        <TouchableOpacity
          style={styles.flipButton}
          onPress={this.flipCard}>
          <Text style={styles.flipBtnText}>Show {flipText}!</Text>
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
  cardFront: {
    width: '75%',
    height: 200,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: transparentGrey,
  },
  cardBack: {
    position: "absolute",
    top: 0,
  },
  cardText: {
    fontSize: 20,
    color: green
  },
  flipButton: {
    alignSelf: 'center',
    padding: 10
  },
  flipBtnText: {
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
