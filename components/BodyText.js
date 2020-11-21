import React from 'react';
import { Text, Stylesheet } from 'react-native';

const BodyText = props => <Text style={styles.body} >{props.children}</Text>

const style = StyleSheet.create({
  body: {
    fontFamily: 'open-sans-bold'
  }
});

export default BodyText;