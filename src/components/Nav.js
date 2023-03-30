import React, { useEffect, useState } from "react";
import "../assets/css/Nav.css";
import NetflixLogo from "../assets/images/NetflixLogo.png";
import ProfileImage from "../assets/images/ProfileImage.png";

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"} `}>
      <div className="nav_contents">
        <img src={NetflixLogo} alt="" className="nav_logo" />
        <img src={ProfileImage} alt="" className="nav_avatar" />
      </div>
    </div>
  );
};

export default Nav;
