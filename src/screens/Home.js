import React, { useEffect } from "react"
import { View, StyleSheet, Button, ImageBackground } from "react-native"
import { GetCharactersData } from "../providers/AllCharactersProvider"

import CharacterCard from "../components/CharacterCard"

import imageSource from "../shared/assets/bg.jpg"

export default function Home({ navigation }) {
  const { loading, error, data } = GetCharactersData()
  useEffect(() => {
    console.log("loading: ", loading)
    console.log("error: ", error)
    if (data) {
      data.data.results.map((item) => console.log(item.name))
    }
  }, [data])

  return (
    <View style={style.wrapper}>
      <ImageBackground source={imageSource} style={{ flex: 1 }}>
        <View style={style.content}>
          <Button
            title="Navigate to character"
            onPress={() => navigation.navigate("character")}
          />
          <CharacterCard />
          <CharacterCard />
        </View>
      </ImageBackground>
    </View>
  )
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#0000",
  },
  content: {
    flex: 1,
    paddingVertical: 40,
    backgroundColor: "#0000",
    alignItems: "center",
    justifyContent: "flex-start",
  },
})
