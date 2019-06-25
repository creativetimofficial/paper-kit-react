import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

class Introduction extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Introduction
        </h1>
        <p className="bd-lead">Paper Kit React is a freeby Bootstrap 4, React and Reactstrap UI Kit.</p>
        <h2 id="quick-start">Quick start</h2>
        <p>
          To start using the UI Kit you will need to import some files in your
          current project or start from scratch using our template (scroll down
          in this page to view it).
        </p>
        <h3 id="css">CSS</h3>
        <p>
          Copy-paste the stylesheet{" "}
          <code className="highlighter-rouge">{`<link>`}</code>
          into your <code className="highlighter-rouge">index.js</code> file 
          before all other stylesheets to load our CSS.
        </p>
        <h3 id="fonts-and-icons">Fonts and Icons</h3>
        <p>
          Copy-paste the stylesheet{" "}
          <code className="highlighter-rouge">{`<link>`}</code>
          into your <code className="highlighter-rouge">{`<head>`}</code>
          before all other stylesheets to load the Fonts and Icons.
        </p>
        <h2 id="starter-template">Starter template</h2>
        <p>
          Be sure to have your pages set up with the latest design and
          development standards. That means using an HTML5 doctype and including
          a viewport meta tag for proper responsive behaviors. Put it all
          together and your pages should look like this:
        </p>
      </>
    );
  }
}

export default Introduction;
