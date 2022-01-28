import React, { useState } from "react";
import arrow from "../../../src/Assets/Images/Rightarrow.svg";
import back from "../../Assets/Images/back.svg";
import dot from "../../Assets/Images/dot.svg";
import tick from "../../Assets/Images/tick.svg";
import "./MeetingDetails.scss";

export interface meetingdetailsprops {
  // staffChild: boolean;
  // changeStaff: any;
  changeMeeting: any;
}

const MeetingDetails: React.FC<meetingdetailsprops> = ({
  changeMeeting,
  // changeStaff,
  // staffChild,
}) => {
  const [styleList, setStyleList] = useState(1);
  const [dateSelect, setDateSelect] = useState(0);
  const [showTimings, setShowTimings] = useState(false);
  const [showStaffs, setShowStaffs] = useState(false);
  const [staffStyle, setStaffStyle] = useState(false);

  changeMeeting(showTimings);
  // changeStaff(showStaffs);
  // setShowStaffs(staffChild);

  const handleShowTimings = () => {
    setStaffStyle(true);
    setShowTimings(true);
  };
  const handleShowstaff = () => {
    setShowStaffs(true);
    setShowTimings(true);
  };
  const handleHideTimings = () => {
    setShowTimings(false);
    setShowStaffs(false);
  };
  return (
    <>
      <div className="main-wrapper-web">
        <div className="container">
          <p className="heading">
            Choose your preferred language with date and time
          </p>
          <div className="body-content">
            <div
              className={
                staffStyle === true
                  ? "staff-side-wrapper side-wrapper"
                  : "side-wrapper"
              }
            >
              {showTimings === false && (
                <ul>
                  <li
                    className={styleList === 1 ? "active" : ""}
                    onClick={() => setStyleList(1)}
                  >
                    Anyone who speaks english
                    <img src={arrow} alt="selected" />
                  </li>
                  <li
                    className={styleList === 2 ? "active" : ""}
                    onClick={() => setStyleList(2)}
                  >
                    Anyone who speaks french
                    <img src={arrow} alt="selected" />
                  </li>
                  <li
                    className={styleList === 3 ? "active" : ""}
                    onClick={() => setStyleList(3)}
                  >
                    Anyone who speaks spanish
                    <img src={arrow} alt="selected" />
                  </li>
                  <li
                    className={styleList === 4 ? "active" : ""}
                    onClick={() => setStyleList(4)}
                  >
                    Anyone who speaks german
                    <img src={arrow} alt="selected" />
                  </li>
                  <li onClick={() => handleShowTimings()}>
                    A specific staff member
                  </li>
                </ul>
              )}

              {showTimings === true && (
                <div className="staff-container-web">
                  <div
                    className="back-container"
                    onClick={() => handleHideTimings()}
                  >
                    <img src={back} alt="back" />
                    <span>back</span>
                  </div>
                  <div className="search-container">
                    <input className="input-search"></input>
                    <div className="search">
                      <span>Go</span>
                    </div>
                  </div>
                  <h4>Language Preference:</h4>
                  <div className="language-choice">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label>EN</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label>ES</label>
                    </div>
                  </div>
                  <div className="members-container">
                    <div className="name-container">
                      <h3>Eva Mendez</h3>
                      <div className="role-container">
                        <p>Customer Service Specialist</p>
                        <div className="img-wrapper">
                          <img src={dot} alt="dot" />
                        </div>
                        <h4>EN</h4>
                      </div>
                    </div>
                    <input className="form-check-checkbox" type="checkbox" />
                  </div>
                  <div className="members-container">
                    <div className="name-container">
                      <h3>Eva Mendez</h3>
                      <div className="role-container">
                        <p>Customer Service Specialist</p>
                        <div className="img-wrapper">
                          <img src={dot} alt="dot" />
                        </div>
                        <h4>EN</h4>
                      </div>
                    </div>
                    <input className="form-check-checkbox" type="checkbox" />
                  </div>
                  <div className="members-container">
                    <div className="name-container">
                      <h3>Eva Mendez</h3>
                      <div className="role-container">
                        <p>Customer Service Specialist</p>
                        <div className="img-wrapper">
                          <img src={dot} alt="dot" />
                        </div>
                        <h4>EN</h4>
                      </div>
                    </div>
                    <input className="form-check-checkbox" type="checkbox" />
                  </div>
                  <div className="members-container">
                    <div className="name-container">
                      <h3>Eva Mendez</h3>
                      <div className="role-container">
                        <p>Customer Service Specialist</p>
                        <div className="img-wrapper">
                          <img src={dot} alt="dot" />
                        </div>
                        <h4>EN</h4>
                      </div>
                    </div>
                    <input className="form-check-checkbox" type="checkbox" />
                  </div>
                </div>
              )}
            </div>
            <div className="date-container">
              <div className="date-choice">
                <span>Choose your date</span>
                <p>American / New York (EDT)</p>
              </div>
              <div className="date-wrapper">
                <div
                  className={
                    dateSelect === 1 ? "date-select active" : "date-select"
                  }
                  onClick={() => setDateSelect(1)}
                >
                  <span className="date">Nov 29</span>
                  <span className="day">Mon</span>
                  <label>
                    {dateSelect === 1 ? <img src={tick} alt="selected" /> : ""}
                  </label>
                </div>
                <div
                  className={
                    dateSelect === 2 ? "date-select active" : "date-select"
                  }
                  onClick={() => setDateSelect(2)}
                >
                  <span className="date">Nov 29</span>
                  <span className="day">Mon</span>
                  <label>
                    {dateSelect === 2 ? <img src={tick} alt="selected" /> : ""}
                  </label>
                </div>
                <div
                  className={
                    dateSelect === 3 ? "date-select active" : "date-select"
                  }
                  onClick={() => setDateSelect(3)}
                >
                  <span className="date"> Nov 29</span>
                  <span className="day">Mon</span>
                  <label>
                    {dateSelect === 3 ? <img src={tick} alt="selected" /> : ""}
                  </label>
                </div>
                <div
                  className={
                    dateSelect === 4 ? "date-select active" : "date-select"
                  }
                  onClick={() => setDateSelect(4)}
                >
                  <span className="date"> Nov 29</span>
                  <span className="day">Mon</span>
                  <label>
                    {dateSelect === 4 ? <img src={tick} alt="selected" /> : ""}
                  </label>
                </div>
                <div
                  className={
                    dateSelect === 5 ? "date-select active" : "date-select"
                  }
                  onClick={() => setDateSelect(5)}
                >
                  <span className="date"> Nov 29</span>
                  <span className="day">Mon</span>
                  <label>
                    {dateSelect === 5 ? <img src={tick} alt="selected" /> : ""}
                  </label>
                </div>
                <div
                  className={
                    dateSelect === 6 ? "date-select active" : "date-select"
                  }
                  onClick={() => setDateSelect(6)}
                >
                  <span className="date">Nov 29</span>
                  <span className="day"> Mon</span>
                  <label>
                    {dateSelect === 6 ? <img src={tick} alt="selected" /> : ""}
                  </label>
                </div>
              </div>
              <div className="month-selected">
                <span>November 2021</span>
                <span>&lt; &gt;</span>
              </div>
              <div className="time-wrapper">
                <h4>Select a Time</h4>
                <p className="time-range">Morning</p>
                <div className="time-container">
                  <div className="time">
                    <span>08:00 AM</span>
                  </div>
                  <div className="time">
                    <span>08:00 AM</span>
                  </div>
                  <div className="time">
                    <span>08:00 AM</span>
                  </div>
                  <div className="time">
                    <span>08:00 AM</span>
                  </div>
                  <div className="time">
                    <span>08:00 AM</span>
                  </div>
                  <div className="time">
                    <span>08:00 AM</span>
                  </div>
                  <div className="time">
                    <span>08:00 AM</span>
                  </div>
                  <div className="time">
                    <span>08:00 AM</span>
                  </div>
                </div>
                <div className="time-container-mrng">
                  <div className="time-mrng">
                    <span>08:00 AM</span>
                  </div>
                  <div className="time-mrng">
                    <span>08:00 AM</span>
                  </div>
                </div>
                <div className="time-range">Evening</div>
                <div className="time-container">
                  <div className="time">
                    <span>08:00 AM</span>
                  </div>
                  <div className="time">
                    <span>08:00 AM</span>
                  </div>
                  <div className="time">
                    <span>08:00 AM</span>
                  </div>
                  <div className="time">
                    <span>08:00 AM</span>
                  </div>
                  <div className="time">
                    <span>08:00 AM</span>
                  </div>
                  <div className="time">
                    <span>08:00 AM</span>
                  </div>
                  <div className="time">
                    <span>08:00 AM</span>
                  </div>
                  <div className="time">
                    <span>08:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-wrapper-mob">
        {showTimings === false && (
          <div className="language-wrapper">
            <p className="heading">
              Choose your preferred language with date and time
            </p>
            <div className="language-container">
              <div className="language" onClick={() => handleShowTimings()}>
                <h4>Anyone who speaks english</h4>
                <div className="img">
                  <img src={arrow} alt="selected" />
                </div>
              </div>
              <div className="language" onClick={() => handleShowTimings()}>
                <h4>Anyone who speaks german</h4>
                <div className="img">
                  <img src={arrow} alt="selected" />
                </div>
              </div>
              <div className="language" onClick={() => handleShowTimings()}>
                <h4>Anyone who speaks french</h4>
                <div className="img">
                  <img src={arrow} alt="selected" />
                </div>
              </div>
              <div className="language" onClick={() => handleShowTimings()}>
                <h4>Anyone who speaks spanish</h4>
                <div className="img">
                  <img src={arrow} alt="selected" />
                </div>
              </div>
              <div className="language" onClick={() => handleShowstaff()}>
                <h4>A specific staff member</h4>
                <div className="img"></div>
                <img src={arrow} alt="selected" />
              </div>
            </div>
          </div>
        )}
        {showStaffs === true && (
          <div className="staff-container">
            <div className="back-container" onClick={() => handleHideTimings()}>
              <img src={back} alt="back" />
              <span>back</span>
            </div>
            <div className="search-container">
              <input className="input-search"></input>
              <div className="search">
                <span>Go</span>
              </div>
            </div>
            <h4>Language Preference:</h4>
            <div className="language-choice">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label>EN</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label>ES</label>
              </div>
            </div>
            <div className="members-container">
              <div className="name-container">
                <h3>Eva Mendez</h3>
                <div className="role-container">
                  <p>Customer Service Specialist</p>
                  <div className="img-wrapper">
                    <img src={dot} alt="dot" />
                  </div>
                  <h4>EN</h4>
                </div>
              </div>
              <input className="form-check-checkbox" type="checkbox" />
            </div>
            <div className="members-container">
              <div className="name-container">
                <h3>Eva Mendez</h3>
                <div className="role-container">
                  <p>Customer Service Specialist</p>
                  <div className="img-wrapper">
                    <img src={dot} alt="dot" />
                  </div>
                  <h4>EN</h4>
                </div>
              </div>
              <input className="form-check-checkbox" type="checkbox" />
            </div>
            <div className="members-container">
              <div className="name-container">
                <h3>Eva Mendez</h3>
                <div className="role-container">
                  <p>Customer Service Specialist</p>
                  <div className="img-wrapper">
                    <img src={dot} alt="dot" />
                  </div>
                  <h4>EN</h4>
                </div>
              </div>
              <input className="form-check-checkbox" type="checkbox" />
            </div>
            <div className="members-container">
              <div className="name-container">
                <h3>Eva Mendez</h3>
                <div className="role-container">
                  <p>Customer Service Specialist</p>
                  <div className="img-wrapper">
                    <img src={dot} alt="dot" />
                  </div>
                  <h4>EN</h4>
                </div>
              </div>
              <input className="form-check-checkbox" type="checkbox" />
            </div>
          </div>
        )}
        {showTimings === true && showStaffs === false && (
          <div className="date-container-mob">
            <div className="back-container" onClick={() => handleHideTimings()}>
              <img src={back} alt="back" />
              <span>back</span>
            </div>
            <div className="date-choice">
              <span>Choose your date</span>
              <p>American / New York (EDT)</p>
            </div>
            <div className="date-wrapper">
              <div className="date-select">
                <span className="date">Nov 29</span>
                <span className="day">Mon</span>
              </div>
              <div className="date-select">
                <span className="date">Nov 29</span>
                <span className="day"> Mon</span>
              </div>
              <div className="date-select">
                <span className="date">Nov 29</span>
                <span className="day">Mon</span>
              </div>
              <div className="date-select">
                <span className="date"> Nov 29</span>
                <span className="day">Mon</span>
              </div>
            </div>
            <div className="month-selected">
              <span>November 2021</span>
              <span>&lt; &gt;</span>
            </div>
            <div className="time-wrapper-mob">
              <h4>Select a Time</h4>
              <p className="time-range">Morning</p>
              <div className="time-container">
                <div className="time">
                  <span>08:00 AM</span>
                </div>
                <div className="time">
                  <span>08:00 AM</span>
                </div>
                <div className="time">
                  <span>08:00 AM</span>
                </div>
              </div>
              <div className="time-container">
                <div className="time">
                  <span>08:00 AM</span>
                </div>
                <div className="time">
                  <span>08:00 AM</span>
                </div>
                <div className="time">
                  <span>08:00 AM</span>
                </div>
              </div>
              <div className="time-container">
                <div className="time">
                  <span>08:00 AM</span>
                </div>
                <div className="time">
                  <span>08:00 AM</span>
                </div>

                <div className="time">
                  <span>08:00 AM</span>
                </div>
              </div>
              <div className="time-container-self">
                <div className="time-self">
                  <span>08:00 AM</span>
                </div>
              </div>
              <div className="time-range">Evening</div>
              <div className="time-container">
                <div className="time">
                  <span>08:00 AM</span>
                </div>
                <div className="time">
                  <span>08:00 AM</span>
                </div>
                <div className="time">
                  <span>08:00 AM</span>
                </div>
              </div>
              <div className="time-container">
                <div className="time">
                  <span>08:00 AM</span>
                </div>
                <div className="time">
                  <span>08:00 AM</span>
                </div>
                <div className="time">
                  <span>08:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default MeetingDetails;
