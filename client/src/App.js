import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Home from './Home';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route path="/post" component={Post}/>
        </div>
      </Router>
    );
  }
}

export default App;
