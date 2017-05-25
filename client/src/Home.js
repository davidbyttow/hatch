import cx from 'classnames';
import React, { Component, PropTypes } from 'react';

import { rpc } from './net';

import './Home.css';

const styles = {
  card: {
    minWidth: 400,
    width: 400,
    height: 450,
    boxShadow: '0 2px 8px 4px rgba(0, 0, 0, 0.1)',
    margin: 16,
    padding: 24,
    backgroundColor: 'white',
  },
  header: {
    height: 120,
    backgroundColor: 'white',
    boxShadow: '0 2px 2px 1px rgba(0, 0, 0, 0.1)',
    marginBottom: 32,
  },
  cardList: {
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
};

class Card extends Component {
  render() {
    return (
      <div style={styles.card}>{this.props.children}</div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.header}>

        </div>
        <div style={styles.cardList}>
          <Card>Idea one</Card>
          <Card>This is a really good idea</Card>
          <Card>This not a good idea</Card>
          <Card>Idea four</Card>
          <Card>Where are the good ideas?</Card>
          <Card>Who are you?</Card>
        </div>
      </div>
    );
  }
}

export default Home;
