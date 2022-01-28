import React from "react";
import check from "../../Assets/Images/check.svg";
import steptick from "../../Assets/Images/steptick.svg";
import "./Stepper.scss";

export interface stepperProps {
  step?: number;
}

const Stepper: React.FC<stepperProps> = ({ step }) => {
  return (
    <>
      <div className="step-wrapper-web">
        <div className="container">
          <div className="step-content">
            <span className={step === 1 ? "span active" : "span completed"}>
              Select a service
            </span>
            <img
              className="image"
              src={step !== 1 ? steptick : check}
              alt="Check"
            />
          </div>
          <div className="step-content">
            <span
              className={
                step === 2
                  ? "span active"
                  : step === 1
                  ? "span"
                  : "span completed"
              }
            >
              Meeting Method
            </span>
            <img
              className="image"
              src={step === 2 || step === 1 ? check : steptick}
              alt="Check"
            />
          </div>
          <div className="step-content">
            <span
              className={
                step === 4
                  ? "span completed"
                  : step === 3
                  ? "span active"
                  : "span"
              }
            >
              Meeting Details
            </span>
            <img
              className="image"
              src={step === 4 ? steptick : check}
              alt="Check"
            />
          </div>
          <div className="step-content">
            <span className={step === 4 ? "span active" : "span"}>
              Your Details
            </span>
            <img className="image" src={check} alt="Check" />
          </div>
        </div>
      </div>
      <div className="step-wrapper-mob">
        <div className="container">
          <div className="step-content">
            <h5>
              Select a service
              {step === 1
                ? "(1/4)"
                : step === 2
                ? "(2/4)"
                : step === 3
                ? "(3/4)"
                : step === 4
                ? "(4/4)"
                : ""}
            </h5>
          </div>
          <div className="step-container">
            <div className="step active"></div>
            <div className={step !== 1 ? "step active" : "step"}></div>
            <div
              className={step === 3 || step === 4 ? "step active" : "step"}
            ></div>
            <div className={step !== 4 ? "step" : "step active"}></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Stepper;
