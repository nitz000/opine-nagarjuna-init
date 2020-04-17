import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Header,
  Modal,
  Form,
  Select,
  Dropdown,
} from "semantic-ui-react";
import { AgGridReact } from "ag-grid-react";
import { AllModules } from "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import ViewLeadBtn from "../Renderers/ViewLeadBtn.jsx";

const created_options = [
  { key: "1", text: "Past day", value: "Past day" },
  { key: "2", text: "Last 7 days", value: "Last 7 days" },
  { key: "3", text: "Last month", value: "Last month" },
  { key: "4", text: "This year", value: "This year" },
  { key: "5", text: "All Time", value: "All Time" },
];
const prio_options = [
  { key: "1", text: "Hot", value: "Hot" },
  { key: "2", text: "Warm", value: "Warm" },
  { key: "3", text: "Cold", value: "Cold" },
];
const stage_options = [
  { key: "1", text: "Prospect", value: "Prospect" },
  { key: "2", text: "Followup call made", value: "Followup call made" },
  { key: "3", text: "Followup call rejected", value: "Followup call rejected" },
  { key: "4", text: "Clinical call made", value: "Clinical call made" },
  { key: "5", text: "Clinical rejection", value: "Clinical rejection" },
  { key: "6", text: "Clinical conversion", value: "Clinical conversion" },
];

class ViewLeads extends Component {
  state = {
    modules: AllModules,
    columnDefs: [
      {
        headerName: "Customer Name",
        valueGetter: function (params) {
          const fncap =
            params.data.firstName.charAt(0).toUpperCase() +
            params.data.firstName.slice(1);
          return fncap;
        },
        width: 215,
        filter: "agTextColumnFilter",
        checkboxSelection: false,
        pinned: true,
      },
      {
        headerName: "View lead",
        cellRendererFramework: function (params) {
          const cellid = params.data.id;
          const celllink = "singlelead/" + cellid;
          return <Link to={celllink}>GO</Link>;
        },
        width: 50,
        pinned: true,
      },
      {
        headerName: "Lead Type",
        field: "lt",
        width: 150,
        filter: "agTextColumnFilter",
      },
      {
        headerName: "Lead Source",
        field: "ls",
        width: 180,
        filter: "agTextColumnFilter",
        filterParams: { defaultOption: "startsWith" },
      },
      {
        headerName: "Country ",
        field: "cn",
        width: 180,
        // cellRendererFramework: CountryRenderer,
      },
      {
        headerName: "Lead Engagement Index ",
        field: "le",
        width: 180,
        //cellRendererFramework: CellRenderer,
      },
      {
        headerName: "Lead Interest",
        field: "li",
        width: 200,
        filter: "agTextColumnFilter",
        filterParams: { defaultOption: "startsWith" },
      },
      {
        headerName: "Message",
        field: "lm",
        width: 400,
        filter: "agTextColumnFilter",
        filterParams: { defaultOption: "startsWith" },
      },
      {
        headerName: "Email address",
        field: "email",
        width: 200,
        filter: "agTextColumnFilter",
        filterParams: { defaultOption: "startsWith" },
      },
      {
        headerName: "Phone number",
        field: "phone",
        width: 200,
        filter: "agTextColumnFilter",
        filterParams: { defaultOption: "startsWith" },
      },
      {
        headerName: "Email address",
        field: "email",
        width: 200,
        filter: "agTextColumnFilter",
        filterParams: { defaultOption: "startsWith" },
      },
    ],
    defaultColDef: {
      selectable: true,
      enablePivot: true,
      sortable: true,
      filter: true,
      resizable: true,
      checkboxSelection: false,
    },
    rowData: [],
  };

  componentDidMount() {
    var username = "nishass";
    var password = "nishanisha";
    var basicAuth = "Basic " + btoa(username + ":" + password);
    var authkey = localStorage.getItem("appkey");
    console.log(authkey);
    const AuthStr = "Bearer ".concat(authkey);
    fetch("http://207.180.228.92:8089/rest/leads", {
      headers: {
        "Content-Type": "application/json",
        crossOrigin: false,
        Authorization: AuthStr,
      },
    })
      .then((result) => result.json())
      .then((rowData) => this.setState({ rowData }));
  }

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
                      rowMultiSelectWithClick={true}
                    ></AgGridReact>
                  </div>
                </div>
                <div className="col-md-2 table-sidebar">
                  <div className="side-inner">
                    <Form.Group widths="equal">
                      <Form.Field
                        control={Select}
                        label="Lead Creation date"
                        required
                        options={created_options}
                        width={3}
                        name="created"
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field
                        control={Select}
                        label="Lead Priority"
                        required
                        options={prio_options}
                        width={3}
                        name="prio"
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field
                        control={Select}
                        label="Lead Stage"
                        required
                        options={stage_options}
                        width={3}
                        name="stage"
                      />
                    </Form.Group>
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

export default ViewLeads;
