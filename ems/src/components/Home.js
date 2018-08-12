import React, { Component } from 'react';
import Search from 'react-search';
import SearchInput, {createFilter} from 'react-search-input'
import _ from 'lodash';
import withAuthorization from './withAuthorization';
//import { db } from '../firebase';
import * as routes from '../constants/routes';
import { Link } from 'react-router-dom';
import './Home.css';
import firebase from "firebase";
// Required for side-effects
import "firebase/firestore";

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);
let db = firebase.firestore();

const KEYS_TO_FILTERS = ['firstname']

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
        empList: [],
        empData: [],
      users: null,
      employee: '',
      employeeDetails: {
        firstname: 'Dharmendra',
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

    this.searchEmployee = this.searchEmployee.bind(this)
  }

  searchEmployee (event) {
    this.setState({employee: event.target.value})
    //this.setState({value: event.target.value});
  }

  componentWillMount() {
    db.collection("employee").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          this.state.empList.push(doc.data().firstname);
          this.state.empData.push(doc.data());
          this.setState(() => ({ empList: this.state.empList }))
      });
    });
  }

//   componentDidMount() {
//     db.onceGetUsers().then(snapshot =>
//       this.setState(() => ({ users: snapshot.val() }))
//     );
//   }

  handleClick = (e) => {
      debugger
    let emp = _.find(this.state.empData, {firstname: e.target.innerText})
    
    if(emp){
        this.setState({
            employeeDetails: {
                name: emp.firstname,
                fullName: emp.fullname,
                imageUrl: emp.imageUrl,
                dob: emp.dateofbirth,
                email: emp.email,
                mobile: emp.mobile,
                experience: emp.experience,
                doj: emp.joiningdate,
                leavesAllotted: 12,
                leavesTaken: 6,
                checkIn: '10:13:25 AM',
                checkOut: '08:20:30 PM'
            }
        });
    }
  }

  render() {
    //const filteredEmployee = employeeData.filter(createFilter(this.state.employee, KEYS_TO_FILTERS))
    const { users } = this.state;
    return (
      <div>
        <div>
            <div className="container-fluid">
                <div className="row content">
                    <div className="col-sm-3 sidenav">
                        <h3>Employee List</h3>
                        <div className="input-group">
                            <input type="text" 
                            className="form-control" 
                            placeholder="Search"
                            onChange={this.searchEmployee}
                            />
                            <span className="input-group-btn">
                            <button className="btn btn-primary" type="button">
                                <span className="glyphicon glyphicon-search"></span>
                            </button>
                            </span>
                        </div>
                        <ul className="nav nav-pills nav-stacked">
                            <li className="employee" 
                            onClick={this.handleClick.bind(this)}>{this.state.empList.map((title) => <Employee title={title} key={title}/>)}</li>
                        </ul><br></br>
                    </div>
                    <div className="col-sm-9 jumbotron">
                        <div className="col-sm-4">
                            <div className="panel panel-primary">
                                <div className="panel-heading">Employee Card</div>
                                <div className="panel-body">
                                <strong>Name: </strong>{this.state.employeeDetails.fullName}<br/>
                                <strong>Email: </strong>{this.state.employeeDetails.email}<br/>
                                <strong>Mobile: </strong>{this.state.employeeDetails.mobile}<br/>
                                <strong>DOJ: </strong>{this.state.employeeDetails.doj}<br/>
                                <strong>DOB: </strong>{this.state.employeeDetails.dob}<br/>
                                <strong>Experience: </strong>{this.state.employeeDetails.experience}
                                <p><Link to={routes.EMP_DETAILS}>View Details</Link></p>
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