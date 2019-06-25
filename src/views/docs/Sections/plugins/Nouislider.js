import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

class Sliders extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Sliders v9.1.0
        </h1>
        <p className="bd-lead" />
        <p>
          We restyled noUIslider, while keeping the design consistent. You can
          use other classes for colors like{" "}
          <code className="highlighter-rouge">.slider-info</code>,{" "}
          <code className="highlighter-rouge">.slider-success</code>,{" "}
          <code className="highlighter-rouge">.slider-warning</code>,{" "}
          <code className="highlighter-rouge">.slider-danger</code>.
        </p>
        <p>
          For more information please check{" "}
          <strong>
            <a
              href="https://refreshless.com/nouislider/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Full Github Documentation
            </a>
          </strong>
          .
        </p>
        <div className="bd-example" data-example-id="">
          {/* Markup */}
          <div className="slider" id="sliderRegular" />
          <br />
          <div className="slider slider-primary" id="sliderDouble" />
        </div>
      </>
    );
  }
}

export default Sliders;
