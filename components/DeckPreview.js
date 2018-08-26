import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { green, lightGrey, darkGrey } from '../utils/colors';
import { getDeckPreviewSizes } from '../utils/helpers';

export default function DeckPreview ({ deck }) {

  const title = deck[Object.keys(deck)[0]].title;
  const cardCount = deck[Object.keys(deck)[0]].questions.length;

  return (
    <View style={styles.deckPreview}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.cardCount}>{cardCount} cards</Text>
    </View>
  );
}

const { width, height, margin } = getDeckPreviewSizes();

const styles = StyleSheet.create({
  deckPreview : {
    width: width,
    height: height,
    borderWidth: 1,
    borderColor: darkGrey,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: margin,
    marginRight: margin
  },
  title : {
    fontSize : 20,
    color : green
  },
  cardCount : {
    color : lightGrey
  }
});
