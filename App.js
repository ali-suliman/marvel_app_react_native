import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import HomeStack from "./src/stacks/HomeStack"

import "react-native-gesture-handler"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
