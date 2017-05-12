import cx from 'classnames';
import React, { Component, PropTypes } from 'react';

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
  };

  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <div className="Home-image" />
          {/* <form className="Home-form">
            <TextInput
              placeholder="Your email"
              className="Home-input"
              value={this.state.name}
              onChange={e => this.setState({ email: e.target.value })} />
            <TextInput
              placeholder="Your name"
              className="Home-input"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })} />
            </form> */}
        </div>
        <div className="Home-body">
          <p>
            Hello.
          </p>
          <p>
            My name is David Byttow and I’m seeking to represent California's District 10 in the United States House of Representatives.
          </p>
          <p>
            I grew up in Chicago, Illinois and relocated to California at the age of 19 to pursue my career dreams. Over that time, I worked as an engineer and leader at companies like Google and built successful companies.
          </p>
          <p>
            I am a technologist, <b>not a politician</b>. I am an outsider, <b>not a part of the establishment</b>.
          </p>
          <p>
            Like everyone, I am frustrated with the state of our government and those that represent us. Their priorities are misaligned with what Americans need. We can build a fair, progressive future that also prioritizes jobs and economic growth for middle and working class.
          </p>
          <p>
            I’m a progressive thinker and I will run as a Democrat against Rep. Jeff Denham. I’m far less interested in partisan politics and far more concerned with working hard to provide economic growth and opportunity for all.
          </p>
          <p>
            America is a global superpower and cultural trendsetter, and there is no reason why we can’t break down the economic, social, and educational barriers to give every American the opportunity to reach their full potential when they work for it.
          </p>
          <p>
            The election for California’s District 10 House seat is in <strong>{DAYS_LEFT} days</strong>, but I am starting small and starting now.
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
