import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/native-stack'

import Home from "../screens/Home"
import Character from "../screens/Character"

export default function HomeStack() {

    const Stack = createStackNavigator()

    return (
        <>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{}} >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Character" component={Character}/>
            </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}
