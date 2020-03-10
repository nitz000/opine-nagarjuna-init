import React, { Component } from "react";
import {
  IoIosMail,
  IoIosCall,
  IoMdBookmarks,
  IoIosPaperPlane,
  IoIosAdd
} from "react-icons/io";
import { Dropdown } from "semantic-ui-react";
import { FiEdit3 } from "react-icons/fi";
class SingleLead extends Component {
  state = {
    leadName: "Nithin Krishna",
    leadTown: "Trivandrum",
    leadCountry: "India",
    leadEmail: "nithinkrishna.mec@gmail.com",
    leadPhonenumber: "+91 9207569837",
    leadIndex: 82
  };
  render() {
    const name = this.state.leadName;
    let initials = name.match(/\b\w/g) || [];
    initials = (
      (initials.shift() || "") + (initials.pop() || "")
    ).toUpperCase();
    return (
      <>
        <div className="row">
          <div className="col-md-3 singleinner">
            <div className="row bb2">
              <div className="col-md-12 leadnameinfo">
                <div className="name-icon">{initials}</div>
                <div className="sidebar-name">
                  <h3>{name}</h3>
                  {this.state.leadEmail} <br />
                  {this.state.leadPhonenumber} <br />
                  {this.state.leadTown}, {this.state.leadCountry}
                </div>
              </div>
              <div className="col-md-12">
                <div className="sidebar-actions">
                  <div className="action">
                    <div className="action-icon">
                      <IoIosMail />
                    </div>
                    <div className="action-name">Email</div>
                  </div>
                  <div className="action">
                    <div className="action-icon">
                      <IoIosCall />
                    </div>
                    <div className="action-name">Phone</div>
                  </div>
                  <div className="action">
                    <div className="action-icon">
                      <IoIosPaperPlane />
                    </div>
                    <div className="action-name">SMS</div>
                  </div>
                  <div className="action">
                    <div className="action-icon">
                      <IoIosAdd />
                    </div>
                    <div className="action-name">Note</div>
                  </div>
                  <div className="action">
                    <div className="action-icon">
                      <IoMdBookmarks />
                    </div>
                    <div className="action-name">Task</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 lead-info">
                <div className="row">
                  <div className="col-md-12">
                    <h5>About this lead</h5>
                    <span className="pull-right editbtn">
                      <FiEdit3 />
                    </span>
                    <div className="displayform">
                      <div className="row">
                        <div className="col-md-5 df-cnt">
                          <label>Lead Name</label>
                          <br />
                          <span className="df-info">Nithin Krishna S</span>
                        </div>
                        <div className="col-md-6 df-cnt">
                          <label>Created on</label>
                          <br />
                          <span className="df-info">
                            11/02/2019 04:32:14 GMT
                          </span>
                        </div>
                        <div className="col-md-12 df-cnt">
                          <label>Created by</label>
                          <br />
                          <span className="df-info">
                            Customer Relations Exectuive - Nagarjuna - I
                          </span>
                        </div>
                        <div className="col-md-12 df-cnt">
                          <label>Last contacted on</label>
                          <br />
                          <span className="df-info">
                            11/02/2019 04:32:14 GMT
                          </span>
                        </div>
                        <div className="col-md-6 df-cnt">
                          <label>Lead Type</label>
                          <br />
                          <span className="df-info">Product Enquiry</span>
                        </div>
                        <div className="col-md-6 df-cnt">
                          <label>Lead Source</label>
                          <br />
                          <span className="df-info">Inbound Phone call</span>
                        </div>
                        <div className="col-md-6 df-cnt">
                          <label>Lead Interested in</label>
                          <br />
                          <span className="df-info">Panchakarma</span>
                        </div>
                        <div className="col-md-6 df-cnt">
                          <label>Clinical Intensity</label>
                          <br />
                          <span className="df-info">Severe</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 singleright">
            <div className="row">
              <div className="col-md-12 inner-top-bar">
                <div className="topbar-item">
                  Lead Stage
                  <Dropdown as="button" text="Followup call made">
                    <Dropdown.Menu>
                      <Dropdown.Item text="Prospect" />
                      <Dropdown.Item text="Followup call made" />
                      <Dropdown.Item text="Followup call rejected" />
                      <Dropdown.Item text="Clinical call made" />
                      <Dropdown.Item text="Clinical Rejection" />
                      <Dropdown.Item icon="Clinical Conversion" />
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="topbar-item">
                  Lead Priority
                  <Dropdown as="button" text="Hot">
                    <Dropdown.Menu>
                      <Dropdown.Item text="Hot" />
                      <Dropdown.Item text="Warm" />
                      <Dropdown.Item text="Cold" />
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SingleLead;
