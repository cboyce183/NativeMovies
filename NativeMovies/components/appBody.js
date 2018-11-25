import React from 'react';
import { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import axios from 'axios'

import { connect } from 'react-redux';

import { SectionBase } from "./sections/base";
import ToolTip from './uiElements/appBodyTooltip';
import LoadMore from './uiElements/appBodyLoadMore';

class AppBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderIndex: 5
    };
  }

  componentWillMount() {
    axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=cc0f3deac833d283a230b440f5e7d753&language=en-US")
      .then(response => {
        const {genres} = response.data;
        this.props.setGenres(genres);
      })
      .catch(e => console.log(e))
  }

  render() {
    const {navigate} = this.props.navigation;
    const {genres, favourites, search_results} = this.props;
    const {renderIndex} = this.state;

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.body}>

          <ToolTip text="Genres"/>
          {genres && genres.slice(0, renderIndex).map(el =>
            <SectionBase
              name={el.name}
              key={el.id}
              id={el.id}
              navigate={navigate}
            />
          )}

          {(renderIndex < genres.length) && <LoadMore callback={this.loadMore}/>}

        </ScrollView>
    );
  }

  loadMore = () => {
    this.setState({renderIndex: this.state.renderIndex + 4});
  }

}

const mapStateToProps = state => {
  return {genres: state.genreReducer.genres, favourites: state.favouritesReducer.favourites, search_results: state.searchReducer.search_results};
};

const mapDispatchToProps = dispatch => {
  return {
    setGenres: function(resp) {
      dispatch({
        type: 'set_genres',
        data: resp
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBody);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingTop: 10,
    flex: 1,
    zIndex: 0,
    backgroundColor: '#f7f5f1'
  },
  body: {
    zIndex: -1,
    alignItems: 'flex-start'
  }
});
