import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import { FormGroup } from "reactstrap";

class Datetimepicker extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          DateTimePicker v4.17.47
        </h1>
        <p className="bd-lead" />
        <p>
          We have created the design of the date-time picker made by{" "}
          <strong>
            <a
              href="https://github.com/Eonasdan"
              rel="noopener noreferrer"
              target="_blank"
            >
              Eonasdan
            </a>
          </strong>
          . We have changed the colors, typography and buttons, so it can look
          like the rest of the dashboard.
        </p>
        <p>
          For more information please check{" "}
          <strong>
            <a
              href="https://eonasdan.github.io/bootstrap-datetimepicker/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Full Github Documentation
            </a>
          </strong>
          .
        </p>
        <p>Here is a coded example:</p>
        <div className="bd-example" data-example-id="">
          {/* input with datetimepicker */}
          <FormGroup>
            <label className="label-control">DateTimePicker</label>
            <ReactDatetime
              inputProps={{
                className: "form-control",
                placeholder: "Datetime Picker Here"
              }}
            />
          </FormGroup>
        </div>
      </>
    );
  }
}

export default Datetimepicker;
