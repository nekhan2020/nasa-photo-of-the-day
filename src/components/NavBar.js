import React from "react";
import nasaLogo from "../assets/nasaLogo.jpg";

const NavBar = (props) => {
  return (
    <div>
      <div>{/* <img src={nasaLogo} alt="" /> */}</div>
      <h1>Nasa Photo of the Day</h1>
      <img src={nasaLogo} alt="" className="nasaLogo" />
    </div>
  );
};

export default NavBar;
