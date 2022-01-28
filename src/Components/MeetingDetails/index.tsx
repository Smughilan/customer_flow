import React, { Fragment, useState } from "react";
import Stepper from "../../Common/Stepper/Stepper";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import MeetingDetails from "./MeetingDetails";
import history from "../../history";

export interface meetingsheduleProps {}

const MeetingSchedule: React.FC<meetingsheduleProps> = () => {
  const [meetingChild, setMeetingChild] = useState(false);
  // const [staffChild, setStaffChild] = useState(false);
  // let staffChild = false;

  let stepIndex = 3;

  const onSubmit = () => {
    // if (staffChild === false) {
    //   history.push("/mapBranch");
    // } else {
    //   // staffChild = false;
    //   setStaffChild(false);
    // }
    history.push("/userdetails");
  };
  const onBack = () => {
    history.push("/mapbranch");
  };

  return (
    <Fragment>
      <Header />
      {meetingChild === false ? <Stepper step={stepIndex} /> : ""}
      <MeetingDetails
        // meetingChild={meetingChild}
        // changeStaff={setStaffChild}
        changeMeeting={setMeetingChild}
        // staffChild={staffChild}
      />
      {/* {meetingChild === true ? <Footer onSubmit={() => onSubmit()} /> : ""} */}
      <Footer onSubmit={onSubmit} onBack={onBack} />
    </Fragment>
  );
};

export default MeetingSchedule;
