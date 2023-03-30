import React from "react";
import "./assets/css/HomeScreen.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
    </div>
  );
};

export default HomeScreen;
