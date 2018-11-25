import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class ToolTip extends Component {
  render() {
    return (
      <View style={styles.genres}>
        <Text style={styles.header}>{this.props.text}</Text>
        <Icon name="caretdown" color="#767574" size={12} style={{marginTop: 2}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  genres: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  header: {
    marginLeft: 5,
    marginRight: 5
  },
});
