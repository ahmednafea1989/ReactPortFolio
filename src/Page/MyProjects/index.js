import React from 'react';
// import { Link, useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import gas from "./gasStation.jpg";
import resturant from "./resturant.jpg";
import "./style.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function MyProjects() {
    return (


        <Container className="container">
            <Row className="form-group">
                <Col size="6" id="id1">
                    <br></br>
                    {/* <div className="card1"> */}
                    <h2>Project1</h2>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={gas} />
                        <Card.Body>
                            <Card.Title>Gas Station Finder</Card.Title>
                            <Card.Text>
                                You can find gas station location near by you,
                                Also you can see what alse services they have.
                            </Card.Text>
                            <Button onClick={() => window.open('https://ahmednafea1989.github.io/gasstation/')} variant="primary">Checkitout</Button>
                        </Card.Body>
                    </Card>

                    {/* </div> */}
                </Col>


                <Col size="6" id="id2">
                    <br></br>


                    {/* <div className="card2"> */}
                    <h2>Project2</h2>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={resturant} />
                        <Card.Body>
                            <Card.Title>Resturant Reservation</Card.Title>
                            <Card.Text>

                                You can book you seat online.
                            </Card.Text>
                            <Button onClick={() => window.open('https://young-savannah-95030.herokuapp.com/')} variant="primary">Checkitout</Button>
                        </Card.Body>
                    </Card>

                    {/* </div> */}
                </Col>
            </Row >
        </Container>




    )
};

export default MyProjects;