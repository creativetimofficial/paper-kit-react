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
            <a href="https://nodejs.org/en/">nodejs</a>) installed
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
