import React from "react"
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native"

import imageSource from "../shared/assets/bg.jpg"

const { width } = Dimensions.get("window")

export default function CharacterCard() {
  return (
    <View style={styles.card}>
      <Image
        source={imageSource}
        style={{
          width: 140,
          height: 150,
          position: "absolute",
          zIndex: 10,
          left: 10,
          borderRadius: 10,
        }}
      />
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <Text style={styles.nameText} numberOfLines={1}>
            Lorem Ipsum
          </Text>
          <Text style={styles.desc} numberOfLines={2}>
            Labore est cillum ipsum magna. Commodo qui cillum duis id anim amet
            dolor dolor do mollit est. Culpa laborum eiusmod enim enim minim
            anim nostrud mollit sit duis ex laborum ea laboris.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text
              style={{ fontSize: 10, color: "#fafafa", fontWeight: "bold" }}
            >
              VIEW
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 34,
    backgroundColor: "#452",
  },
  contentWrapper: {
    width: "100%",
    minHeight: "80%",
    backgroundColor: "#fafafa",
    flexDirection: "row",
    justifyContent: "flex-end",
    borderRadius: 4,
  },
  content: {
    width: "50%",
    height: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginRight: "3%",
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  desc: {
    color: "#888",
    marginTop: 6,
    fontSize: 9,
    lineHeight: 13,
  },
  button: {
    backgroundColor: "#f43",
    // alignSelf: "flex-end",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 4,
    marginTop: 20,
  },
})
