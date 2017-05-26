import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import Page from './Page';
import PostPreview from './components/PostPreview';
import { db, postIds } from './fakeData';
import { rpc } from './net';

const CardList = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 -20px;
`;

class HomePage extends Component {
  render() {
    return (
      <Page>
        <CardList>
          {
            postIds.map((id) => {
              const post = db.posts[id];
              const person = db.persons[post.personId];
              return (<PostPreview
                key={id}
                post={post}
                person={person} />);
            })
          }
        </CardList>
      </Page>
    );
  }
}

export default HomePage;
