import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MainApp from './app/page/main-app.js';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <MainApp />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});

export default App;
