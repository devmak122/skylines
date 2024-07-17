import React from 'react';
import Head from '../assets/images/Head.png';
import item1 from '../assets/images/item1.svg';
import item2 from '../assets/images/item2.svg';
import item3 from '../assets/images/item3.svg';
import item4 from '../assets/images/item4.svg';
import trans1 from '../assets/images/trans1.jpeg';
import trans2 from '../assets/images/Trans2.jpeg';
import trans3 from '../assets/images/Trans3.jpeg';
import elipse2 from '../assets/images/elipse2.svg';
import group from '../assets/images/group.svg';
import elipse3 from '../assets/images/elipse3.svg';

const About = () => {
  return (
    <div className="">
      {/* Mobile View */}
      <div className="bg-cover bg-center bg-no-repeat flex items-center justify-center h-80 laptop:h-96" style={{ backgroundImage: `url(${Head})` }}>
        <h1 className="text-white text-center font-bold text-4xl laptop:text-6xl py-16 laptop:py-24">
          About Us
        </h1>
      </div>

      {/* Tablet and Above View */}
      <div className="container mx-auto px-4 py-8 laptop:py-12 relative">
        {/* Background dots and circles */}
        <img src={elipse2} alt="Background dots" className="absolute left-0 top-0 z-0" />
        <img src={elipse3} alt="Background dots" className="absolute right-0 top-0 z-0" />

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-12 relative z-10">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-[#39B54A] text-2xl font-bold mb-4">Skyline Enterprises holds the future of transformers</h2>
            <p className="text-[#656464] text-lg">
              Skyline Enterprises, a prominent name in India's transformer industry, was established in 2010 and is headquartered in Koparkhairane, Navi Mumbai. With over a decade of expertise, the company offers a wide range of specialized services, including labour supply for transformer-related activities like winding, core assembly, and tanking. Skyline's experienced team also excels in on-site servicing and maintenance of transformers, ensuring they meet the highest standards of quality and reliability. Committed to delivering comprehensive support, Skyline Enterprises has earned a reputation for excellence and trustworthiness, making it a preferred choice for clients seeking top-notch transformer solutions.
            </p>
          </div>
          <div className="flex justify-center items-center lg:w-1/2 lg:justify-start">
            <div className="relative w-64 h-64 lg:w-96 lg:h-96 mb-8 lg:mb-0">
              <div className="absolute inset-0 rounded-full border-4 border-primary flex items-center justify-center">
                <div className="relative w-28 h-28 lg:w-40 lg:h-40">
                  <img src={trans1} alt="Transformer 1" className="rounded-full border-4 border-primary" />
                </div>
                <div className="absolute w-28 h-28 lg:w-40 lg:h-40 transform translate-x-28 lg:translate-x-40">
                  <img src={trans3} alt="Transformer 3" className="rounded-full border-4 border-primary" />
                </div>
                <div className="absolute w-28 h-28 lg:w-40 lg:h-40 transform translate-x-14 lg:translate-x-20">
                  <img src={trans2} alt="Transformer 2" className="rounded-full border-4 border-primary" />
                </div>
               </div>
            </div>
          </div>
        </div>

        <div className="text-[#39B54A] text-4xl text-center mt-8 relative z-10">
          <p>Our Services</p>
          <div className="bg-primary h-2 w-24 mx-auto rounded-full mt-2"></div>
        </div>

        <div className="flex justify-center items-center mt-8 relative z-10">
          <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <img src={item1} alt="Winding" className="mx-auto h-40 lg:h-52" />
              <p className="text-[#39B54A] font-semibold mt-2">Winding</p>
            </div>
            <div className="text-center">
              <img src={item2} alt="Core Assembly" className="mx-auto h-40 lg:h-52" />
              <p className="text-[#39B54A] font-semibold mt-2">Core Assembly</p>
            </div>
            <div className="text-center">
              <img src={item3} alt="CCA" className="mx-auto h-40 lg:h-52" />
              <p className="text-[#39B54A] font-semibold mt-2">CCA</p>
            </div>
            <div className="text-center">
              <img src={item4} alt="Tanking and Dispatch" className="mx-auto h-40 lg:h-52" />
              <p className="text-[#39B54A] font-semibold mt-2">Tanking and Dispatch</p>
            </div>
          </div>
        </div>

        <div className="text-[#39B54A] text-4xl text-center mt-8 relative z-10">
          <p>What We Offer</p>
          <div className="bg-primary h-2 w-24 mx-auto rounded-full mt-2"></div>
        </div>

        <div className="max-w-4xl mx-auto mt-8 relative z-10">
          <p className="text-[#39B54A] text-4xl font-semibold text-center">The Core Company Values</p>
          <p className="text-[#656464] text-lg mt-4 text-center">
            Our core company values are integrity, excellence, customer-centricity, innovation, collaboration, sustainability, and learning and growth. These values shape our actions, guide our decisions, and drive our commitment to delivering exceptional service, fostering innovation, and prioritizing our customers while upholding the highest ethical standards and promoting a sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
