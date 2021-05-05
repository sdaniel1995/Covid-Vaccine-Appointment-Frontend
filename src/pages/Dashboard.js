import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Here's your dashboard!!</h1>
          </div>
          <div className="col"></div>
          <div className="col">
            <Link to="/dashconfig" className="btn btn-primary">Manage Dashboard</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;