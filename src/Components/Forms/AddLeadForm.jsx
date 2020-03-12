import React, { Component } from "react";
import { Form, Input, TextArea, Select } from "formsy-semantic-ui-react";
import { Button } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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

const lead_source_options = [
  { key: "1", text: "Organic Search", value: "ls1" },
  { key: "2", text: "Online Chat", value: "ls2" },
  { key: "3", text: "Inbound Phone call", value: "ls3" },
  { key: "4", text: "Inbound Email", value: "ls4" },
  { key: "5", text: "Social Media", value: "ls5" },
  { key: "6", text: "Patient Referral", value: "ls6" },
  { key: "7", text: "Doctor Referral", value: "ls7" },
  { key: "8", text: "Other", value: "ls8" }
];
const lead_type_options = [
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

class AddLeadForm extends Component {
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
        axios.post(`url`).then(res => {
          console.log(res);
          console.log(res.data);
        });
        toast("Lead added successfully!");
      }, 500);
    });
  };

  render() {
    const errorLabel = <div className="errorlabel"></div>;
    return (
      <>
        <h4>Basic Information</h4>
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
                  control={Select}
                  label="Lead Source"
                  options={lead_source_options}
                  required
                  width={3}
                  name="leadsource"
                  placeholder="Lead Source"
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Select}
                  label="Lead Type"
                  options={lead_type_options}
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
                <Form.Field
                  control={Select}
                  label="Occupancy Status"
                  options={occupancy_status_options}
                  placeholder="Occupancy"
                  width={3}
                  name="occ-st"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  control={Select}
                  label="Lead Interest"
                  options={interest_options}
                  placeholder="Lead Interested in"
                  required
                  width={4}
                  name="leadinterest"
                  onChange={this.handleChange}
                  error={this.state.leadinteresterror}
                />
                <Form.Field
                  control={Select}
                  label="Clinical Intensity"
                  options={intensity_options}
                  placeholder="Clinical Intensity"
                  width={4}
                  name="cli-int"
                />

                <Form.Field
                  control={Input}
                  label="First name"
                  placeholder="First name"
                  width={4}
                  name="first-name"
                />
                <Form.Field
                  control={Input}
                  label="Last name"
                  placeholder="Last name"
                  width={4}
                  name="last-name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  control={Select}
                  label="Gender"
                  options={options}
                  placeholder="Gender"
                  name="gender"
                />

                <Form.Field
                  control={Input}
                  label="Email address"
                  options={options}
                  icon="at"
                  iconPosition="left"
                  placeholder="Email address"
                  width={4}
                  name="email"
                  validations="isEmail"
                  validationErrors={{ isEmail: "Email not valid" }}
                  errorLabel={errorLabel}
                />

                <Form.Field
                  control={Input}
                  label="Phone number"
                  icon="phone"
                  iconPosition="left"
                  placeholder="Phone number"
                  name="phno"
                />
              </Form.Group>
              <Form.Field
                control={TextArea}
                label="Additional Notes"
                placeholder=""
                name="notes"
              />
              <h4>Clinical Information</h4>
              <Form.Group>
                <Form.Field
                  control={Input}
                  name="age"
                  type="number"
                  label="Age"
                  width={2}
                />
                <Form.Field
                  control={Select}
                  name="food"
                  label="Food eaten outside home?"
                  width={4}
                />
                <Form.Field
                  control={Select}
                  name="exercise"
                  label="Exercise pattern"
                  width={4}
                />
                <Form.Field
                  control={Input}
                  name="exercise"
                  label="Duration of Joint and Bone illness"
                  labelPosition="right corner"
                  width={4}
                />
              </Form.Group>
            </div>

            <div className="col-md-2 inner-right-side">
              <h4>Additional Lead Details</h4>
              <Form.Field
                control={Select}
                label="Lead Priority"
                options={priority_options}
                placeholder="Lead Priority"
                name="lead-prio"
              />
              <Form.Field
                control={Select}
                label="Lead Status"
                options={stage_options}
                placeholder="Lead Stage"
                name="lead-stage"
              />
              <Form.Field
                control={Select}
                label="Lead Owner"
                options={leadowner_options}
                placeholder="Lead Owner"
                name="lead-owner"
              />
              <h4>Schedule next follow-up</h4>
              <Form.Field
                control={Select}
                label="Followup medium"
                options={followup_options}
                placeholder="Followup medium"
                name="foll-med"
              />
              <Form.Field
                control={Input}
                label="Followup Date"
                type="date"
                name="foll-dt"
              />
              <Form.Field
                control={Input}
                label="Followup Time"
                type="time"
                name="foll-time"
              />
            </div>
            <div className="page-action-bar">
              <Input type="submit" name="sbtm">
                <Button type="submit" className="createbtn">
                  Add new lead
                </Button>
              </Input>
            </div>
          </Form>
        </div>
      </>
    );
  }
}

export default AddLeadForm;
