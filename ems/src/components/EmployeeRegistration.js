import React from "react";
import "./EmployeeRegistration.css";
import withAuthorization from './withAuthorization';
import AuthUserContext from './AuthUserContext';
import FormValidator from './FormValidator';
import * as routes from '../constants/routes';

import firebase from "firebase";
// Required for side-effects
import "firebase/firestore";

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);
let db = firebase.firestore();

const INITIAL_STATE = {
  employeenumber: '',
  firstname: '',
  lastname: '',
  gender: '',
  address: '',
  mobile: '',
  qualification: '',
  university: '',
  fullname: '',
  dateofbirth: '',
  joiningdate: '',
  email: '',
  experience: '',
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class EmployeeRegistration extends React.Component {
  constructor(props) {
    super(props);
    
    this.validator = new FormValidator([
      { 
        field: 'employeenumber', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Employee Number is required.' 
      },
      { 
        field: 'firstname', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'First Name is required.' 
      },
      { 
        field: 'fullname', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Full name is required.' 
      },
      { 
        field: 'lastname', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Last name is required.' 
      },
      { 
        field: 'gender', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Gender is required.' 
      },
      { 
        field: 'address', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Address is required.' 
      },
      { 
        field: 'mobile', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Pleave provide a mobile number.'
      },
      {
        field: 'mobile', 
        method: 'matches',
        args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/], // args is an optional array of arguements that will be passed to the validation method
        validWhen: true, 
        message: 'That is not a valid mobile number.'
      },
      { 
        field: 'qualification', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Qualification is required.' 
      },
      { 
        field: 'university', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'University is required.'
      },
      { 
        field: 'dateofbirth', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Date of birth is required.'
      },
      { 
        field: 'joiningdate', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Joining date is required.'
      },
      { 
        field: 'experience', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Experience is required.'
      },
      { 
        field: 'email', 
        method: 'isEmpty', 
        validWhen: false, 
        message: 'Email is required.' 
      },
      { 
        field: 'email',
        method: 'isEmail', 
        validWhen: true, 
        message: 'That is not a valid email.'
      },
    ]);

    this.state = {
      ...INITIAL_STATE,
      validation: this.validator.valid(),
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.submitted = false;
  }

  handleInputChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  componentWillMount() {
    db.collection("employee").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
      });
    });
  }

  // componentWillUnmount() {
  //   this.firebaseRef.off();
  // }

  handleFormSubmit = event => {
    event.preventDefault();
    // let data = {
      
    // }
    const validation = this.validator.validate(this.state);
    this.setState({ validation, ...INITIAL_STATE });
    this.submitted = true;

    if (validation.isValid) {
      db.collection("employee").add({
        employeenumber: this.state.employeenumber,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        gender: this.state.gender,
        address: this.state.address,
        mobile: this.state.mobile,
        qualification: this.state.qualification,
        university: this.state.university,
        fullname: this.state.fullname,
        experience: this.state.experience,
        dateofbirth: this.state.dateofbirth,
        joiningdate: this.state.joiningdate,
        email: this.state.email
      })
      .then(function(docRef) {
          console.log("Employee saved with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error saving employee: ", error);
      });
    } 
  }

  render() {
    let validation = this.submitted ?                         // if the form has been submitted at least once
                      this.validator.validate(this.state) :   // then check validity every time we render
                      this.state.validation                   // otherwise just use what's in state

    return (
      <div>
        <form className="form-group">
            <div className="container">
                <h2>Fill Employee Information</h2>
                <p>Please fill in this form to create an employee Id.</p>
                <hr></hr>

                <div className={validation.employeenumber.isInvalid ? 'has-error' : ''}>
                  <label forhtml="employeenumber"><b>Employee Number</b></label>
                  <input className="form-control" 
                    type="text" 
                    placeholder="Enter Employee Number" 
                    maxLength={10} 
                    name="employeenumber" 
                    id="employeenumber"
                    onChange={event => this.setState(byPropKey('employeenumber', event.target.value), this.handleInputChange(event))}
                  />
                  <span className="help-block">{validation.employeenumber.message}</span>
                </div>

                <div className={validation.firstname.isInvalid ? 'has-error' : ''}>
                  <label forhtml="firstname"><b>First Name</b></label>
                  <input className="form-control" 
                    type="text" 
                    placeholder="Enter First Name" 
                    maxLength={30} 
                    name="firstname" 
                    onChange={event => this.setState(byPropKey('firstname', event.target.value), this.handleInputChange(event))}
                  />
                  <span className="help-block">{validation.firstname.message}</span>
                </div>

                <div className={validation.lastname.isInvalid ? 'has-error' : ''}>
                  <label forhtml="lastname"><b>Last Name</b></label>
                  <input className="form-control" 
                    type="text" 
                    placeholder="Enter Last Name" 
                    maxLength={30} 
                    name="lastname" 
                    onChange={event => this.setState(byPropKey('lastname', event.target.value), this.handleInputChange(event))}
                  />
                  <span className="help-block">{validation.lastname.message}</span>
                </div>

                <div className={validation.fullname.isInvalid ? 'has-error' : ''}>
                  <label forhtml="fullname"><b>Full Name</b></label>
                  <input className="form-control" 
                    type="text" 
                    placeholder="Enter Full Name" 
                    maxLength={50} 
                    name="fullname" 
                    onChange={event => this.setState(byPropKey('fullname', event.target.value), this.handleInputChange(event))}
                  />
                  <span className="help-block">{validation.fullname.message}</span>
                </div>

                <div className={validation.gender.isInvalid ? 'has-error' : ''}>
                  <label forhtml="gender"><b>Gender</b></label>
                  <select className="form-control"  name="gender" 
                  onChange={event => this.setState(byPropKey('gender', event.target.value), this.handleInputChange(event))} >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <span className="help-block">{validation.gender.message}</span>
                </div>

                <div className={validation.dateofbirth.isInvalid ? 'has-error' : ''}>
                  <label forhtml="dateofbirth"><b>Date of birth</b></label>
                  <input className="form-control" 
                    type="date" 
                    placeholder="Enter birth date" 
                    name="dateofbirth" 
                    onChange={event => this.setState(byPropKey('dateofbirth', event.target.value), this.handleInputChange(event))}
                  />
                  <span className="help-block">{validation.dateofbirth.message}</span>
                </div>

                <div className={validation.address.isInvalid ? 'has-error' : ''}>
                  <label forhtml="address">Address</label>
                  <textarea className="form-control" 
                    id="address" 
                    maxLength={200} 
                    rows="3"
                    name="address"
                    onChange={event => this.setState(byPropKey('address', event.target.value), this.handleInputChange(event))}
                  />
                  <span className="help-block">{validation.address.message}</span>
                </div>

                <div className={ validation.email.isInvalid ? 'has-error' : ''}>
                  <label forhtml="email"><b>Email</b></label>
                  <input className="form-control" 
                    type="email" 
                    placeholder="Enter email-id" 
                    name="email" 
                    onChange={event => this.setState(byPropKey('email', event.target.value), this.handleInputChange(event))}
                  />
                  <span className="help-block">{validation.email.message}</span>
                </div>

                <div className={ validation.mobile.isInvalid ? 'has-error' : ''}>
                  <label forhtml="mobile"><b>Mobile Number</b></label>
                  <input className="form-control" 
                    type="number" 
                    maxLength={10} 
                    placeholder="Enter Mobile Number" 
                    name="mobile" 
                    onChange={event => this.setState(byPropKey('mobile', event.target.value), this.handleInputChange(event))}
                  />
                  <span className="help-block">{validation.mobile.message}</span>
                </div>

                <div className={ validation.experience.isInvalid ? 'has-error' : ''}>
                  <label forhtml="experience"><b>Experience (in year)</b></label>
                  <input className="form-control" 
                    type="number" 
                    maxLength={10} 
                    placeholder="Enter experience" 
                    name="experience" 
                    onChange={event => this.setState(byPropKey('experience', event.target.value), this.handleInputChange(event))}
                  />
                  <span className="help-block">{validation.experience.message}</span>
                </div>

                <div className={validation.qualification.isInvalid ? 'has-error' : ''}>
                  <label forhtml="qualification"><b>Qualification</b></label>
                  <select className="form-control"  name="qualification" 
                  onChange={event => this.setState(byPropKey('qualification', event.target.value), this.handleInputChange(event))}>
                    <option value="">Select</option>
                    <option value="btech">BE/B.Tech</option>
                    <option value="mtech">ME/M.Tech</option>
                  </select>
                  <span className="help-block">{validation.qualification.message}</span>
                </div>

                <div className={validation.university.isInvalid ? 'has-error' : ''}>
                  <label forhtml="university"><b>University</b></label>
                  <input className="form-control" 
                    type="text" 
                    placeholder="Enter University Name" 
                    maxLength={50} 
                    name="university" 
                    onChange={event => this.setState(byPropKey('university', event.target.value), this.handleInputChange(event))}
                  />
                  <span className="help-block">{validation.university.message}</span>
                </div>

                <div className={validation.joiningdate.isInvalid ? 'has-error' : ''}>
                  <label forhtml="joiningdate"><b>Joining Date</b></label>
                  <input className="form-control" 
                    type="date" 
                    placeholder="Enter Joining date" 
                    name="joiningdate" 
                    onChange={event => this.setState(byPropKey('joiningdate', event.target.value), this.handleInputChange(event))}
                  />
                  <span className="help-block">{validation.joiningdate.message}</span>
                </div>

                <hr></hr>
                {/* <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> */}

                <button className="btn btn-primary" onClick={this.handleFormSubmit} type="submit">Save</button>
            </div>
        </form>
      </div>
    );
  }
  // <AuthUserContext.Consumer>
  //   {authUser =>
      
  //   }
  // </AuthUserContext.Consumer>
}
  

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(EmployeeRegistration);