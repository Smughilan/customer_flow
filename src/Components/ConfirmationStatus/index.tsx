import React, { Fragment } from "react";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import ConfirmationStatus from "./ConfirmationStatus";
import history from "../../history";

const AppointmentStatus = () => {
  const onSubmit = () => {
    history.push("/meetingschedule");
  };
  const onBack = () => {
    history.push("/userdetails");
  };
  return (
    <Fragment>
      <Header />
      <ConfirmationStatus />
      <Footer onSubmit={onSubmit} onBack={onBack} />
    </Fragment>
  );
};

export default AppointmentStatus;
