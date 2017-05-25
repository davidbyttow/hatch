import cx from 'classnames';
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import Button from './Button';

const Container = styled(Button)`
  width: 64px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Emoji = styled.span`
  font-family: AppleColorEmoji;
  font-size: 16px;
  margin-top: -5px;
  margin-right: 8px;
`;

const Count = styled.span`
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
      <Container onClick={() => this.setState({ count: this.state.count + 1 })}>
        <Emoji>🙌</Emoji>
        <Count>{this.state.count}</Count>
      </Container>
    )
  }
};

export default LikeButton;
