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
        <div className="card text-center">
            <h1 className="card-header bg-primary text-light">Patient Login</h1>

        <div className="">
          <div className="w-50 mx-auto my-1 py-1">
            <form className="card-body text-center" onSubmit={this.handleSubmit}>
              <div className="py-4">
                <label><h2>Username:</h2></label>
                <input onChange={this.handleChange} value={this.state.user.username} type="text" className="form-control" name="username" id="username" />
              </div>
              <div className="py-4">
                <label><h2>Password:</h2></label>
                <input onChange={this.handleChange} value={this.state.user.pass} type="password" className="form-control" name="pass" id="password" />
              </div>
              <div className="my-5">
                <button type="submit" className="btn btn-lg btn-success">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="card-footer">
        <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
        </div>
      </div>
    );
  }
}

export default PatientSignin;
