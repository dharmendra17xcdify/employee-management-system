import React from 'react';
import { Link } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import { auth } from '../firebase';

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
            <li><Link to={routes.HOME}>Home</Link></li>
            <li><Link to={routes.ACCOUNT}>Account</Link></li>
            <li><Link to={routes.EMP_DETAILS}>Employee Detail</Link></li>
            <li><Link to={routes.PROFILE}>User Profile</Link></li>
            <li><Link to={routes.ADD_EMPLOYEE}>Add Employee</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
            <li><a href="/" onClick={auth.doSignOut}><span className="glyphicon glyphicon-user"></span> Logout</a></li>
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
<div><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
<nav className="navbar navbar-inverse">
    <div className="container-fluid">
        <div className="navbar-header">
            <a className="navbar-brand" href="/">Xcdify EMS</a>
        </div>
        <ul className="nav navbar-nav">
            <li><Link to={routes.SIGN_IN}><span className="glyphicon glyphicon-log-in"></span> Sign In</Link></li>
        </ul>
    </div>
</nav>
</div>
//   <ul>
//     <li><Link to={routes.LANDING}>Landing</Link></li>
//     <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
//   </ul>

//     <ul>
//       <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
//       <li><Link to={routes.LANDING}>Landing</Link></li>
//       <li><Link to={routes.HOME}>Home</Link></li>
//       <li><Link to={routes.ACCOUNT}>Account</Link></li>
//       <li><SignOutButton /></li>
//     </ul>
//   </div>

export default Navigation;