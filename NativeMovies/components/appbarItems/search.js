import React from "react"
import { Platform, StyleSheet, TextInput, View } from "react-native"
import { Icon } from 'react-native-elements'
import axios from 'axios'
import { connect } from 'react-redux';

export class Search extends React.Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <Icon name="search" color="#767574" size={20}/>
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#767574"
          style={[styles.input, {height: Platform.OS == 'android' ? 40 : 20}]}
          onChangeText={text => this._onChange(text)}
        />
      </View>
    )
  }

  _onChange = (query) => {
    if (!query) this.props.setSearchResults([]);
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=cc0f3deac833d283a230b440f5e7d753&language=en-US&page=1&query=" + query)
      .then(response => {
        const search_results = response.data.results;
        this.props.setSearchResults(search_results);
      })
      .catch(e => console.log(e))
  }
}

const mapStateToProps = state => {
  return {search_results: state.searchReducer.search_results};
};

const mapDispatchToProps = dispatch => {
  return {
    setSearchResults: function(resp) {
      dispatch({
        type: 'set_search_results',
        data: resp
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'flex-start',
    width: "85%",
    height: 40,
    borderRadius: 5,
    backgroundColor: '#f7f5f1',
    padding: 10
  },
  input: {
    width: "90%"
  }
})