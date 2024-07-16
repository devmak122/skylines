import React from 'react';
import Rectangle from "../assets/images/Rectangle.svg"

const HeroSection = () => (
  <div 
    className="relative h-screen bg-cover bg-center bg-no-repeat" 
    style={{ backgroundImage: 'url(../assets/images/Rectangle.svg)' }}
  >
       {/* <img src={logo} alt="logo" className="h-10 mr-3" /> */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="container mx-auto relative z-10 flex items-center justify-between h-full px-4">
      <div className="text-white">
        <h1 className="text-4xl font-bold mb-4">
          One of the most trusted companies in India
        </h1>
        <h2 className="text-2xl font-semibold mb-6">
          Skyline Enterprises is a transformer manufacturer and supplier in India.
        </h2>
        <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition-colors duration-300">
          View Products
        </button>
      </div>
      <div className="bg-green-700 bg-opacity-80 p-8 rounded-lg text-white">
        <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
        <form>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full p-2 rounded border border-gray-300 text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Enter Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-2 rounded border border-gray-300 text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="phone">Mobile Number</label>
            <input 
              type="tel" 
              id="phone" 
              className="w-full p-2 rounded border border-gray-300 text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="city">Area, City</label>
            <input 
              type="text" 
              id="city" 
              className="w-full p-2 rounded border border-gray-300 text-gray-800"
            />
          </div>
          <button 
            type="submit" 
            className="bg-orange-500 w-full p-2 rounded text-white hover:bg-orange-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default HeroSection;
