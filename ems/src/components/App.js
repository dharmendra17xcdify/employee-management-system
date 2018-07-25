import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import EmployeeDetails from './Employee';
import EmployeeRegistration from './EmployeeRegistration';
import Profile from './Profile';

import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';

const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr/>

      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.EMP_DETAILS} component={() => <EmployeeDetails />} />
      <Route exact path={routes.ADD_EMPLOYEE} component={() => <EmployeeRegistration />} />
      <Route exact path={routes.PROFILE} component={() => <Profile />} />
      <footer className="container-fluid footer text-center">
        <p>Developed By  <a href="http://www.Xcdify.com/">www.Xcdify.com</a></p> 
      </footer>
    </div>
  </Router>

export default withAuthentication(App);