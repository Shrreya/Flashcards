import { Dimensions } from 'react-native';

export function formatDeck (title) {
  return {
    [title] : {
      title,
      questions: []
    }
  };
}

export function getDeckPreviewSizes () {
  const windowWidth = Dimensions.get('window').width;
  const width = 0.6 * windowWidth;
  const height = 0.5 * width;
  const margin = 0.5 * 0.4 * windowWidth;
  return {
    width,
    height,
    margin
  };
}

export function formatCard (question, answer) {
  return {
    question,
    answer
  };
}

export function createNotification () {
  return {
    title: 'Take a quiz today!',
    body: "👋 Don't forget to take at least one quiz for today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}
