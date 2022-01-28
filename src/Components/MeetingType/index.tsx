import React, { Fragment } from "react";
import MeetingType from "./MeetingType";
import Stepper from "../../Common/Stepper/Stepper";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import history from "../../history";

export interface meetingsprops {}

const Meetings: React.FC<meetingsprops> = () => {
  let stepIndex = 2;

  const onSubmit = () => {
    history.push("/mapbranch");
  };
  const onBack = () => {
    history.push("/service");
  };
  return (
    <Fragment>
      <Header />
      <Stepper step={stepIndex} />
      <MeetingType />
      <Footer onSubmit={onSubmit} onBack={onBack} />
    </Fragment>
  );
};

export default Meetings;
