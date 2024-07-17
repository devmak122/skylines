import React from "react";

const Contact = () => {
  return (
    <div className="p-4">
      <div
        className="w-full h-[600px] bg-no-repeat"
        style={{ backgroundImage: `url('../assets/images/Rectangle.svg')` }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <p className="text-white text-6xl font-bold">CONTACT US</p>
        </div>
      </div>
      <br />
      <div className="text-4xl text-[#39B54A] text-center">Contact Us</div>
      <div className="flex justify-center mt-4 space-x-4">
        <div className="square bg-[#39B54A] p-4 rounded-lg text-center">
          <p className="text-white text-base">
            Empowering your power transmission needs. For
            <br />
            custom transformer solutions or partnership
            <br />
            opportunities, please get in touch with us below:
          </p>
          <br />
          <input
            type="text"
            value="Full Name"
            className="txt-box w-80 h-8 border border-white bg-[#39B54A] rounded-md text-white text-xs p-2 mb-4"
          />
          <input
            type="text"
            value="Enter Email Address"
            className="txt-box w-80 h-8 border border-white bg-[#39B54A] rounded-md text-white text-xs p-2 mb-4"
          />
          <input
            type="text"
            value="Mobile Number"
            className="txt-box w-80 h-8 border border-white bg-[#39B54A] rounded-md text-white text-xs p-2 mb-4"
          />
          <input
            type="text"
            value="Message"
            className="txt-box2 w-80 h-16 border border-white bg-[#39B54A] rounded-md text-white text-xs p-2 mb-4"
          />
          <button
            id="btn"
            className="w-80 h-8 border border-orange-500 bg-orange-500 text-white"
          >
            SUBMIT
          </button>
        </div>
        <div className="square bg-[#39B54A] p-4 rounded-lg text-center flex items-center justify-center">
          <p className="text-4xl font-bold text-white">Google Maps</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
