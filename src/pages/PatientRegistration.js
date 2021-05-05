import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PatientRegistration extends Component {

    state = {
        patient: {
            fname: '',
            lname: '',
            age: '',
            sex: '',
            username: '',
            pass: ''
        }
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const tempPatient = { ...this.state.patient};
        tempPatient[name] = value;
        this.setState({
            patient: tempPatient
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        Number(this.state.age)
        axios.post('http://localhost:8081/api/addPatient', this.state.patient)
        .then(response => {
            //nav to a thank you page
            console.log('patient created');
            console.log(this.state.patient)
            alert('Registration Successful');
            this.props.history.push('main');
        })
        .catch(error => {
            alert('Registration failed');
            //display error message
        })
    }



    render() {
        return (
            <div className="container" id="registration">
                <h1>Registration Form</h1>
                <br/>
                <form onSubmit={this.handleSubmit} className="needs-validation" id="registration-form" noValidate>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="firstName" className="form-label">First name: </label>
                        <input onChange={this.handleChange} value={this.state.patient.fname} type="text" className="form-control" id="fname" name="fname" required />
                        <div className="invalid-feedback">
                            Please enter your first name.
                        </div>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="lastName" className="form-label">Last name: </label>
                        <input onChange={this.handleChange} value={this.state.patient.lname} type="text" className="form-control" id="lname" name="lname" required />
                        <div className="invalid-feedback">
                            Please enter your last name.
                        </div>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="age" className="form-label">Age: </label>
                        <div className="input-group has-validation">
                            <input onChange={this.handleChange} value={this.state.patient.age} type="text" className="form-control" id="age" name="age" required />
                            <div className="invalid-feedback">
                                Please enter in a vailed age.
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="sex" className="form-label">Sex: </label>
                        <div className="input-group has-validation">
                            <input onChange={this.handleChange} value={this.state.patient.sex} type="text" className="form-control" id="sex" name="sex" required />
                            <div className="invalid-feedback">
                                Please enter in a vailed Sex.
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="email" className="form-label">Email address: </label>
                        <div className="input-group has-validation">
                            <input onChange={this.handleChange} value={this.state.patient.username} type="email" className="form-control" id="email" name="username" required />
                            <div className="invalid-feedback">
                                Please enter in a vailed email.
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="password" className="form-label">Password: </label>
                        <input onChange={this.handleChange} value={this.state.patient.pass} type="password" className="form-control" id="password" name="pass" pattern=".{8,}" aria-describedby="passHelp" required />
                        <div id="passHelp" className="form-text">Password must be a minimum of 8 characters</div>
                        <div className="invalid-feedback">
                            Please provide a valid password.
                        </div>
                    </div>
                    <div className="mb-3 col-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label className="form-check-label" htmlFor="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 col-12">
                        <button className="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
                <Link to="/" className="btn btn-primary">Main</Link>
            </div>
        );
    }
}

export default PatientRegistration;