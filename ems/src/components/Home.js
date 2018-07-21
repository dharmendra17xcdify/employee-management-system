import React, { Component } from 'react';

import withAuthorization from './withAuthorization';
import { db } from '../firebase';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <div>
            <div className="container-fluid">
                <div className="row content">
                    <div className="col-sm-3 sidenav">
                        <h3>Employee List</h3>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search"/>
                            <span className="input-group-btn">
                            <button className="btn btn-primary" type="button">
                                <span className="glyphicon glyphicon-search"></span>
                            </button>
                            </span>
                        </div>
                        <ul className="nav nav-pills nav-stacked">
                            <li><a href ="">Employee</a></li>
                            <li><a href ="">Employee</a></li>
                        </ul><br></br>
                        
                    </div>
                    <div className="col-sm-9 jumbotron">
                        <div className="col-sm-4">
                            <div className="panel panel-primary">
                                <div className="panel-heading">Employee Details</div>
                                <div className="panel-body">
                                Panel Content
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="panel panel-primary">
                                <div className="panel-heading">Today's Check in / out</div>
                                <div className="panel-body">
                                Panel Content
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="panel panel-primary">
                                <div className="panel-heading">Yearly Leave Details</div>
                                <div className="panel-body">
                                Panel Content
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        { !!users && <UserList users={users} /> }
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);