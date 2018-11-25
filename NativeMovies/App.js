import React from 'react';
import { Component, Fragment } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './redux/reducers';

import { AppBar } from "./components/appbar";
import AppBody from "./components/appBody";

const store = createStore(reducer)

export default class App extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <Fragment>
        <Provider store={store}>
            <AppBar />
        </Provider>
        <Provider store={store}>
            <AppBody navigation={navigation}/>
        </Provider>
      </Fragment>
    );
  }
}