import React, { Fragment } from "react";
import Stepper from "../../Common/Stepper/Stepper";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import UserDetails from "./UserDetails";
import history from "../../history";

export interface usersProps {}

const Users: React.FC<usersProps> = () => {
  let stepIndex = 4;
  const onSubmit = () => {
    history.push("/appoinmentstatus");
  };
  const onBack = () => {
    history.push("/meetingschedule");
  };

  return (
    <Fragment>
      <Header />
      <Stepper step={stepIndex} />
      <UserDetails />
      <Footer onSubmit={onSubmit} onBack={onBack} />
    </Fragment>
  );
};

export default Users;
