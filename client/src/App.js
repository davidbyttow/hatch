import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import HomePage from './HomePage';
import PostPage from './PostPage';
import NewPostPage from './NewPostPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/post" component={NewPostPage}/>
          <Route path="/post/:id" component={PostPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
