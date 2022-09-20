/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';


import { MainAppContainer } from './src/navigation/MainAppNavigation';

const App: () => Node = () => {

  return (
    <View style={styles.backgroundStyle}>
      <MainAppContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#E4B062",
    flex: 1
  }
});

export default App;
