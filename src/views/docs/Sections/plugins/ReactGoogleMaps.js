import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

class GoogleMaps extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          How to set up Google API Keys
        </h1>
        <p className="bd-lead" />
        <ol>
          <li>
            Go to{" "}
            <a href="https://developers.google.com/maps/documentation/javascript/get-api-key">
              https://developers.google.com/maps/documentation/javascript/get-api-key
            </a>
          </li>
          <li>
            Scroll to the “Get an API key” Title and press “Get a Key” Button
          </li>
          <li>
            Choose a name for your project then press on Create and Enable API
          </li>
          <li>
            Get the Key and place it in your project where is this script:{" "}
            <code className="highlighter-rouge">
              {`<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"><script>`}
            </code>
          </li>
        </ol>
      </>
    );
  }
}

export default GoogleMaps;
