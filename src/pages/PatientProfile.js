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
      <div>
        <h1>PATIENT HUB</h1>
        <br></br>
        <h2>My Appointments</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Appointment Date</td>
              <td>Appointment Time</td>
              <td>Distributor Name</td>
              <td>Distributor Address</td>
              <td>Zipcode</td>
              <td> </td>
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
                    <td><button className="btn btn-danger m-2">Cancel</button></td>
                  </tr>
                )
                : null
            }
          </tbody>
        </table>

        <br></br>


        <Link to="/FindAppointment" className="btn btn-primary">Find Appointment</Link>
      </div>

    );
  }
}

export default PatientProfile;
