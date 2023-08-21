/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function SectionDownload({title, description, cite}) {
  return (
    <>
      <div className="section bg-black text-white">
        <Container className="text-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">{title}</h2>
              <p className="description">
              {description}
              </p>
              <cite title="source Title">{cite}</cite>
            </Col>
            <Col className="ml-auto mr-auto download-area" md="5">
              <Button
                className="btn-round"
                color="danger"
                href="https://revelationsofjesuschrist.com/contact-2/"
                target="_blank"
              >
                Join the FIGHT
              </Button>
            </Col>
          </Row>
          {/* <Row className="text-center upgrade-pro">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Want more?</h2>
              <p className="description">
                We're going to launch{" "}
                <a className="text-danger" href="#pablo" disabled>
                  Paper Kit PRO React in a few weeks
                </a>
                . It will have a huge number of components, sections and example
                pages.
              </p>
            </Col>
            <Col className="ml-auto mr-auto" sm="5">
              <Button className="btn-round" color="info" href="#pablo" disabled>
                <i aria-hidden={true} className="nc-icon nc-spaceship" />{" "}
                Upgrade to PRO
              </Button>
            </Col>
          </Row> */}
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Follow Us As We Follow Christ!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="twitter-sharrre btn-round"
                color="twitter-bg"
                href="#pablo"
                id="tooltip3373767"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-twitter" /> Twitter
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip3373767">
                Tweet!
              </UncontrolledTooltip>
              <Button
                className="linkedin-sharrre btn-round  ml-2"
                color="google-bg"
                href="https://www.youtube.com/@theghettogospelteam"
                id="tooltip840791273"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-youtube" /> Youtube
              </Button>
              <UncontrolledTooltip delay={4} target="tooltip840791273">
                Watch!
              </UncontrolledTooltip>
              <Button
                className="facebook-sharrre btn-round ml-2"
                color="facebook-bg"
                href="#pablo"
                id="tooltip68961360"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-facebook-square" /> Facebook
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip68961360">
                Share!
              </UncontrolledTooltip>
             
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDownload;
