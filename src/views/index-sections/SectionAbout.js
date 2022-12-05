/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionAbout() {
    return (
        <>
            <div className="section section-dark">
                <Container>
                    <Row>
                        <Col lg="6" md="12">
                            <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                style={{ height: "400px", margin: "10px" }}
                                src={require("assets/img/faces/henrick.jpg")}
                            />
                        </Col>
                        <Col lg="6" md="12">
                            <h2 className="title">About Me</h2>
                            <br />
                            <p className="description">
                                I graduated from the University of Santo Thomas with a degree on Bachelor of Science Computer Science and
                                I started my career as SAP ABAP developer in Accenture where I worked for 3 years. I resigned in Accenture to change
                                my career path into web developer. Therefore, I self studied some of the trend technologies like Node, Express, MongoDB, Angular and React.
                                I created this portfolio to showcase some of my self-project along the way.
                            </p>
                            <br />
                            <Button
                                className="btn-round"
                                color="success"
                                href="mailto:henrickdeguzman@gmail.com"
                                target="_blank"
                            >
                                EMAIL ME
                            </Button>
                            <Button
                                className="btn-round ml-2"
                                color="success"
                                outline
                                rel="noreferrer"
                                target="_blank"
                                href="../../assets/file/Resume_De-Guzman-Henrick.pdf"
                            >
                                VIEW RESUME
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>{" "}
        </>
    );
}

export default SectionAbout;
