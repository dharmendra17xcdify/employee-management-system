import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, withRouter}  from 'react-router-dom';
import './index.css';
import App from './App';
import Login from '../src/containers/Login';
import Profile from './Profile';
import EmployeeRegistration from './EmployeeRegistration'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
    <React.Fragment>
        <Route exact path="/" component={Login}/> 
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/employee-regitration" component={EmployeeRegistration}/>
    </React.Fragment>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
