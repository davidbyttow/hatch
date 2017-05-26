import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import { postsById, peopleById } from './fakeData';
import Page from './Page';
import Post from './containers/Post';

class PostPage extends Component {
  render() {
    const { match } = this.props;
    const post = postsById[match.params.id];
    console.log(match, post);
    const person = peopleById[post.personId];
    return (
      <Page>
        <Post post={post} person={person} />
      </Page>
    );
  }
}

export default PostPage;
