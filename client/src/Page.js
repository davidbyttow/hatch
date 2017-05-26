import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import TwitterLoginButton from './components/TwitterLoginButton';

import logoUrl from './assets/hatch@2x.png';

const Container = styled.div`
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

const Logo = styled.img`
  height: 40px;
`;

const Content = styled.div`
  margin: 0 20px;
`;

const Page = ({ children }) => {
  return (
    <Container>
      <Header>
        <Link to="/">
          <Logo src={logoUrl} />
        </Link>
        <TwitterLoginButton />
      </Header>
      <Content>{children}</Content>
    </Container>
  )
};

export default Page;
