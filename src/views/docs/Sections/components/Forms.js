import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row
} from "reactstrap";

class Forms extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Forms
        </h1>
        <p className="bd-lead">
          Examples and usage guidelines for form control styles, layout options,
          and custom components for creating a wide variety of forms.
        </p>
        <h2 id="overview">Overview</h2>
        <p>
          Be sure to use an appropriate{" "}
          <code className="highlighter-rouge">type</code>
          attribute on all inputs (e.g.,{" "}
          <code className="highlighter-rouge">email</code>
          for email address or <code className="highlighter-rouge">number</code>
          for numerical information) to take advantage of newer input controls
          like email verification, number selection, and more.
        </p>
        <p>
          Here’s a quick example to demonstrate Bootstrap’s form styles. Keep
          reading for documentation on required classes, form layout, and more.
        </p>
        <div className="bd-example" data-example-id="">
          <Form>
            <FormGroup>
              <label htmlFor="exampleInputEmail1">Email address</label>
              <Input
                aria-describedby="emailHelp"
                id="exampleInputEmail1"
                placeholder="Enter email"
                type="email"
              />
              <FormText className="text-muted" color="default" id="emailHelp">
                We'll never share your email with anyone else.
              </FormText>
            </FormGroup>
            <FormGroup>
              <label htmlFor="exampleInputPassword1">Password</label>
              <Input
                id="exampleInputPassword1"
                placeholder="Password"
                type="password"
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input defaultValue="" type="checkbox" />
                Option one is this{" "}
                <span className="form-check-sign">
                  <span className="check" />
                </span>
              </Label>
            </FormGroup>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <h2 id="form-controls">Form controls</h2>
        <p>
          Textual form controls—like{" "}
          <code className="highlighter-rouge">{`<input>`}</code>
          s, <code className="highlighter-rouge">{`<select>`}</code>
          s, and <code className="highlighter-rouge">{`<textarea>`}</code>
          s—are styled with the{" "}
          <code className="highlighter-rouge">.form-control</code>
          class. Included are styles for general appearance, focus state,
          sizing, and more.
        </p>
        <p>
          Be sure to explore our{" "}
          <a href="#pablo" onClick={e => e.preventDefault()}>
            custom forms
          </a>
          to further style{" "}
          <code className="highlighter-rouge">{`<select>`}</code>
          s.
        </p>
        <div className="bd-example" data-example-id="">
          <Form>
            <FormGroup>
              <label htmlFor="exampleFormControlInput1">Email address</label>
              <Input
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="exampleFormControlSelect1">Example select</label>
              <Input id="exampleFormControlSelect1" type="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <label htmlFor="exampleFormControlSelect2">
                Example multiple select
              </label>
              <Input id="exampleFormControlSelect2" multiple="" type="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <label htmlFor="exampleFormControlTextarea1">
                Example textarea
              </label>
              <Input id="exampleFormControlTextarea1" rows="3" />
            </FormGroup>
          </Form>
        </div>
        <h2 id="examples">Examples</h2>
        <div className="bd-example" data-example-id="">
          <FormGroup className="has-success">
            <Input
              className="form-control-success"
              defaultValue="Success"
              type="text"
            />
          </FormGroup>
        </div>
        <div className="bd-example" data-example-id="">
          <FormGroup className="has-danger">
            <Input
              className="form-control-danger"
              defaultValue="Error Input"
              type="email"
            />
          </FormGroup>
        </div>
        <div className="bd-example" data-example-id="">
          <InputGroup>
            <Input placeholder="Group Addon" type="text" />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <i className="fa fa-group" />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <h2 id="checkboxes-and-radios">Checkboxes and radios</h2>
        <p>
          Default checkboxes and radios are improved upon with the help of{" "}
          <code className="highlighter-rouge">.form-check</code>,{" "}
          <strong>
            a single class for both input types that improves the layout and
            behavior of their HTML elements
          </strong>
          . Checkboxes are for selecting one or several options in a list, while
          radios are for selecting one option from many.
        </p>
        <p>
          Disabled checkboxes and radios are supported, but to provide a{" "}
          <code className="highlighter-rouge">not-allowed</code>
          cursor on hover of the parent{" "}
          <code className="highlighter-rouge">{`<label>`}</code>, you’ll need to
          add the <code className="highlighter-rouge">.disabled</code>
          class to the parent{" "}
          <code className="highlighter-rouge">.form-check</code>. The disabled
          class will also lighten the text color to help indicate the input’s
          state.
        </p>
        <h3 id="default-stacked">Default (stacked)</h3>
        <p>
          By default, any number of checkboxes and radios that are immediate
          sibling will be vertically stacked and appropriately spaced with{" "}
          <code className="highlighter-rouge">.form-check</code>.
        </p>
        <div className="bd-example" data-example-id="">
          <FormGroup check>
            <Label check>
              <Input defaultChecked defaultValue="" type="checkbox" />
              Option one is this and that—be sure to include why it's great{" "}
              <span className="form-check-sign">
                <span className="check" />
              </span>
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input defaultValue="" disabled type="checkbox" />
              Option two is disabled{" "}
              <span className="form-check-sign">
                <span className="check" />
              </span>
            </Label>
          </FormGroup>
        </div>
        <div className="bd-example" data-example-id="">
          <div className="form-check-radio">
            <Label check>
              <Input
                defaultValue="option1"
                id="exampleRadios1"
                name="exampleRadios"
                type="radio"
              />
              Radio is off <span className="form-check-sign" />
            </Label>
          </div>
          <div className="form-check-radio">
            <Label check>
              <Input
                defaultChecked
                defaultValue="option2"
                id="exampleRadios2"
                name="exampleRadios"
                type="radio"
              />
              Radio is on <span className="form-check-sign" />
            </Label>
          </div>
          <div className="form-check-radio disabled">
            <Label check>
              <Input
                defaultValue="option3"
                disabled
                id="exampleRadios3"
                name="exampleRadios"
                type="radio"
              />
              Disabled radio is off <span className="form-check-sign" />
            </Label>
          </div>
        </div>
        <h3 id="inline">Inline</h3>
        <p>
          Group checkboxes or radios on the same horizontal row by adding{" "}
          <code className="highlighter-rouge">.form-check-inline</code>
          to any <code className="highlighter-rouge">.form-check</code>.
        </p>
        <div className="bd-example" data-example-id="">
          <FormGroup check inline>
            <Label check>
              <Input
                defaultValue="option1"
                id="inlineCheckbox1"
                type="checkbox"
              />
              1 <span className="form-check-sign" />
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
              <Input
                defaultValue="option2"
                id="inlineCheckbox2"
                type="checkbox"
              />
              2 <span className="form-check-sign" />
            </Label>
          </FormGroup>
          <FormGroup check disabled inline>
            <Label check>
              <Input
                defaultValue="option3"
                disabled
                id="inlineCheckbox3"
                type="checkbox"
              />
              3 <span className="form-check-sign" />
            </Label>
          </FormGroup>
        </div>
        <div className="bd-example" data-example-id="">
          <div className="form-check-radio form-check-inline">
            <Label check>
              <Input
                defaultValue="option1"
                id="exampleRadiosInline1"
                name="exampleRadiosInline"
                type="radio"
              />
              1 <span className="form-check-sign" />
            </Label>
          </div>
          <div className="form-check-radio form-check-inline">
            <Label check>
              <Input
                defaultChecked
                defaultValue="option2"
                id="exampleRadiosInline2"
                name="exampleRadiosInline"
                type="radio"
              />
              2 <span className="form-check-sign" />
            </Label>
          </div>
          <div className="form-check-radio form-check-inline disabled">
            <Label check>
              <Input
                defaultValue="option3"
                disabled
                id="exampleRadiosInline3"
                name="exampleRadiosInline"
                type="radio"
              />
              3 <span className="form-check-sign" />
            </Label>
          </div>
        </div>
        <h2 id="layout">Layout</h2>
        <p>
          Since Bootstrap applies{" "}
          <code className="highlighter-rouge">display: block</code>
          and <code className="highlighter-rouge">width: 100%</code>
          to almost all our form controls, forms will by default stack
          vertically. Additional classes can be used to vary this layout on a
          per-form basis.
        </p>
        <h3 id="form-grid">Form grid</h3>
        <p>
          More complex forms can be built using our grid classes. Use these for
          form layouts that require multiple columns, varied widths, and
          additional alignment options.
        </p>
        <div className="bd-example" data-example-id="">
          <Form>
            <Row>
              <div className="col">
                <Input placeholder="First name" type="text" />
              </div>
              <div className="col">
                <Input placeholder="Last name" type="text" />
              </div>
            </Row>
          </Form>
        </div>
        <h4 id="form-row">Form row</h4>
        <p>
          You may also swap <code className="highlighter-rouge">.row</code>
          for <code className="highlighter-rouge">.form-row</code>, a variation
          of our standard grid row that overrides the default column gutters for
          tighter and more compact layouts.
        </p>
        <div className="bd-example" data-example-id="">
          <Form>
            <div className="form-row">
              <div className="col">
                <Input placeholder="First name" type="text" />
              </div>
              <div className="col">
                <Input placeholder="Last name" type="text" />
              </div>
            </div>
          </Form>
        </div>
        <p>More complex layouts can also be created with the grid system.</p>
        <div className="bd-example" data-example-id="">
          <Form>
            <div className="form-row">
              <FormGroup className="col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <Input id="inputEmail4" placeholder="Email" type="email" />
              </FormGroup>
              <FormGroup className="col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <Input
                  id="inputPassword4"
                  placeholder="Password"
                  type="password"
                />
              </FormGroup>
            </div>
            <FormGroup>
              <label htmlFor="inputAddress">Address</label>
              <Input id="inputAddress" placeholder="1234 Main St" type="text" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="inputAddress2">Address 2</label>
              <Input
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
                type="text"
              />
            </FormGroup>
            <div className="form-row">
              <FormGroup className="col-md-6">
                <label htmlFor="inputCity">City</label>
                <Input id="inputCity" type="text" />
              </FormGroup>
              <FormGroup className="col-md-4">
                <label htmlFor="inputState">State</label>
                <Input id="inputState" type="select">
                  <option selected="">Choose...</option>
                  <option>...</option>
                </Input>
              </FormGroup>
              <FormGroup className="col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <Input id="inputZip" type="text" />
              </FormGroup>
            </div>
            <FormGroup>
              <FormGroup check>
                <Label check>
                  <Input defaultValue="" type="checkbox" />
                  Check me out{" "}
                  <span className="form-check-sign">
                    <span className="check" />
                  </span>
                </Label>
              </FormGroup>
            </FormGroup>
            <Button color="primary" type="submit">
              Sign in
            </Button>
          </Form>
        </div>
        <h2 id="disabled-forms">Disabled forms</h2>
        <p>
          Add the <code className="highlighter-rouge">disabled</code>
          boolean attribute on an input to prevent user interactions and make it
          appear lighter.
        </p>
        <p>
          Add the <code className="highlighter-rouge">disabled</code>
          attribute to a{" "}
          <code className="highlighter-rouge">{`<fieldset>`}</code>
          to disable all the controls within.
        </p>
        <div className="bd-example" data-example-id="">
          <Form>
            <fieldset disabled>
              <FormGroup>
                <label htmlFor="disabledTextInput">Disabled input</label>
                <Input
                  id="disabledTextInput"
                  placeholder="Disabled input"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="disabledSelect">Disabled select menu</label>
                <Input id="disabledSelect" type="select">
                  <option>Disabled select</option>
                </Input>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input defaultValue="" type="checkbox" />
                  Can't check me out{" "}
                  <span className="form-check-sign">
                    <span className="check" />
                  </span>
                </Label>
              </FormGroup>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </fieldset>
          </Form>
        </div>
        <div className="bd-callout bd-callout-warning">
          <h4 id="caveat-with-anchors">Caveat with anchors</h4>
          <p>
            By default, browsers will treat all native form controls ({" "}
            <code className="highlighter-rouge">{`<input>`}</code>,{" "}
            <code className="highlighter-rouge">{`<select>`}</code>
            and <code className="highlighter-rouge">{`<button>`}</code>
            elements) inside a{" "}
            <code className="highlighter-rouge">{`<fieldset disabled>`}</code>
            as disabled, preventing both keyboard and mouse interactions on
            them. However, if your form also includes{" "}
            <code className="highlighter-rouge">
              {`<a ... className="btn btn-*">`}
            </code>
            elements, these will only be given a style of{" "}
            <code className="highlighter-rouge">pointer-events: none</code>. As
            noted in the section about{" "}
            <a href="#pablo" onClick={e => e.preventDefault()}>
              disabled state for buttons
            </a>
            (and specifically in the sub-section for anchor elements), this CSS
            property is not yet standardized and isn’t fully supported in Opera
            18 and below, or in Internet Explorer 10, and won’t prevent keyboard
            users from being able to focus or activate these links. So to be
            safe, use custom JavaScript to disable such links.
          </p>
        </div>
        <div className="bd-callout bd-callout-danger">
          <h4 id="cross-browser-compatibility">Cross-browser compatibility</h4>
          <p>
            While Bootstrap will apply these styles in all browsers, Internet
            Explorer 11 and below don’t fully support the{" "}
            <code className="highlighter-rouge">disabled</code>
            attribute on a{" "}
            <code className="highlighter-rouge">{`<fieldset>`}</code>. Use
            custom JavaScript to disable the fieldset in these browsers.
          </p>
        </div>
        <p>
          If you want to see more examples and properties please check the
          official{" "}
          <strong>
            <a
              href="http://getbootstrap.com/docs/4.0/components/forms/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Bootstrap Documentation
            </a>
          </strong>
          .
        </p>
      </>
    );
  }
}

export default Forms;
