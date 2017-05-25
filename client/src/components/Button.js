import cx from 'classnames';
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 6px;
  background-color: #fbfbfb;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #e5e5e5;
  display: flex;
  flex-direction: column;
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

const Button = ({ onClick, children, className }) => <Container className={className} onClick={onClick}>{children}</Container>;

export default Button;
