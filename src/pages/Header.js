/* import axios from 'axios'; */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {

  state = {
    employee: {}
  }

  signOut = () => {
    localStorage.removeItem("distId");
    localStorage.removeItem("patientId");
    this.props.history.push("/main");
  }

  render() {

    // let dropdown = (
    //   this.renderDropdownLogedOut()
    // )

    // let employeeName = (
    //   null
    // )

    // if (localStorage.getItem("id") != null) {
    //   employeeName = (
    //     <h3>{localStorage.getItem("firstName")} {localStorage.getItem("lastName")}</h3>
    //   )
    //   dropdown = (
    //     this.renderDropdownLogedIn()
    //   )
    // }

    return (
      <div className="">
        <header className="p-3 mb-3 border-bottom">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link onClick={this.signOut} className="nav-link px-2 text-light"><h2>Sign out</h2></Link></li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(Header);