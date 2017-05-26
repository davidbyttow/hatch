import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';

import Page from './Page';
import PersonLockup from './components/PersonLockup';
import { PostLayout, PostTitle, PostText } from './containers/Post';
import { viewerId, peopleById } from './fakeData.json';

const TitleInput = PostTitle.withComponent('input').extend`
  border: 0;
  outline: none;
  color: black;
  margin-top: 18px;
`;

const TextInput = PostText.withComponent(Textarea).extend`
  border: 0;
  outline: none;
  resize: none;
  color: black;
`;

class NewPostPage extends Component {
  state = {
    title: '',
    text: '',
  };

  render() {
    const viewer = peopleById[viewerId];
    return (
      <Page>
        <PostLayout>
          <PersonLockup person={viewer} />
          <TitleInput
            name="title"
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
            maxLength="64"
            placeholder="Idea title" />
          <TextInput
            placeholder="Idea description">
          </TextInput>
        </PostLayout>
      </Page>
    );
  }
}

export default NewPostPage;
