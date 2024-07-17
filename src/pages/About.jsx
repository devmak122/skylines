import React from 'react';
import Head from '../assets/images/Head.png';
import item1 from '../assets/images/item1.svg';
import item2 from '../assets/images/item2.svg';
import item3 from '../assets/images/item3.svg';
import item4 from '../assets/images/item4.svg';
import trans1 from '../assets/images/trans1.jpeg'
import Trans2 from '../assets/images/Trans2.jpeg'
import Trans3 from '../assets/images/Trans3.jpeg'
import elipse2 from '../assets/images/elipse2.svg'
import group from '../assets/images/group.svg'
import elipse3 from '../assets/images/elipse3.svg'
const About = () => (
  <div className="p-4">
    
      <div>
      <img  src={Head} alt="Head" className="w-full h-auto filter brightness-50" />
      <div className="absolute inset-0 flex flex-col  text-white">
        <p className='text-6xl text-center items-center mt-32 font-bold'>ABOUT US</p>
      </div>
      </div>
      <div className='ml-4 mt-4 -mb-12'>
        <img className='h-12 w-12' src={elipse2} alt="" />
      </div>
      <div className='flex mt-8'>
        <div className="right p-8 ">
          <p className='w-80 text-[#39B54A] text-2xl font-bold font-Poppins'>
            Skyline Enterprises holds the future of transformers
          </p>
          <p className='w-96 font-normal text-[#656464] '>
            Skyline Enterprises, a prominent name in India's transformer industry, was established in 2010 and is headquartered in Koparkhairane, Navi Mumbai. With over a decade of expertise, the company offers a wide range of specialized services, including labour supply for transformer-related activities like winding, core assembly, and tanking. Skyline's experienced team also excels in on-site servicing and maintenance of transformers, ensuring they meet the highest standards of quality and reliability. Committed to delivering comprehensive support, Skyline Enterprises has earned a reputation for excellence and trustworthiness, making it a preferred choice for clients seeking top-notch transformer solutions.
          </p>
            
        </div>
        <div className='flex justify-center items-center '>
          <div>
          <svg height="400" width="400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern1" x="0" y="0" patternUnits="userSpaceOnUse" width="100%" height="100%">
                <image href={trans1} x="0" y="0" width="400" height="400" preserveAspectRatio='xMidYMid slice' />
              </pattern>
            </defs>
            <circle r="170" cx="200" cy="200" fill="url(#pattern1)" stroke="#39B54A1A" strokeWidth="6"  />
          </svg>
        </div>
        <div className='flex-col -ml-12'>
          <svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern2" x="0" y="0" patternUnits="userSpaceOnUse" width="100%" height="100%">
                <image href={Trans2} x="0" y="0" width="300" height="300" preserveAspectRatio='xMidYMid slice' />
              </pattern>
            </defs>
            <circle r="145" cx="150" cy="150" fill="url(#pattern2)" stroke="#39B54A1A" strokeWidth="6"  />
          </svg>
          <svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern3" x="0" y="0" patternUnits="userSpaceOnUse" width="100%" height="100%">
                <image href={Trans3} x="0" y="0" width="300" height="300" preserveAspectRatio='xMidYMid slice' />
              </pattern>
            </defs>
            <circle r="145" cx="150" cy="150" fill="url(#pattern3)" stroke="#39B54A1A" strokeWidth="6"   />
          </svg>

          </div>
        </div>
      </div>
      <img src={group} alt="Group" className=''/>
      <img src={elipse3} alt="" className='-mt-60' />
      <div className='font-bold text-[#39B54A] text-[46px] flex items-center justify-center'>
        <p>Our Services</p>
      </div>
      <div className='flex justify-center items-center'>
        <p className='bg-[#39B54A] h-[12px]  w-[188px] rounded-2xl'></p>
      </div>
      <div className='flex justify-evenly items-center mt-8'>

      <div className='text-center mt-2 '>
        <img className='h-52' src={item1} alt="" />
        <p className=' text-[#39B54A] font-semibold '>Winding</p>
      </div>
      <div className='text-center '>

        <img className='h-52' src={item2} alt="" />
        <p className='text-[#39B54A] font-semibold '>Core Assembly</p>
      </div>
     
      
      <div className='text-center'>
        <img className='h-52' src={item3} alt="" />
        <p className='text-[#39B54A] font-semibold'>CCA</p>
      </div>
      <div className='text-center'>
        <img className='h-52' src={item4} alt="" />
        <p className='text-[#39B54A] font-semibold'>Tanking and Dispatch</p>
      </div>
      </div>
      <div className='mt-4 flex justify-center items-center'>
        <p className='font-bold text-[46px] text-[#39B54A]'>What We Offer</p>
      </div>
      <div className='flex justify-center items-center mt-4'>
        <p className='bg-[#39B54A] h-[12px] w-[188px] rounded-2xl'></p>
      </div>
      <div>
        <p className='flex items-center justify-center  font-semibold text-[46px] text-[#39B54A]'>
        The Core Company Values
        </p>
      </div>
      <div className='w-[924px] h-[200px] flex justify-center items-center ml-32 '>
        <p className='font-normal text-[22px] text-[#656464]'>
        Our core company values are integrity, excellence, customer-centricity, innovation, collaboration, sustainability, and learning and growth. These values shape our actions, guide our decisions, and drive our commitment to delivering exceptional service, fostering innovation, and prioritizing our customers while upholding the highest ethical standards and promoting a sustainable future.
        </p> 
      </div>
      
    
  </div>
);

export default About;
