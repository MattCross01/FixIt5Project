import React, { Component } from "react";
import "./style.css";
import Card from 'react-bootstrap/Card';
import { ListGroup } from "react-bootstrap";
import ListGroupItem from 'react-bootstrap/ListGroup';

export default class EmployeeProfiles extends Component{
    render() {
        return (
            <form>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Card style={{ width: '' }}>
                        <Card.Img variant="top" src="https://ca.slack-edge.com/T01LGCYB88Y-U01L28SSFU2-7be2a768a327-512" />
                        <Card.Body>
                            <Card.Title className="green">Winston Nieradka</Card.Title>
                            <hr></hr>
                            <Card.Text>
                            Eager to help with just ring!<br></br>
                            Winston specialized in HVAC!
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush center">
                            <ListGroupItem><b>Specialty:</b></ListGroupItem>
                            <ListGroupItem>HVAC</ListGroupItem>
                            <ListGroupItem>Demolishing</ListGroupItem>
                            <ListGroupItem>Exterior Remodeling</ListGroupItem>
                            <ListGroupItem>Interior Remodeling</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link className="green" href="mailto:winston@fixit5.com">Winston@fixit5.com</Card.Link>
                            <Card.Link className="green" href="tel:9083495000">908-FIX-5000</Card.Link>
                        </Card.Body>
                        </Card>
                        <hr></hr>

                        <Card style={{ width: '' }}>
                        <Card.Img variant="top" src="https://ca.slack-edge.com/T01LGCYB88Y-U01LY9WKDNG-8761aa8de54a-512" />
                        <Card.Body>
                            <Card.Title className="green" >Kenneth Petiote</Card.Title>
                            <Card.Text>
                            Want to add the latest tech!?<br></br>
                            Ken specializes in Modern Innovations!
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush center">
                            <ListGroupItem><b>Specialty:</b></ListGroupItem>
                            <ListGroupItem>Modernizing</ListGroupItem>
                            <ListGroupItem>Moving</ListGroupItem>
                            <ListGroupItem>Exterior Remodeling</ListGroupItem>
                            <ListGroupItem>Interior Remodeling</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link className="green" href="mailto:kenneth@fixit5.com">Kenneth@fixit5.com</Card.Link>
                            <Card.Link className="green" href="tel:9083490005">908-FIX-0005</Card.Link>
                        </Card.Body>
                        </Card>
                        <hr></hr>

                            <Card style={{ width: '' }}>
                        <Card.Img variant="top" src="https://ca.slack-edge.com/T01LGCYB88Y-U01L85PG4LA-6f98062f71a4-512" />
                        <Card.Body>
                            <Card.Title className="green">Matt Cross</Card.Title>
                            <Card.Text>
                            Need some help with color combinations!?<br></br>
                            Matt specialized in Painting!
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush center">
                            <ListGroupItem><b>Specialty:</b></ListGroupItem>
                            <ListGroupItem>Painting</ListGroupItem>
                            <ListGroupItem>Plumbing</ListGroupItem>
                            <ListGroupItem>Exterior Remodeling</ListGroupItem>
                            <ListGroupItem>Interior Remodeling</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link className="green" href="mailto:matt@fixit5.com">Matt@fixit5.com</Card.Link>
                            <Card.Link className="green" href="tel:9083495550">908-FIX-5550</Card.Link>
                        </Card.Body>
                        </Card>
                        <hr></hr>
                            
                        <Card style={{ width: '' }}>
                        <Card.Img variant="top" src="https://ca.slack-edge.com/T01LGCYB88Y-U01L4P97HSP-19bb91300a0d-512" />
                        <Card.Body>
                            <Card.Title className="green">Nestor Campaner</Card.Title>
                            <Card.Text>
                            Don't ditch that table! Restore it!<br></br>
                            Nestor specialized in Restoration!
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush center">
                            <ListGroupItem><b>Specialty:</b></ListGroupItem>
                            <ListGroupItem>Restoring</ListGroupItem>
                            <ListGroupItem>Repairing</ListGroupItem>
                            <ListGroupItem>Exterior Remodeling</ListGroupItem>
                            <ListGroupItem>Interior Remodeling</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link className="green" href="mailto:nestor@fixit5.com">Nestor@fixit5.com</Card.Link>
                            <Card.Link className="green" href="tel:9083495555">908-FIX-5555</Card.Link>
                        </Card.Body>
                        </Card>
                        <hr></hr>
                        
                        <Card style={{ width: '' }}>
                        <Card.Img variant="top" src="https://ca.slack-edge.com/T01LGCYB88Y-U01M55JFQ2V-cea91f7484b4-512" />
                        <Card.Body>
                            <Card.Title className="green">Cam</Card.Title>
                            <Card.Text>
                            Broke a stove? Cams got you!<br></br>
                            Cam specialized in Repairs!
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush center">
                            <ListGroupItem><b>Specialty:</b></ListGroupItem>
                            <ListGroupItem>Repairing</ListGroupItem>
                            <ListGroupItem>Altering</ListGroupItem>
                            <ListGroupItem>Exterior Remodeling</ListGroupItem>
                            <ListGroupItem>Interior Remodeling</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link className="green" href="mailto:cam@fixit5.com">Cam@fixit5.com</Card.Link>
                            <Card.Link className="green" href="tel:9083495500">908-FIX-5500</Card.Link>
                        </Card.Body>
                        </Card>
                        <hr></hr>


                    </div>
                </div>
            </form>
            );
    }
}
    
// export default EmployeeProfiles