import React from "react";
import services from "../assets/images/services.svg";
import item1 from "../assets/images/item1.svg";
import item2 from "../assets/images/item2.svg";
import item3 from "../assets/images/item3.svg";
import item4 from "../assets/images/item4.svg";
import trans1 from "../assets/images/trans1.jpeg";
import trans2 from "../assets/images/Trans2.jpeg";
import trans3 from "../assets/images/Trans3.jpeg";
import elipse2 from "../assets/images/elipse2.svg";
import group from "../assets/images/group.svg";
import client2 from "../assets/images/client2.png";
import client1 from "../assets/images/client1.png";
import { Link } from "react-router-dom";
import { FaClock, FaBalanceScale, FaLightbulb, FaHandshake, FaBullseye } from 'react-icons/fa';
// import elipse3 from "../assets/images/elipse3.svg";

import { Zoom } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="z-0 overflow-x-hidden">
      {/* Mobile View */}
      <div
        className="w-full bg-black bg-opacity-50 justify-center bg-cover mobile:bg-center mobile:bg-cover  bg-center bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${services})`, height: "50vh" }}
      >
        <h1 className="text-white text-center flex items-center justify-center font-bold  font-poppins text-6xl">
          Services
        </h1>
      </div>

      {/* Tablet and Above View */}

      
    </div>
  );
};

export default About;
