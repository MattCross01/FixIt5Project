import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Customers from "./pages/Customers";
import Employees from "./pages/Employees";
import Billing from "./pages/Billing";
import SignUp from "./components/SignUp/SignUp";
import Nav from "./components/Nav";
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
                    <Route exact path="/employees" component={Employees} />
                    <Route exact path="/billing" component={Billing} />
                <div className="auth-wrapper">
                <div className="auth-inner">
                    <Route exact path="/signup" component={SignUp} />
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