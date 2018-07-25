import React from 'react';

import AuthUserContext from './AuthUserContext';
import withAuthorization from './withAuthorization';

const EmployeeDetails = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div className="row">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
          <div className="col-xs-12 col-sm-12 toppad" >
              <div className="panel panel-info">
                  <div className="user-name background-blue">
                      <h3 className="panel-title">Profile Details</h3>
                  </div>
                  <div className="panel-body">
                      <div className="row">
                      <div className=" col-md-12 col-lg-12 "> 
                      <table className="table table-user-information">
                          <tbody>
                              <tr>
                                  <td>User Name</td>
                                  <td>DHARMENDRA YADAV</td>
                              </tr>
                              <tr>
                                  <td>First Name</td>
                                  <td>DHARMENDRA</td>
                              </tr>
                              <tr>
                                  <td>Last Name</td>
                                  <td>YADAV</td>
                              </tr>
                              <tr>
                                  <td>Joining Date</td>
                                  <td>01/03/2017</td>
                              </tr>
                              <tr>
                                  <td>Date of Birth</td>
                                  <td>17/081993</td>
                              </tr>
                              <tr>
                                  <td>Gender</td>
                                  <td>Male</td>
                              </tr>
                              <tr>
                                  <td>Experience</td>
                                  <td>2 Years</td>
                              </tr>
                              <tr>
                                  <td>Email</td>
                                  <td>dharmendra17893@gmail.com</td>
                              </tr>
                              <tr>
                                  <td>Mobile Number</td>
                                  <td>8108401991</td>
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
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(EmployeeDetails);

// import React, {Component} from 'react';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import withAuthorization from './withAuthorization';

// class EmployeeDetails extends Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             data: {}
//         }
//     }

//     // componentDidMount() {
//     //     this.setState({
//     //         data : this.state.employeeDetails,
//     //     })
//     // }
      
//     render(){
// 		return ( <div><h2>Employee Details</h2>
// 			<div className="emp-container">
// 			<div className="emp-details">
// 				 <BootstrapTable   hover={true}>
// 				      <TableHeaderColumn dataField="name" isKey={true} >Name</TableHeaderColumn>
// 					  <TableHeaderColumn dataField="email" >Email</TableHeaderColumn>
// 					  <TableHeaderColumn dataField="mobile" >Mobile</TableHeaderColumn>
// 					  <TableHeaderColumn dataField="doj" >Date of Joining</TableHeaderColumn>
// 				      <TableHeaderColumn dataField="dob" >Date of Birth</TableHeaderColumn>
// 					  <TableHeaderColumn dataField="experiance"  >Experience</TableHeaderColumn>
// 				  </BootstrapTable>
// 			</div>
// 			</div>
//             </div>
//         )
// 	}
// }

// const authCondition = (authUser) => !!authUser;

// export default withAuthorization(authCondition)(EmployeeDetails);