import React from "react"
import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet, ScrollView, View } from "react-native"
import SectionCard from './sectionCard';
import axios from 'axios'

export class SectionBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      renderIndex: 4
    };
  }

  componentWillMount() {
    const {id, data} = this.props;
    if (!data) {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=cc0f3deac833d283a230b440f5e7d753&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${id}`)
        .then(response => {
        const {results} = response.data;
        this.setState({results});
      });
    }
  }

  render() {
    const {results, renderIndex} = this.state;
    const {navigate, data} = this.props;
    const dataToRender = data || results;

    return (
      <ScrollView horizontal={true} contentContainerStyle={styles.root} >
        {dataToRender.slice(0, renderIndex).map((el) => <SectionCard key={el.id} data={el} navigate={navigate}/>)}
        {(renderIndex < dataToRender.length - 1) && <View style={styles.iconCenter}>
          <Icon name="plus" color="#767574" size={30} onPress={this.loadMore}/>
        </View>}
      </ScrollView>
    )
  }

  loadMore = () => {
    this.setState({renderIndex: this.state.renderIndex+4});
  }
}

const styles = StyleSheet.create({
  root: {
    alignItems: "flex-start",
  },
  iconCenter: {
    height:'100%',
    marginLeft:10,
    marginRight:10,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }
})