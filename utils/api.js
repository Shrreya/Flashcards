import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'Flashcards:decks';

export function fetchDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY);
}

export function submitDeck (deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    ...deck
  }));
}

export function submitCardToDeck (card, title) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const decks = JSON.parse(results);
      decks[title].questions = decks[title].questions.concat(card);
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    });
}
