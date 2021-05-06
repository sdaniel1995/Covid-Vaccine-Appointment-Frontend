import React, { Component } from 'react';
import { Route } from 'react-router';
import PatientProfile from './PatientProfile';
import PatientSignin from './PatientSignin';
import PatientRegistration from './PatientRegistration';
import Dashboard from './Dashboard';
import DashboardConfig from './DashboardConfig';
import Home from './Home';
import DistributorSignin from './DistributorSignin'
import DistributorDashboard from './DistributorDashboard'
import CreateAppointment from './CreateAppointment'
import FindAppointment from './FindAppointment'
import DistributorRegistration from './DistributorRegistration'

class Layout extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid mb-5 mt-5">
          <Route exact path="/" component={Home} />
          <Route path="/main" component={Home} />
          <Route path="/DistributorRegistration" component={DistributorRegistration} />
          <Route path="/PatientRegistration" component={PatientRegistration} />
          <Route path="/distsignin" component={DistributorSignin} />
          <Route path="/patientsignin" component={PatientSignin} />
          <Route path="/portal" component={PatientProfile} />
          <Route path="/dash" component={Dashboard} />
          <Route path="/dashconfig" component={DashboardConfig} />
          <Route path="/DistributorDashboard" component={DistributorDashboard} />
          <Route path="/CreateAppointment" component={CreateAppointment} />
          <Route path="/PatientProfile" component={PatientProfile} />
          <Route path="/FindAppointment" component={FindAppointment} />
        </div>
      </div>
    );
  }
}

export default Layout;