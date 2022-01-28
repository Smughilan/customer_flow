import React from "react";
import Logo from "../../Assets/Images/Eltrophy.svg";
import Flag from "../../Assets/Images/Flag.svg";
import Path from "../../Assets/Images/Path.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="header-logo">
          <img src={Logo} alt="Eltrophy" />
        </div>
        <div className="header-language">
          <img src={Flag} alt="Flag" />
          <label>English</label>
          <img src={Path} alt="Arrow" />
        </div>
        <div className="header-language-mob">
          <label>En</label>
          <img src={Path} alt="Arrow" />
        </div>
      </div>
    </div>
  );
};

export default Header;
