import React, { Component } from "react";
import { Form, Input } from "formsy-semantic-ui-react";
import { Button } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

class AddLeadForm extends Component {
  state = {
    username: "",
    password: "",
    loading: false,
    loggedIn: false,
  };

  handleChange = (e, data) => {
    this.setState({ [data.name]: data.value });
  };

  submitHandler = (e) => {
    this.setState({ loading: true }, function () {
      setTimeout(() => {
        this.setState({ loading: false });
        const { username, password } = this.state;
        var session_url = "http://207.180.228.92:8089/login";
        var uname = "nisha";
        var pass = "nishanisha";
        const AuthStr = "Bearer ".concat(uname, pass);
        axios.post(session_url, { username, password }).then((res) => {
          console.log(res);
          console.log(res.data);
          localStorage.setItem("appkey", res.data);
        });

        toast("Logged in!");
        this.setState({ loggedIn: true });
      }, 500);
    });
  };
  render() {
    const errorLabel = <div className="errorlabel"></div>;
    return (
      <>
        <div className="col-md-6 loginLeft"></div>
        <div className="col-md-6 loginRight">
          <div className="row">
            <ToastContainer className="successtoast" hideProgressBar />
            <Form
              loading={this.state.loading}
              className="addform"
              onValidSubmit={this.submitHandler}
            >
              <div className="col-md-5 addform-left">
                <Form.Group>
                  <Form.Field
                    control={Input}
                    label="Username"
                    required
                    name="username"
                    placeholder="User Name"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Field
                    control={Input}
                    label="Password"
                    required
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Input type="submit" name="sbtm">
                  <Button type="submit" className="createbtn">
                    Login
                  </Button>
                </Input>
              </div>
            </Form>
          </div>
        </div>
      </>
    );
  }
}

export default AddLeadForm;
