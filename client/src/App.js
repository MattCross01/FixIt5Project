import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Customers from "./pages/Customers";
import EmployeeProfiles from "./components/EmployeeProfiles/EmployeeProfiles";
import Billing from "./components/Billing/Billing";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Nav from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from "./components/Footer";

import "./App.css";

class App extends Component {

    render() {
        return (
            <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/saved" component={Saved} />
                    <Route exact path="/customers" component={Customers} />
                    <Route exact path="/employees" component={EmployeeProfiles} />
                    <Route exact path="/billing" component={Billing} />

                <div className="auth-wrapper">
                <div className="auth-inner">
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/signin" component={SignIn} />
                </div>
                </div>
                
                </Switch>
                {/* <Footer /> */}
            </div>
            </Router>
        );
    }
}

export default App;