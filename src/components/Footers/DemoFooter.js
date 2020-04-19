
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
                  href="https://www.patreon.com/hackervalleystudio"
                  target="https://www.patreon.com/hackervalleystudio"
                >
                  Support us On Patreon
                </a>
              </li>
              
              </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Ron and Chris
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
