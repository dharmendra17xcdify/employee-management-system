import React, { Component } from 'react';
import _ from 'lodash';
import withAuthorization from './withAuthorization';
import './Home.css';
import firebase from "firebase";
// Required for side-effects
import "firebase/firestore";

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);
let db = firebase.firestore();

function Employee ({title, onClick}) {
    return (<div>
    <h4 className="selected" value={title} data-id={title}>{title}</h4>
    </div>
    );
}

class EmployeeDetails extends React.Component {
    render(){
        const { details } = this.props;

        return <div className="row">
            <div className="col-xs-12 col-sm-12 toppad" >
                <div className="panel panel-info">
                    <div className="user-name background-blue">
                        <h3>Employee Details</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                        <div className=" col-md-12 col-lg-12 "> 
                        <table className="table table-user-information">
                            <tbody>
                                <tr>
                                    <td><strong>Employee Code</strong></td>
                                    <td>{details.employeenumber}</td>
                                </tr>
                                <tr>
                                    <td><strong>User Name</strong></td>
                                    <td>{details.fullName}</td>
                                </tr>
                                <tr>
                                    <td><strong>First Name</strong></td>
                                    <td>{details.firstname}</td>
                                </tr>
                                <tr>
                                    <td><strong>Last Name</strong></td>
                                    <td>{details.lastname}</td>
                                </tr>
                                <tr>
                                    <td><strong>Date of Birth</strong></td>
                                    <td>{details.dob}</td>
                                </tr>
                                <tr>
                                    <td><strong>Gender</strong></td>
                                    <td>{details.gender}</td>
                                </tr>
                                <tr>
                                    <td><strong>Address</strong></td>
                                    <td>{details.address}</td>
                                </tr>
                                <tr>
                                    <td><strong>Qualification</strong></td>
                                    <td>{details.qualification}</td>
                                </tr>
                                <tr>
                                    <td><strong>University</strong></td>
                                    <td>{details.university}</td>
                                </tr>
                                <tr>
                                    <td><strong>Experience</strong></td>
                                    <td>{details.experience}</td>
                                </tr>
                                <tr>
                                    <td><strong>Email</strong></td>
                                    <td>{details.email}</td>
                                </tr>
                                <tr>
                                    <td><strong>Mobile Number</strong></td>
                                    <td>{details.mobile}</td>
                                </tr>
                                <tr>
                                    <td><strong>Address</strong></td>
                                    <td>{details.address}</td>
                                </tr>
                                <tr>
                                    <td><strong>Joining Date</strong></td>
                                    <td>{details.doj}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
        loading: true,
        empList: [],
        empData: [],
        isDetails: false,
        users: null,
        employeeDetails: {
            leavesAllotted: 12,
            leavesTaken: 6,
            checkIn: '10:13:25 AM',
            checkOut: '08:20:30 PM'
        }
    };
  }

  componentWillReceiveProps(){
    this.setState({
        isDetails: false,
    });
  }
  
  componentWillMount() {
      const data = [];
      const name = [];
    db.collection("employee").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        name.push(doc.data().firstname);
        data.push(doc.data());
        this.setState(() => ({ 
            empList: name,
            empData: data, 
            loading: false 
        }))
      });
    });
  }

  handleClick = (name) => {
    let emp = _.find(this.state.empData, {firstname: name})
    
    if(emp){
        this.setState({
            employeeDetails: {
                employeenumber: emp.employeenumber,
                firstname: emp.firstname,
                lastname: emp.lastname,
                fullName: emp.firstname + " " + emp.lastname,
                gender: emp.gender,
                address: emp.address,
                qualification: emp.qualification,
                university: emp.university,
                imageUrl: emp.imageUrl,
                dob: emp.dateofbirth,
                email: emp.email,
                mobile: emp.mobile,
                experience: emp.experience,
                doj: emp.joiningdate,
                leavesAllotted: 12,
                leavesTaken: 6,
                checkIn: '10:13:25 AM',
                checkOut: '08:20:30 PM',
            }
        });
    }
  }

  viewDetails() {
      this.setState({
        isDetails: true,
      });
  };

  render() {
    const { loading } = this.state;

    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return <div className="loader"></div>; // render null when app is not ready
    }

    if (this.state.isDetails) {
        return (
        <EmployeeDetails details={this.state.employeeDetails}></EmployeeDetails>
        )
    }
    
    return (
      <div className="loader">
        <div>
            <div className="container-fluid">
                <div className="row content">
                    <div className="col-sm-3 sidenav">
                        <h3>Employee List</h3>
                        <hr/>
                        <ul className="nav nav-pills nav-stacked">
                        {
                            this.state.empList.map((title) =>
                            <li key={title} className="employee" onClick={()=>this.handleClick(title)}>
                                 <Employee title={title} />
                            </li>
                        )}
                        </ul><br></br>
                    </div>
                    <div className="col-sm-9 jumbotron">
                        {this.state.employeeDetails.fullName === undefined &&
                            <div>
                                <p>Select an employee</p>
                            </div>
                        }
                        {this.state.employeeDetails.fullName !== undefined &&
                        <div>
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
                                <button className="btn btn-primary" onClick={this.viewDetails.bind(this)}>View Details</button>
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
                        }
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);