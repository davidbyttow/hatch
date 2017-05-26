import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import PersonLockup from '../components/PersonLockup';

export const PostLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 760px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.1);
  padding: 32px;
  background-color: white;
`;

export const PostTitle = styled.h2`
  letter-spacing: -0.1px;
  font-size: 36px;
  line-height: 1.33;
  color: #2c3339;
  margin-bottom: 0;
  opacity: 0.9;
`;

export const PostText = styled.p`
  font-size: 15px;
  line-height: 24px;
  color: #8b99a6;
  margin: 10px 0;
`;

class Post extends Component {
  static propTypes = {
    person: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
  };

  render() {
    const { post, person } = this.props;
    return (
      <PostLayout>
        <PersonLockup person={person} />
        <PostTitle>{post.title}</PostTitle>
        <PostText>{post.text}</PostText>
      </PostLayout>
    );
  }
}

export default Post;
