import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class FindAppointment extends Component {

  constructor(props) {
    super(props)

    this.state = {
      appts: [],
      zipcode: '',
    }
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      zipcode: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Clicked find")
    axios.get('http://localhost:8081/api/appointments/zipcode/' + this.state.zipcode)
      .then(response => {
        this.setState({ appts: response.data })
        console.log(response.data);
      })
      .catch(error => {
        alert('failed to log in');
        //display error message
      })
  }

  selectAppointment = (event) => {
    event.preventDefault();
    console.log("Clicked select Appointment")
    console.log(event.target.name);
    const twoNumbers = [localStorage.getItem('patientId'), event.target.name]
    axios.post('http://localhost:8081/api/appointments/modify', twoNumbers)
      .then(response => {
        console.log("Put did something at least")
        console.log(this.state.appts[event.target.key]);
        alert("Appointment Successfully Added");
        this.props.history.push('PatientProfile');
      })
      .catch(error => {
        alert('failed to log in');
        //display error message
      })
  }

  render() {
    const { appts } = this.state;

    return (
      <div>
        <div className="card border-dark text-center mx-5">
        <form onSubmit={this.handleSubmit} className="card">
          <div className="mb-3 col-md-4">
            <div className="">
            <label className="card-body">Zipcode:</label>
            <input placeholder='Enter Zipcode' onChange={this.handleChange} value={this.state.zipcode} type="text" className="form-control" name="zipcode" id="zipcode" />
            </div>
          </div>
          <div className="mb-3 col-md-4">
            <button type="submit" className="btn btn-sm btn-success">Get Appointments</button>
          </div>
        </form>
        </div>
        
        <div className="card border-dark text-center mx-5">
        <div className="card-header bg-primary text-light">
        <h1>Available Appointments</h1>
        </div>
        <div className="card-body">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Appointment Date</th>
              <th>Appointment Time</th>
              <th>Distributor Name</th>
              <th>Distributor Address</th>
              <th>Zipcode</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {
              appts.length ?
                appts.map(appt =>

                  // <h1>appts list</h1>
                  // <div>{appt.id}  {appt.date} {appt.distributor.distributorName} {appt.patient.fname}</div>
                  <tr key={appt.id}>
                    <td>{appt.date}</td>
                    <td>{appt.time}</td>
                    <td>{appt.distributor.distributorName}</td>
                    <td>{appt.distributor.address}</td>
                    <td>{appt.distributor.zipcode}</td>
                    <td><button className="btn btn-sm btn-primary m-2" name={appt.id} onClick={this.selectAppointment}>Select</button></td>
                  </tr>
                )
                : null
            }
          </tbody>
        </table>
        </div>
        <div className="card-footer">
        <Link to="/PatientProfile" className="btn btn-primary">Patient Hub</Link>
        </div>
        </div>
      </div>

    );
  }
}

export default FindAppointment;
