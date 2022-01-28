import React from "react";
import "./Footer.scss";

export interface footerprops {
  onSubmit: () => void;
  onBack: () => void;
}

const Footer: React.FC<footerprops> = ({ onSubmit, onBack }) => {
  const handleContinue = () => {
    onSubmit();
  };
  const handleBack = () => {
    onBack();
  };
  return (
    <>
      <div className="footer-wrapper-web">
        <button className="grey-button" onClick={handleBack}>
          <span>Back</span>
        </button>
        <button className="blue-button" onClick={handleContinue}>
          <span>Continue</span>
        </button>
      </div>
      <div className="footer-wrapper-mob">
        <button className="blue-button-mob" onClick={handleContinue}>
          <span>Continue</span>
        </button>
      </div>
    </>
  );
};

export default Footer;
