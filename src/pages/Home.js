import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Homepage.css'


class Home extends Component {
  render() {
    return (
      <div className="" id="homepage">
        <h1>Home Page</h1>
        <Link to="/PatientRegistration" className="btn btn-primary m-2" id="patient-registration">Patient Register</Link>
        <Link to="/DistributorRegistration" className="btn btn-primary m-2" id="dist-registration">Distributor Registration</Link>
        <Link to="/distsignin" className="btn btn-primary m-2" id="dist-sign">Distributor Signin</Link>
        <Link to="/patientsignin" className="btn btn-primary m-2" id="patient-sign">Patient Signin</Link>
      </div>
    );
  }
}

export default Home;