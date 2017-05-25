import cx from 'classnames';
import React from 'react';
import styled from 'styled-components';

const Container = styled.img`
  border-radius: 20px;
  width: 40px;
  height: 40px;
  user-select: none;
`
const Avatar = ({ url }) => {
  return <Container src={url} />
};

export default Avatar;
