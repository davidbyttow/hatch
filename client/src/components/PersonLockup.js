import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import Avatar from './Avatar';
import VerifiedBadge from './VerifiedBadge';

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
  color: #2c3339;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  flex: 1;
  align-items: center;
`;

const PersonTwitterHandle = styled.span`
  font-size: 12px;
  color: #8b99a6;
  opacity: 0.9;
`;

const Badge = styled(VerifiedBadge)`
  margin-left: 6px;
`

class PersonLockup extends Component {
  render() {
    return (
      <PersonLockupStyle onClick={() => window.open(`https://twitter.com/${this.props.twitterHandle}`)}>
        <Avatar url={this.props.avatarUrl} />
        <PersonInfo>
          <PersonName>{this.props.name}{this.props.verified && <Badge />}</PersonName>
          <PersonTwitterHandle>{this.props.twitterHandle}</PersonTwitterHandle>
        </PersonInfo>
      </PersonLockupStyle>
    );
  }
}

export default PersonLockup;
