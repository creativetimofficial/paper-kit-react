import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components;

function SectionCarousel() {
  return (
    <>
      <div className="section pt-o" id="carousel">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="page-carousel">
                <div
                  className="carousel slide"
                  data-ride="carousel"
                  id="carouselExampleIndicators"
                >
                  <ol className="carousel-indicators">
                    <li
                      className="active"
                      data-slide-to="0"
                      data-target="#carouselExampleIndicators"
                    />
                    <li
                      data-slide-to="1"
                      data-target="#carouselExampleIndicators"
                    />
                    <li
                      data-slide-to="2"
                      data-target="#carouselExampleIndicators"
                    />
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <img
                        alt="..."
                        className="d-block img-fluid"
                        src={require("assets/img/soroush-karimi.jpg")}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <p>Somewhere</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        alt="..."
                        className="d-block img-fluid"
                        src={require("assets/img/federico-beccari.jpg")}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <p>Somewhere else</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        alt="..."
                        className="d-block img-fluid"
                        src={require("assets/img/joshua-stannard.jpg")}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <p>Here it is</p>
                      </div>
                    </div>
                  </div>
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
