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
      <footer className="relative bg-footer-bg bg-cover">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="flex flex-wrap justify-around items-center h-96 p-10 relative z-10">
          <div className="logo mb-4 lg:mb-0">
            <img className="w-40" src={logo} alt="Logo" />
          </div>
          <div className="links z-10 mb-4 lg:mb-0">
            <h2 className="text-xl font-bold text-green-400 mb-4">Quick Links</h2>
            <div className="menu text-md font-medium text-white">
              <h6><a href="/about-us">About Us</a></h6>
              <h6><a href="/clients">Clients</a></h6>
              <h6><a href="/products">Products</a></h6>
            </div>
          </div>
          <div className="contact-us lg:ml-10">
            <h6 className="text-xl font-bold text-green-400 mb-4 pt-4">Contact Us</h6>
            <div className="text-md font-medium text-white">
              <div className="icon flex items-center gap-1 pb-1 cursor-pointer">
                <img src={email} alt="email" />
                :<h4 className="underline"><a href="mailto:info@skylinee.in">info@skylinee.in</a></h4>
              </div>
              <div className="flex items-center gap-1 pb-1">
                <img src={phone} alt="phone" />
                :<h4 className="underline"><a href="tel:+919100412727">+91 910041272727</a></h4>
              </div>
              <div className="flex gap-1 items-start">
                <img src={location} alt="location" />
                <p>
                  : F15, Rama Emperro, 2nd Floor, Behind Shell <br /> Petrol Pump, Vadodara, Gujarat.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="menu flex flex-row flex-wrap justify-around bg-green-500 pt-6 pb-6">
            <div className="links flex flex-wrap gap-6 font-semibold text-white pt-1">
              <h3><Link to="/">Home</Link></h3>
              <h3><Link to="/About">About Us</Link></h3>
              <h3><Link to="/products">Products</Link></h3>
              <h3><Link to="/clients">Clients</Link></h3>
              <h3><Link to="/contact">Contact Us</Link></h3>
            </div>
            <div className="link-left flex flex-wrap items-center mt-4 lg:mt-0">
              <h3 className="text-white font-semibold mr-4 pt-1">Subscribe Us</h3>
              <input
                className="bg-green-500 placeholder-white border pl-2 pt-1 pb-1 border-2-white rounded-l-lg placeholder:text-sm"
                placeholder="Enter Your Email"
                type="email"
                name=""
                id=""
              />
              <button className="bg-white text-green-500 pr-4 pl-4 pb-1.5 pt-1.5 rounded-r-lg">Subscribe</button>
            </div>
          </div>

          <div className="icon flex flex-wrap justify-around items-center bg-black p-4">
            <div className="logo-p text-xs text-gray-400 mb-4 lg:mb-0">
              <p>Copyright © Skyline Enterprises Pvt Ltd</p>
            </div>
            <div className="icons flex gap-2 text-white">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
