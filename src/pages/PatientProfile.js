import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PatientProfile extends Component {
    render() {
        return (
            <div className="container">
                <h1>Employee Portal</h1>
                <p>central hub for employees to navagate REM</p>
                <Link to="/" className="btn btn-primary">Main</Link>
            </div>
        );
    }
}

export default PatientProfile;
