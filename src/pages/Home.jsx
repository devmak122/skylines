import React from "react";

import group from "../assets/images/group.svg";
import client3 from "../assets/images/client3.png";
import client2 from "../assets/images/client2.png";
// import elipse4 from '../assets/images/elipse4.svg';
import Rectangle from "../assets/images/Rectangle.svg";
import trans1 from "../assets/images/trans1.jpeg";
import trans2 from "../assets/images/Trans2.jpeg";
import trans3 from "../assets/images/Trans3.jpeg";
import commit from "../assets/images/1.svg"
import team from "../assets/images/2.svg";
import quality from "../assets/images/3.svg";
import { Link } from "react-router-dom";
import Typewriter from "react-typewriter-effect";
import { Fade, Zoom } from "react-awesome-reveal";

import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

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
          style={{ backgroundImage: `url(${Rectangle})`, height: "" }}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly h-full px-4 py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly h-full px-4 py-8">
              <div className="text-white max-w-lg md:mb-0 text-center flex-grow">
                <div className="text-xl md:text-xl font-light mobile:text-sm text-start mb-4 font-poppins">
                  <p className="">One of the most trusted companies in India</p>
                </div>
                <div className="text-5xl laptop:text-center mobile:text-start md:text-4xl  font-roboto font-bold mobile:text-4xl mb-6">
                  <Typewriter
                    text="Skyline Enterprises is a transformer manufacturer and supplier in India."
                    typeSpeed={100}
                    startDelay={500}
                    cursorColor="white"
                  />
                </div>
                <Link to="/products">
                  <button className="bg-orange-500 text-white px-6 py-3 rounded  font-poppins flex justify-start hover:text-secondary transition-colors duration-300">
                    View Products
                  </button>
                </Link>
              </div>
              <div className="hidden md:block bg-white bg-opacity-35 p-8 rounded-lg text-gray-800 max-w-md font-roboto w-full flex-grow-0">
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  Connect With Us
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block mb-2 text-gray-800" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full p-2 rounded border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } bg-green-200 text-gray-800`}
                      {...register("name", {
                        required: "Full name is required",
                        maxLength: 80,
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-800" htmlFor="email">
                      Enter Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full p-2 rounded border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } bg-green-200 text-gray-800`}
                      {...register("email", {
                        required: "Enter your email",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Please enter a valid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-800" htmlFor="phone">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className={`w-full p-2 rounded border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } bg-green-200 text-gray-800`}
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-800" htmlFor="city">
                      Area, City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className={`w-full p-2 rounded border ${
                        errors.city ? "border-red-500" : "border-gray-300"
                      } bg-green-200 text-gray-800`}
                      {...register("city")}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm">
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className={`bg-orange-500 w-full p-2 rounded text-white hover:bg-orange-600 transition-colors duration-300 ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-4 tablet:px-8 laptop:px-12 font-Montserrat">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-12">
          <div className="lg:w-[40%] mobile:p-4 laptop:ml-6 mt-18  lg:mb-0">
            <h2 className="text-orange-500 font-roboto text-xl mobile:text-center mobile:text-2xl mobile:mt-10 tablet:text-2xl laptop:text-[46px] laptop:leading-[48px] font-bold mb-4 lg:mt-[150px]">
              Skyline Transforming Your Energy Solutions
            </h2>

            <p className="text-[#656464] mobile:text-center text-base tablet:text-lg  font-poppins laptop:text-[17px]">
              Skyline Enterprisesstands out as a dynamic and powerful entity,
              boasting a team of highly skilled professionals with extensive
              experience collaborating with major corporations. Our experts are
              adept at crafting optimal solutionsswiftly and efficiently. With a
              deep understanding of industry standardsand a commitment to
              excellence, we ensure that each project is tailored to meet the
              unique needs of our clients. Trust in our ability to deliver{" "}
              exceptional resultswith speed and precision, making Skyline
              Enterprisesyour go-to partner for all your setup requirements.
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
              Why Choose Us?
            </p>
            <div className="bg-[#86c141] mobile:w-[100px] tablet:w-[140px] laptop:w-[105px] h-2 rounded-2xl mt-4"></div>
            <p className="text-black font-semibold mobile:text-[24px] tablet:text-[28px] laptop:text-[32px] mt-8 px-4">
              Discover a World of Possibilities with Skyline Enterprises
            </p>
          </div>

          {/* Section Content */}
          <div className="flex flex-row tablet:flex-row mobile:flex-col justify-center gap-8 mobile:px-0 laptop:px-20">
            <Zoom>
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center w-full h-[330px] max-w-sm">
                <img
                  src={commit}
                  alt="commit"
                  className="w-[100px] h-[100px] object-cover rounded-lg"
                />
                <p className="font-semibold text-black text-center  mt-1 text-[20px] mb-4">
                  Dedication and Commitment:
                </p>
                <p className="text-[#656464] font-light text-[18px] mb-10 text-center">
                  We provide round-the-clock support and ensure strong loyalty
                  and commitment to our clients.
                </p>
              </div>
            </Zoom>
            <Zoom delay={100}>
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center w-full h-[330px] max-w-sm">
                <img
                  src={quality}
                  alt="quality"
                  className="w-[100px] h-[100px] object-cover rounded-lg"
                />
                <p className="font-semibold text-black mt-4 text-[20px] mb-4">
                  Quality and Reliability:
                </p>
                <p className="text-[#656464] font-light text-[18px] mb-10 text-center">
                  Our focus is on maintaining the highest standards of quality,
                  productivity, and customer satisfaction.
                </p>
              </div>
            </Zoom>
            <Zoom delay={200}>
              <div className="bg-white shadow-lg rounded-lg p-6  flex flex-col items-center justify-center w-full h-[330px] max-w-sm">
                <img
                  src={team}
                  alt="team"
                  className="w-[100px] h-[100px] object-cover rounded-lg"
                />
                <p className="font-semibold text-black mt-4 text-[20px] mb-4">
                  Expert Team:
                </p>
                <p className="text-[#656464] font-light text-[18px] mb-10  text-center">
                  Our team of  technicians, supervisors, and
                  specialists are experts in the field, ensuring reliability and
                  efficiency in every project.
                </p>
              </div>
            </Zoom>
          </div>
        </div>
      </div>

      {/* Other Content */}
      <div className="flex flex-col laptop:flex-row items-center  mt-32  mb-5 laptop:items-start justify-between mobile:flex-col px-4 tablet:px-8 laptop:px-0">
  <div className="relative flex-1 flex flex-col  mobile:mx-8 mobile:mb-10   laptop:mx-0">
    <div className="relative w-full h-full laptop:w-2/4 laptop:h-[300px] laptop:mb-14">
      {/* Background Elements */}
      {/* First Image */}
            <img
              src={client2}
              alt="client2"
              className="w-full h-full object-cover rounded-lg   laptop:ml-20 mobile:-ml-1  shadow-lg"
            />
    </div>
          <div className="relative w-full h-full laptop:w-2/4 mobile:-mt-20  mobile:ml-5   laptop:-mt-[200px]  laptop:ml-[300px] laptop:h-[300px]">
      {/* Second Image */}
      <img
        src={client3}
        alt="client3"
              className="w-full h-full object-cover rounded-lg   shadow-lg"
      />
    </div>
  </div>
  <div className="flex-1 flex flex-col items-center laptop:mt-2 font-roboto laptop:items-start  px-4 tablet:px-8 laptop:px-16">
    <p className="text-orange-500 font-extrabold text-3xl tablet:text-4xl laptop:text-5xl">
      About Us
    </p>
    <div className="flex justify-center items-center mt-4">
      <p className="bg-[#86c141] w-28 h-1.5 tablet:w-36 laptop:w-20 rounded-full"></p>
    </div>
    <div className="mt-4 flex flex-col items-center font-poppins laptop:items-start">
      <p className="text-gray-700 text-center laptop:text-left text-base laptop:text-[16px] tablet:text-lg max-w-full tablet:max-w-screen-md laptop:max-w-screen-lg leading-relaxed">
        Skyline Enterprises, a prominent name in India's transformer
        industry, was established in 2010 and is headquartered in
        Koparkhairane, Navi Mumbai. With over a decade of expertise, the
        company offers a wide range of specialized services, including
        labour supply for transformer-related activities like winding,
        core assembly, and tanking. Skyline's experienced team also excels
        in on-site servicing and maintenance of transformers, ensuring
        they meet the highest standards of quality and reliability.
        Committed to delivering comprehensive support, Skyline Enterprises
        has earned a reputation for excellence and trustworthiness, making
        it a preferred choice for clients seeking top-notch services.
      </p>
    </div>
    <div className=" mt-4">
     

      <Link to="/About">
                  <button className="bg-orange-500 text-white px-6 py-3 rounded  font-poppins flex justify-start hover:text-secondary transition-colors duration-300">
                  READ MORE
                  </button>
                </Link>
    </div>
  </div>
</div>

      {/* design on images */}

      {/* About Us Section */}
    </div>
  );
};
export default Home;
