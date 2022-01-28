import React from "react";
import "./UserDetails.scss";

export interface userdetailsprops {}

const UserDetails: React.FC<userdetailsprops> = () => {
  return (
    <div className="body-wrapper-user">
      <div className="container">
        <p className="head">Enter your details</p>
        <div className="content-wrapper">
          <div className="input-wrapper">
            <div className="input-form">
              <label>
                First Name <span>*</span>
              </label>
              <input className="input" type="text" required />
            </div>
            <div className="input-form">
              <label>Last Name</label>
              <input className="input" type="text" />
            </div>
            <div className="input-form">
              <label>Email</label>
              <input className="input" type="email" />
            </div>
          </div>
          <div className="input-form input-number">
            <label>
              Mobile Number <span>*</span>
            </label>
            <input className="input" type="tel" required />
          </div>
          <div className="input-form">
            <label>Additional details for meeting</label>
            <input className="text-area" />
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label>
              By booking an appointment you agree to Eltropy’s Terms of Use and
              Privacy Notice.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
