import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/DistributorRegistration.css'


class DistributorRegistration extends Component {

    state = {
        distributor: {
            distributorName: '',
            pass: '',
            address: '',
            city: '',
            countryState: '',
            zipcode: ''
        }
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const tempDistributor = { ...this.state.distributor};
        tempDistributor[name] = value;
        this.setState({
            distributor: tempDistributor
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        Number(this.state.zipcode)
        axios.post('http://localhost:8081/api/addDistributor', this.state.distributor)
        .then(response => {
            console.log('Distributor created');
            console.log(this.state.distributor)
            alert('Registration Successful');
            this.props.history.push('main');
        })
        .catch(error => {
            alert('Registration failed');
        })
    }



    render() {
        return (
            <div id="distributor-registration" className="fixed-top"> 
                <br></br>  
                <div className="card w-50 mx-auto">
                <h1 style={{marginBottom: '60px'}} className="card-header bg-primary">Distributor Registration Form</h1>
                <form onSubmit={this.handleSubmit} className="text-dark" id="distributor-registration-form" noValidate>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="firstName" className="form-label">Distributor Name: </label>
                        <input onChange={this.handleChange} value={this.state.distributor.distributorName} type="text" className="form-control" id="distributorName" name ="distributorName" required />
                        <div className="invalid-feedback">
                            Please enter a distributor name.
                        </div>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="lastName" className="form-label">Street Address: </label>
                        <input onChange={this.handleChange} value={this.state.distributor.address} type="text" className="form-control" id="address" name="address" required />
                        <div className="invalid-feedback">
                            Please enter a street address.
                        </div>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="age" className="form-label">City: </label>
                        <div className="input-group has-validation">
                            <input onChange={this.handleChange} value={this.state.distributor.city} type="text" className="form-control" id="city" name="city" required />
                            <div className="invalid-feedback">
                                Please enter a city.
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="sex" className="form-label">Country | State: </label>
                        <div className="input-group has-validation">
                            <input onChange={this.handleChange} value={this.state.distributor.countryState} type="text" className="form-control" id="countryState" name="countryState" required />
                            <div className="invalid-feedback">
                                Please enter a Country and State.
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="email" className="form-label">Zipcode: </label>
                        <div className="input-group has-validation">
                            <input onChange={this.handleChange} value={this.state.distributor.zipcode} type="email" className="form-control" id="zipcode" name="zipcode" required />
                            <div className="invalid-feedback">
                                Please enter in a vailed zipcode.
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 col-md-4">
                        <label htmlFor="password" className="form-label">Password: </label>
                        <input onChange={this.handleChange} value={this.state.distributor.pass} type="password" className="form-control" id="password" name="pass" pattern=".{8,}" aria-describedby="passHelp" required />
                        <div id="passHelp" className="form-text my-4">Password must be a minimum of 8 characters</div>
                        <div className="invalid-feedback">
                            Please provide a valid password.
                        </div>
                    </div>
                    <div className="card-footer mb-3 col-12">
                        <button className="btn btn-primary" type="submit" style={{marginRight: '30px'}}>Submit form</button>
                        <Link to="/" className="btn btn-primary" style={{marginRight: '30px'}}>Main</Link>
                    </div>
                </form>
                </div>             
            </div>
        );
    }
}

export default DistributorRegistration;