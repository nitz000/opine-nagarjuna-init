import React, { Component } from "react";
import { Form, Input, TextArea, Select } from "formsy-semantic-ui-react";
import { Button, Placeholder } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" }
];
const leadowner_options = [
  { key: "1", text: "Nithin Krishna", value: "ld1" },
  { key: "2", text: "Fyroz Haneefa", value: "ld2" },
  { key: "3", text: "Ashik Sajeevan", value: "ld3" }
];

const emp_des_options = [
  { key: "1", text: "Customer Relations Officer", value: "ls1" },
  { key: "2", text: "Front Office Admin", value: "ls2" }
];
const lead_source_options = [
  { key: "1", text: "Product Enquiry", value: "lt1" },
  { key: "2", text: "Residential treatment enquiry", value: "lt2" }
];
const occupancy_status_options = [
  { key: "1", text: "DSO", value: "os1" },
  { key: "2", text: "FSO", value: "os2" },
  { key: "3", text: "FSQ", value: "os3" }
];
const interest_options = [
  { key: "1", text: "Panchakarma", value: "int1" },
  { key: "2", text: "Spine", value: "int2" },
  { key: "3", text: "Rehabilitation", value: "int3" },
  { key: "4", text: "Digestive Disorder", value: "int4" },
  { key: "5", text: "Gynaecological Disorders", value: "int5" }
];
const intensity_options = [
  { key: "1", text: "Mild", value: "inte1" },
  { key: "2", text: "Medium", value: "inte2" },
  { key: "3", text: "Acute", value: "inte3" }
];
const stage_options = [
  { key: "1", text: "Prospect", value: "st1" },
  { key: "2", text: "Followup call made", value: "st2" },
  { key: "3", text: "Followup call rejected", value: "st3" },
  { key: "4", text: "Clinical call made", value: "st4" },
  { key: "5", text: "Clinical rejection", value: "st5" },
  { key: "6", text: "Clinical conversion", value: "st6" }
];
const priority_options = [
  { key: "1", text: "Hot Lead", value: "pr1" },
  { key: "2", text: "Warm Lead", value: "pr2" },
  { key: "3", text: "Cold Lead", value: "pr3" }
];

const followup_options = [
  { key: "1", text: "Call", value: "fo1" },
  { key: "2", text: "Email", value: "fo2" },
  { key: "3", text: "Meeting", value: "fo3" }
];

class ExecutiveAdditionForm extends Component {
  state = {
    leadsource: "",
    leadtype: "",
    leadinterest: "",
    loading: false
  };

  handleChange = (e, data) => {
    this.setState({ [data.name]: data.value });
  };

  submitHandler = e => {
    this.setState({ loading: true }, function() {
      setTimeout(() => {
        this.setState({ loading: false });
        toast("Lead added successfully!");
      }, 500);
    });
  };

  render() {
    const errorLabel = <div className="errorlabel"></div>;
    return (
      <div className="row">
        <ToastContainer className="successtoast" hideProgressBar />
        <Form
          loading={this.state.loading}
          className="addform"
          onValidSubmit={this.submitHandler}
        >
          <div className="col-md-10 addform-left">
            <Form.Group widths="equal">
              <Form.Field
                control={Input}
                label="Employee Name"
                required
                width={3}
                name="leadsource"
                placeholder="Lead Source"
                onChange={this.handleChange}
              />
              <Form.Field
                control={Select}
                label="Employee Designation"
                options={emp_des_options}
                required
                width={4}
                placeholder="Lead Type"
                name="leadtype"
                onChange={this.handleChange}
              />
              <Form.Field
                control={Input}
                type="date"
                label="Date of Addition"
                placeholder="Date of Addition"
                width={2}
                icon="calendar outline"
                iconPosition="left"
                name="doa"
              />
            </Form.Group>
            <Form.Group>
              <Form.Field
                control={Input}
                label="Phone number 1"
                icon="phone"
                width={4}
                iconPosition="left"
                placeholder="Phone number"
                name="phno"
              />
              <Form.Field
                control={Input}
                label="Phone number 2"
                width={4}
                icon="phone"
                iconPosition="left"
                placeholder="Phone number"
                name="phno"
              />

              <Form.Field
                control={Input}
                label="Email address"
                options={options}
                icon="at"
                iconPosition="left"
                placeholder="Email address"
                width={6}
                name="email"
                validations="isEmail"
                validationErrors={{ isEmail: "Email not valid" }}
                errorLabel={errorLabel}
              />
              <Form.Field
                control={Select}
                label="Gender"
                options={options}
                placeholder="Gender"
                name="gender"
              />
            </Form.Group>
            <Form.Group></Form.Group>
            <Form.Field
              control={TextArea}
              label="Address"
              placeholder=""
              name="notes"
            />
            <Input type="submit" name="sbtm">
              <Button type="submit" className="createbtn">
                Add new lead
              </Button>
            </Input>
          </div>
          <div className="col-md-2 inner-right-side">
            <h4>Additional Details</h4>
            <Placeholder style={{ height: 150, width: 150 }}>
              <Placeholder.Image />
            </Placeholder>
            <h4>Shift timings</h4>

            <Form.Field
              control={Input}
              label="Start Time"
              type="time"
              name="foll-time"
            />
            <Form.Field
              control={Input}
              label="End Time"
              type="time"
              name="foll-time"
            />
          </div>
        </Form>
      </div>
    );
  }
}

export default ExecutiveAdditionForm;
