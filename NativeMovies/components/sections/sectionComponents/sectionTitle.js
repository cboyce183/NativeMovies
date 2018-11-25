import React from "react"
import { StyleSheet, Text, View } from "react-native"

export class SectionTitle extends React.Component {

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>{this.props.name}</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    width: "100%",
    marginTop: 5,
    marginBottom: 15
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 22,
    color: "#3e3e3e",
  }
})