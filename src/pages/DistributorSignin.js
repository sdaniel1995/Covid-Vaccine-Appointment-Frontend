import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DistributorSignin extends Component {

    state = {
        user: {
            distributorName: '',
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
        axios.post('http://localhost:8081/api/distributorLogin', this.state.user)
        .then(response => {
            localStorage.setItem("distId", response.data.distributorId);
            alert('Login successfull');
            console.log(response.data);
            this.props.history.push('DistributorDashBoard');
        })
        .catch(error => {
            alert('failed to log in');
            //display error message
        })
    }

    render() {
        return (
            <div className="container">
                 <h1>Welcome to Distributor Page</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="email" className="form-label">Username:</label>
                        <input onChange={this.handleChange} value={this.state.user.distributorName} type="text" className="form-control" name="distributorName" id="username" />
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

export default DistributorSignin;