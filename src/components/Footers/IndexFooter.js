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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function IndexFooter() {
  return (
    <footer className="footer section-dark">
      <Container>
        <Row>
          <div className="credits ml-auto">
            <span className="copyright">
              © 2022 - Template developed by {" "}
              <a rel="noreferrer" href="https://www.creative-tim.com?ref=pkr-footer" target="_blank">Creative Tim</a>
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default IndexFooter;
