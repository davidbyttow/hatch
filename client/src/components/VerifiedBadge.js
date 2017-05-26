import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import checkUrl from '../assets/icon-check@2x.png';

const VerifiedBadge = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 32px;
  border: 2px solid white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.35);
  background-image: url(${checkUrl});
  background-size: cover;
  background-color: #1da1f2;
`;

export default VerifiedBadge;
