import React, { Component } from "react";
import LineChart from "../../Charts/LineChart";
import SourcePieChart from "../../Charts/SourcePieChart";
import PipelineChart from "../../Charts/PipelineChart";
import ConversionChart from "../../Charts/ConversionChart";
import { Button, Icon } from "semantic-ui-react";

class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 page-bar">
          <div className="bb">
            <div className="row">
              <div className="col-md-6">
                <h3>Dashboard</h3>
              </div>
              <div className="col-md-6 text-right">
                <Button animated>
                  <Button.Content visible>New Lead</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
                <Button>View leads</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 page-inner">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-3 stat-card">
                  <div className="stat-wrap green">
                    <div className="stat-num">63</div>
                    <div className="stat-info">
                      LEADS ADDED THIS WEEK
                      <div className="stat-icon">
                        <Icon name="user plus" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 stat-card">
                  <div className="stat-wrap red">
                    <div className="stat-num">382</div>
                    <div className="stat-info">
                      TOTAL LEADS IN THE PAST YEAR
                      <div className="stat-icon">
                        <Icon name="users" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 stat-card">
                  <div className="stat-wrap blue">
                    <div className="stat-num">13</div>
                    <div className="stat-info">
                      MONTHLY CONVERSIONS
                      <div className="stat-icon">
                        <Icon name="chart bar" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 stat-card">
                  <div className="stat-wrap violet">
                    <div className="stat-num">6</div>
                    <div className="stat-info">
                      HIGH PRIORITY FOLLOWUPS
                      <div className="stat-icon">
                        <Icon name="bullhorn" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 graph-wrapper">
                  <span className="graph-heading">Lead additions overview</span>
                  <LineChart />
                </div>
                <div className="col-md-6 graph-wrapper">
                  <span className="graph-heading">Lead sources overview</span>
                  <SourcePieChart />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 graph-wrapper">
                  <span className="graph-heading">
                    Lead conversions overview
                  </span>
                  <ConversionChart />
                </div>
                <div className="col-md-6 graph-wrapper">
                  <span className="graph-heading">Lead pipeline</span>
                  <PipelineChart />
                </div>
              </div>
            </div>
            <div className="col-md-4 side-tables">
              <h4>
                {" "}
                <Icon name="bell"></Icon> Upcoming followups
              </h4>
              <table class="table table-striped">
                <thead>
                  <th>Lead Name</th>
                  <th>Location</th>

                  <th>Medium</th>
                  <th>Date and Time</th>
                </thead>
                <tr>
                  <td>Nithin Krishna</td>
                  <td>Cochin,India</td>
                  <td>Phone call</td>
                  <td>12/02/2020 10:30 AM</td>
                </tr>
                <tr>
                  <td>Fyroz Haneefa</td>
                  <td>Mvpa,India</td>
                  <td>Phone call</td>
                  <td>12/02/2020 10:30 AM</td>
                </tr>
                <tr>
                  <td>Nithin Krishna</td>
                  <td>Cochin,India</td>
                  <td>Phone call</td>
                  <td>12/02/2020 10:30 AM</td>
                </tr>
                <tr>
                  <td>Fyroz Haneefa</td>
                  <td>Mvpa,India</td>
                  <td>Phone call</td>
                  <td>12/02/2020 10:30 AM</td>
                </tr>
                <tr>
                  <td>Nithin Krishna</td>
                  <td>Cochin,India</td>
                  <td>Phone call</td>
                  <td>12/02/2020 10:30 AM</td>
                </tr>
                <tr>
                  <td>Fyroz Haneefa</td>
                  <td>Mvpa,India</td>
                  <td>Phone call</td>
                  <td>12/02/2020 10:30 AM</td>
                </tr>
                <tr>
                  <td>Nithin Krishna</td>
                  <td>Cochin,India</td>
                  <td>Phone call</td>
                  <td>12/02/2020 10:30 AM</td>
                </tr>
                <tr>
                  <td>Fyroz Haneefa</td>
                  <td>Mvpa,India</td>
                  <td>Phone call</td>
                  <td>12/02/2020 10:30 AM</td>
                </tr>
                <tr>
                  <td>Nithin Krishna</td>
                  <td>Cochin,India</td>
                  <td>Phone call</td>
                  <td>12/02/2020 10:30 AM</td>
                </tr>
              </table>

              <h4>
                {" "}
                <Icon name="bell"></Icon>Pending followups
              </h4>
              <table class="table table-striped">
                <thead>
                  <th>Lead Name</th>
                  <th>Location</th>
                  <th>Medium</th>
                  <th>Date and Time</th>
                </thead>
                <tr>
                  <td>Nithin Krishna</td>
                  <td>Cochin,India</td>
                  <td>Phone call</td>
                  <td>12/02/2020 10:30 AM</td>
                </tr>
                <tr>
                  <td>Fyroz Haneefa</td>
                  <td>Mvpa,India</td>
                  <td>Phone call</td>
                  <td>12/02/2020 10:30 AM</td>
                </tr>
                <tr>
                  <td>Nithin Krishna</td>
                  <td>Cochin,India</td>
                  <td>Phone call</td>
                  <td>12/02/2020 10:30 AM</td>
                </tr>
                <tr>
                  <td>Fyroz Haneefa</td>
                  <td>Mvpa,India</td>
                  <td>Phone call</td>
                  <td>12/02/2020 10:30 AM</td>
                </tr>
                <tr>
                  <td>Nithin Krishna</td>
                  <td>Cochin,India</td>
                  <td>Phone call</td>
                  <td>12/02/2020 10:30 AM</td>
                </tr>
                <tr>
                  <td>Fyroz Haneefa</td>
                  <td>Mvpa,India</td>
                  <td>Phone call</td>
                  <td>12/02/2020 10:30 AM</td>
                </tr>
                <tr>
                  <td>Nithin Krishna</td>
                  <td>Cochin,India</td>
                  <td>Phone call</td>
                  <td>12/02/2020 10:30 AM</td>
                </tr>
                <tr>
                  <td>Fyroz Haneefa</td>
                  <td>Mvpa,India</td>
                  <td>Phone call</td>
                  <td>12/02/2020 10:30 AM</td>
                </tr>
                <tr>
                  <td>Nithin Krishna</td>
                  <td>Cochin,India</td>
                  <td>Phone call</td>
                  <td>12/02/2020 10:30 AM</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
