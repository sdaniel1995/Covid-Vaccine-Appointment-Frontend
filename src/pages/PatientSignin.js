import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PatientSignin extends Component {

    state = {
        employee: {
            email: '',
            password: '',
            employeeTypeID: ''
        }
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const tempEmployee = { ...this.state.employee };
        tempEmployee[name] = value;
        this.setState({
            employee: tempEmployee
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/employeeLogin', this.state.employee)
        .then(response => {
            console.log('logging in user');
            localStorage.setItem("employee", response.data.email);
            localStorage.setItem("type", response.data.employeeTypeID);
            console.log(response.data.employeeTypeID);
            alert('Login successfull');
            this.props.history.push('main');            
        })
        .catch(error => {
            alert('failed to log in');
            //display error message
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="email" className="form-label">Email address:</label>
                        <input onChange={this.handleChange} value={this.state.employee.email} type="email" className="form-control" name="email" id="email" />
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input onChange={this.handleChange} value={this.state.employee.password} type="password" className="form-control" name="password" id="password" />
                    </div>
                    <div className="mb-3 col-md-4">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
                <Link to="/" className="btn btn-primary">Main</Link>
            </div>
        );
    }
}

export default PatientSignin;