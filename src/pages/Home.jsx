import React from 'react';
import client1 from '../assets/images/client1.png';
import client2 from '../assets/images/client2.png';
import client3 from '../assets/images/client3.png';
import group from '../assets/images/group.svg';
import elipse4 from '../assets/images/elipse4.svg';
import Rectangle from "../assets/images/Rectangle.svg";

const Home = () => (
  <div>
    {/* Hero Section */}
    <div className="relative pt-24"> {/* Adjusted padding-top to ensure no overlap */}
      <div
        className="absolute inset-0 bg-opacity-50 bg-cover  bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${Rectangle})`, height: '65vh' }}
      >
        <div className="absolute inset-0 bg-gray-900  opacity-50"></div>
      </div>
      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-4 py-8 md:py-0">
        <div className="text-white max-w-lg mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            One of the most trusted companies in India
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Skyline Enterprises is a transformer manufacturer and supplier in India.
          </h2>
          <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition-colors duration-300">
            View Products
          </button>
        </div>
        <div className="bg-green-700 bg-opacity-80 p-8 rounded-lg text-white max-w-md w-full">
          <h3 className="text-2xl font-semibold mb-4 text-center">Connect With Us</h3>
          <form className="space-y-4">
            <div>
              <label className="block mb-2" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 rounded border border-gray-300 text-gray-800"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="email">Enter Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded border border-gray-300 text-gray-800"
              />
            </div>
            <div>
              <label className="block mb-2" htmlFor="phone">Mobile Number</label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 rounded border border-gray-300 text-gray-800"
              />
            </div>
            <div>
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

    {/* Other Content */}
    <div className="relative">
      <img src={group} alt="" className="absolute right-0 h-16 top-[300px] z-0" />
      <img src={elipse4} alt="" className="absolute right-0 top-[370px] z-0" />
      <img src={elipse4} alt="" className="absolute -right-[300px] h-80 w-80 top-[370px] z-0" />
      <div className="flex mt-[100px] justify-evenly">
        <img className="h-[258px] w-[265px]" src={client1} alt="" />
        <img className="mt-12 h-[393px] w-[471px]" src={client2} alt="" />
        <img className="mt-[230px] w-[320px] h-[248px]" src={client3} alt="" />
      </div>
    </div>

    {/* About Us Section */}
    <div className="flex justify-center items-center mt-8">
      <p className="text-[#39B54A] font-bold text-[46px]">About Us</p>
    </div>
    <div className="flex justify-center items-center mt-4">
      <p className="bg-[#39B54A] w-[188px] h-2 rounded-2xl"></p>
    </div>
    <div className="mt-4 flex justify-center">
      <p className="font-bold text-[#656464] w-[1000px] h-[280px]">
        Skyline Enterprises, a prominent name in India's transformer industry, was established in 2010 and is headquartered in Koparkhairane, Navi Mumbai. With over a decade of expertise, the company offers a wide range of specialized services, including labour supply for transformer-related activities like winding, core assembly, and tanking. Skyline's experienced team also excels in on-site servicing and maintenance of transformers, ensuring they meet the highest standards of quality and reliability. Committed to delivering comprehensive support, Skyline Enterprises has earned a reputation for excellence and trustworthiness, making it a preferred choice for clients seeking top-notch
      </p>
    </div>
    <div className="text-[#39B54A] text-[22px] font-medium flex justify-center mt-4">
      <button className="border border-[#39B54A] rounded-[8px] w-[386px] h-[56px]">
        LEARN MORE
      </button>
    </div>
  </div>
);

export default Home;
