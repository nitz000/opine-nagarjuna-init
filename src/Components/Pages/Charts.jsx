import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";

class CalendarMain extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-12 page-bar">
            <div className="bb">
              <div className="row">
                <div className="col-md-6">
                  <h3>Task Management</h3>
                  <p>Use this page to keep record of your daily tasks.</p>
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
            <div className="row mt-2">
              <div className="col-md-2 calendar-sidebar">d</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CalendarMain;
