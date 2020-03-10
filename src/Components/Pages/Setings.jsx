import React, { Component } from "react";
import { Link } from "react-router-dom";
class Settings extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-12 page-bar">
          <div className="bb">
            <div className="row">
              <div className="col-md-6">
                <h3>Application settings</h3>
              </div>
            </div>
          </div>
          <div className="row page-content">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <h5>Administrative settings</h5>
                  <Link to="/executiveaddition">Add an executive employee</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
