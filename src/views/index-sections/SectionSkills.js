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
import { Container, Row, Col, List } from "reactstrap";

// core components

function SectionSkills() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <h2 className="title">Skills</h2>
          <Row>
            <Col className="description skill ml-auto mr-auto" lg='3' md="8">
              <List>
                <li>
                  <i class="icon fa-brands fa-react"></i>
                  React
                </li>
                <li>
                  <i class="icon fa-brands fa-angular"></i>
                  Angular
                </li>
                <li>
                  <i class="icon fa-brands fa-node-js"></i>
                  Node
                </li>
              </List>
            </Col>
            <Col className="description skill ml-auto mr-auto" lg='3' md="8">
              <List>
                <li>
                  <i class="icon fa-brands fa-square-js"></i>
                  Express
                </li>
                <li>
                  <i class="icon fa-solid fa-database"></i>
                  MongoDB
                </li>
                <li>
                  <i class="icon fa-solid fa-database"></i>
                  PostgreSQL
                </li>
              </List>
            </Col>
            <Col className="description skill ml-auto mr-auto" lg='3' md="8">
              <List>
                <li>
                  <i class="icon fa-brands fa-square-js"></i>
                  JavaScript
                </li>
                <li>
                  <i class="icon fa-brands fa-java"></i>
                  Java
                </li>
                <li>
                  <i class="icon fa-brands fa-python"></i>
                  Python
                </li>
              </List>
            </Col>
            <Col className="description skill ml-auto mr-auto" lg='3' md="8">
              <List>
                <li>
                  <i class="icon fa-brands fa-html5"></i>
                  HTML
                </li>
                <li>
                  <i class="icon fa-brands fa-css3-alt"></i>
                  CSS
                </li>
                <li>
                  <i class="icon fa-solid fa-cloud fa-2xs"></i>
                  SAP ABAP
                </li>
              </List>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionSkills;
