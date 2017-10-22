import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Grid from './components/Grid.jsx';
import Single from './components/Single.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Grid} />
          <Route path='/view/:id' component={Single} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
