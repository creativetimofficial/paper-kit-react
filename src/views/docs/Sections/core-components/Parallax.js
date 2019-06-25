import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

class Parallax extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Parallax
        </h1>
        <p className="bd-lead" />
        <p>
          The parallax scrolling effect can be activated in the Page Header by
          simple putting{" "}
          <code className="highlighter-rouge">data-parallax="true"</code>, like
          in the below code. If you want to deactivate parallax, you have to
          change <code className="highlighter-rouge">true</code>
          value with <code className="highlighter-rouge">false</code>.
        </p>
      </>
    );
  }
}

export default Parallax;
