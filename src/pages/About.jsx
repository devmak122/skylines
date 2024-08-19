import React from "react";
import About_phone_bg from "../assets/images/About_phone_bg.svg";
import item1 from "../assets/images/item1.svg";
import item2 from "../assets/images/item2.svg";
import item3 from "../assets/images/item3.svg";
import item4 from "../assets/images/item4.svg";
import trans1 from "../assets/images/trans1.jpeg";
import trans2 from "../assets/images/Trans2.jpeg";
import trans3 from "../assets/images/Trans3.jpeg";
import group from "../assets/images/group.svg";
import client2 from "../assets/images/client2.png";
import client1 from "../assets/images/client1.png";
import { FaClock, FaBalanceScale, FaLightbulb, FaHandshake, FaBullseye } from 'react-icons/fa';


const About = () => {
  return (
    <div className="z-0 overflow-x-hidden">
      {/* Mobile View */}
      <div
        className="w-full bg-black bg-opacity-50 justify-center bg-cover mobile:bg-center mobile:bg-cover  bg-center bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${About_phone_bg})`, height: "50vh" }}
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
              Skyline Enterprises, a prominent name in India&apos;s transformer
              industry, was established in 2010 and is headquartered in
              Koparkhairane, Navi Mumbai. With over a decade of expertise, the
              company offers a wide range of specialized services, including
              labour supply for transformer-related activities like winding,
              core assembly, and tanking. Skyline&apos;s experienced team also
              excels in on-site servicing and maintenance of transformers,
              ensuring they meet the highest standards of quality and
              reliability. Committed to delivering comprehensive support,
              Skyline Enterprises has earned a reputation for excellence and
              trustworthiness, making it a preferred choice for clients seeking
              top-notch transformer solutions.
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
            <p className="text-orange-500 font-bold mobile:text-[30px] tablet:text-[36px] laptop:text-[44px]">
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
   
  <div className="text-center bg-white shadow-md rounded-lg border-[3px] border-customGreen mx-2 leading-10">
        <img
          src={item1}
          alt="Winding"
          className="mx-auto h-32 lg:h-52 w-32 lg:w-40 object-contain"
        />
        <p className="text-[#39B54A] font-medium text-3xl my-4">Winding</p>
      </div>

   
    <div className="text-center bg-white shadow-md  rounded-lg border-[3px] border-customGreen mx-2  leading-10 ">
    <img
          src={item2}
          alt="Core Assembly"
          className="mx-auto h-40 lg:h-52 w-40 lg:w-52 object-contain"
        />
        <p className="text-[#39B54A] font-medium text-3xl  my-4">Core Assembly</p>
      </div>

   
    <div className="text-center bg-white shadow-md  rounded-lg border-[3px] border-customGreen mx-2  leading-10 ">
    <img
          src={item3}
          alt="CCA"
          className="mx-auto h-40 lg:h-52 w-40 lg:w-52 object-contain"
        />
        <p className="text-[#39B54A] font-medium text-3xl my-4 ">CCA</p>
      </div>

   
    <div className="text-center bg-white shadow-md  rounded-lg border-[3px] border-customGreen mx-2 leading-10 ">
    <img
          src={item4}
          alt="Tanking and Dispatch"
          className="mx-auto h-40 lg:h-52 w-40 lg:w-52 object-contain"
        />
        <p className="text-[#39B54A] font-medium text-3xl my-4 ">
          Tanking and Dispatch
        </p>
      </div>

  </div>
</div>

        </div>
      </div>


      {/* our goals */}

      


  <div className="container mx-auto py-12  mt-px-4 md:px-0">
    <div className="text-center mb-10">
      <h2 className="text-orange-500  text-3xl md:text-4xl font-bold">Our Goals</h2>
      <div className="mt-2 h-1.5 w-24 md:w-32 mx-auto rounded-full bg-[#86c141]"></div>
    </div>

    <div className="flex flex-col md:flex-row md:items-start justify-between space-y-8 md:space-y-0 md:space-x-8">
      {/* Objective 1 */}
      <div className="md:w-1/5 bg-white shadow-lg rounded-lg p-6 text-center transform  transition-transform">
        <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
          <FaClock className="text-white text-3xl" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Swift Fulfillment</h3>
        <p className="text-gray-700">To fulfill obligations promptly and ensure timely delivery, maintaining the highest standards of reliability.</p>
      </div>

      {/* Objective 2 */}
      <div className="md:w-1/5 bg-white shadow-lg rounded-lg p-6 text-center transform  transition-transform">
        <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
          <FaBalanceScale className="text-white text-3xl" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Fairness and Integrity</h3>
        <p className="text-gray-700">To act with fairness and integrity in all dealings, ensuring ethical practices and building trust with others.</p>
      </div>

      {/* Objective 3 */}
      <div className="md:w-1/5 bg-white shadow-lg rounded-lg p-6 text-center transform  transition-transform">
        <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
          <FaLightbulb className="text-white text-3xl" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Innovation</h3>
        <p className="text-gray-700">To innovate continually and surpass expectations by embracing new ideas and staying ahead of trends..</p>
      </div>

      {/* Objective 4 */}
      <div className="md:w-1/5 bg-white shadow-lg rounded-lg p-6 text-center transform  transition-transform">
        <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
          <FaHandshake className="text-white text-3xl" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
        <p className="text-gray-700">To work together and collaborate effectively with all stakeholders, ensuring shared goals and successful outcomes.</p>
      </div>

      {/* Objective 5 */}
      <div className="md:w-1/5 bg-white shadow-lg rounded-lg p-6 text-center transform  transition-transform">
        <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
          <FaBullseye className="text-white text-3xl" />
        </div>
        <h3 className="text-xl font-semibold mb-2"> Excellence</h3>
        <p className="text-gray-700">To commit to excellence in every aspect of our work, outstanding results and exceeding expectations.</p>
      </div>
    </div>
  </div>





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
              src={client1}
              alt="client1"
              className="w-full h-full object-cover rounded-lg   shadow-lg"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center laptop:mt-10 font-roboto laptop:items-start  px-4 tablet:px-8  laptop:px-10">
          <p className="text-orange-500 font-bold text-3xl tablet:text-4xl my-4 laptop:text-5xl">
            What We Offer
          </p>
            <p className="bg-[#86c141] w-28 h-1.5 tablet:w-36 laptop:w-20 rounded-full"></p>
          <div className="flex justify-center items-center mt-4">
          </div>
          <div className="mt-4 flex flex-col items-center font-poppins laptop:items-start">
            <p className="text-[#000000] text-3xl font-medium  mb-3 text-center">
              The Core Company Values
            </p>
            <p className="text-gray-700 text-center laptop:text-left text-base laptop:text-[16px] tablet:text-lg max-w-full tablet:max-w-screen-md laptop:max-w-screen-lg leading-relaxed">
              Our core company values—integrity, excellence,
              customer-centricity, innovation, collaboration, sustainability,
              and continuous learning—drive our actions and decisions. We are
              committed to delivering exceptional service and innovative
              solutions, ensuring customer satisfaction. Upholding the highest
              ethical standards, we promote a sustainable future. Our dedication
              to continuous learning and growth keeps us ahead in the industry,
              enabling us to provide the best services. These values guide our
              company towards excellence and a customer-focused approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
