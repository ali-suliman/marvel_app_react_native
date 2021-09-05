import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import { CharacterProcider } from "../providers/CharacterProvider"

import Home from "../screens/Home"
import CharacterScreen from "../screens/Character"

export default function HomeStack() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
            gestureEnabled: true,
            cardStyle: {
              backgroundColor: "#0002",
            },
          }}
        />
        <Stack.Screen
          name="character"
          // component={Character}
          options={{
            headerShown: false,
          }}
        >
          {({ navigation }) => (
            <CharacterProcider>
              <CharacterScreen navigation={navigation} />
            </CharacterProcider>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
