import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';

import colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <ScrollView>
      <View style={styles.screen} >
        <Text style={{ fontFamily: 'OpenSans-Bold' }}>The Game is Over!</Text>
        <Image
          source={require('../assets/Game_Over.jpg')}
          // source={{ uri: 'https://id.pngtree.com/freepng/blue-assassin-esports-logo-for-gaming-mascot_4295380.html' }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.resultContainer} >
          <Text>Your phone needed
          <Text style={styles.highlight}> {props.roundsNumber} </Text> rounds to guess the number {props.userNumber}</Text>
        </View>
        <Button title="NEW GAME" onPress={props.onRestart} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: 300,
    borderRadius: 250
  },
  highlight: {
    color: colors.primary
  },
  resultContainer: {
    width: '80%',
    marginHorizontal: 20
  }
});

export default GameOverScreen