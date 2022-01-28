import React from "react";
import GoogleMapReact from "google-map-react";
import location from "../../Assets/Images/locations.svg";
import "./MapDetails.scss";

const MapDetails = () => {
  // const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const center = {
    lat: 59.95,
    lng: 30.33,
  };
  return (
    <div className="body-container">
      <div className="wrapper">
        <p className="head">Select Walk-in Location</p>
        <div className="map-content">
          <GoogleMapReact defaultCenter={center} defaultZoom={11}>
            {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
            {/* <div>
              <input type="search"></input>
            </div> */}
          </GoogleMapReact>
          <div className="address-content">
            <img className="image" src={location} alt="location" />
            <span>
              Citadel Lancaster - Granite Run Drive 100 Granite Run Dr,
              Lancaster, PA 17601, USA.
            </span>
          </div>
          <div className="address-content">
            <img className="image" src={location} alt="location" />
            <span>
              Citadel Lancaster - Granite Run Drive 100 Granite Run Dr,
              Lancaster, PA 17601, USA.
            </span>
          </div>
          <div className="address-content">
            <img className="image" src={location} alt="location" />
            <span>
              Citadel Lancaster - Granite Run Drive 100 Granite Run Dr,
              Lancaster, PA 17601, USA.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MapDetails;
