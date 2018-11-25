/*

  Redux:
  - Chose a three reducer design to serve the three data stores for the main view: genres, favourites, and search results
  - All three stores operate fairly differently, hence the seperation. The genre store simple return genres which are used in component to populate carousels,
    the favourites store is a standard list with get/set/delete operations, and search results replaces itself on every new search.

*/

import {combineReducers} from 'redux';

export const initialState = {
  genres: [],
  favourites: [],
  search_results: []
}

const genreReducer = function(state = initialState, action) {
  switch(action.type) {
    case 'set_genres':
      return Object.assign({}, state, {genres: action.data});
  }
  return state;
}

const favouritesReducer = function(state = initialState, action) {
  const {favourites} = state;
  switch(action.type) {
    case 'add_favourite':
      return Object.assign({}, state, {favourites: favourites.concat([action.data])});
    case 'del_favourite':
      return Object.assign({}, state, {favourites: favourites.filter(el => el.id !== action.data.id)});
  }
  return state;
}

const searchReducer = function(state = initialState, action) {
  switch(action.type) {
    case 'set_search_results':
      return Object.assign({}, state, {search_results: action.data});
  }
  return state;
}

export const reducer = combineReducers({
    genreReducer,
    favouritesReducer,
    searchReducer
});