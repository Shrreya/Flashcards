import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { green, lightGrey, darkGrey } from '../utils/colors';
import { getDeckPreviewSizes } from '../utils/helpers';

export default function DeckPreview ({ deck, onPress }) {

  return (
    <TouchableOpacity
      style={styles.deckPreview}
      onPress={() => onPress(deck.title)}
    >
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.cardCount}>{deck.questions.length} cards</Text>
    </TouchableOpacity>
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
