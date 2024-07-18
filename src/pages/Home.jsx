import React from 'react';
import client1 from '../assets/images/client1.png';
import client2 from '../assets/images/client2.png';
import client3 from '../assets/images/client3.png';
import group from '../assets/images/group.svg';
import elipse4 from '../assets/images/elipse4.svg';
import Rectangle from "../assets/images/Rectangle.svg";
import trans1 from "../assets/images/trans1.jpeg";
import trans2 from "../assets/images/Trans2.jpeg";
import trans3 from "../assets/images/Trans3.jpeg";

const Home = () => (
  <div className="overflow-x-hidden">
    {/* Hero Section */}
    <div className="z-0">
      <div
        className="w-full bg-black bg-opacity-50 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Rectangle})`, height: '65vh' }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4 py-8">
          <div className="text-white max-w-lg md:mb-0 text-center md:text-left">
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
          <div className="hidden md:block bg-green-700 bg-opacity-80 p-8 rounded-lg text-white max-w-md w-full">
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
    </div>

    <div className="relative z-10 px-4 tablet:px-8 laptop:px-12 font-Montserrat">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-12">
        <div className="lg:w-1/2  mobile:p-4  lg:pr-8 mb-8 lg:mb-0">
          <h2 className="text-[#39B54A] text-xl  mobile:text-center  mobile:text-2xl mobile mt-10  mobile:p-2 tablet:text-2xl laptop:text-3xl font-bold mb-4">
            Skyline Enterprises holds the future of transformers
          </h2>
          <p className="text-[#656464] mobile:text-center  text-base tablet:text-lg laptop:text-xl">
            <span className="text-green-600">Skyline Enterprises</span>, a prominent name in <span className="text-blue-600">India's transformer industry</span>, was established in <span className="text-red-600">2010</span> and is headquartered in <span className="text-purple-600">Koparkhairane, Navi Mumbai</span>. With over a decade of expertise, the company offers a wide range of specialized services, including <span className="text-green-600">labour supply</span> for transformer-related activities like <span className="text-blue-600">winding, core assembly, and tanking</span>. Skyline's experienced team also excels in <span className="text-red-600">on-site servicing and maintenance</span> of transformers, ensuring they meet the highest standards of quality and reliability. Committed to delivering comprehensive support, Skyline Enterprises has earned a reputation for <span className="text-purple-600">excellence and trustworthiness</span>, making it a preferred choice for clients seeking top-notch transformer solutions.
          </p>
        </div>
        <div className="flex justify-center items-center lg:w-1/2 lg:justify-start">
          <div className="relative w-48 h-48 tablet:w-64 tablet:h-64 lg:w-[500px] lg:h-[500px] mb-8 lg:mb-0">
            <div className="relative -top-10 inset-0 rounded-full border-4 border-primary flex items-center justify-center h-[300px] w-[300px] tablet:h-[400px] tablet:w-[400px] lg:h-[500px] lg:w-[500px]">
              <div className="relative w-20 h-20 tablet:w-28 tablet:h-28 lg:w-80 lg:h-80 mr-20 tablet:mr-40 lg:mr-80">
                <img
                  src={trans1}
                  alt="Transformer 1"
                  className="rounded-full border-4 border-primary h-full w-full"
                />
              </div>
              <div className="absolute w-20 h-20 tablet:w-28 tablet:h-28 lg:w-64 lg:h-64 transform translate-x-14 tablet:translate-x-28 lg:translate-x-48 flex-col mb-36 tablet:mb-48 lg:mb-72 mr-14 tablet:mr-28 lg:mr-28">
                <img
                  src={trans3}
                  alt="Transformer 3"
                  className="rounded-full border-4 border-primary h-full w-full mb-4 tablet:mb-8 lg:mb-0"
                />
                <img
                  src={trans2}
                  alt="Transformer 2"
                  className="rounded-full border-4 border-primary h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="flex justify-center mt-10 items-center">
        <p className="text-[#39B54A] font-bold mobile:text-[30px] tablet:text-[36px] laptop:text-[46px]">
          Why Choose Us?
        </p>
      </div>
      <div className="flex justify-center items-center mt-4">
        <p className="bg-[#39B54A] mobile:w-[100px] tablet:w-[140px] laptop:w-[188px] h-2 rounded-2xl"></p>
      </div>
      <div className="flex justify-center items-center mt-8 px-4">
        <p className="text-[#39B54A] font-bold mobile:text-[24px] tablet:text-[28px] laptop:text-[32px] text-center">
          Discover a World of Possibilities with Skyline Enterprises
        </p>
      </div>

      {/* Section Content */}
      <div className="mt-4 font-Montserrat">
        <div className="flex flex-col gap-6 px-4 laptop:px-20">
          <div className="flex flex-col tablet:flex-row justify-center items-center gap-2">
            <p className="font-bold text-[#656464] mobile:text-[16px] tablet:text-[18px] laptop:text-[20px]">
              Dedication and Commitment:
            </p>
            <p className="text-[#656464] font-semibold mobile:text-[14px] tablet:text-[16px] laptop:text-[18px] text-center tablet:text-left">
              We provide round-the-clock support and ensure strong loyalty and commitment to our clients.
            </p>
          </div>
          <div className="flex flex-col tablet:flex-row justify-center items-center gap-2">
            <p className="font-bold text-[#656464] mobile:text-[16px] tablet:text-[18px] laptop:text-[20px]">
              Quality and Reliability:
            </p>
            <p className="text-[#656464] font-semibold mobile:text-[14px] tablet:text-[16px] laptop:text-[18px] text-center tablet:text-left">
              Our focus is on maintaining the highest standards of quality, productivity, and customer satisfaction.
            </p>
          </div>
          <div className="flex flex-col tablet:flex-row justify-center items-center gap-2">
            <p className="font-bold text-[#656464] mobile:text-[16px] tablet:text-[18px] laptop:text-[20px]">
              Expert Team:
            </p>
            <p className="text-[#656464] font-semibold mobile:text-[14px] tablet:text-[16px] laptop:text-[18px] text-center tablet:text-left">
              Our team of engineers, technicians, supervisors, and specialists are experts in the field, ensuring reliability and efficiency in every project.
            </p>
          </div>
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
    <div className="flex flex-col items-center mt-8 laptop:mt-12 px-4 tablet:px-8 laptop:px-0">
      <p className="text-green-600 font-extrabold text-3xl tablet:text-4xl laptop:text-5xl">
        About Us
      </p>
      <div className="flex justify-center items-center mt-4">
        <p className="bg-green-600 w-28 h-1.5 tablet:w-36 laptop:w-48 rounded-full"></p>
      </div>
      <div className="mt-4 flex justify-center">
        <p className="font-semibold text-gray-700 text-center text-base tablet:text-lg laptop:text-xl max-w-full tablet:max-w-screen-md laptop:max-w-screen-lg leading-relaxed">
          <span className="text-green-600">Skyline Enterprises</span>, a prominent name in <span className="text-green-600">India's transformer industry</span>, was established in <span className="text-green-600">2010</span> and is headquartered in <span className="text-green-600 ">Koparkhairane, Navi Mumbai</span>. With over a decade of expertise, the company offers a wide range of specialized services, including <span className="text-green-600">labour supply</span> for transformer-related activities like <span className="text-green-600">winding, core assembly, and tanking</span>. Skyline's experienced team also excels in <span className="text-green-600">on-site servicing and maintenance</span> of transformers, ensuring they meet the highest standards of quality and reliability. Committed to delivering comprehensive support, Skyline Enterprises has earned a reputation for <span className="text-green-600 ">excellence and trustworthiness</span>, making it a preferred choice for clients seeking top-notch services.
        </p>
      </div>
      <div className="text-green-600 text-lg tablet:text-xl laptop:text-2xl font-medium flex mobile:mb-10 justify-center mt-4">
        <button className="border border-green-600 rounded-lg w-48 h-12 tablet:w-64 tablet:h-14 laptop:w-80 laptop:h-16 hover:bg-green-600 hover:text-white transition-colors duration-300">
          LEARN MORE
        </button>
      </div>
    </div>
  </div>
);

export default Home;
