import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class FindAppointment extends Component {

     constructor(props) {
        super(props)
    
        this.state = {
             appts: [],
             zipcode:'',
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
        axios.get('http://localhost:8081/api/appointments/zipcode/'+this.state.zipcode)
        .then(response => {
           this.setState({appts:response.data})
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
        const twoNumbers=[localStorage.getItem('patientId'),event.target.name]
            
        

        axios.post('http://localhost:8081/api/appointments/modify', twoNumbers)
        .then(response => {
            console.log("Put did something at least")
           console.log(this.state.appts[event.target.key]);
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
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="zipcode" className="form-label">Zipcode:</label>
                        <input placeholder='Enter Zipcode' onChange={this.handleChange} value={this.state.zipcode} type="text" className="form-control" name="zipcode" id="zipcode" />
                    </div>
                    <div className="mb-3 col-md-4">
                        <button type="submit" className="btn btn-primary">Get Appointments</button>
                    </div>
                </form>
                <h2>Available Appointments</h2>
                <table className= "table table-striped">
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
                            appts.map( appt => 

                            // <h1>appts list</h1>
                            // <div>{appt.id}  {appt.date} {appt.distributor.distributorName} {appt.patient.fname}</div>
                                <tr key ={appt.id}> 
                                    <td>{appt.date}</td>
                                    <td>{appt.time}</td>
                                    <td>{appt.distributor.distributorName}</td>
                                    <td>{appt.distributor.address}</td>
                                    <td>{appt.distributor.zipcode}</td>
                                    <td><button className="btn btn-primary m-2" name = {appt.id} onClick={this.selectAppointment}>Select</button></td>
                                </tr>
                            )
                            :null
                        }
                    </tbody>
                </table>
                <Link to="/" className="btn btn-primary">Main</Link>
            </div>

        );
    }
}

export default FindAppointment;
