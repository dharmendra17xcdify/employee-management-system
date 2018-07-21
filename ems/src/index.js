import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, withRouter}  from 'react-router-dom';
import './index.css';
import App from './components/App';
import Login from '../src/containers/Login';
import Profile from './Profile';
import EmployeeRegistration from './EmployeeRegistration'
import registerServiceWorker from './registerServiceWorker';
import Home from './Home';

ReactDOM.render(
<BrowserRouter>
    <React.Fragment>
        <Route exact path="/" component={App}/> 
        {/* <Route exact path="/login" component={Login}/> 
        <Route exact path="/home" component={Home}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/employee-regitration" component={EmployeeRegistration}/> */}
    </React.Fragment>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
