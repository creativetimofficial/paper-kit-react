import React from "react";

// reactstrap components
import {
  Label,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionProgress() {
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <Col md="6">
              <div className="title">
                <h3>Progress Bar</h3>
                <br />
              </div>
              <Progress max="100" value="25" />
              <br />
              <Progress max="100" value="50" />
              <br />
              <Progress max="100" value="100" />
              <br />
              <Progress multi>
                <Progress bar max="100" value="15" />
                <Progress
                  bar
                  barclassName="progress-bar-success"
                  max="100"
                  value="30"
                />
                <Progress
                  bar
                  barclassName="progress-bar-warning"
                  max="100"
                  value="20"
                />
              </Progress>
            </Col>
            <Col md="6">
              <div className="title">
                <h3>Pagination</h3>
                <br />
              </div>
              <nav aria-label="Page navigation example">
                <Pagination>
                  <PaginationItem>
                    <PaginationLink
                      aria-label="Previous"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i aria-hidden={true} className="fa fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      4
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      5
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      aria-label="Next"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i aria-hidden={true} className="fa fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
              <br />
              <nav aria-label="...">
                <Pagination>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      tabIndex="-1"
                    >
                      Previous
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="active">
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      3 <span className="sr-only">(current)</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      4
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      5
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Next
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md="6">
              <div className="title">
                <h3>Navigation Tabs</h3>
              </div>
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav id="tabs" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className="active"
                        data-toggle="tab"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        role="tab"
                      >
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        role="tab"
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        role="tab"
                      >
                        Messages
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
              <TabContent className="text-center" id="my-tab-content">
                <TabPane className="active" id="home" role="tabpanel">
                  <p>
                    Larger, yet dramatically thinner. More powerful, but
                    remarkably power efficient. With a smooth metal surface that
                    seamlessly meets the new Retina HD display.
                  </p>
                </TabPane>
                <TabPane id="profile" role="tabpanel">
                  <p>Here is your profile.</p>
                </TabPane>
                <TabPane id="messages" role="tabpanel">
                  <p>Here are your messages.</p>
                </TabPane>
              </TabContent>
            </Col>
            <Col md="6">
              <div className="title">
                <h3>Labels</h3>
              </div>
              <Label className="label-default">Default</Label>
              <Label className="label-primary">Primary</Label>
              <Label className="label-info">Info</Label>
              <Label className="label-success">Success</Label>
              <Label className="label-warning">Warning</Label>
              <Label className="label-danger">Danger</Label>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionProgress;
