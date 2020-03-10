import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default class HeaderMenu extends Component {
  render() {
    return (
      <>
        <div className="header-element">NAGARJUNA</div>
        <div className="header-element">
          <Link to="/">Dashboard </Link>
        </div>
        <div className="header-element">
          <Dropdown item text="Lead Management">
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/leads">Add a new lead </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/viewleads">View all leads</Link>
              </Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="header-element">
          <Dropdown item text="E-mails">
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="header-element">
          {" "}
          <Link to="/calendar">Calendar</Link>
        </div>
        <div className="header-element">
          <Link to="/reports">Reports Managemnent</Link>
        </div>
        <div className="header-element">
          <Link to="/settings">Application Settings</Link>
        </div>
      </>
    );
  }
}
