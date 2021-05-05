import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppointmentService from '../services/AppointmentService'


class DistributorDashboard extends Component {

   //initialize the state
   constructor(props){
    super(props);
    this.state={
        appointments:[]
    }
}

//Lifecycle method to call REST API
// Grab the data from REST API and store in variable 'users'
// Called immediately after a componenty is mounted
componentDidMount(){
    axios.get('http://localhost:8081/api/appointments/distributor/1')
    .then(resp => {
       // console.log(resp.data);
        this.setState({appointments:resp.data})
    })
    .catch((error) => {
        console.error(error)
    })
}
    

    render(){
        const {appointments} = this.state;
        return(
            <div>
                <h3>Create Appointment</h3>
                <Link to="/createAppointment" className="btn btn-primary m-2">Create Appointment</Link>
                <h3>Modify Appointment</h3>
                <Link to="/distributor" className="btn btn-primary m-2">Show Distributor</Link>
                   <h1 className = "text-center"> Appointments List</h1> 
                    <table className = "table table-striped">
                        <thead>
                            <tr>
                                <td> Apt Id  </td>
                                <td> Date  </td>
                                <td> Time  </td>
                            </tr>
                        </thead>
                        <tbody>
                            {// curly braces for JS code

                              this.state.appointments.map(
                                  apt =>
                                  <tr key = {apt.id}> 
                                    <td>{apt.id}</td>
                                    <td>{apt.date}</td>
                                    <td>{apt.time}</td>
                            
                                  </tr>
                              )

                            }
                        </tbody>
                    </table>
            </div>
        )
    }
}

export default DistributorDashboard;