import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import { db } from './fakeData';
import Page from './Page';
import Post from './containers/Post';

class PostPage extends Component {
  render() {
    const { match } = this.props;
    const post = db.posts[match.params.id];
    console.log(match, post);
    const person = db.persons[post.personId];
    return (
      <Page>
        <Post post={post} person={person} />
      </Page>
    );
  }
}

export default PostPage;
