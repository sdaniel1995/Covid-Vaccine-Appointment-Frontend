import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateAppointment extends Component {

  state = {
    appointment: {
      date: '',
      time: '',
      distributor: null,
      patient: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8081/api/distributor/' + localStorage.getItem('distId'))
      .then(resp => {
        const tempAppointment = { ...this.state.appointment };
        tempAppointment['distributor'] = resp.data;
        this.setState({
          appointment: tempAppointment
        })
        console.log(this.state.appointment);
      })
      .catch((error) => {
        console.error(error)
      })
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const tempAppointment = { ...this.state.appointment };
    tempAppointment[name] = value;
    this.setState({
      appointment: tempAppointment
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.appointment);
    axios.post('http://localhost:8081/api/createAppointment', this.state.appointment)
      .then(response => {
        console.log('Creating appointment');
        // localStorage.setItem("employee", response.data.email);
        // localStorage.setItem("type", response.data.employeeTypeID);
        // console.log(response.data.employeeTypeID);
        alert('Post new appointment successfull');
        this.props.history.push('DistributorDashboard');
      })
      .catch(error => {
        alert('failed to do shit');
        // display error message
      })
  }

  render() {
    // const {distrib} = this.setState(resp.data);
    // console.log(this.state);
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3 col-md-4">
            <label htmlFor="day" className="form-label">Day:</label>
            <input onChange={this.handleChange} value={this.state.appointment.date} type="date" className="form-control" name="date" id="day" />
          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="time" className="form-label">Time:</label>
            <input onChange={this.handleChange} value={this.state.appointment.time} type="time" className="form-control" name="time" id="time" />
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

export default CreateAppointment;