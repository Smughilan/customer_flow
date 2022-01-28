import React, { useState } from "react";
import Audio from "../../Assets/Images/audio.svg";
import Video from "../../Assets/Images/video.svg";
import Map from "../../Assets/Images/map.svg";
import tick from "../../Assets/Images/tick.svg";

import "./MeetingType.scss";

export interface meetingtypeprops {
  // step: number;
}

const MeetingType: React.FC<meetingtypeprops> = () => {
  const [typeSelect, setTypeSelect] = useState(0);
  return (
    <div className="body-wrapper">
      <div className="container">
        <p className="head">Select Meeting Channel</p>
        <div className="content-container">
          <div className="items">
            <div
              className={
                typeSelect === 1 ? "self-item item-active" : "self-item"
              }
              onClick={() => setTypeSelect(1)}
            >
              <div className="logo">
                <img src={Audio} alt="audio" />
              </div>
              <span>Phone Call</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pharetra dolor placerat aliquet
              </p>
              <label>
                <img src={tick} alt="tick" />
              </label>
            </div>
            <div
              className={
                typeSelect === 2 ? "self-item item-active" : "self-item"
              }
              onClick={() => setTypeSelect(2)}
            >
              <div className="logo">
                <img src={Video} alt="video" />
              </div>
              <span>Phone Call</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pharetra dolor placerat aliquet
              </p>
              <label>
                <img src={tick} alt="tick" />
              </label>
            </div>
            <div
              className={
                typeSelect === 3 ? "self-item item-active" : "self-item"
              }
              onClick={() => setTypeSelect(3)}
            >
              <div className="logo">
                <img src={Map} alt="map" />
              </div>
              <span>Phone Call</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pharetra dolor placerat aliquet
              </p>
              <label>
                <img src={tick} alt="tick" />
              </label>
            </div>
          </div>
          <div className="note-content">
            <p>
              Note: lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pharetra dolor placerat aliquet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MeetingType;
