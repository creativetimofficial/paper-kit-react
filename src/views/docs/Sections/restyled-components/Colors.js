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

// reactstrap components
// import {
// } from "reactstrap";

class Colors extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Colors
        </h1>
        <p className="bd-lead">
          You can change the default colors via variables from SCSS
        </p>
        <ol>
          <li>Download the project’s zip</li>
          <li>
            Make sure you have node.js ({" "}
            <a href="https://nodejs.org/en/?ref=creativetim" target="_blank">
              nodejs
            </a>
            ) installed
          </li>
          <li>
            Type <code className="highlighter-rouge">npm install</code> in
            terminal/console in the source folder where{" "}
            <code className="highlighter-rouge">package.json</code> is located
          </li>
          <li>
            You will find all the branding colors inside{" "}
            <code className="highlighter-rouge">
              assets/scss/paper-kit/_variables.scss
            </code>
            . You can change them with a{" "}
            <code className="highlighter-rouge">HEX</code> value or with other
            predefined variables.
          </li>
        </ol>
      </>
    );
  }
}

export default Colors;
