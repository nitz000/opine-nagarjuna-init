import React, { Component } from "react";
import { Form, Input, TextArea, Select } from "formsy-semantic-ui-react";
import { Button } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const options = [
  { key: "m", text: "Male", value: "Male" },
  { key: "f", text: "Female", value: "Female" },
  { key: "o", text: "Transgender", value: "Transgender" },
];
const leadowner_options = [
  { key: "1", text: "Nithin Krishna", value: "LeadOwner1" },
  { key: "2", text: "Fyroz Haneefa", value: "Fyroz_Haneefa" },
  { key: "3", text: "Ashik Sajeevan", value: "Ashik_Sajeevan" },
];

const lead_source_options = [
  { key: "1", text: "Organic Search", value: "LeadSource1" },
  { key: "2", text: "Online Chat", value: "LeadSource2" },
  { key: "3", text: "Inbound Phone call", value: "Inbound_Phone_call" },
  { key: "4", text: "Inbound Email", value: "Inbound_Email" },
  { key: "5", text: "Social Media", value: "Social_Media" },
  { key: "6", text: "Patient Referral", value: "Patient_Referral" },
  { key: "7", text: "Doctor Referral", value: "Doctor_Referral" },
  { key: "8", text: "Other", value: "Other" },
];
const lead_type_options = [
  { key: "1", text: "Product Enquiry", value: "LeadType1" },
  {
    key: "2",
    text: "Residential Treatment Enquiry",
    value: "Residential_Treatment_Enquiry",
  },
];
const occupancy_status_options = [
  { key: "1", text: "DSO", value: "DSO" },
  { key: "2", text: "FSO", value: "FSO" },
  { key: "3", text: "FSQ", value: "FSQ" },
];
const interest_options = [
  { key: "1", text: "Panchakarma", value: "Panchakarma" },
  { key: "2", text: "Spine", value: "Spine" },
  { key: "3", text: "Rehabilitation", value: "Rehabilitation" },
  { key: "4", text: "Digestive Disorder", value: "Digestive_Disorder" },
  {
    key: "5",
    text: "Gynaecological Disorders",
    value: "Gynaecological_Disorders",
  },
];
const intensity_options = [
  { key: "1", text: "Mild", value: "Mild" },
  { key: "2", text: "Medium", value: "Medium" },
  { key: "3", text: "Acute", value: "Acute" },
];
const stage_options = [
  { key: "1", text: "Prospect", value: "Prospect" },
  { key: "2", text: "Followup call made", value: "Followup_call_made" },
  { key: "3", text: "Followup call rejected", value: "Followup_call_rejected" },
  { key: "4", text: "Clinical call made", value: "Clinical_call_made" },
  { key: "5", text: "Clinical rejection", value: "Clinical_rejection" },
  { key: "6", text: "Clinical conversion", value: "Clinical_conversion" },
];
const priority_options = [
  { key: "1", text: "Hot Lead", value: "Hot" },
  { key: "2", text: "Warm Lead", value: "Warm" },
  { key: "3", text: "Cold Lead", value: "Cold" },
];

const followup_options = [
  { key: "1", text: "Call", value: "Call" },
  { key: "2", text: "Email", value: "Email" },
  { key: "3", text: "Meeting", value: "Meeting" },
];

class AddLeadForm extends Component {
  state = {
    leadsource: "",
    leadtype: "",
    leadinterest: "",
    dateOfAddition: "",
    occupancyStatus: "",
    leadInterest: "",
    clinicalIntensity: "",
    firstName: "",
    lastName: "",
    gender: "",
    emailAddress: "",
    phoneNumber: "",
    additionalNotes: "",
    leadPriority: "",
    leadStatus: "",
    leadOwner: "",
    country: "",
    dosc: "",
    docc: "",
    loading: false,
  };

  handleChange = (e, data) => {
    this.setState({ [data.name]: data.value });
  };

