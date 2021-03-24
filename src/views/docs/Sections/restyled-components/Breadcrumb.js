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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const codeExamplesImport = `import { Breadcrumb, BreadcrumbItem } from 'reactstrap';`;
const codeExamples = `<Breadcrumb>
    <BreadcrumbItem active>Home</BreadcrumbItem>
</Breadcrumb>
<Breadcrumb>
    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
    <BreadcrumbItem active>Library</BreadcrumbItem>
</Breadcrumb>
<Breadcrumb>
    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
    <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
    <BreadcrumbItem active>Data</BreadcrumbItem>
</Breadcrumb>`;

class Breadcrumbs extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Breadcrumbs
        </h1>
        <p className="bd-lead">
          Indicate the current page's location within a navigational hierarchy
          that automatically adds separators via CSS.
        </p>
        <h2>Overview</h2>
        <p>
          Separators are automatically added in CSS through
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before?ref=creativetim"
            target="_blank"
          >
            <code className="highlighter-rouge">::before</code>
          </a>{" "}
          and{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/content?ref=creativetim"
            target="_blank"
          >
            <code className="highlighter-rouge">content</code>
          </a>
          .
        </p>
        <div className="bd-example">
          <Breadcrumb>
            <BreadcrumbItem active>Home</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="#/" onClick={(e) => e.preventDefault()}>
                Home
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Library</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="#/" onClick={(e) => e.preventDefault()}>
                Home
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="#/" onClick={(e) => e.preventDefault()}>
                Library
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Data</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamplesImport}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamples}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/breadcrumbs/?ref=creativetim"
            target="_blank"
          >
            reactstrap breadcrumbs documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Breadcrumbs;
