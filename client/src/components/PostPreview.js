import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import PersonLockup from './PersonLockup';
import LikeButton from './LikeButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 360px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 32px;
  background-color: white;
`;

const PostTitle = styled.h2`
  letter-spacing: -0.1px;
  font-size: 21px;
  line-height: 28px;
  color: #2c3339;
  margin-bottom: 0;
`;

const PostText = styled.p`
  font-size: 15px;
  line-height: 24px;
  color: #8b99a6;
  margin: 10px 0;
`;

const PostMetadata = styled.div`
  border-top: 1px solid #eee;
  margin-top: auto;
  padding-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EndorsementText = styled.div`
  font-size: 12px;
  color: #8e99a6;
  b {
    color: #21262b;
  }
`;

class PostPreview extends Component {
  static propTypes = {
    person: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
  };

  render() {
    const { post, person } = this.props;
    const url = `/post/${post.id}`;
    return (
      <Container>
        <PersonLockup person={person} />
        <Link to={url}>
          <PostTitle>{post.title}</PostTitle>
          <PostText>{post.text}</PostText>
        </Link>
        <PostMetadata>
          <LikeButton count={post.likeCount} />
          {post.endorsementCount > 0 && (
            <EndorsementText>Endorsed by <b>{post.endorsementCount} others</b></EndorsementText>)}
        </PostMetadata>
      </Container>
    );
  }
}

export default PostPreview;
