import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import AddLeadForm from "../Forms/AddLeadForm.jsx";
const Leads = () => {
  return (
    <div className="row">
      <div className="col-md-12 page-bar">
        <div className="bb">
          <div className="row">
            <div className="col-md-6">
              <h3>Add new lead</h3>
              <p>
                Fill out the details to add a new prospective client for your
                company. Also consider adding a <strong>followup</strong> to set
                a reminder for contacting the lead.
              </p>
            </div>
            <div className="col-md-6 pb-right">
              <div className="page-bar-element">
                <Modal
                  trigger={
                    <Button className="createbtn">Create new Lead</Button>
                  }
                  centered={false}
                >
                  <Modal.Header>Select a Photo</Modal.Header>
                  <Modal.Content image>
                    <Modal.Description>
                      <Header>Default Profile Image</Header>
                      <p>
                        We've found the following gravatar image associated with
                        your e-mail address.
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
          <div className="col-md-12">
            <AddLeadForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leads;
