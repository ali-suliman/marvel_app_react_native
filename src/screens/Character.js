import React, { useEffect } from "react"
import { View, Text, ImageBackground, StyleSheet, Button } from "react-native"
import { GetCharacterData } from "../providers/CharacterProvider"

export default function Character({ navigation }) {
  const characterData = GetCharacterData()
  useEffect(() => console.log("CharacterData: ", characterData), [])
  return (
    <View style={style.wrapper}>
      <View style={{ flex: 1, paddingVertical: 30, backgroundColor: "#111" }}>
        <Button
          title="Back to home"
          onPress={() => navigation.navigate("home")}
        />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
})
