import React from "react";
import logo from "../assets/images/logo.svg";
import email from "../assets/images/email.svg";
import location from "../assets/images/location.svg";
import phone from "../assets/images/phone.svg";
import Linkedin from "../assets/images/Linkedin.svg";
import facebook from "../assets/images/facebook.svg";
import Twitter from "../assets/images/Twitter.svg";
import instagram from "../assets/images/instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="relative bg-footer-bg laptop:mt-10 bg-cover font-roboto">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="flex flex-wrap justify-around items-center h-auto p-10 relative z-10 lg:h-96 lg:flex-row lg:justify-around">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center laptop:gap-52 mobil:gap-10 items-center">
          <div className="logo mb-4 mobile:bg-cover mobile:bg-center  md:mb-0 md:w-auto w-full md:flex md:justify-start max-md:flex max-md:text-center">
            <img
              className="w-40 md:w-60 mx-auto md:mx-0"
              src={logo}
              alt="Logo"
            />
          </div>
  <div className="links z-10 mb-4 md:mb-0 w-full md:w-auto md:flex md:flex-col md:items-start">
    <h2 className="text-xl font-bold text-green-400 mb-4 text-center md:text-left whitespace-nowrap">
      Quick Links
    </h2>
    <div className="menu text-md font-medium text-white text-center md:text-left">
      <h6>
        <a href="/about-us">About Us</a>
      </h6>
      <h6>
        <a href="/clients">Clients</a>
      </h6>
      <h6>
        <a href="/products">Products</a>
      </h6>
    </div>
  </div>

  <div className="contact-us lg:ml-10 lg:w-auto lg:flex lg:flex-col max-md:flex max-md:justify-center max-md:items-center lg:items-start w-full">
    <h6 className="text-xl font-bold text-green-400 mb-4 pt-4 text-center lg:text-left">
      Contact Us
    </h6>
    <div className="text-md font-medium text-white text-center lg:text-left">
      <div className="icon flex items-center gap-1 pb-1 cursor-pointer justify-center lg:justify-start">
        <img src={email} alt="email" />:
        <h4 className="">
          <a href="mailto:info@skylinee.in">info@skylinee.in</a>
        </h4>
      </div>
      <div className="flex items-center gap-1 pb-1 justify-center lg:justify-start">
        <img src={phone} alt="phone" />:
        <h4 className="">
          <a href="tel:+919100412727">+91 910041272727</a>
        </h4>
      </div>
      <div className="flex gap-1 items-start justify-center lg:justify-start">
        <img src={location} alt="location" />
        <p className="text-center lg:text-left">
          : F15, Rama Emperro, 2nd Floor, Behind Shell <br /> Petrol Pump, Vadodara, Gujarat.
        </p>
      </div>
    </div>
  </div>
</div>

        </div>

        <div className="relative z-10 ">
         
          <div className="icon flex flex-wrap justify-around items-center bg-black p-4">
            <div className="logo-p text-xs text-gray-400 mb-4 lg:mb-0">
              <p>Copyright © Skyline Enterprises Pvt Ltd</p>
            </div>
            <div className="icons flex gap-2 text-white">
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Twitter} alt="Twitter" />
              </Link>
              <Link
                to="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="instagram" />
              </Link>
              <Link
                to="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="facebook" />
              </Link>
              <Link
                to="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Linkedin} alt="Linkedin" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;