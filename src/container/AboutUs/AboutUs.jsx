import React from "react";

import { images } from "../../constants";

const AboutUs = () => {
  return (
    <div
      className="app_aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="G letter" />
      </div>
      AboutUs
    </div>
  );
};

export default AboutUs;
