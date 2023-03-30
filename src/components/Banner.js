import React from "react";
import "../assets/css/Banner.css";
import BannerImage from "../assets/images/BlackBanner.png";

const Banner = () => {
  const turncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${BannerImage})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button type="button" className="banner_button">
            Play
          </button>
          <button type="button" className="banner_button ">
            My List
          </button>
        </div>
        <h1 className="banner_description">
          {turncate(
            ` This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description`,
            150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
