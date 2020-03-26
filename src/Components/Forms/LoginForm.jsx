import React, { Component } from "react";
import { Form, Input, TextArea, Select } from "formsy-semantic-ui-react";
import { Button } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

class AddLeadForm extends Component {
  state = {
    username: "",
    password: "",
    loading: false
  };

  handleChange = (e, data) => {
    this.setState({ [data.name]: data.value });
  };

  submitHandler = e => {
    this.setState({ loading: true }, function() {
      setTimeout(() => {
        this.setState({ loading: false });
        const { username, password } = this.state;
        axios
          .post(
            `http://localhost:8089/leads`,
            {
              username,
              password
            },
            {
              headers: { "Content-Type": "application/json", crossOrigin: true }
            }
          )
          .then(res => {
            console.log(res);
            console.log(res.data);
          });

        toast("Logged in!");
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
                  control={Input}
                  label="username"
                  required
                  width={3}
                  name="username"
                  placeholder="User Name"
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Input}
                  label="Password"
                  required
                  width={3}
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </div>
            <div className="page-action-bar">
              <Input type="submit" name="sbtm">
                <Button type="submit" className="createbtn">
                  Login
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
