import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

class BootstrapSwitch extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Bootstrap Switch v3.3.2
        </h1>
        <p className="bd-lead" />
        <p>
          We added a new design for the switches to look like the rest of the
          dashboard.
        </p>
        <p>
          For more information please check{" "}
          <strong>
            <a
              href="https://github.com/Bttstrp/bootstrap-switch/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Full Documentation
            </a>
          </strong>
        </p>
        <div className="bd-example" data-example-id="">
          {/* markup */}
          <label>
            <input
              data-off-color="primary"
              data-on-color="primary"
              data-toggle="switch"
              defaultChecked
              type="checkbox"
            />
            <span className="toggle" />
          </label>
          <br />
          <label>
            <input
              data-off-color="primary"
              data-on-color="primary"
              data-toggle="switch"
              type="checkbox"
            />
            <span className="toggle" />
          </label>
        </div>
      </>
    );
  }
}

export default BootstrapSwitch;
