import { createStackNavigator } from 'react-navigation';
import DeckList from './DeckList';
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
  }
});

export default AppNavigator;
