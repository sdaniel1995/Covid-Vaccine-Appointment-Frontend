import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="p-3 mb-3 border-bottom">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                                

                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                <li><a href="/requests" className="nav-link px-2 link-dark">Requests</a></li>
                                <li><a href="/ghud" className="nav-link px-2 link-dark">ghuD</a></li>
                                <li><a href="/dash" className="nav-link px-2 link-dark">Dashboard</a></li>
                            </ul>

                            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                <input type="search" className="form-control" placeholder="Search..." />
                            </form>

                            <div className="dropdown text-end">
                                <a className="d-block text-decoration-none dropdown-toggle" href="/" name="dropDownMenu" id="dropDownMenu" data-bs-toggle="dropdown" data-bs-target="#dropDownMenu" aria-expanded="false">
                                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                                </a>
                                <ul className="dropdown-menu text-small" name="dropDownMenu" id="dropDownMenu" aria-labelledby="dropDownMenu">
                                    <li><a className="dropdown-item" href="/">New project...</a></li>
                                    <li><a className="dropdown-item" href="/">Settings</a></li>
                                    <li><a className="dropdown-item" href="/">Profile</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Sign out</a></li>
                                </ul>
                            </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;