

import React from "react";

// reactstrap components
import { Alert, Container } from "reactstrap";

// core components

function SectionNotifications() {
  const [alertSuccess, setAlertSuccess] = React.useState(true);
  const [alertWarning, setAlertWarning] = React.useState(true);
  const [alertDanger, setAlertDanger] = React.useState(true);
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
        <Alert color="success" isOpen={alertSuccess}>
          <Container>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => setAlertSuccess(false)}
            >
              <i className="nc-icon nc-simple-remove" />
            </button>
            <span>This is a notification with close button.</span>
          </Container>
        </Alert>
        <Alert
          className="alert-with-icon"
          color="warning"
          isOpen={alertWarning}
        >
          <Container>
            <div className="alert-wrapper">
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={() => setAlertWarning(false)}
              >
                <i className="nc-icon nc-simple-remove" />
              </button>
              <div className="message">
                <i className="nc-icon nc-bell-55" /> This is a notification with
                close button and icon.
              </div>
            </div>
          </Container>
        </Alert>
        <Alert className="alert-with-icon" color="danger" isOpen={alertDanger}>
          <Container>
            <div className="alert-wrapper">
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={() => setAlertDanger(false)}
              >
                <i className="nc-icon nc-simple-remove" />
              </button>
              <div className="message">
                <i className="nc-icon nc-bell-55" /> This is a notification with
                close button and icon and have many lines. You can see that the
                icon and the close button are always vertically aligned. This is
                a beautiful notification. So you don't have to worry about the
                style.
              </div>
            </div>
          </Container>
        </Alert>
      </div>
    </>
  );
}

export default SectionNotifications;
