import React, { Component } from "react";
import EmployeeProfiles from "../components/EmployeeProfile/EmployeeProfiles";
import 'bootstrap/dist/css/bootstrap.min.css';

class Employees extends Component {
    render(){
        return (
            <div className="App">
<EmployeeProfiles/>
            </div>
        );
    }
}

export default Employees;
