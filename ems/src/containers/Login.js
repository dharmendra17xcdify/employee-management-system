import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Login.css";

 class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
      <Link to="/home">Home</Link> | <Link to="/profile">Profile</Link> | <Link to="/employee-regitration">Register</Link>
        
        <form className="modal-content animate" action="/action_page.php">
          <div className="container">
            <label forhtml="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>

            <label forhtml="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
              
            <button type="submit">Login</button>
            <label>
              <input type="checkbox" name="remember"/> Remember me
            </label>
          </div>

          <div className="container">
            <button type="button"  className="cancelbtn">Cancel</button>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
      </div>
    );
  }
}

export default Login