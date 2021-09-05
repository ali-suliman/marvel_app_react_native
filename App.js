import React from "react"
import { CharactersProvider } from "./src/providers/AllCharactersProvider"
import { StyleSheet, View } from "react-native"

import "react-native-gesture-handler"

import HomeStack from "./src/stacks/HomeStack"

export default function App() {
  return (
    <CharactersProvider>
      <View style={styles.container}>
        <HomeStack />
      </View>
    </CharactersProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 40,
  },
})
