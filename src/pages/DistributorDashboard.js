import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


class DistributorDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appointments: []
    }
  }

  // Lifecycle method to call REST API
  // Grab the data from REST API and store in variable 'users'
  // Called immediately after a componenty is mounted
  componentDidMount() {
    axios.get('http://localhost:8081/api/appointments/distributor/' + localStorage.getItem('distId'))
      .then(resp => {
        // console.log(resp.data);
        this.setState({ appointments: resp.data })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    return (
      <div id="background" className="fixed-top">
        <div className="">
          <Header />
        </div>
        <div className="">
          <div className="card-deck border-dark text-center mx-4">
            <div className="card">
              <h3 className="card-body">Create Appointment</h3>
              <div className="card-footer">
              <Link to="/createAppointment" className="btn btn-primary m-2">Create Appointment</Link>
              </div>
            </div>
            <div className="card">
              <h3 className="card-body">Modify Appointment</h3>
              <div className="card-footer">
              <Link to="/distributor" className="btn btn-primary m-2">Show Distributor</Link>
              </div>
            </div>
          </div>
        <br></br>
        <br></br>
        <div className="card border-dark text-center mx-5">
        <div className="card-header bg-primary text-light">
          <h2 className="text-center"> Appointments List</h2>
        </div>
        <div>
        <table className="table table-hover table-striped">
          <thead className="thead-light">
            <tr>
              <th> Apt Id </th>
              <th> Date </th>
              <th> Time </th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.appointments.map(
                apt =>
                  <tr key={apt.id}>
                    <td>{apt.id}</td>
                    <td>{apt.date}</td>
                    <td>{apt.time}</td>
                  </tr>
              )
            }
          </tbody>
        </table>
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default DistributorDashboard;