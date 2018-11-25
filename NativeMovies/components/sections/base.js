import React from "react"
import { Animated, StyleSheet } from "react-native"
import { SectionTitle } from "./sectionComponents/sectionTitle"
import { SectionBody } from "./sectionComponents/sectionBody"

export class SectionBase extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {toValue: 1, duration: 500}).start();
  }

  render() {
    const {navigate} = this.props;
    let {fadeAnim} = this.state;

    return (
      <Animated.View style={[styles.root, {opacity: fadeAnim}]}>
        <SectionTitle name={this.props.name}/>
        <SectionBody id={this.props.id} navigate={navigate} data={this.props.data}/>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minWidth: '100%',
    height: 420,
    backgroundColor: 'white',
    marginBottom: 15,
    marginTop: 15,
    padding: 10,
    borderRadius: 5
  }
})