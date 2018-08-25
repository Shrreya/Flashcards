import { Dimensions } from 'react-native';

export function formatDeck (title) {
  return {
    [title] : {
      title,
      questions: []
    }
  }
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
