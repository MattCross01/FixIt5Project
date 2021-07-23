import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" to="/">
                    FIXIT5
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/about"
                                ? "nav-link active"
                                : "nav-link"
                            }
                            >
                            About
                            </Link>
                        </li>
                        {/* <li className="nav-item active">
                            <Link
                            to="/discover"
                            className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
                            >
                            Menu
                            </Link>
                        </li> */}
                        <li className="nav-item active">
                            <Link
                            to="/customers"
                            className={window.location.pathname === "/customers" ? "nav-link active" : "nav-link"}
                            >
                            Customers
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link
                            to="/billing"
                            className={window.location.pathname === "/billing" ? "nav-link active" : "nav-link"}
                            >
                            Billing
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link
                            to="/employees"
                            className={window.location.pathname === "/employees" ? "nav-link active" : "nav-link"}
                            >
                            The 5 Handyman
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link
                            to="/signup"
                            className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
                            >
                            Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;