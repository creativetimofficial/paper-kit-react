import React from "react";

// reactstrap components
import { UncontrolledAlert, Alert } from "reactstrap";

class Alerts extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Alerts
        </h1>
        <p className="bd-lead">
          Provide contextual feedback messages for typical user actions with the
          handful of available and flexible alert messages.
        </p>
        <h2 id="examples">Examples</h2>
        <p>
          Alerts are available for any length of text, as well as an optional
          dismiss button. For proper styling, use one of the eight{" "}
          <strong>required</strong>
          contextual classes (e.g.,{" "}
          <code className="highlighter-rouge">.alert-success</code>
          ). For inline dismissal, use the{" "}
          <a href="#pablo" onClick={e => e.preventDefault()}>
            alerts jQuery plugin
          </a>
          .
        </p>
        <div className="bd-example" data-example-id="">
          <Alert color="primary">This is a primary alert—check it out!</Alert>
          <Alert color="info">This is a info alert—check it out!</Alert>
          <Alert color="success">This is a success alert—check it out!</Alert>
          <Alert color="danger">This is a danger alert—check it out!</Alert>
          <Alert color="warning">This is a warning alert—check it out!</Alert>
          <Alert className="alert-default">
            This is a default alert—check it out!
          </Alert>
        </div>
        <h3 id="link-color">Link color</h3>
        <p>
          Use the <code className="highlighter-rouge">.alert-link</code>
          utility class to quickly provide matching colored links within any
          alert.
        </p>
        <div className="bd-example" data-example-id="">
          <Alert color="primary">
            This is a primary alert with{" "}
            <a
              className="alert-link"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              an example link
            </a>
            . Give it a click if you like.
          </Alert>
          <Alert color="info">
            This is a info alert with{" "}
            <a
              className="alert-link"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              an example link
            </a>
            . Give it a click if you like.
          </Alert>
          <Alert color="success">
            This is a success alert with{" "}
            <a
              className="alert-link"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              an example link
            </a>
            . Give it a click if you like.
          </Alert>
          <Alert color="danger">
            This is a danger alert with{" "}
            <a
              className="alert-link"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              an example link
            </a>
            . Give it a click if you like.
          </Alert>
          <Alert color="warning">
            This is a warning alert with{" "}
            <a
              className="alert-link"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              an example link
            </a>
            . Give it a click if you like.
          </Alert>
          <Alert className="alert-default">
            This is a default alert with{" "}
            <a
              className="alert-link"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              an example link
            </a>
            . Give it a click if you like.
          </Alert>
        </div>
        <h3 id="dismissing">Dismissing</h3>
        <p>
          Using the alert JavaScript plugin, it’s possible to dismiss any alert
          inline. Here’s how:
        </p>
        <ul>
          <li>
            Be sure you’ve loaded the alert plugin, or the compiled Bootstrap
            JavaScript.
          </li>
          <li>
            If you’re building our JavaScript from source, it{" "}
            <a href="#pablo" onClick={e => e.preventDefault()}>
              requires <code className="highlighter-rouge">util.js</code>
            </a>
            . The compiled version includes this.
          </li>
          <li>
            Add a dismiss button and the{" "}
            <code className="highlighter-rouge">.alert-dismissible</code>
            class, which adds extra padding to the right of the alert and
            positions the <code className="highlighter-rouge">.close</code>
            button.
          </li>
          <li>
            On the dismiss button, add the{" "}
            <code className="highlighter-rouge">data-dismiss="alert"</code>
            attribute, which triggers the JavaScript functionality. Be sure to
            use the <code className="highlighter-rouge">{`<button>`}</code>
            element with it for proper behavior across all devices.
          </li>
          <li>
            To animate alerts when dismissing them, be sure to add the{" "}
            <code className="highlighter-rouge">.fade</code>
            and <code className="highlighter-rouge">.show</code>
            classes.
          </li>
        </ul>
        <p>You can see this in action with a live demo:</p>
        <div className="bd-example" data-example-id="">
          <UncontrolledAlert color="warning" fade={false}>
            <strong>Holy guacamole!</strong>
            You should check in on some of those fields below.
          </UncontrolledAlert>
        </div>
        <p>
          If you want to see more examples and properties please check the
          official{" "}
          <strong>
            <a
              href="https://getbootstrap.com/docs/4.3/components/alerts/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Bootstrap Documentation
            </a>
          </strong>
          .
        </p>
      </>
    );
  }
}

export default Alerts;
