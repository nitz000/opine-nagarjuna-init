import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import ExecutiveAdditionForm from "../Forms/ExecutiveAdditionForm.jsx";
const ExecutiveAddition = () => {
  return (
    <div className="row">
      <div className="col-md-12 page-bar">
        <div className="bb">
          <div className="row">
            <div className="col-md-6">
              <h3>Add new executive</h3>
              <p>
                Fill out the details to add a new executive for your company.
              </p>
            </div>
            <div className="col-md-6 pb-right">
              <div className="page-bar-element">
                <Button as="a">Import Executives</Button>
              </div>
              <div className="page-bar-element">
                <Button as="a">View Executives</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 page-content">
        <div className="row">
          <div className="col-md-12">
            <ExecutiveAdditionForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveAddition;
