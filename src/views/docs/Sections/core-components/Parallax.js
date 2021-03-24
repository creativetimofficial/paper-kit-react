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
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

// reactstrap components
// import {
// } from "reactstrap";

const codeParallax = `import React from "react";

// reactstrap components

// core components

function LandingPageHeader() {
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
          backgroundImage: "url(" + require("assets/img/daniel-olahh.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        ... other code
      </div>
    </>
  );
}

export default LandingPageHeader;
`;

class Parallax extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Parallax
        </h1>
        <p className="bd-lead" />
        <p>
          The parallax scrolling effect can be activated using the following
          code:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeParallax}
        </SyntaxHighlighter>
        <p>You can check it out in these components:</p>
        <ul>
          <li>
            <code className="highlighter-rouge">
              src/components/Headers/LandingPageHeader.js
            </code>
          </li>
          <li>
            <code className="highlighter-rouge">
              src/components/Headers/ProfilePageHeader.js
            </code>
          </li>
        </ul>
      </>
    );
  }
}

export default Parallax;
