import { createStackNavigator } from 'react-navigation';
import DeckList from './DeckList';
import Deck from './Deck';
import AddCard from './AddCard';
import Quiz from './Quiz';
import ScoreReport from './ScoreReport';
import { white, green } from '../utils/colors';

const AppNavigator = createStackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      title: 'FLASHCARDS',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: green,
      }
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: green,
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: green,
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: green,
      }
    }
  },
  ScoreReport: {
    screen: ScoreReport,
    navigationOptions: {
      title: 'Score Report',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: green,
      }
    }
  }
});

export default AppNavigator;
