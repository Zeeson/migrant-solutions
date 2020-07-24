import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
    <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-header">
            <a className="navbar-brand ml-5 font-weight-bold nav-text-head" href="/">MIGRANT-SOLUTIONS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon bg-dark"></span>
            </button>

            <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mr-5 text-white">
                <li className="nav-item">
                    <Link
                        className="nav-link text-dark font-weight-bold" to="/">Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark font-weight-bold" to="/users">Interns
                    </Link>               
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark font-weight-bold" to="/add">Add Interns
                    </Link>               
                </li>
                </ul>
            </div>
        </nav>
    </div>
    )
  }
}
export default Navbar;
