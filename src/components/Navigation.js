import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import navHome from "../assets/back.png";
import navOne from "../assets/nav-1.png";
import navTwo from "../assets/nav-2.png";
import navThree from "../assets/nav-3.png";

const Navigation = () => {
  return (
    <div id="navigation">
      <nav>

        <Link to="/Home">
          <img src={navHome} id="navHome" alt="NavBack" />
        </Link>
<div id="navFloat">
        <Link to="/About">
          <img id="navOne" src={navOne} alt="NavIcon" />
        </Link>

        <Link to="/Maintain">
          <img id="navTwo"  src={navTwo} alt="NavIcon" />
        </Link>
        
        <Link to="/Contact">
          <img id="navThree" src={navThree} alt="NavIcon" />
        </Link>
</div>
      </nav>
    </div>
  );
};

export default Navigation;
