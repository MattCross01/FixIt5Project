import React, { Component } from "react";
// import "./style.css";
import Card from 'react-bootstrap/Card';

export default class Billing extends Component{
    render() {
        return (
            <form>
                <div className="auth-wrapper">
                    <div className="auth-inner">

                        <Card.Body>

                            <Card.Title className="green center">
                                Billing Coming Soon
                            </Card.Title>
                            <hr></hr>
                        </Card.Body>
                        <hr></hr>
                    </div>
                </div>
            </form>
            );
    }
}