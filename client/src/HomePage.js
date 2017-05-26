import React, { Component } from 'react';
import styled from 'styled-components';

import Page from './Page';
import PostPreview from './components/PostPreview';
import { postsById, peopleById, postIds } from './fakeData';

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
              const post = postsById[id];
              const person = peopleById[post.personId];
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
