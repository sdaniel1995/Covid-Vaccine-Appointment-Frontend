import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PatientProfile extends Component {

  constructor(props) {
    super(props)

    this.state = {
      appts: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8081/api/appointments/patient/' + localStorage.getItem('patientId'))
      .then(resp => {
        console.log(resp.data)
        this.setState({ appts: resp.data });
        // console.log(appts)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { appts } = this.state;

    return (
      <div className="card border-dark text-center mx-5">
      <div className="card-header bg-primary text-light">
          <h1>PATIENT HUB</h1>
      </div>
      
      <div className="card-body my-3">
      <div className="card-title">
          <h2>My Appointments</h2>
      </div>
      <table className="table table-hover table-striped">
          <thead className="thead-light">
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
                  appts.map( appt => 
                      <tr key ={appt.id}> 
                          <td>{appt.date}</td>
                          <td>{appt.time}</td>
                          <td>{appt.distributor.distributorName}</td>
                          <td>{appt.distributor.address}</td>
                          <td>{appt.distributor.zipcode}</td>
                          <td><button className="btn btn-danger m-2">Cancel</button></td>
                      </tr>
                  )
                  :null
              }
          </tbody>
      </table>
      </div>
      
      <div className="card-footer">
      <Link to="/FindAppointment" className="btn-lg btn-success">Find Appointment</Link>
      </div>
      </div>

    );
  }
}

export default PatientProfile;
