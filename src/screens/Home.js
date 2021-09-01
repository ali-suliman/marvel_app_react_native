import React from 'react'
import { View, Text, Dimensions } from 'react-native'

const {width, height} = Dimensions.get("screen")

export default function Home() {

    return (
        <View>
            <Text>This screen is {width}px</Text>
        </View>
    )
}
