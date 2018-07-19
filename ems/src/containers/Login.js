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
        <form onSubmit={this.handleSubmit}>
          <div className="Input_Field">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="Input_Field">
            <label htmlFor="password">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </div>
          <input className="btn btn-primary" type="submit" value="Login" disabled={!this.validateForm()} />
        </form>
        <Link to="/profile">Profile</Link>
      </div>
    );
  }
}

export default Login