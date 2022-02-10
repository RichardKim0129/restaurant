import React from "react";
import "./Header.css";

import { images } from "../../constants";
import { SubHeading } from "../../components";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading />
      </div>

      <div className="app__wrapper_img">
        <h1>Image Here</h1>
      </div>
    </div>
  );
};

export default Header;
