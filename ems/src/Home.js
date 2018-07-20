import React, { Component } from "react";

class Home extends React.Component{

    render() {
        return <div><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">Xcdify EMS</a>
                </div>
                <ul className="nav navbar-nav">
                <li className="active"><a href="/home">Home</a></li>
                <li className=""><a href="/profile">Profile <span></span></a>
                </li>
                <li><a href="/employee-regitration">Add Employee</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                <li><a href="/"><span className="glyphicon glyphicon-user"></span> Logout</a></li>
                <li><a href="/"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
            </div>
            </nav>
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
                            <li><a href ="">Employee</a></li>
                            <li><a href ="">Employee</a></li>
                            <li><a href ="">Employee</a></li>
                            <li><a href ="">Employee</a></li>
                            <li><a href ="">Employee</a></li>
                            <li><a href ="">Employee</a></li>
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
    };
}

export default Home