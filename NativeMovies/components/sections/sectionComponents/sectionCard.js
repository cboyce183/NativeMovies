import React from "react"
import { StyleSheet, Text, Image, TouchableOpacity, Animated } from "react-native"
import { connect } from 'react-redux';

class SectionCard extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {toValue: 1, duration: 500}).start();
  }

  render() {

    // I chose to use redux here rather than the viewer component due to the navigator having issues with Redux.
    // There are solutions to this, but given time limitations I made the choice to simply pass in the stores and reducers as props from here.

    let {fadeAnim} = this.state;
    const {data, favourites, navigate, setFavourite, delFavourite} = this.props;
    const uri = "https://image.tmdb.org/t/p/w500" + data.poster_path;

    return (
      <TouchableOpacity style={styles.root} onPress={() => navigate('Viewer', {data, favourites, callbacks: {setFavourite, delFavourite}})}>
        <Animated.View style={[styles.wrapper, {opacity: fadeAnim}]}>
          <Image style={styles.img} source={{uri}}/>
          <Text>{data.title}</Text>
        </Animated.View>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = state => {
  return {favourites: state.favouritesReducer.favourites};
};

const mapDispatchToProps = dispatch => {
  return {
    setFavourite: function(resp) {
      dispatch({
        type: 'add_favourite',
        data: resp
      })
    },
    delFavourite: function(resp) {
      dispatch({
        type: 'del_favourite',
        data: resp
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionCard);

const styles = StyleSheet.create({
  root: {
    height: 'auto',
    width: 175,
    margin: 5,
  },
  wrapper: {
    display: 'flex',
    height: '100%',
    justifyContent: 'flex-start'
  },
  img: {
    height: 300,
    marginBottom: 5
  }
})