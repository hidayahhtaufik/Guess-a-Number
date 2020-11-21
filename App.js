import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';


import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (dataLoaded) {
    return <AppLoading
      startAsync={fetchFont}
      onFinish={() => setDataLoaded(true)}
      onEror={(err) => console.log(err)}
    />;
  };

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);

  }

  const starterGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  const GameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartGameScreen onStartGame={starterGameHandler} />

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen
      userChoice={userNumber}
      onGameOver={GameOverHandler} />;
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler} />
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header style={{ fontFamily: 'OpenSans-Bold' }} title="Guess a Number" />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
