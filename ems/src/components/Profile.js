import React, { Component } from "react";
//import withAuthorization from './withAuthorization';

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
}

export default Profile;
// const authCondition = (authUser) => !!authUser;

// export default withAuthorization(authCondition)(Profile);