import React from "react";
import { Route, Router } from "react-router-dom";
import Service from "./Components/ServiceSelect/index";
import Meetings from "./Components/MeetingType";
import Users from "./Components/UserDetails";
import "./App.css";
import "../src/Assets/Style/Common.scss";
import AppointmentStatus from "./Components/ConfirmationStatus";
import MeetingSchedule from "./Components/MeetingDetails";
import MapBranch from "./Components/MapDetails";
import history from "./history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path="/" component={Service} />
        <Route path="/service" component={Service} />
        <Route path="/meetingtype" component={Meetings} />
        <Route path="/meetingschedule" component={MeetingSchedule} />
        <Route path="/mapbranch" component={MapBranch} />
        <Route path="/userdetails" component={Users} />
        <Route path="/appoinmentstatus" component={AppointmentStatus} />
      </Router>
    </div>
  );
}

export default App;
