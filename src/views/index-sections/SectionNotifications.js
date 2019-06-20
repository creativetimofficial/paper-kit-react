import React from "react";

// reactstrap components
import { Alert, Container } from "reactstrap";

// core components

function SectionNotifications() {
  return (
    <>
      <Container className="tim-container">
        <div className="title">
          <h3>Notifications</h3>
        </div>
      </Container>
      <div id="notifications">
        <Alert color="info">
          <Container>
            <span>This is a plain notification!</span>
          </Container>
        </Alert>
        <Alert color="success">
          <Container>
            <span>This is a notification with close button.</span>
          </Container>
        </Alert>
        <Alert className="alert-with-icon" color="warning">
          <Container>
            <div className="alert-wrapper">
              <div className="message">
                <i className="nc-icon nc-bell-55" />
                This is a notification with close button and icon.
              </div>
            </div>
          </Container>
        </Alert>
        <Alert className="alert-with-icon" color="danger">
          <Container>
            <div className="alert-wrapper">
              <div className="message">
                <i className="nc-icon nc-bell-55" />
                This is a notification with close button and icon and have many
                lines. You can see that the icon and the close button are always
                vertically aligned. This is a beautiful notification. So you
                don't have to worry about the style.
              </div>
            </div>
          </Container>
        </Alert>
      </div>
    </>
  );
}

export default SectionNotifications;
