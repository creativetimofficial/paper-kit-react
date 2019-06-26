import React from "react";
import { Container } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <nav>
            <ul>
              <li>
                <a href="https://www.creative-tim.com?ref=pkr-docs-footer" target="_blank">Creative Tim</a>
              </li>
              <li>
                <a href="https://presentation.creative-tim.com?ref=pkr-docs-footer" target="_blank">About Us</a>
              </li>
              <li>
                <a href="https://blog.creative-tim.com?ref=pkr-docs-footer" target="_blank">Blog</a>
              </li>
              <li>
                <a href="https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md?ref=creativetim" target="_blank">
                  MIT License
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            &copy; {new Date().getFullYear()}, Designed by{" "}
            <a href="https://www.invisionapp.com?ref=creativetim" target="_blank">
              Invision
            </a>
            . Coded by{" "}
            <a href="https://www.creative-tim.com?ref=pkr-docs-footer" target="_blank">
              Creative Tim
            </a>
            .
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
