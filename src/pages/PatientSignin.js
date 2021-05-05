import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PatientSignin extends Component {

    state = {
        user: {
            username: '',
            pass: '',
        }
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const tempUser = { ...this.state.user };
        tempUser[name] = value;
        this.setState({
            user: tempUser
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.user)
        axios.post('http://localhost:8081/api/patientLogin', this.state.user)
        .then(response => {
            localStorage.setItem("patientId", response.data.id);
            alert('Login successfull');
            console.log(response.data);
            this.props.history.push('PatientProfile');
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
                        <label htmlFor="email" className="form-label">Username:</label>
                        <input onChange={this.handleChange} value={this.state.user.username} type="text" className="form-control" name="username" id="username" />
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input onChange={this.handleChange} value={this.state.user.pass} type="password" className="form-control" name="pass" id="password" />
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
