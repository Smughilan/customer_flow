import React, { useState } from "react";
import arrow from "../../../src/Assets/Images/Rightarrow.svg";
import back from "../../Assets/Images/back.svg";
import clock from "../../Assets/Images/clock.svg";
import tick from "../../Assets/Images/tick.svg";
import "./ServiceSelect.scss";

export interface serviceselectprops {
  serviceChild: boolean;
  changeService: any;
}

const ServiceSelect: React.FC<serviceselectprops> = ({
  serviceChild,
  changeService,
}) => {
  const [showCategory, setShowCategory] = useState(false);
  const [styleMeeting, setStyleMeeting] = useState(0);
  const [styleList, setStyleList] = useState(1);

  changeService(showCategory);

  const handleShowCategory = () => {
    setShowCategory(true);
  };
  const handleHideCategory = () => {
    setShowCategory(false);
  };
  return (
    <>
      <div className="body-wrapper-web">
        <div className="container">
          <p className="heading">Select Category and Service</p>
          <div className="body-content">
            <div className="side-wrapper">
              <ul>
                <li
                  className={styleList === 1 ? "active" : ""}
                  onClick={() => setStyleList(1)}
                >
                  Account Opening
                  <img src={arrow} alt="selected" />
                </li>
                <li
                  className={styleList === 2 ? "active" : ""}
                  onClick={() => setStyleList(2)}
                >
                  Account Opening
                  <img src={arrow} alt="selected" />
                </li>
                <li
                  className={styleList === 3 ? "active" : ""}
                  onClick={() => setStyleList(3)}
                >
                  Account Opening
                  <img src={arrow} alt="selected" />
                </li>
                <li
                  className={styleList === 4 ? "active" : ""}
                  onClick={() => setStyleList(4)}
                >
                  Account Opening
                  <img src={arrow} alt="selected" />
                </li>
                <li
                  className={styleList === 5 ? "active" : ""}
                  onClick={() => setStyleList(5)}
                >
                  Account Opening
                  <img src={arrow} alt="selected" />
                </li>
                <li
                  className={styleList === 6 ? "active" : ""}
                  onClick={() => setStyleList(6)}
                >
                  Account Opening
                  <img src={arrow} alt="selected" />
                </li>
                <li
                  className={styleList === 7 ? "active" : ""}
                  onClick={() => setStyleList(7)}
                >
                  Account Opening
                  <img src={arrow} alt="selected" />
                </li>
                <li
                  className={styleList === 8 ? "active" : ""}
                  onClick={() => setStyleList(8)}
                >
                  Account Opening
                  <img src={arrow} alt="selected" />
                </li>
              </ul>
            </div>
            <div className="contents">
              <div
                className={
                  styleMeeting === 1 ? "self-content active" : "self-content"
                }
                onClick={() => setStyleMeeting(1)}
              >
                <div className="time-duration">
                  <img src={clock} alt="clock" />
                  <p>30 mi</p>
                </div>
                <h4>Checking Account</h4>
                <p>
                  We offer checking options with built-in convenience and
                  flexibility. Get help finding a checking account that fits
                  your financial.
                </p>
                <span>Read More</span>
                <label>
                  <img src={tick} alt="tick" />
                </label>
              </div>
              <div
                className={
                  styleMeeting === 2 ? "self-content active" : "self-content"
                }
                onClick={() => setStyleMeeting(2)}
              >
                <div className="time-duration">
                  <img src={clock} alt="clock" />
                  <p>30 mi</p>
                </div>
                <h4>Checking Account</h4>
                <p>
                  We offer checking options with built-in convenience and
                  flexibility. Get help finding a checking account that fits
                  your financial.
                </p>
                <span>Read More</span>
                <label>
                  <img src={tick} alt="tick" />
                </label>
              </div>
              <div
                className={
                  styleMeeting === 3 ? "self-content active" : "self-content"
                }
                onClick={() => setStyleMeeting(3)}
              >
                <div className="time-duration">
                  <img src={clock} alt="clock" />
                  <p>30 mi</p>
                </div>
                <h4>Checking Account</h4>
                <p>
                  We offer checking options with built-in convenience and
                  flexibility. Get help finding a checking account that fits
                  your financial.
                </p>
                <span>Read More</span>
                <label>
                  <img src={tick} alt="tick" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-wrapper-mob">
        {showCategory === false && (
          <div className="container-mob">
            <p className="heading">Select Category and Service</p>
            <div className="body-content">
              <div className="category-container" onClick={handleShowCategory}>
                <div className="category">
                  <h4>Account Opening</h4>
                  <p>7 services</p>
                </div>
                <div className="img">
                  <img src={arrow} alt="selected" />
                </div>
              </div>
              <div className="category-container" onClick={handleShowCategory}>
                <div className="category">
                  <h4>Account Opening</h4>
                  <p>7 services</p>
                </div>
                <div className="img">
                  <img src={arrow} alt="selected" />
                </div>
              </div>
              <div className="category-container" onClick={handleShowCategory}>
                <div className="category">
                  <h4>Account Opening</h4>
                  <p>7 services</p>
                </div>
                <div className="img">
                  <img src={arrow} alt="selected" />
                </div>
              </div>
              <div className="category-container" onClick={handleShowCategory}>
                <div className="category">
                  <h4>Account Opening</h4>
                  <p>7 services</p>
                </div>
                <div className="img">
                  <img src={arrow} alt="selected" />
                </div>
              </div>
              <div className="category-container" onClick={handleShowCategory}>
                <div className="category">
                  <h4>Account Opening</h4>
                  <p>7 services</p>
                </div>
                <div className="img">
                  <img src={arrow} alt="selected" />
                </div>
              </div>
              <div className="category-container" onClick={handleShowCategory}>
                <div className="category">
                  <h4>Account Opening</h4>
                  <p>7 services</p>
                </div>
                <div className="img">
                  <img src={arrow} alt="selected" />
                </div>
              </div>
            </div>
          </div>
        )}
        {showCategory === true && (
          <div className="body-container-mob">
            <div className="back-container" onClick={handleHideCategory}>
              <img src={back} alt="back" />
              <span>back</span>
            </div>
            <div className="contents-mob">
              <div
                className={
                  styleMeeting === 1 ? "self-content active" : "self-content"
                }
                onClick={() => setStyleMeeting(1)}
              >
                <div className="time-duration">
                  <img src={clock} alt="clock" />
                  <p>30 mi</p>
                </div>
                <h4>Checking Account</h4>
                <p>
                  We offer checking options with built-in convenience and
                  flexibility. Get help finding a checking account that fits
                  your financial.
                </p>
                <span>Read More</span>
                <label>
                  <img src={tick} alt="tick" />
                </label>
              </div>
              <div
                className={
                  styleMeeting === 2 ? "self-content active" : "self-content"
                }
                onClick={() => setStyleMeeting(2)}
              >
                <div className="time-duration">
                  <img src={clock} alt="clock" />
                  <p>30 mi</p>
                </div>
                <h4>Checking Account</h4>
                <p>
                  We offer checking options with built-in convenience and
                  flexibility. Get help finding a checking account that fits
                  your financial.
                </p>
                <span>Read More</span>
                <label>
                  <img src={tick} alt="tick" />
                </label>
              </div>
              <div
                className={
                  styleMeeting === 3 ? "self-content active" : "self-content"
                }
                onClick={() => setStyleMeeting(3)}
              >
                <div className="time-duration">
                  <img src={clock} alt="clock" />
                  <p>30 mi</p>
                </div>
                <h4>Checking Account</h4>
                <p>
                  We offer checking options with built-in convenience and
                  flexibility. Get help finding a checking account that fits
                  your financial.
                </p>
                <span>Read More</span>
                <label>
                  <img src={tick} alt="tick" />
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default ServiceSelect;
