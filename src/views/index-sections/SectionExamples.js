import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionExamples() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <a href="/paper-kit-react/landing-page" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/landing-page.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/paper-kit-react/landing-page"
                target="_blank"
              >
                Landing Page
              </Button>
            </Col>
            <Col className="text-center" md="6">
              <a href="/paper-kit-react/profile-page" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/examples/profile-page.png")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/paper-kit-react/profile-page"
                target="_blank"
              >
                Profile Page
              </Button>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionExamples;
