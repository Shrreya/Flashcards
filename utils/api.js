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

// TODO : submit card to deck
