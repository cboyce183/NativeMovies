import React from 'react';
import { Component } from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView, Platform, TouchableHighlight, Animated, Dimensions} from 'react-native';
import { YouTubeStandaloneIOS } from 'react-native-youtube';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'

export default class Viewer extends Component {
  constructor() {
    super();
    this.state = {
      video: null,
      slideAnim: new Animated.Value(Dimensions.get('window').height),
      favourited: false
    }
  }

  componentWillMount() {
    const {state: {params: {data: data}}} = this.props.navigation;
    const {id} = data;
    this.setState({favourited: this.isFavourite()})
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=cc0f3deac833d283a230b440f5e7d753`)
    .then(response => {
      const video = response.data.results[0].key;
      this.setState({video});
    })
    .catch(e => console.log(e))
  }

  componentDidMount() {
    Animated.timing(this.state.slideAnim, {toValue: 0, duration: 700}).start();
  }

  render() {
    const {state: {params: {data}}} = this.props.navigation;
    const {title, vote_average, backdrop_path, overview, release_date} = data;
    const {video, slideAnim, favourited} = this.state;
    const uri = "https://image.tmdb.org/t/p/w500" + backdrop_path;

    return (
      <ScrollView>

        <Image style={styles.image} source={{uri}}/>

        <Animated.View style={[styles.info, {top: slideAnim}]}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.summary}>
            <Text style={[styles.votes, {color: this.ratingColor(vote_average)}]}>{vote_average*10}%</Text>
            <Text>{new Date(release_date).toDateString()}</Text>
          </View>

          <Text>{overview}</Text>

          {Platform.OS !== 'android' && video && <Button title="Watch trailer" onPress={() => YouTubeStandaloneIOS.playVideo(video)}/>}
        </Animated.View>

        <TouchableHighlight style={{position:'absolute',top:10,left:10}} onPress={() => this.onFavourite()}>
          {favourited ? <Icon name='heart' size={25} color="red"/> : <Icon name='heart' size={25} color="white"/>}
        </TouchableHighlight>

      </ScrollView>
    );
  }

  onFavourite = () => {
    const {state: {params: {data, favourites, callbacks}}} = this.props.navigation;
    const isFavourited = this.state.favourited || favourites.map(e => e.id).includes(data.id);
    this.setState({favourited: !isFavourited});
    return isFavourited ? callbacks.delFavourite(data) : callbacks.setFavourite(data);
  }

  isFavourite = () => {
    const {state: {params: {data, favourites}}} = this.props.navigation;
    return favourites.map(e => e.id).includes(data.id);
  }

  ratingColor = (rating) => {
    if (rating < 5) return 'red';
    else if (rating < 7) return 'orange';
    else return 'green';
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  info: {
    margin: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    color: '#767574',
    marginBottom: 5
  },
  subtitle: {
    fontSize: 20,
    color: '#767574',
  },
  votes: {
    marginRight:15,
    fontWeight: 'bold'
  },
  summary: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    color: '#767574',
    marginBottom: 10
  },
  backgroundVideo: {
    width: '100%'
  }
});