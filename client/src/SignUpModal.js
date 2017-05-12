import cx from 'classnames';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { rpc } from './net';

import './SignUpModal.css';

const RECAPTCHA_API_SITE_KEY = '6Lc2BCEUAAAAAAU41Te8Le9_RWc-Rf0h1fMYVrZ_';

const createEmitter = () => {
  const listeners = {};
  return {
    emit(...args) {
      Object.keys(listeners).map(k => listeners[k](...args));
    },
    addListener(fn) {
      listeners[fn] = fn;
    },
    removeListener(fn) {
      delete listeners[fn];
    },
  };
};

const recaptchaEmitter = createEmitter();

let recaptchaApi = window.grecaptcha || undefined;
if (!recaptchaApi) {
  window.onRecaptchaLoaded = () => {
    recaptchaApi = window.grecaptcha;
    recaptchaEmitter.emit(recaptchaApi);
  };
}

class Recaptcha extends Component {

  _widgetId;

  static propTypes = {
    className: PropTypes.any,
    onVerify: PropTypes.func,
  };

  static defaultProps = {
    onVerify: () => {},
  };

  componentDidUpdate() {
    this._renderWidget();
  }

  _renderWidget = () => {
    if (this._widgetId !== undefined) {
      return;
    }
    if (!recaptchaApi) {
      recaptchaEmitter.addListener(this._renderWidget);
      return;
    }
    recaptchaEmitter.removeListener(this._renderWidget);
    const el = ReactDOM.findDOMNode(this.refs.container);
    this._widgetId = recaptchaApi.render(el, {
      sitekey: RECAPTCHA_API_SITE_KEY,
      callback: this._onVerify,
      theme: 'light',
      size: 'invisible',
      badge: 'bottomright',
    });
  }

  _onVerify = (verification) => {
    this.props.onVerify(verification);
  };

  render() {
    setTimeout(this._renderWidget);
    const { className } = this.props;
    return <div ref="container" className={cx(className, 'g-recaptcha')} />;
  }
}

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

class SignUpModal extends Component {

  state = {
    fields: {
      firstName: '',
      lastName: '',
      email: '',
      zipCode: '',
    },
    verification: undefined,
    submitted: false,
  }

  _handleSubmit = () => {
    if (!this._canSubmit()) {
      return;
    }
    recaptchaApi.execute();
  }

  _handleVerify = (verification) => {
    this.setState({ verification });
    if (this._canSubmit()) {
      this._submit();
    }
  };

  _handleFieldChanged = (e, field) => {
    const fields = {
      ...this.state.fields,
      [field]: e.target.value,
    };
    this.setState({ fields });
  };

  _submit = () => {
    const { email, firstName, lastName, zipCode } = this.state.fields;
    rpc('/api/join', { email, firstName, lastName, zipCode });
    this.setState({ submitted: true });
  }

  _canSubmit() {
    const { fields } = this.state;
    const { email, firstName, lastName, zipCode } = fields;
    const parts = email.trim().split('@');
    if (parts.length !== 2 || parts[1].indexOf('.') < 1) {
      return false;
    }
    if (email.length && zipCode.length === 5 && firstName.length && lastName.length) {
      return true;
    }
    return false;
  }

  render() {
    const { fields, submitted } = this.state;
    const { firstName, lastName, email, zipCode } = fields;

    if (submitted) {
      return (
        <div className={this.props.className}>
          <div className="Inner-Modal">
            <div className="Thanks">
              <p className="Thanks-header">Thanks!</p>
              <p className="Thanks-message">
                Thank you for joining WTF, {firstName} {lastName}.
                Look out for our progress updates via email.
              </p>
              <a className="twitter-share-button"
                href="https://twitter.com/share?text=Check%20out%20Win%20The%20Future%20@WinTheFutureHQ%20">
                Share on Twitter
              </a>
            </div>
          </div>
          <button
            className="close-button"
            onClick={this.props.closeModal}>×</button>
        </div>
      );
    }
    return (
      <div className={this.props.className}>
        <div className="Inner-Modal">
          <div className="form">
            <h1>Sign up</h1>
            <div className="line" />
            <div className="Inner-Modal-name-input">
              <TextInput
                placeholder="First name"
                className="Inner-Modal-input"
                value={firstName}
                onChange={e => this._handleFieldChanged(e, 'firstName')} />
              <div className="dividing-line" />
              <TextInput
                placeholder="Last name"
                className="Inner-Modal-input"
                value={lastName}
                onChange={e => this._handleFieldChanged(e, 'lastName')} />
              </div>
              <div className="line" />
              <TextInput
                placeholder="Email"
                className="Inner-Modal-input"
                value={email}
                onChange={e => this._handleFieldChanged(e, 'email')} />
              <div className="line" />
              <TextInput
                placeholder="Zip code"
                className="Inner-Modal-input"
                value={zipCode}
                onChange={e => this._handleFieldChanged(e, 'zipCode')} />
              <div className="line" />
              <Recaptcha
                onVerify={this._handleVerify}
                className="Inner-Modal-captcha"
              />
            <button
              className="Register-button"
              onClick={this._handleSubmit}
              disabled={!this._canSubmit()}>
              REGISTER
            </button>
          </div>
          <button
            className="close-button"
            onClick={this.props.closeModal}>×</button>
        </div>
      </div>
    );
  }
}

export default SignUpModal;
