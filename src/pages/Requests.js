import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Requests extends Component {
  render() {
    return (
      <div className="container">
        <h1>Submit a request</h1>
        <br />
        <form enctype="multipart/form-data">
          <div className="mb-3 col-md-4">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" name="description" id="description" />
          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="image" className="form-label">Password:</label>
            <input type="file" accept="image/*" className="form-control" name="image" id="image" />
          </div>
          <div className="mb-3 col-md-4">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
        <Link to="/" className="btn btn-primary">Back to Main</Link>
      </div>
    );
  }
}

export default Requests;