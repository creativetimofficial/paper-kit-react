import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

class FileStructure extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          File Structure
        </h1>
        <p className="bd-lead">Paper Kit 2 is a freeby Bootstrap 4 UI Kit.</p>
        <h2 id="paper-kit-2-structure">Paper Kit 2 Structure</h2>
        <p>
          Once you have downloaded the archive and opened it, you will find the
          following structure:
        </p>
        <h2 id="restyled-components">Restyled Components</h2>
        <p>
          Here is the list of Bootstrap 4 components that we restyled in Paper
          kit:
        </p>
        <ul>
          <li>Buttons</li>
          <li>Inputs</li>
          <li>Textarea</li>
          <li>Menu</li>
          <li>Dropdown</li>
          <li>Progress Bars</li>
          <li>Navigation Menu</li>
          <li>Pagination</li>
          <li>Labels</li>
          <li>Notifications</li>
          <li>Typography</li>
          <li>Images</li>
          <li>Tooltips</li>
          <li>Popovers</li>
          <li>Modal</li>
          <li>Carousel</li>
        </ul>
        <h2 id="new-components">New Components</h2>
        <p>
          Besides giving the existing Bootstrap elements a new look, we added
          new ones, so that the interface and consistent and homogenous.
        </p>
        <p>Going through them, we added:</p>
        <ul>
          <li>Checkboxes</li>
          <li>Radio Buttons</li>
          <li>Sliders</li>
          <li>Datetimepicker</li>
        </ul>
      </>
    );
  }
}

export default FileStructure;
