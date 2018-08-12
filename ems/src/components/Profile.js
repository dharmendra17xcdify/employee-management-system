import React from "react";
import withAuthorization from './withAuthorization';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render(){
        return <div className="row">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
            <div className="col-xs-12 col-sm-12 toppad" >
                <div className="panel panel-info">
                    <div className="user-name background-blue">
                        <h2>Profile Details</h2>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                        <div className=" col-md-12 col-lg-12 "> 
                        <table className="table table-user-information">
                            <tbody>
                                <tr>
                                    <td><b>User Name</b></td>
                                    <td>DHARMENDRA YADAV</td>
                                </tr>
                                <tr>
                                    <td><b>First Name</b></td>
                                    <td>DHARMENDRA</td>
                                </tr>
                                <tr>
                                    <td><b>Last Name</b></td>
                                    <td>YADAV</td>
                                </tr>
                                <tr>
                                    <td><b>Joining Date</b></td>
                                    <td>01/03/2017</td>
                                </tr>
                                <tr>
                                    <td><b>Date of Birth</b></td>
                                    <td>17/081993</td>
                                </tr>
                                <tr>
                                    <td><b>Gender</b></td>
                                    <td>Male</td>
                                </tr>
                                <tr>
                                    <td><b>Experience</b></td>
                                    <td>2 Years</td>
                                </tr>
                                <tr>
                                    <td><b>Email</b></td>
                                    <td>dharmendra17893@gmail.com</td>
                                </tr>
                                <tr>
                                    <td><b>Mobile Number</b></td>
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
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Profile);