import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import HomePage from './HomePage';
import PostPage from './PostPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage}/>
          <Route path="/post/:id" component={PostPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
