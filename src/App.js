import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Grid from './components/Grid.jsx';
import Single from './components/Single.jsx';

import store from './store.jsx';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'

const history = createHistory();


class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className="App">
          <Route exact path='/' component={Grid} />
          <Route path='/view/:id' component={Single} />
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
