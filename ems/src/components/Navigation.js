import React from 'react';
import { Link } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import * as routes from '../constants/routes';
import { auth } from '../firebase';

const Navigation = () => {
    return <div><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Xcdify EMS</a>
                </div>
                {
                    <AuthUserContext.Consumer>
                        {authUser => authUser 
                        ? <div>
                            <ul className="nav navbar-nav">
                                <li><Link to={routes.HOME}>Home</Link></li>
                                <li><Link to={routes.ACCOUNT}>Account</Link></li>
                                <li><Link to={routes.ADD_EMPLOYEE}>Add Employee</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/" onClick={auth.doSignOut}><span className="glyphicon glyphicon-user"></span> Logout</a></li>
                            </ul>
                        </div>
                        : <ul className="nav navbar-nav">
                                <li><Link to={routes.SIGN_IN}><span className="glyphicon glyphicon-log-in"></span> Sign In</Link></li>
                          </ul>
                        }
                    </AuthUserContext.Consumer>
                }
            </div>
        </nav>
    </div>
}

export default Navigation;