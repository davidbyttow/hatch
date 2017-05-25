import cx from 'classnames';
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import { db, postIds } from './fakeData';
import { rpc } from './net';

import './Home.css';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin: 100px 20px 30px 20px;
`;

const HeaderLine = styled.div`
  height: 1px;
  background-color: #e5e5e5;
`;

const CardList = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Card = styled.div`
  width: 360px;
  height: 360px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 32px;
  background-color: white;
`;

const LikeButtonStyle = styled.div`
  width: 64px;
  height: 32px;
  border-radius: 6px;
  background-color: #FFF;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;

  :hover {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  }
  :active {
    box-shadow: none;
  }
`;

const Emoji = styled.span`
  font-family: AppleColorEmoji;
  font-size: 16px;
  margin-top: -5px;
  margin-right: 8px;
`;

const LikeCount = styled.span`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  min-width: 18px;
`

class LikeButton extends Component {
  state = {
    count: this.props.count,
  };
  render() {
    return (
      <LikeButtonStyle onClick={() => this.setState({ count: this.state.count + 1 })}>
        <Emoji>🙌</Emoji>
        <LikeCount>{this.state.count}</LikeCount>
      </LikeButtonStyle>
    )
  }
};

const AvatarStyle = styled.img`
  border-radius: 20px;
  width: 40px;
  height: 40px;
  user-select: none;
`
const Avatar = ({ url }) => {
  return <AvatarStyle src={url} />
};

const PersonLockupStyle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

const PersonName = styled.span`
  color: #444;
  font-size: 14px;
  font-weight: bold;
`;

const PersonTwitterHandle = styled.span`
  font-size: 12px;
  color: #999;
  opacity: 0.9;
`;

class PersonLockup extends Component {
  render() {
    return (
      <PersonLockupStyle onClick={() => window.open(`https://twitter.com/${this.props.twitterHandle}`)}>
        <Avatar url={this.props.avatarUrl} />
        <PersonInfo>
          <PersonName>{this.props.name} { this.props.verified && '✅'}</PersonName>
          <PersonTwitterHandle>{this.props.twitterHandle}</PersonTwitterHandle>
        </PersonInfo>
      </PersonLockupStyle>
    );
  }
}

const PostCardStyle = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
`;

const PostTitle = styled.h2`
  letter-spacing: -0.1px;
  font-size: 21px;
  line-height: 28px;
  color: #333;
  margin-bottom: 0;
`;

const PostText = styled.p`
  font-size: 15px;
  line-height: 24px;
  color: #999;
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
  color: #9a9a9a;
  b {
    color: black;
  }
`;

class PostCard extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  };

  render() {
    const { post } = this.props;
    const person = db.persons[post.personId];
    return (
      <Card>
        <PostCardStyle>
          <PersonLockup
            avatarUrl={person.avatarUrl}
            name={person.name}
            twitterHandle={person.twitterHandle}
            verified={person.verified}
          />
          <PostTitle>{post.title}</PostTitle>
          <PostText>{post.text}</PostText>
          <PostMetadata>
            <LikeButton count={post.likeCount} />
            {post.endorsementCount > 0 && (
              <EndorsementText>Endorsed by <b>{post.endorsementCount} others</b></EndorsementText>)}
          </PostMetadata>
        </PostCardStyle>
      </Card>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <PageContainer>
        <Header>
          <HeaderLine />
        </Header>
        <CardList>
          { postIds.map((id) => <PostCard key={id} post={db.posts[id]} />) }
        </CardList>
      </PageContainer>
    );
  }
}

export default Home;
