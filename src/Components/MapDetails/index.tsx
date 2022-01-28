import React, { Fragment } from "react";
import Stepper from "../../Common/Stepper/Stepper";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import MapDetails from "./MapDetails";
import history from "../../history";

export interface mapbranch {}

const MapBranch: React.FC<mapbranch> = () => {
  let stepIndex = 2;
  const onSubmit = () => {
    history.push("/meetingschedule");
  };
  const onBack = () => {
    history.push("/meetingtype");
  };

  return (
    <Fragment>
      <Header />
      <Stepper step={stepIndex} />
      <MapDetails />
      <Footer onSubmit={onSubmit} onBack={onBack} />
    </Fragment>
  );
};

export default MapBranch;
