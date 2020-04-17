import React, { Component } from "react";
import {
  IoIosMail,
  IoIosCall,
  IoMdBookmarks,
  IoIosPaperPlane,
  IoIosAdd,
} from "react-icons/io";
import { Dropdown, Button, Tab } from "semantic-ui-react";
import { FiEdit3 } from "react-icons/fi";

const panes = [
  {
    menuItem: "Lead Activity",
    render: () => (
      <Tab.Pane attached={false}>
        <div className="row">
          <div className="col-md-12 singleactivity">
            <div className="row">
              <div className="col-md-12 act-time">
                12:30 PM , 12 September 2019
              </div>
              <div className="col-md-12 act-det">
                <em>Nithin Krishna</em> added a followup for this lead
              </div>
            </div>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Lead Tasks",
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: "Email History",
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
];

class SingleLead extends Component {
  state = {
    id: "",
    leadName: "Nithin Krishna",
    leadTown: "Trivandrum",
    leadCountry: "India",
    leadEmail: "nithinkrishna.mec@gmail.com",
    leadPhonenumber: "+91 9207569837",
    leadIndex: 82,
  };
  componentDidMount() {
    const userid = this.props.match.params.id;
    var authkey = localStorage.getItem("appkey");
    console.log(authkey);
    var leadurl = "http://207.180.228.92:8089/rest/leads/" + userid;
    const AuthStr = "Bearer ".concat(authkey);
    fetch(leadurl, {
      headers: {
        "Content-Type": "application/json",
        crossOrigin: false,
        Authorization: AuthStr,
      },
    })
      .then(console.log((result) => result.json()))
      .then((rowData) => this.setState({ rowData }));
  }

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
          <div className="row lead-right">
            <div className="col-md-9 col-md-offset-3">
              <Tab
                menu={{ borderless: true, attached: false, tabular: false }}
                panes={panes}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SingleLead;
