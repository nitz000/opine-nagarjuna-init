import React, { Component } from "react";
import {
  Button,
  Header,
  Modal,
  Select,
  Form,
  Input,
  TextArea
} from "semantic-ui-react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import events from "./events.js";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);
class CalendarMain extends Component {
  state = {
    myEventsList: []
  };
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
                      size="tiny"
                      trigger={
                        <Button className="createbtn">Create new Task</Button>
                      }
                      centered={false}
                      dimmer="true"
                    >
                      <Modal.Content>
                        <Form>
                          <div className="modalform">
                            <div className="col-md-12">
                              <h3>Add a new task</h3>
                            </div>
                            <div className="col-md-12">
                              <Form.Field
                                control={Input}
                                label="Task title"
                                required
                                width={16}
                                name="ttile"
                                placeholder="Task title"
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className="col-md-12">
                              <Form.Field
                                control={TextArea}
                                label="Task Description"
                                width={16}
                                name="tdesc"
                                placeholder="Task description"
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className="col-md-6">
                              <Form.Field
                                control={Input}
                                type="date"
                                label="Due date"
                                width={16}
                                name="tdesc"
                                placeholder="Task date"
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className="col-md-6">
                              <Form.Field
                                control={Input}
                                type="time"
                                label="Time"
                                width={16}
                                name="tdesc"
                                placeholder="Task date"
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className="col-md-12">
                              <h6>Assign to Department/Employee</h6>
                            </div>
                            <div className="col-md-6">
                              <Form.Field
                                control={Select}
                                type="time"
                                label="Department"
                                width={16}
                                name="tdesc"
                                placeholder="Department"
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className="col-md-6">
                              <Form.Field
                                control={Select}
                                type="time"
                                label="Employee"
                                width={16}
                                name="tdesc"
                                placeholder="Employee"
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className="col-md-6">
                              <Button type="submit" class="createbtn">
                                {" "}
                                Add task{" "}
                              </Button>
                              <Button type="" class="createbtn">
                                {" "}
                                Reset{" "}
                              </Button>
                            </div>
                          </div>
                        </Form>
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
              <div className="col-md-2 calendar-sidebar">
                <div className="sidebar-wrap">
                  <h5>Events Filter</h5>
                  <Form.Field>
                    <input type="checkbox" />
                    <label class="f-ph">Followup phone calls</label>
                  </Form.Field>
                  <Form.Field>
                    <input type="checkbox" />
                    <label class="f-em">Followup e-mails</label>
                  </Form.Field>
                  <Form.Field>
                    <input type="checkbox" />
                    <label class="f-mt"> Meetings</label>
                  </Form.Field>
                  <Form.Field>
                    <input type="checkbox" />
                    <label class="f-ot">Others</label>
                  </Form.Field>
                </div>
              </div>
              <div className="col-md-8 mt-1">
                <Calendar
                  localizer={localizer}
                  defaultView="week"
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: "77vh" }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CalendarMain;
