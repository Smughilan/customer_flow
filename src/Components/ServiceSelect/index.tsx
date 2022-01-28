import React, { useState, Fragment } from "react";
import ServiceSelect from "./ServiceSelect";
import Stepper from "../../Common/Stepper/Stepper";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import history from "../../history";

export interface serviceProps {}

const Service: React.FC<serviceProps> = () => {
  const [serviceChild, setServiceChild] = useState(false);
  let stepIndex = 1;

  const onSubmit = () => {
    history.push("/meetingtype");
  };
  const onBack = () => {
    history.push("/meetingtype");
  };

  return (
    <Fragment>
      <Header />
      {serviceChild === false ? <Stepper step={stepIndex} /> : ""}
      <ServiceSelect
        serviceChild={serviceChild}
        changeService={setServiceChild}
      />
      {/* {serviceChild === true ? <Footer onSubmit={onSubmit} /> : ""} */}
      <Footer onSubmit={onSubmit} onBack={onBack} />
    </Fragment>
  );
};

export default Service;
