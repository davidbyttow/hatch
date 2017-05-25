import cx from 'classnames';
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import PostCard from './components/PostCard';
import TwitterLoginButton from './components/TwitterLoginButton';
import { db, postIds } from './fakeData';
import { rpc } from './net';

import logoUrl from './assets/hmmm@2x.png';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin: 100px 20px 30px 20px;
  border-bottom: 1px solid #ebeef0;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding-bottom: 24px;
`;

const CardList = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Logo = styled.img`
  width: 104px;
  height: 40px;
`;

class Home extends Component {
  render() {
    return (
      <PageContainer>
        <Header>
          <a href="/">
            <Logo src={logoUrl} />
          </a>
          <TwitterLoginButton />
        </Header>
        <CardList>
          {
            postIds.map((id) => {
              const post = db.posts[id];
              const person = db.persons[post.personId];
              return (<PostCard
                key={id}
                post={post}
                person={person} />);
            })
          }
        </CardList>
      </PageContainer>
    );
  }
}

export default Home;
