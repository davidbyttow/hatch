import cx from 'classnames';
import React, { Component, PropTypes } from 'react';

import { rpc } from './net';

import './Home.css';

const ONE_DAY = 24 * 60 * 60 * 1000;
const ELECTION_DATE = new Date(2018, 11, 6);
const DAYS_LEFT = Math.round(Math.abs((ELECTION_DATE.getTime() - Date.now())) / ONE_DAY);

class TextInput extends Component {

  static propTypes = {
    className: PropTypes.any,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
  }

  static defaultProps = {
    type: 'text',
    value: '',
  }

  render() {
    const { type, placeholder, className, value, ...props } = this.props;
    return (
      <input
        type={type}
        className={cx('TextInput', className)}
        placeholder={placeholder}
        value={value}
        {...props} />
    );
  }
}

class Home extends Component {

  state = {
    name: '',
    email: '',
    submitted: false,
  };

  _validated() {
    return this.state.email.length > 4 && this.state.name.length > 4;
  }

  _handleSubmit = () => {
    const { email, name } = this.state;
    rpc('/api/join', { email, name });
    this.setState({ submitted: true });
  }

  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <div className="Home-image" />
          <p></p>
          { !this.state.submitted ? (
            <form className="Home-form">
              <TextInput
                placeholder="Type your email"
                className="Home-input"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })} />
              <TextInput
                placeholder="Type your name"
                className="Home-input"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })} />
              <button
                className="Home-button"
                onClick={this._handleSubmit}
                disabled={!this._validated()}>
                Subscribe to David
              </button>
            </form>
          ) : <p>Thank you! An email was sent to {this.state.email}.</p>}
        </div>
        <div className="Home-body">
          <p>
            Hello,
          </p>
          <p>
            My name is David Byttow and I’m seeking to represent <b>California District 10</b> in the United States House of Representatives by unseating Rep. Jeff Denham (R) in 2018.
          </p>
          <p>
            I grew up in Chicago, IL and moved to California at 19 to pursue a career in software engineering. Since then, I’ve worked as an engineering leader at companies like Google and Square and started several companies of my own.
          </p>
          <p>
            I am a fighter, <b>not a follower</b>.<br/>
            I am a technologist, <b>not a politician</b>.<br/>
            I am an outsider, <b>not a part of the establishment</b>.<br/>
          </p>
          <p>
            I’m angry with the state of our government. The Republican agenda is misaligned with the actual needs of the middle class. I believe we can embrace a bright, progressive future and agenda centered around economic growth and job creation for hard-working citizens.
          </p>
          <p>
            As a progressive leader, I will run as a Democrat. I’m far less interested in partisan politics and far more concerned with holding our government accountable and serving the needs of American citizens.
          </p>
          <p>
            America is a global superpower and cultural trend-setter, we can break down the economic, social, and educational barriers to give every free American the opportunities they deserve.
          </p>
          <p>
            The election for California’s District 10 House seat is in <strong>{DAYS_LEFT} days</strong>, and I am starting small and starting now.
          </p>
          <p>
            Sincerely,
          </p>
          <div className="Home-signature" />
          <p>
            David Byttow
          </p>
          <p>
            Join me on this journey and follow me on Twitter <a href="https://twitter.com/davidbyttow">@davidbyttow</a>.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
