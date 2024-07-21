import React from 'react';
import client1 from '../assets/images/client1.png';
import client2 from '../assets/images/client2.png';
import client3 from '../assets/images/client3.png';
import group from '../assets/images/group.svg';
// import elipse4 from '../assets/images/elipse4.svg';
import Rectangle from "../assets/images/Rectangle.svg";
import trans1 from "../assets/images/trans1.jpeg";
import trans2 from "../assets/images/Trans2.jpeg";
import trans3 from "../assets/images/Trans3.jpeg"
import { Link } from 'react-router-dom';
import Typewriter from 'react-typewriter-effect';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import { motion } from "framer-motion";
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';


 
const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm();

  const apiKey = "62805f85-5dbe-464b-bfc3-1fc755d8c495";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Your Company Name",
      subject: "New Contact Message from Your Website",
    },
    onSuccess: (msg, data) => {
      alert("Success: " + msg); // You can use a different UI method to show the success message
    },
    onError: (msg, data) => {
      alert("Error: " + msg); // You can use a different UI method to show the error message
    },
  });


  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="z-0">
        <div
          className="w-full bg-black bg-opacity-50 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Rectangle})`, height: '' }}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly h-full px-4 py-8">
            <div className="text-white max-w-lg md:mb-0 text-center">
              <div className="text-xl md:text-xl font-light mobile:text-sm text-center  mb-4 font-poppins">
                <p className="">
                  One of the most trusted companies in India
                </p>
              </div>
              <div className="text-5xl laptop:text-center mobile:text-start md:text-4xl font-bold mobile:text-4xl mb-6">
                <Typewriter
                  text="Skyline Enterprises is a transformer manufacturer and supplier in India."
                  typeSpeed={100}
                  startDelay={500}
                  cursorColor="white"
                />
              </div>
              <Link to="/products">
                <button className="bg-orange-500 text-white px-6 py-3 rounded hover:text-secondary transition-colors duration-300">
                  View Products
                </button>
              </Link>
            </div>
            <div className="hidden md:block bg-green-700 bg-opacity-80 p-8 rounded-lg text-white max-w-md w-full">
              <h3 className="text-2xl font-semibold mb-4 text-center">Connect With Us</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block mb-2" htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full p-2 rounded border ${errors.name ? 'border-red-500' : 'border-gray-300'} text-gray-800`}
                    {...register("name", { required: "Full name is required", maxLength: 80 })}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block mb-2" htmlFor="email">Enter Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full p-2 rounded border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-gray-800`}
                    {...register("email", {
                      required: "Enter your email",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block mb-2" htmlFor="phone">Mobile Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className={`w-full p-2 rounded border ${errors.phone ? 'border-red-500' : 'border-gray-300'} text-gray-800`}
                    {...register("phone")}
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block mb-2" htmlFor="city">Area, City</label>
                  <input
                    type="text"
                    id="city"
                    className={`w-full p-2 rounded border ${errors.city ? 'border-red-500' : 'border-gray-300'} text-gray-800`}
                    {...register("city")}
                  />
                  {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                </div>
                <button
                  type="submit"
                  className={`bg-orange-500 w-full p-2 rounded text-white hover:bg-orange-600 transition-colors duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="relative z-10 px-4 tablet:px-8 laptop:px-12 font-Montserrat">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-12">
          <div className="lg:w-[40%] mobile:p-4 ml-6 lg:pr-8 mb-8 lg:mb-0">
            <Fade direction="left" delay={500}>
              <h2 className="text-[#39B54A] text-xl mobile:text-center mobile:text-2xl mobile:mt-10 tablet:text-2xl laptop:text-[46px] laptop:leading-[48px] font-bold mb-4 lg:mt-[150px]">
                Skyline Transforming Your Energy Solutions
              </h2>
            </Fade>
            <Fade direction="left" delay={700}>
              <p className="text-[#656464] mobile:text-center text-base tablet:text-lg laptop:text-xl">
                <span className="text-red-500">Skyline Enterprises</span> stands out as a dynamic and powerful entity, boasting a team of <span className="text-blue-500">highly skilled professionals</span> with extensive experience collaborating with <span className="text-green-500">major corporations</span>. Our experts are adept at crafting <span className="text-purple-500">optimal solutions</span> swiftly and efficiently. With a deep understanding of <span className="text-orange-500">industry standards</span> and a commitment to <span className="text-yellow-500">excellence</span>, we ensure that each project is tailored to meet the unique needs of our clients. Trust in our ability to deliver <span className="text-pink-500">exceptional results</span> with speed and precision, making <span className="text-red-500">Skyline Enterprises</span> your go-to partner for all your setup requirements.
              </p>
            </Fade>
          </div>
          <div className="flex justify-center items-center lg:w-1/2 lg:justify-start">
            <Zoom delay={700}>
              <div className="relative ml-[-265px] w-64 h-64 lg:w-[500px] lg:h-[500px] mt-[-115px] mb-8 lg:mb-0">
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
            </Zoom>
          </div>
        </div>
        <div className="relative group">
          {/* Design after paragraph */}
          <div className="h-[650px] w-[650px] border-[10px] border-primary border-opacity-[7%] rounded-full ml-[-450px] mt-[-50px] mobile:h-[250px] mobile:w-[250px] mobile:ml-[-190px] mobile:mt-[100px]"></div>
          <div>
            <img src={group} alt="" className="absolute mr-[100px] h-80 w-80 top-[180px] z-0 mobile:scale-50 mobile:top-[-40px] mobile:ml-[-100px]" />
          </div>
        </div>

        {/* Section Title */}
        <div>
          {/* Section Header */}
          <Zoom delay={100}>
            <div className="flex justify-center mt-[-190px] items-center mobile:mt-10 animate-fadeIn">
        
              <p className="text-[#39B54A] font-bold mobile:text-[30px] tablet:text-[36px] laptop:text-[46px]">
                Why Choose Us?
              </p>
            </div>
          </Zoom>
          <div className="flex justify-center items-center mt-4 animate-fadeIn">
            <p className="bg-[#39B54A] mobile:w-[100px] tablet:w-[140px] laptop:w-[188px] h-2 rounded-2xl"></p>
          </div>
          <Zoom delay={100}>
            <div className="flex justify-center items-center mt-8 px-4 animate-fadeIn">
              <p className="text-[#39B54A] font-bold mobile:text-[24px] tablet:text-[28px] laptop:text-[32px] text-center">
                Discover a World of Possibilities with Skyline Enterprises
              </p>
            </div>
          </Zoom>
          {/* Section Content */}
          <div className="font-Montserrat">
            <div className="flex flex-col gap-6 px-4 laptop:px-20">
              <Slide direction="left">
                <div className="flex flex-col tablet:flex-row justify-center items-center gap-2 animate-slideIn">
                  <p className="font-bold text-[#656464] mobile:text-[16px] tablet:text-[18px] laptop:text-[20px]">
                    Dedication and Commitment:
                  </p>
                  <p className="text-[#656464] font-semibold mobile:text-[14px] tablet:text-[16px] laptop:text-[18px] text-center tablet:text-left">
                    We provide round-the-clock support and ensure strong loyalty and commitment to our clients.
                  </p>
                </div>
              </Slide>
              <Slide direction="left" delay={100}>
                <div className="flex flex-col tablet:flex-row justify-center items-center gap-2 animate-slideIn">
                  <p className="font-bold text-[#656464] mobile:text-[16px] tablet:text-[18px] laptop:text-[20px]">
                    Quality and Reliability:
                  </p>
                  <p className="text-[#656464] font-semibold mobile:text-[14px] tablet:text-[16px] laptop:text-[18px] text-center tablet:text-left">
                    Our focus is on maintaining the highest standards of quality, productivity, and customer satisfaction.
                  </p>
                </div>
              </Slide>
              <Slide direction="left" delay={200}>
                <div className="flex flex-col tablet:flex-row justify-center items-center gap-2 animate-slideIn">
                  <p className="font-bold text-[#656464] mobile:text-[16px] tablet:text-[18px] laptop:text-[20px]">
                    Expert Team:
                  </p>
                  <p className="text-[#656464] font-semibold mobile:text-[14px] tablet:text-[16px] laptop:text-[18px] text-center tablet:text-left">
                    Our team of engineers, technicians, supervisors, and specialists are experts in the field, ensuring reliability and efficiency in every project.
                  </p>
                </div>
              </Slide>
            </div>
          </div>
        </div>
 
      </div>

      {/* Other Content */}

      <div className="relative mobile:mx-16">
        <div className="absolute inset-0">
          <div className="background-designs">
            {/* Add your background elements here */}
            <motion.div
              className="h-[100px] w-[100px] border-b-[10px] border-l-[10px] border-orange-500 ml-[95px] mt-[180px] mobile:scale-75 mobile:ml-[-10px] mobile:mt-[170px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            ></motion.div>
            <motion.div
              className="h-[80px] w-[80px] bg-primary ml-[400px] mt-[-305px] mobile:ml-[-90px] mobile:scale-75 mobile:mt-[-280px]"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
            <motion.div
              className="h-[120px] w-[120px] border-t-[15px] border-r-[15px] border-primary ml-[925px] mt-[-10px] mobile:ml-[180px]  mobile:mt-[-110px] "
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            ></motion.div>
            <motion.div
              className="h-[300px] w-[300px] bg-primary bg-opacity-[10%] ml-[400px] mt-[130px] mobile:ml-[40px] mobile:mt-[100px]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            ></motion.div>
            <motion.div
              className="h-[80px] w-[80px] bg-primary bg-opacity-[10%] ml-[180px] mt-[-200px]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            ></motion.div>
            <motion.div
              className="h-[70px] w-[70px] rounded-full bg-primary bg-opacity-[5%] ml-[1430px] mt-[50px] mobile:ml-[80%] mobile:mt-[20px]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            ></motion.div>
          </div>
          <motion.div
            className="h-[300px] w-[300px] rounded-full bg-primary bg-opacity-[5%] mt-[-680px] ml-[1350px] mobile:ml-[50%] mobile:mt-[-300px]"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          ></motion.div>
          <motion.div
            className="h-[300px] w-[300px] rounded-full bg-primary bg-opacity-[5%] mt-[350px] ml-[-190px] mobile:ml-[-20px] mobile:mt-[50px]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
          <motion.div
            className="h-[60px] w-[60px] border-b-[10px] border-r-[10px] border-orange-500 ml-[1365px] mt-[-425px] mobile:scale-75 mobile:ml-[280px] mobile:mt-[-260px]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          ></motion.div>
        </div>
        <div className="flex mt-[100px] justify-evenly relative z-10">
          <motion.img
            className="h-[258px] w-[265px] mobile:ml-[10px] mobile:scale-75"
            src={client1}
            alt=""
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            className="mt-[130px] h-[393px] w-[471px] mobile:ml-[-250px] mobile:scale-75 mobile:mt-[220px]"
            src={client2}
            alt=""
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.img
            className="mt-[230px] w-[320px] h-[248px] mobile:ml-[-330px] mobile:mt-[580px] mobile:scale-75"
            src={client3}
            alt=""
            initial={{ opacity: 0, rotate: 180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </div>
      </div>

      {/* design on images */}


      {/* About Us Section */}
      <div className="flex flex-col items-center mt-8 laptop:mt-[200px] px-4 tablet:px-8 laptop:px-0">
        <Fade top delay={300}>
          <p className="text-green-600 font-extrabold text-3xl tablet:text-4xl laptop:text-5xl">
            About Us
          </p>
        </Fade>
        <Fade bottom delay={600}>
          <div className="flex justify-center items-center mt-4">
            <p className="bg-green-600 w-28 h-1.5 tablet:w-36 laptop:w-48 rounded-full"></p>
          </div>
        </Fade>
        <Fade bottom delay={900}>
          <div className="mt-4 flex justify-center">
            <p className="font-semibold text-gray-700 text-center text-base tablet:text-lg laptop:text-xl max-w-full tablet:max-w-screen-md laptop:max-w-screen-lg leading-relaxed">
              <span className="text-green-600">Skyline Enterprises</span>, a prominent name in <span className="text-green-600">India's transformer industry</span>, was established in <span className="text-green-600">2010</span> and is headquartered in <span className="text-green-600 ">Koparkhairane, Navi Mumbai</span>. With over a decade of expertise, the company offers a wide range of specialized services, including <span className="text-green-600">labour supply</span> for transformer-related activities like <span className="text-green-600">winding, core assembly, and tanking</span>. Skyline's experienced team also excels in <span className="text-green-600">on-site servicing and maintenance</span> of transformers, ensuring they meet the highest standards of quality and reliability. Committed to delivering comprehensive support, Skyline Enterprises has earned a reputation for <span className="text-green-600 ">excellence and trustworthiness</span>, making it a preferred choice for clients seeking top-notch services.
            </p>
          </div>
        </Fade>
        <Zoom delay={1200}>
          <div className="text-green-600 text-lg tablet:text-xl laptop:text-2xl font-medium flex mobile:mb-10 justify-center mt-4">
            <Link to="/About">
              <button className="border border-green-600 rounded-lg w-48 h-12 tablet:w-64 tablet:h-14 laptop:w-80 laptop:h-16 hover:bg-green-600 hover:text-white transition-colors duration-300">
                LEARN MORE
              </button>
            </Link>
          </div>
        </Zoom>
      </div>
    </div>
  );
};
export default Home;
