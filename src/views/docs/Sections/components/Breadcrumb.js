import React from "react";

// reactstrap components
import {
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";

class BreadcrumbDocs extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Breadcrumb
        </h1>
        <p className="bd-lead">
          Indicate the current page's location within a navigational hierarchy
          that automatically adds separators via CSS.
        </p>
        <h2 id="overview">Overview</h2>
        <p>
          Separators are automatically added in CSS through{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before">
            <code className="highlighter-rouge">::before</code>
          </a>
          and{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content">
            <code className="highlighter-rouge">content</code>
          </a>
          .
        </p>
        <div className="bd-example" data-example-id="">
          <Breadcrumb>
            <BreadcrumbItem aria-current="page" className="active">
              Home
            </BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                Home
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem aria-current="page" className="active">
              Library
            </BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                Home
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                Library
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem aria-current="page" className="active">
              Data
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </>
    );
  }
}

export default BreadcrumbDocs;
