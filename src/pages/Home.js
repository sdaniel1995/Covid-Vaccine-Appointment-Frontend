import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1>Home Page</h1>
                <p>skeletal settup for the home page</p>
                <Link to="/registration" className="btn btn-primary m-2">Register</Link>
                <Link to="/distsignin" className="btn btn-primary m-2">Distributor Signin</Link>
                <Link to="/patientsignin" className="btn btn-primary m-2">Patient Signin</Link>
                <Link to="/portal" className="btn btn-primary m-2">Portal</Link>
                <Link to="/tasks" className="btn btn-primary m-2">Tasks</Link>     
                <Link to="/ghud" className="btn btn-primary m-2">ghuD Stuff</Link>  
            </div>
        );
    }
}

export default Home;