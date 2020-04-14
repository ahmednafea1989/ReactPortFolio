import React from "react";
import aa from "./aa.jpg";
import bb from "./bb.jpg";
import cc from "./cc.jpg";
import dd from "./dd.jpg";
import Container from "./Container";
import Col from "./Col";
import Row from "./Row";
import "./style.css";

function PortFolio() {
    return (
        <Container className="mt-3 px-5">
            <Row className="form-group">
                <Col size="12">

                    <h2>Portfolio</h2>
                </Col>
                </Row >

                <Row >
                    <Col size="6">
                        <img src={aa} className="img" />

                        <h3 className="name">green plant</h3>


                        </Col >
                        <Col size="6">

                            <img src={bb} className="img" />

                            <h3 className="name">motorcycle</h3>


                            </Col >

                            </Row >

                            <Row>
                                <Col size="6">
                                    <img src={cc}  className="img"/>

                                    <h3 className="name">purple leaf plant</h3>

                              </Col >
                                    <Col size="6">
                                        <img src={dd} className="img" />

                                        <h3 className="name"> sport car</h3>

                                        </Col >

                                        </Row>

                                      
            </Container>
      




    );
}
export default PortFolio ;