import React from 'react';
import con_bg from "../assets/images/con_bg.png";

const ContactUs = () => {
  return (
    <div className='font-semibold font-poppins overflow-hidden'>
      <div
        className="w-full bg-black bg-opacity-50 justify-center mobile:bg-center mobile:bg-cover bg-cover bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${con_bg})`, height: '50vh' }}
      >
        <h1 className="text-white text-center flex items-center justify-center font-bold text-6xl">CONTACT US</h1>
      </div>
      <div className="relative flex flex-col mobile:mb-10 md:flex-row justify-center items-start mt-10 space-y-10 md:space-y-0 md:space-x-10 px-6 md:px-0">
        <div className="relative bg-[#39B54A] opacity-75 rounded-md p-12 text-center md:w-1/3 w-full flex flex-col justify-between h-auto z-10">
          <div className="absolute top-[-10px] left-[-10px] w-16 h-16 bg-green-500 opacity-50 rounded-md z-0"></div>
          <p className="text-white mb-4">
            Empowering your power transmission needs. For custom transformer solutions or partnership opportunities, please get in touch with us below:
          </p>
          <div className="flex flex-col space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-2 border border-white rounded bg-[#39B54A] bg-opacity-75 text-white placeholder-white text-sm" />
            <input type="text" placeholder="Enter Email Address" className="w-full p-2 border border-white rounded bg-[#39B54A] bg-opacity-75 text-white placeholder-white text-sm" />
            <input type="text" placeholder="Mobile Number" className="w-full p-2 border border-white rounded bg-[#39B54A] bg-opacity-75 text-white placeholder-white text-sm" />
            <textarea placeholder="Message" className="w-full p-2 border border-white rounded bg-[#39B54A] bg-opacity-75 text-white placeholder-white text-sm h-24"></textarea>
            <button className="w-full p-2 bg-orange-500 text-white rounded">SUBMIT</button>
            <div className="absolute bottom-[-10px] left-[-10px] w-16 h-16 border-b-[8px] border-l-[8px] border-orange-500"></div>
          </div>
        </div>
        <div className="relative bg-green-500 opacity-80 mobile:mb-20 rounded-md p-2 md:w-1/3 w-full h-auto flex items-center justify-center z-10">
          <div className="absolute top-[-10px] right-[-10px] w-16 h-16 border-t-[8px] border-r-[8px] border-orange-500"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58804.97078721449!2d73.18332905968675!3d22.289755603188707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc540ecc9deef%3A0xd4c2855a43401060!2sSkyline%20Enterprises%2C%20Raama%20Emperro%2C%202nd%20Floor%2C%20Behind%20Shell%20Petrol%20Pump%2C%20Vadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1688821948504!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0, minHeight: "455px" }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Skyline Enterprises Location"
          ></iframe>
          <div className="absolute bottom-[-10px] right-[-10px] w-16 h-16 border-b-[8px] border-r-[8px] border-orange-500"></div>
        </div>
        {/* Background circles */}
        <div className="absolute top-[20px] left-[-90px] w-24 h-24 bg-green-500 rounded-full opacity-20"></div>
        <div className="absolute top-[20px] right-[-30px] w-24 h-24 bg-green-500 rounded-full opacity-20"></div>
        <div className="absolute bottom-[-30px] left-[-90px] w-24 h-24 bg-green-500 rounded-full opacity-20"></div>
        <div className="absolute bottom-[-30px] right-[-50px] w-24 h-24 bg-green-500 rounded-full opacity-20"></div>
      </div>
    </div>
  );
};

export default ContactUs;
