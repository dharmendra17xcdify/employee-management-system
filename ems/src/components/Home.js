import React, { Component } from 'react';
import _ from 'lodash';
import withAuthorization from './withAuthorization';
import { db } from '../firebase';
import './Home.css';

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
        doj: '01/06/2017',
        leavesAllotted: 12,
        leavesTaken: 6,
        checkIn: '10:13:25 AM',
        checkOut: '08:20:30 PM'

    },
    {
        name: 'Vaibhav',
        fullName: 'Vaibhav Agrawal',
        imageUrl: 'images/authors/marktwain.jpg',
        dob: '04/04/1991',
        email: 'vaibhav.agrawal@xcdify.com',
        mobile: 8147286210,
        experience: '5 Years',
        doj: '01/12/2016',
        leavesAllotted: 12,
        leavesTaken: 5,
        checkIn: '10:05:25 AM',
        checkOut: '08:20:30 PM'
    },
    {
        name: 'Yogesh',
        fullName: 'Yogesh Dhami',
        imageUrl: 'images/authors/marktwain.jpg',
        dob: '05/11/1988',
        email: 'yogesh.dhami@xcdify.com',
        mobile: 7987225434,
        experience: '3 Year',
        doj: '01/06/2016',
        leavesAllotted: 12,
        leavesTaken: 2,
        checkIn: '10:05:25 AM',
        checkOut: '08:00:30 PM'
    },
    {
        name: 'Srivats',
        fullName: 'Srivats Krishnan',
        imageUrl: 'images/authors/marktwain.jpg',
        dob: '17/08/1993',
        email: 'shrivats@gmail.com',
        mobile: 9825369988,
        experience: '1 Year',
        doj: '01/08/2017',
        leavesAllotted: 12,
        leavesTaken: 4,
        checkIn: '10:11:25 AM',
        checkOut: '08:15:30 PM'
    },
    {
        name: 'Anurag',
        fullName: 'Anurag Maratha',
        imageUrl: 'images/authors/marktwain.jpg',
        dob: '17 Aug 1993',
        email: 'anurag@gmail.com',
        mobile: 8822556644,
        experience: 'Fresher',
        doj: '01/05/2018',
        leavesAllotted: 12,
        leavesTaken: 1,
        checkIn: '10:15:25 AM',
        checkOut: '08:10:30 PM'
    }
];

function Employee ({title, onClick}) {
    return (<div>
    <h4 className="selected" value={title} data-id={title}>{title}</h4>
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
        doj: '01/06/2017',
        leavesAllotted: 12,
        leavesTaken: 6,
        checkIn: '10:13:25 AM',
        checkOut: '08:20:30 PM'
      }
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  handleClick = (e) => {
    // access to e.target here
    console.log(e.target.innerText);
    let emp = _.find(employeeData, {name: e.target.innerText})

    if(emp){
        this.setState({
            employeeDetails: {
                name: emp.name,
                fullName: emp.fullName,
                imageUrl: emp.imageUrl,
                dob: emp.dob,
                email: emp.email,
                mobile: emp.mobile,
                experience: emp.experience,
                doj: emp.doj,
                leavesAllotted: emp.leavesAllotted,
                leavesTaken: emp.leavesTaken,
                checkIn: emp.checkIn,
                checkOut: emp.checkOut
            }
        });
    }
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
                            <li className="employee" value={employees} onClick={this.handleClick.bind(this)}>{employees.map((title) => <Employee title={title} key={title}/>)}</li>
                        </ul><br></br>
                    </div>
                    <div className="col-sm-9 jumbotron">
                        <div className="col-sm-4">
                            <div className="panel panel-primary">
                                <div className="panel-heading">Employee Details</div>
                                <div className="panel-body">
                                <strong>Name: </strong>{this.state.employeeDetails.fullName}<br/>
                                <strong>Email: </strong>{this.state.employeeDetails.email}<br/>
                                <strong>Mobile: </strong>{this.state.employeeDetails.mobile}<br/>
                                <strong>DOJ: </strong>{this.state.employeeDetails.doj}<br/>
                                <strong>DOB: </strong>{this.state.employeeDetails.dob}<br/>
                                <strong>Experience: </strong>{this.state.employeeDetails.experience}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="panel panel-primary">
                                <div className="panel-heading">Today's Check in / out</div>
                                <div className="panel-body">
                                <strong>CheckIn Time: </strong>{this.state.employeeDetails.checkIn}<br/>
                                <strong>CheckOut Time: </strong>{this.state.employeeDetails.checkOut}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="panel panel-primary">
                                <div className="panel-heading">Yearly Leave Details</div>
                                <div className="panel-body">
                                <strong>Leaves Allotted: </strong>{this.state.employeeDetails.leavesAllotted}<br/>
                                <strong>Leaves Taken: </strong>{this.state.employeeDetails.leavesTaken}
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