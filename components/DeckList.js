import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import DeckPreview from './DeckPreview';
import Fab from './Fab';
import AddDeck from './AddDeck';
import { fetchDecks } from '../utils/api';
import { receiveDecks } from '../actions';

class DeckList extends Component {

  state = {
    visible : false
  };

  showDialog = () => {
    this.setState({visible: true});
  };

  closeDialog = () => {
    this.setState({visible: false});
  };

  componentDidMount() {
    const { dispatch } = this.props;
    fetchDecks().then((decks) => dispatch(receiveDecks(JSON.parse(decks))));
  }

  render() {
    return (
      <View style={{flex:1}}>
        <FlatList
          data={this.props.decks}
          keyExtractor={(item, index) => Object.keys(item)[0]}
          renderItem={({item}) => <DeckPreview deck={item}/>}
        />
        <AddDeck
          visible={this.state.visible}
          onDismiss={this.closeDialog}
        />
        <Fab
          onPressItem={this.showDialog}
        />
      </View>
    );
  }
}

const mapStateToProps = (decks) => {
  return {
    decks : Object.keys(decks).map((key) => ({
      [key] : decks[key]
    }))
  }
};

export default connect(mapStateToProps)(DeckList);
