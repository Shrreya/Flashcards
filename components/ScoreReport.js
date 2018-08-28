import React from 'react';
import { View, Text } from 'react-native';

export default function ScoreReport ({ navigation }) {

  const { score, total, title } = navigation.state.params;

  return (
    <View>
      <Text>
        Score - {score} out of {total} for {title}
      </Text>
    </View>
  );
}
