import React from "react";
import nasaLogo from "../assets/nasaLogo.jpg";

const NavBar = (props) => {
  return (
    <div className="navParent">
      <div className="navLogoDiv">
        <img src={nasaLogo} alt="" className="nasaLogo" />
      </div>
      <div className="navH1Div">
        <h3>Nasa Photo of the Day</h3>
      </div>
    </div>
  );
};

export default NavBar;
