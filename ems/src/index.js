import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, withRouter}  from 'react-router-dom';
import './index.css';
import App from './components/App';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Profile from './components/Profile';
import EmployeeRegistration from './components/EmployeeRegistration';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
    <React.Fragment>
        <Route exact path="/" component={App}/> 
        {/* <Route exact path="/signin" component={SignIn}/> 
        <Route exact path="/home" component={Home}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/employee-regitration" component={EmployeeRegistration}/> */}
    </React.Fragment>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
