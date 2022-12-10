
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Breif description</h2>
              <p className="description">
                This trading platform that helps you to trade with the best
                traders in the world. You can choose the best traders and copy
                their trades. You can also become a trader and earn money by
                trading for others.
                
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
