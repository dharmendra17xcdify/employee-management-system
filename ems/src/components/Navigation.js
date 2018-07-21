import React from 'react';
import { Link } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
<div><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
<nav className="navbar navbar-inverse">
    <div className="container-fluid">
        <div className="navbar-header">
            <a className="navbar-brand" href="/">Xcdify EMS</a>
        </div>
        <ul className="nav navbar-nav">
            <li><Link to={routes.LANDING}>Landing</Link></li>
            <li><Link to={routes.HOME}>Home</Link></li>
            <li><Link to={routes.ACCOUNT}>Account</Link></li>
            <li><SignOutButton /></li>
            <li><a href="/employee-regitration">Add Employee</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
            <li><a href="/"><span className="glyphicon glyphicon-user"></span> Logout</a></li>
            <li><a href="/"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
    </div>
</nav>
</div>
{/* <ul>
  <li><Link to={routes.LANDING}>Landing</Link></li>
  <li><Link to={routes.HOME}>Home</Link></li>
  <li><Link to={routes.ACCOUNT}>Account</Link></li>
  <li><SignOutButton /></li>
</ul> */}

const NavigationNonAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>

//     <ul>
//       <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
//       <li><Link to={routes.LANDING}>Landing</Link></li>
//       <li><Link to={routes.HOME}>Home</Link></li>
//       <li><Link to={routes.ACCOUNT}>Account</Link></li>
//       <li><SignOutButton /></li>
//     </ul>
//   </div>

export default Navigation;