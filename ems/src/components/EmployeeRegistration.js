import React, { Component } from "react";
import "./EmployeeRegistration.css";
import withAuthorization from './withAuthorization';
import AuthUserContext from './AuthUserContext';


const EmployeeRegistration = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <form >
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr></hr>

                <label forhtml="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required/>

                <label forhtml="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                <label forhtml="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
                <hr></hr>
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <button type="submit" className="registerbtn">Register</button>
            </div>
            <div className="container signin">
            <p>Already have an account? <a href="/">Sign in</a>.</p>
            </div>
        </form>
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(EmployeeRegistration);