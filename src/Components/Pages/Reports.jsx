import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import calendar from "../../assets/calendar.png";
import { Link } from "react-router-dom";

class Reports extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-12 page-bar">
            <div className="bb">
              <div className="row">
                <div className="col-md-6">
                  <h3>View Reports</h3>
                  <p>
                    Here you can find detailed reports for the datasets
                    currently saved in the application.
                  </p>
                </div>
                <div className="col-md-6 pb-right">
                  <div className="page-bar-element">
                    <Modal
                      trigger={
                        <Button className="createbtn">Create new Task</Button>
                      }
                      centered={false}
                    >
                      <Modal.Header>Select a Photo</Modal.Header>
                      <Modal.Content image>
                        <Modal.Description>
                          <Header>Default Profile Image</Header>
                          <p>
                            We've found the following gravatar image associated
                            with your e-mail address.
                          </p>
                          <p>Is it okay to use this photo?</p>
                        </Modal.Description>
                      </Modal.Content>
                    </Modal>
                  </div>
                  <div className="page-bar-element">
                    <Button as="a">Import Leads</Button>
                  </div>
                  <div className="page-bar-element">
                    <Button as="a">View Leads</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 page-content">
            <div className="row">
              <Link to="/leadreport">
                <div className="col-md-2 report-info">
                  <div className="report-wrapper">
                    <div className="row">
                      <div className="col-md-12">
                        <img src={calendar} alt={"hh"} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <span>Monthly Activity</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="col-md-2 report-info">
                <div className="report-wrapper">
                  <div className="row">
                    <div className="col-md-12">
                      <img src={calendar} alt={"hh"} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <span>Lead Report</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 report-info">
                <div className="report-wrapper">
                  <div className="row">
                    <div className="col-md-12">
                      <img src={calendar} alt={"hh"} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <span>Agent-wise Report</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 report-info">
                <div className="report-wrapper">
                  <div className="row">
                    <div className="col-md-12">
                      <img src={calendar} alt={"hh"} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <span>Account Report</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 report-info">
                <div className="report-wrapper">
                  <div className="row">
                    <div className="col-md-12">
                      <img src={calendar} alt={"hh"} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <span>Lead Source Report</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 report-info">
                <div className="report-wrapper">
                  <div className="row">
                    <div className="col-md-12">
                      <img src={calendar} alt={"hh"} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <span>Campaign Activity</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Reports;
