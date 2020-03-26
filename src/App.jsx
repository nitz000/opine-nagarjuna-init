import React from "react";
import "./App.scss";
import HeaderMenu from "./Components/Layout/HeaderMenu";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard";
import Leads from "./Components/Pages/Leads";
import ViewLeads from "./Components/Pages/ViewLeads";
import SingleLead from "./Components/Pages/SingleLead";
import CalendarMain from "./Components/Pages/CalendarMain";
import Reports from "./Components/Pages/Reports";
import LeadReport from "./Components/Reports/LeadReport";
import Settings from "./Components/Pages/Setings.jsx";
import ExecutiveAddition from "./Components/Settings/ExecutiveAddition.jsx";
import Login from "./Components/Externals/Login.jsx";
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 header">
          <HeaderMenu />
        </div>
        <div className="col-md-12 main-content">
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/leads">
              <Leads />
            </Route>
            <Route path="/viewleads">
              <ViewLeads />
            </Route>
            <Route path="/singlelead">
              <SingleLead />
            </Route>
            <Route path="/calendar">
              <CalendarMain />
            </Route>
            <Route path="/reports">
              <Reports />
            </Route>
            <Route path="/leadreport">
              <LeadReport />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/executiveaddition">
              <ExecutiveAddition />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
