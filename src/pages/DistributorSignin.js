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
        this.props.history.push('DistributorDashboard');
      })
      .catch(error => {
        alert('failed to log in');
        //display error message
      })
  }

  render() {
    return (
      <div className="card w-50 mx-auto border-dark text-center mx-5">
      <div className="card-header bg-primary text-light">
      <h1>Welcome to Distributor Login</h1>
      </div>

      <div className="card-body" > 
      <form onSubmit={this.handleSubmit}>
          <div className="w-50 mx-auto py-4">
            <label>Username:</label>
            <input onChange={this.handleChange} value={this.state.user.distributorName} type="text" className="form-control" name="distributorName" id="username" />
          </div>
          <div className="w-50 mx-auto py-4">
            <label>Password:</label>
            <input onChange={this.handleChange} value={this.state.user.pass} type="password" className="form-control" name="pass" id="password" />
          </div>
          <div className="py-4">
            <button type="submit" className="btn btn-success">Submit</button>
          </div>
      </form>
      </div>
      <div className="card-footer py-4">
      <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
      </div>
    );
  }
}

export default DistributorSignin;