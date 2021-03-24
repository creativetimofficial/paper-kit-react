/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import Switch from "react-bootstrap-switch";
import { Col, CardSubtitle, Alert } from "reactstrap";

const codeSwitchExample = `<Col xs={12} md={4}>
    <CardSubtitle>Default</CardSubtitle>
    <Switch onColor="default" offColor="default" />{" "}
    <Switch
      defaultValue={false}
      onColor="default"
      offColor="default"
    />
</Col>
<Col xs={12} md={4}>
    <CardSubtitle>Plain</CardSubtitle>
    <Switch
      offColor="primary"
      offText=""
      onColor="primary"
      onText=""
    />{" "}
    <Switch
      defaultValue={false}
      offColor="primary"
      offText=""
      onColor="primary"
      onText=""
    />
</Col>
<Col xs={12} md={4}>
    <CardSubtitle>With Icons</CardSubtitle>
    <Switch
      offColor="success"
      offText={<i className="nc-icon nc-simple-remove" />}
      onColor="success"
      onText={<i className="nc-icon nc-check-2" />}
    />{" "}
    <Switch
      defaultValue={false}
      offColor="success"
      offText={<i className="nc-icon nc-simple-remove" />}
      onColor="success"
      onText={<i className="nc-icon nc-check-2" />}
    />
</Col>`;

class Switches extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          React Bootstrap Switch v15.5.3 <span className="text-danger">DEPRECATED!</span>
        </h1>
        <p className="bd-lead">
          For this component, we've used{" "}
          <a
            href="https://github.com/Julusian/react-bootstrap-switch?ref=creativetim"
            target="_blank"
          >
            react-bootstrap-switch
          </a>
          .
        </p>
        <Alert color="danger">This plugin is deprecated, please check the <Link to="/documentation/forms" className="text-white font-weight-bold">Forms</Link> for the replacement.</Alert>
        <p>To use it, you'll need the following import:</p>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import Switch from 'react-bootstrap-switch';`}</SyntaxHighlighter>
        <h2>Example</h2>
        <div className="bd-example">
          <Col xs={12} md={4}>
            <CardSubtitle>Default</CardSubtitle>
            <Switch onColor="default" offColor="default" />{" "}
            <Switch defaultValue={false} onColor="default" offColor="default" />
          </Col>
          <Col xs={12} md={4}>
            <CardSubtitle>Plain</CardSubtitle>
            <Switch
              offColor="primary"
              offText=""
              onColor="primary"
              onText=""
            />{" "}
            <Switch
              defaultValue={false}
              offColor="primary"
              offText=""
              onColor="primary"
              onText=""
            />
          </Col>
          <Col xs={12} md={4}>
            <CardSubtitle>With Icons</CardSubtitle>
            <Switch
              offColor="success"
              offText={<i className="nc-icon nc-simple-remove" />}
              onColor="success"
              onText={<i className="nc-icon nc-check-2" />}
            />{" "}
            <Switch
              defaultValue={false}
              offColor="success"
              offText={<i className="nc-icon nc-simple-remove" />}
              onColor="success"
              onText={<i className="nc-icon nc-check-2" />}
            />
          </Col>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSwitchExample}
        </SyntaxHighlighter>
        <p>
          For props please refer to{" "}
          <a
            href="https://github.com/Julusian/react-bootstrap-switch?ref=creativetim"
            target="_blank"
          >
            official react-bootstrap-switch documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Switches;
