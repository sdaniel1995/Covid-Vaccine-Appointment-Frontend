import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Background.css'

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
      <div id="background" className="fixed-top">
        <br></br>
        <br></br>
        <div className="card text-center w-50 mx-auto">
          <div className="card-header bg-primary text-light">
            <h2>Create Appointment</h2>
          </div>
          <div className="">
              <div className="">
              <form className="card-body mx-auto w-50" onSubmit={this.handleSubmit}>
              <div className="py-4">
                <label>Day:</label>
                <input onChange={this.handleChange} value={this.state.appointment.date} type="date" className="form-control" name="date" id="day" />
              </div>
              <div className="py-4">
                <label>Time:</label>
                <input onChange={this.handleChange} value={this.state.appointment.time} type="time" className="form-control" name="time" id="time" />
              </div>
              <div className="py-4">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
              </form>
              </div>
          </div>
          
        
        </div>
        
        {/* <Link to="/" className="btn btn-primary">Main</Link> */}
      </div>
    );
  }
}

export default CreateAppointment;