  submitHandler = (e) => {
    this.setState({ loading: true }, function () {
      setTimeout(() => {
        this.setState({ loading: false });
        const {
          leadSource,
          leadType,
          dateOfAddition,
          occupancyStatus,
          leadInterest,
          clinicalIntensity,
          firstName,
          lastName,
          gender,
          emailAddress,
          phoneNumber,
          additionalNotes,
          country,
          dosc,
          docc,
        } = this.state;
        var username = "nishass";
        var password = "nishanisha";
        var basicAuth = "Basic " + btoa(username + ":" + password);
        var authkey = localStorage.getItem("appkey");
        const AuthStr = "Bearer ".concat(authkey);
        //const AuthStr = 'Bearer '.concat(username,password);
        axios
          .post(
            `http://207.180.228.92:8089/rest/leads`,
            {
              leadSource,
              leadType,
              dateOfAddition,
              occupancyStatus,
              leadInterest,
              clinicalIntensity,
              firstName,
              lastName,
              gender,
              emailAddress,
              phoneNumber,
              additionalNotes,
              country,
              dosc,
              docc,
              additionalLeadDetails: {
                leadPriority: this.state.leadPriority,
                leadStatus: this.state.leadStatus,
                leadOwner: this.state.leadOwner,
              },
            },
            //{headers: {  "Authorization": + basicAuth}}
            {
              headers: {
                "Content-Type": "application/json",
                crossOrigin: true,
                Authorization: AuthStr,
              },
            }
          )
          .then((res) => {
            console.log(authkey);
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
                  name="leadSource"
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
                  name="leadType"
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
                  name="dateOfAddition"
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Select}
                  label="Occupancy Status"
                  options={occupancy_status_options}
                  placeholder="Occupancy"
                  width={3}
                  name="occupancyStatus"
                  onChange={this.handleChange}
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
                  name="leadInterest"
                  onChange={this.handleChange}
                  error={this.state.leadinteresterror}
                />
                <Form.Field
                  control={Select}
                  label="Clinical Intensity"
                  options={intensity_options}
                  placeholder="Clinical Intensity"
                  width={4}
                  name="clinicalIntensity"
                  onChange={this.handleChange}
                />

                <Form.Field
                  control={Input}
                  label="First name"
                  placeholder="First name"
                  width={4}
                  name="firstName"
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Input}
                  label="Last name"
                  placeholder="Last name"
                  width={4}
                  name="lastName"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  control={Select}
                  label="Gender"
                  options={options}
                  placeholder="Gender"
                  name="gender"
                  onChange={this.handleChange}
                />

                <Form.Field
                  control={Input}
                  label="Email address"
                  options={options}
                  icon="at"
                  iconPosition="left"
                  placeholder="Email address"
                  width={4}
                  name="emailAddress"
                  validations="isEmail"
                  validationErrors={{ isEmail: "Email not valid" }}
                  errorLabel={errorLabel}
                  onChange={this.handleChange}
                />

                <Form.Field
                  control={Input}
                  label="Phone number"
                  icon="phone"
                  iconPosition="left"
                  placeholder="Phone number"
                  name="phoneNumber"
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Input}
                  label="Country"
                  name="country"
                  placeholder="Country name"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  control={Input}
                  label="DOSC"
                  type="date"
                  placeholder="Gender"
                  name="dosc"
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Input}
                  label="DOCC"
                  type="date"
                  placeholder="Gender"
                  name="docc"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Field
                control={TextArea}
                label="Additional Notes"
                placeholder=""
                name="additionalNotes"
                onChange={this.handleChange}
              />
            </div>

            <div className="col-md-2 inner-right-side">
              <h4>Additional Lead Details</h4>
              <Form.Field
                control={Select}
                label="Lead Priority"
                options={priority_options}
                placeholder="Lead Priority"
                name="leadPriority"
                onChange={this.handleChange}
              />
              <Form.Field
                control={Select}
                label="Lead Status"
                options={stage_options}
                placeholder="Lead Stage"
                name="leadStatus"
                onChange={this.handleChange}
              />
              <Form.Field
                control={Select}
                label="Lead Owner"
                options={leadowner_options}
                placeholder="Lead Owner"
                name="leadOwner"
                onChange={this.handleChange}
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
