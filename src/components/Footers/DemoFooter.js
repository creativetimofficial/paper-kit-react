import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                >
                  Swapy
                </a>
              </li>
              <li>
                <a
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Swapy Team
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
