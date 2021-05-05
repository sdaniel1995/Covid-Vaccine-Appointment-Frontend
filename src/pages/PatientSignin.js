import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PatientSignin extends Component {

    state = {
        user: {
            username: '',
            userpass: ''
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
        axios.post('http://localhost:8080/Login', this.state.user)
        .then(response => {
            localStorage.setItem("userid", response.data.userid);
            localStorage.setItem("usertype", response.data.usertype);
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
                        <label htmlFor="email" className="form-label">Username:</label>
                        <input onChange={this.handleChange} value={this.state.employee.username} type="text" className="form-control" name="email" id="email" />
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input onChange={this.handleChange} value={this.state.employee.userpass} type="password" className="form-control" name="userpass" id="userpass" />
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
