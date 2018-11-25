import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class LoadMore extends Component {

  render() {
    return (
      <View style={styles.root}>
        <TouchableHighlight onPress={this.props.callback}>
          <Text>More Genres</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: '99%',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20
  }
});
