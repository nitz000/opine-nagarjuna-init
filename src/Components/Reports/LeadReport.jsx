import React, { Component } from "react";
import {
  Button,
  Header,
  Modal,
  Form,
  Select,
  Dropdown
} from "semantic-ui-react";
import { AgGridReact } from "ag-grid-react";
import { AllModules } from "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class LeadReport extends Component {
  state = {
    modules: AllModules,
    columnDefs: [
      {
        headerName: "Athlete",
        field: "athlete",
        width: 150,
        sort: "desc"
      },
      {
        headerName: "Age",
        field: "age",
        width: 90
      },
      {
        headerName: "Country",
        field: "country",
        width: 120
      },
      {
        headerName: "Year",
        field: "year",
        width: 90,
        unSortIcon: true
      },
      {
        headerName: "Date",
        field: "date",
        width: 110
      },
      {
        headerName: "Sport",
        field: "sport",
        width: 110
      },
      {
        headerName: "Gold",
        field: "gold",
        width: 100
      },
      {
        headerName: "Silver",
        field: "silver",
        width: 100
      },
      {
        headerName: "Bronze",
        field: "bronze",
        width: 100
      },
      {
        headerName: "Total",
        field: "total",
        width: 100
      }
    ],
    defaultColDef: { sortable: true },
    rowData: null
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-12 page-bar">
          <div className="bb">
            <div className="row">
              <div className="col-md-6">
                <h3>Manage leads</h3>
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
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 page-content">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-10 ui-table">
                  <div className="filter-bar">
                    <Dropdown item text="Lead Actions" className="ddbtn">
                      <Dropdown.Menu>
                        <Dropdown.Item>View Lead</Dropdown.Item>
                        <Dropdown.Item>Add Activity</Dropdown.Item>
                        <Dropdown.Item>Send Email</Dropdown.Item>
                        <Dropdown.Item>Send SMS</Dropdown.Item>
                        <Dropdown.Item>Delete Lead</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item text="Change Lead owner" className="ddbtn">
                      <Dropdown.Menu>
                        <Dropdown.Item>Mahesh Manmadhan</Dropdown.Item>
                        <Dropdown.Item>Nithin Krishna</Dropdown.Item>
                        <Dropdown.Item>Fyroz Haneefa</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div
                    style={{ height: "72vh", width: "100%" }}
                    className="ag-theme-balham"
                  >
                    <AgGridReact
                      columnDefs={this.state.columnDefs}
                      rowData={this.state.rowData}
                      modules={this.state.modules}
                      defaultColDef={this.state.defaultColDef}
                      floatingFilter={true}
                      onGridReady={this.onGridReady}
                    ></AgGridReact>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeadReport;
