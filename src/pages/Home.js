import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Homepage.css'


class Home extends Component {
  render() {
    return (
      <div id="homepage" className="fixed-top">
        <div className="jumbotron bg-transparent">
        <h1 className="display-1">Home Page</h1>
        </div>
        <Link to="/PatientRegistration" className="btn btn-lg btn-primary m-2" id="patient-registration">Patient Registration</Link>
        <Link to="/DistributorRegistration" className="btn btn-lg btn-primary m-2" id="dist-registration">Distributor Registration</Link>
        <Link to="/distsignin" className="btn btn-lg btn-primary m-2" id="dist-sign">Distributor Signin</Link>
        <Link to="/patientsignin" className="btn btn-lg btn-primary m-2" id="patient-sign">Patient Signin</Link>
      </div>
    );
  }
}

export default Home;