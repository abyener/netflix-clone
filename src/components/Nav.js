import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/Nav.css";
import NetflixLogo from "../assets/images/NetflixLogo.png";
import ProfileImage from "../assets/images/ProfileImage.png";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  const handleProfileClick = () => {
    history.push("/profile");
  };

  return (
    <div className={`nav ${show && "nav_black"} `}>
      <div className="nav_contents">
        <img
          onClick={() => history.push("/")}
          src={NetflixLogo}
          alt=""
          className="nav_logo"
        />
        <img
          onClick={handleProfileClick}
          src={ProfileImage}
          alt=""
          className="nav_avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
