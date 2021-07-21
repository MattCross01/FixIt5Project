import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import "./App.css";

class App extends Component {

    render() {
        return (
            <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/saved" component={Saved} />
                    {/* <Route exact path="/customers" component={About} />
                    <Route exact path="/employees" component={Discover} />
                    <Route exact path="/billing" component={Search} />
                    <Route exact path="/login" component={Search} /> */}
                </Switch>
            </div>
            </Router>
        );
    }
}

export default App;