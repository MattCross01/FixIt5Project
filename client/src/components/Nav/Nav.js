import React from 'react';
import "./style.css";
import {Link} from "react-router-dom";


function Nav() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                {/* <Link className="navbar-brand" to="/">FIXIT5</Link> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/menu">Menu</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/customers">Customers</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/employees">Employees</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/billing">Billing</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;