import cx from 'classnames';
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import Button from './Button';

import twitterUrl from '../assets/icon-twitter@2x.png';

const Container = styled(Button)`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Logo = styled.img`
  height: 20px;
  width: 20px;
  margin: 0 12px;
`

const Divider = styled.div`
  height: 16px;
  background-color: #e5e5e5;
  width: 1px;
`

const Text = styled.div`
  color: #444;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 0.8px;
  margin: 0 12px;
`

class TwitterLoginButton extends Component {
  render() {
    return (
      <Container>
        <Logo src={twitterUrl} />
        <Divider />
        <Text>SIGN IN WITH TWITTER</Text>
      </Container>
    )
  }
};

export default TwitterLoginButton;
