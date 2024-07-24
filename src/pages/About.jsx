import React from "react";
import About_phone_bg from "../assets/images/About_phone_bg.svg";
import item1 from "../assets/images/item1.svg";
import item2 from "../assets/images/item2.svg";
import item3 from "../assets/images/item3.svg";
import item4 from "../assets/images/item4.svg";
import trans1 from "../assets/images/trans1.jpeg";
import trans2 from "../assets/images/Trans2.jpeg";
import trans3 from "../assets/images/Trans3.jpeg";
import elipse2 from "../assets/images/elipse2.svg";
import group from "../assets/images/group.svg";
// import elipse3 from "../assets/images/elipse3.svg";

import {  Zoom } from 'react-awesome-reveal';


const About = () => {
  return (
    <div className="z-0 overflow-x-hidden">
      {/* Mobile View */}
      <div
        className="w-full bg-black bg-opacity-50 justify-center bg-cover mobile:bg-center mobile:bg-cover  bg-center bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${About_phone_bg})`, height: '50vh' }}
      >
        <h1 className="text-white text-center flex items-center justify-center font-bold  font-poppins text-6xl">
         
        About Us
          </h1>
      </div>

      {/* Tablet and Above View */}
      
      
      <div className="relative z-10 px-4 tablet:px-8 laptop:px-12 font-Montserrat">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-12">
          <div className="lg:w-[40%] mobile:p-4 laptop:ml-6 mt-18  lg:mb-0">
            <h2 className="text-orange-500 font-roboto text-xl mobile:text-center mobile:text-2xl mobile:mt-10 tablet:text-2xl laptop:text-[46px] laptop:leading-[48px] font-bold mb-4 lg:mt-[150px]">
              Skyline Enterprises holds the future of transformers
            </h2>

            <p className="text-[#656464] mobile:text-center text-base tablet:text-lg  font-poppins laptop:text-[17px]">
              Skyline Enterprises, a prominent name in India&apos;s transformer industry, was established in 2010 and is headquartered in Koparkhairane, Navi Mumbai. With over a decade of expertise, the company offers a wide range of specialized services, including labour supply for transformer-related activities like winding, core assembly, and tanking. Skyline&apos;s experienced team also excels in on-site servicing and maintenance of transformers, ensuring they meet the highest standards of quality and reliability. Committed to delivering comprehensive support, Skyline Enterprises has earned a reputation for excellence and trustworthiness, making it a preferred choice for clients seeking top-notch transformer solutions.
            </p>
          </div>
          <div className="flex justify-center items-center lg:w-1/2 lg:justify-start">

            <div className="relative ml-[-265px] w-64 h-64 lg:w-[500px] lg:h-[500px] mt-[-135px] mb-8 lg:mb-0">
              <div className="relative inset-0 rounded-full laptop:ml-60 border-4 bg-primary bg-opacity-[5%] border-none flex items-center justify-center h-[850px] w-[850px] mobile:h-[500px] mobile:w-[500px] mobile:ml-[60px] mobile:mt-[150px]">
                <div className="relative w-28 h-28 lg:w-[450px] lg:h-[450px] mr-[400px]">
                  <img
                    src={trans1}
                    alt="Transformer 1"
                    className="rounded-full border-primary border-[10px] border-opacity-[10%] h-full w-full mobile:scale-150 mobile:border-[5px] mobile:ml-[65px]"
                  />
                  {/* Three dots around image */}
                  <div className="w-[70px] h-[70px] rounded-full bg-primary mt-[-535px] ml-[-50px] mobile:scale-75 mobile:mt-[-250px] mobile:ml-[0]"></div>
                  <div className="w-[50px] h-[50px] rounded-full bg-orange-500 mt-[510px] ml-[-25px] mobile:scale-75 mobile:mt-[250px] mobile:ml-[0]"></div>
                  <div className="w-[35px] h-[35px] rounded-full bg-primary mt-[195px] ml-[610px] mobile:scale-75 mobile:mt-[70px] mobile:ml-[250px]"></div>
                  {/* End here */}
                </div>
                <div className="absolute w-28 h-28 lg:w-[300px] lg:h-[300px] mobile:w-[170px] mobile:h-[170px] mobile:ml-20 transform translate-x-28 lg:translate-x-48 flex-col mb-[330px] mr-[62px]">
                  <img
                    src={trans3}
                    alt="Transformer 3"
                    className="rounded-full border-[10px] border-opacity-[10%] lg:scale-110 border-primary h-full w-full mobile:scale-125 mobile:border-[5px] mobile:mt-[80px] mobile:ml-[-75px]"
                  />
                  <br />
                  <img
                    src={trans2}
                    alt="Transformer 2"
                    className="rounded-full border-[10px] border-opacity-[10%] border-primary h-full w-full mobile:scale-110 mobile:border-[5px] mobile:ml-[-70px] mobile:mt-[25px]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="relative group">
          {/* Design after paragraph */}
          <div className="h-[650px] w-[650px] border-[10px] border-primary border-opacity-[7%] rounded-full ml-[-450px] mt-[-250px] mobile:h-[250px] mobile:w-[250px] mobile:ml-[-190px] mobile:mt-[100px]"></div>
          <div>
            <img
              src={group}
              alt=""
              className="absolute mr-[100px] h-80 w-80 top-[100px] z-0 mobile:scale-50 mobile:top-[-40px] mobile:ml-[-100px]"
            />
          </div>
        </div>

        {/* Section Title */}

        <div className="container  laptop:-mt-40 mx-auto  py-12">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <p className="text-orange-500 font-bold mobile:text-[30px] tablet:text-[36px] laptop:text-[46px]">
              Our Services
            </p>
            <div className="bg-[#86c141] mobile:w-[100px] tablet:w-[140px] laptop:w-[105px] h-2 rounded-2xl mt-4"></div>
            <p className="text-black font-semibold mobile:text-[24px] tablet:text-[28px] laptop:text-[32px] mt-8 px-4">
              Discover a World of Possibilities with Skyline Enterprises
            </p>
          </div>

          {/* Section Content */}
          <div className="flex justify-center items-center mt-8 relative z-10 font-roboto">
            <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Zoom delay={700}>

                <div className="text-center">
                  <img src={item1} alt="Winding" className="mx-auto h-40 lg:h-52" />
                  <p className="text-[#39B54A] font-medium text-3xl mt-2">Winding</p>
                </div>
              </Zoom>
              <Zoom delay={700}>
                <div className="text-center">
                  <img
                    src={item2}
                    alt="Core Assembly"
                    className="mx-auto h-40 lg:h-52"
                  />
                  <p className="text-[#39B54A] font-medium text-3xl mt-2">Core Assembly</p>
                </div>

              </Zoom>

              <Zoom delay={700}>
                <div className="text-center">
                  <img src={item3} alt="CCA" className="mx-auto h-40 lg:h-52" />
                  <p className="text-[#39B54A] font-medium text-3xl mt-2">CCA</p>
                </div>
              </Zoom>
              <Zoom delay={700}>
                <div className="text-center">
                  <img
                    src={item4}
                    alt="Tanking and Dispatch"
                    className="mx-auto h-40 lg:h-52"
                  />
                  <p className="text-[#39B54A] font-medium text-3xl mt-2">
                    Tanking and Dispatch
                  </p>
                </div>
              </Zoom>
            </div>
          </div>

        </div>
      </div>

      
     

      <Zoom delay={700}>
        <div className="text-orange-500 text-5xl text-center  font-roboto mt-24 relative z-10">
           <p className="text-orange-500 font-bold mobile:text-[30px] tablet:text-[36px] laptop:text-[46px]">
            What We Offer
            </p>
          <div className="bg-[#86c141] h-2 w-24 mx-auto rounded-full mt-2"></div>
        </div>
        </Zoom>

      <div className="max-w-4xl mx-auto mt-8 relative   mobile:p-5   font-poppins z-10">
        <p className="text-[#000000] text-4xl font-medium  text-center">
            The Core Company Values
        </p>
     
          <p className="text-gray-600 text-lg mt-4 text-center">
            Our core company values are integrity, excellence,
            customer-centricity, innovation, collaboration, sustainability, and
            learning and growth. These values shape our actions, guide our
            decisions, and drive our commitment to delivering exceptional
            service, fostering innovation, and prioritizing our customers while
            upholding the highest ethical standards and promoting a sustainable
            future.
          </p>

        </div>
      </div>
    
  );
};

export default About;
