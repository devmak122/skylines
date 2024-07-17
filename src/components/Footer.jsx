import React from "react";
import logo from "../assets/images/logo.svg";
import email from "../assets/images/email.svg";
import location from "../assets/images/location.svg";
import phone from "../assets/images/phone.svg";
import Linkedin from "../assets/images/Linkedin.svg";
import facebook from "../assets/images/facebook.svg";
import Twitter from "../assets/images/Twitter.svg";
import instagram from "../assets/images/instagram.svg"


const Footer = () => {
  return (
    <div>
    <footer>
      <div className="footer flex  flex-wrap justify-around items-center bg-footer-bg h-96  bg-cover opacity-90 bg-filter brightness-50   p-10">
        <div className="logo mb-4 lg:mb-0">
          <img className="w-40" src={logo} alt="Logo" />
        </div>
        <div className="links z-10 mb-4 lg:mb-0">
          <h2 className="text-xl font-bold text-green-400 mb-4">
            Quick Links
          </h2>
          <div className="menu text-md font-medium text-white">
            <h6>About Us</h6>
            <h6>Clients</h6>
            <h6>Products</h6>
          </div>
        </div>
        <div className="contact-us lg:ml-10">
          <h6 className="text-xl font-bold text-green-400 mb-4 pt-4">
            Contact Us
          </h6>
          <div className="text-md font-medium text-white">
            <div className="icon flex items-center gap-1 pb-1 cursor-pointer">
              {/* <FaRegEnvelope /> */}
              <img className="" src={email} alt="email" />
              :<h4 className="underline">  info@skylinee.in</h4>
            </div>
            <div className="flex items-center gap-1 pb-1">
            <img className="" src={phone} alt="phone" />
              {/* <IoCallSharp /> */}
              :<h4 className="underline"> +91 9100412727</h4>
             
            </div>
            <div className="flex gap-1 items-start">
            <img className="" src={location} alt="location" />
              {/* <FaLocationDot /> */}
              <p>
                : F15, Rama Emperro, 2nd Floor, Behind Shell <br /> Petrol Pump,
                Vadodara, Gujarat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="menu flex flex-row flex-wrap justify-around bg-green-500 pt-6 pb-6">
        <div className="links flex flex-wrap gap-6 font-semibold text-white pt-1">
          <h3>Home</h3>
          <h3>About Us</h3>
          <h3>Products</h3>
          <h3>Clients</h3>
          <h3>Contact Us</h3>
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
          {/* <FaTwitter className="bg-white text-black rounded-full p-1 text-2xl hover:text-blue-500 hover:cursor-pointer" />
          <FaInstagram className="bg-white text-black rounded-full p-1 text-2xl hover:text-red-400 hover:cursor-pointer" />
          <FaFacebook className="bg-white text-black rounded-full p-1 text-2xl hover:text-blue-900 hover:cursor-pointer" />
          <CiLinkedin className="bg-white text-black rounded-full p-1 text-2xl hover:text-blue-400 hover:cursor-pointer" /> */}
           <img className="" src={Twitter} alt="Twitter" />
           <img className="" src={instagram} alt="instagram" />

           <img className="" src={facebook} alt="facebook" />
           <img className="" src={Linkedin} alt="Linkedin" />

        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;