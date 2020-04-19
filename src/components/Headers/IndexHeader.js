import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/background.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Hacker Valley Studio</h1>
            <h3>We are Ron Eddings and Chris Cochran from the Hacker Valley Studio podcast. We explore the human element of cybersecurity programs and technology. Join us on our quest to find inspirational stories and knowledge to elevate ourselves and our communities.</h3>
            <br />
            <Button
              href="https://chartable.com/podcasts/secdevopsai/redirect?service=itunes"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-apple" />
              Listen on Apple Music
            </Button>
            <Button
              href="https://chartable.com/podcasts/secdevopsai/redirect?service=google"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-google" />
              Listen on Google Play
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
