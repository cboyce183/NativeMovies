import React from "react"
import { StyleSheet, View } from "react-native"
import Search from "./appbarItems/search"
import { Icon } from 'react-native-elements'

// Not strictly best practice...
const spacer = <View style={{width: 5}}/>;

export class AppBar extends React.Component {

  render() {
    return (
      <View style={styles.root}>
          <Icon name="movie-filter" color="#008055" size={50}/>
          {spacer}
          <Search />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    zIndex: 1,
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-start",
    width: "100%",
    height: 60,
    backgroundColor: 'white'
  },
})