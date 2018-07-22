import React, { Component } from 'react';
import _ from 'lodash';
import withAuthorization from './withAuthorization';
import { db } from '../firebase';

const employees = ['Dharmendra', 'Vaibhav', 'Yogesh', 'Srivats', 'Anurag'];

const employeeData = [
    {
        name: 'Dharmendra',
        fullName: 'Dharmendra Yadav',
        imageUrl: 'images/authors/marktwain.jpg',
        dob: '17/08/1993',
        email: 'dharmendra17893@gmail.com',
        mobile: 8108401991,
        experience: '1 Year',
        doj: '01/06/2017'

    },
    {
        name: 'Vaibhav',
        fullName: 'Vaibhav Agrawal',
        imageUrl: 'images/authors/marktwain.jpg',
        dob: '17/08/1993',
        email: 'dharmendra17893@gmail.com',
        mobile: 8108401991,
        experience: '1 Year',
        doj: '01/06/2017'
    },
    {
        name: 'Yogesh',
        fullName: 'Yogesh Dhami',
        imageUrl: 'images/authors/marktwain.jpg',
        dob: '17/08/1993',
        email: 'dharmendra17893@gmail.com',
        mobile: 8108401991,
        experience: '1 Year',
        doj: '01/06/2017'
    },
    {
        name: 'Srivats',
        fullName: 'Srivats Krishnan',
        imageUrl: 'images/authors/marktwain.jpg',
        dob: '17/08/1993',
        email: 'dharmendra17893@gmail.com',
        mobile: 8108401991,
        experience: '1 Year',
        doj: '01/06/2017'
    },
    {
        name: 'Anurag',
        fullName: 'Anurag Maratha',
        imageUrl: 'images/authors/marktwain.jpg',
        dob: '17 Aug 1993',
        email: 'dharmendra17893@gmail.com',
        mobile: 8108401991,
        experience: '1 Year',
        doj: '01/06/2017'
    }
];

function Employee ({title, onClick}) {
    return (<div className="answer">
    <h4 value={title} data-id={title}>{title}</h4>
    </div>
    );
  }

  

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
      name: '',
      employeeDetails: {
        name: 'Dharmendra',
        fullName: 'Dharmendra Yadav',
        imageUrl: 'images/authors/marktwain.jpg',
        dob: '17/08/1993',
        email: 'dharmendra17893@gmail.com',
        mobile: 8108401991,
        experience: '1 Year',
        doj: '01/06/2017'
      }
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  handleClick = (e, data) => {
    // access to e.target here
    console.log(e.target.innerText);
    let emp = _.find(employeeData, {name: e.target.innerText})

    this.setState({
        employeeDetails: {
            name: emp.name,
            fullName: emp.fullName,
            imageUrl: emp.imageUrl,
            dob: emp.dob,
            email: emp.email,
            mobile: emp.mobile,
            experience: emp.experience,
            doj: emp.doj
        }
    });
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
                            <li value={employees} onClick={this.handleClick.bind(this)}>{employees.map((title) => <Employee title={title} key={title}/>)}</li>
                        </ul><br></br>
                    </div>
                    <div className="col-sm-9 jumbotron">
                        <div className="col-sm-4">
                            <div className="panel panel-primary">
                                <div className="panel-heading">Employee Details</div>
                                <div className="panel-body">
                                Name: {this.state.employeeDetails.fullName}<br/>
                                Email: {this.state.employeeDetails.email}<br/>
                                Mobile: {this.state.employeeDetails.mobile}<br/>
                                DOJ: {this.state.employeeDetails.doj}<br/>
                                DOB: {this.state.employeeDetails.dob}
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