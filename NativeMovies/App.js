import React from 'react';
import { Component } from 'react';
import { Text } from 'react-native'

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './redux/reducers';

const store = createStore(reducer)
export default class App extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <Provider store={store}>
        <Text>
          {/* Placeholder */}
        </Text>
      </Provider>
    );
  }
}