import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import "./SignIn.css";

const SignInPage = ({ history }) =>
  <div>
    <SignInForm history={history} />
    
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return ( 
    <div className="Login">
    <h2 align="center">Sign In</h2>
      <form className="modal-content animate" onSubmit={this.onSubmit}>
      <div className="signin">
      <label forhtml="uname"><b>Email</b></label>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <label forhtml="psw"><b>Password</b></label>
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
        <label>
              <input type="checkbox" name="remember"/> Remember me
        </label>

        { error && <p>{error.message}</p> }
        <PasswordForgetLink />
        <SignUpLink />
        </div>
      </form>
    </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};