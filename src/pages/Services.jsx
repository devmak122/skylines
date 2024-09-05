import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import services from "../assets/images/services.svg";
import banking from "../assets/images/banking.jpg";
import Ellipse160 from "../assets/images/Ellipse-160.png";
import commit from "../assets/images/1.svg";
import Volvo from "../assets/images/VOLVO FINANC.png";
import Sunadaram from "../assets/images/SUNDARAM FINANCE.png";
import TataCapital from "../assets/images/TATA CAPITAL LTD.png";
import Tatamotors from "../assets/images/tata-motors-finance.png";
import Poonawala from "../assets/images/PoonawalaLogo (2).png";
import Masfin from "../assets/images/MAS_Financial_Services_.png";
import Orix from "../assets/images/ORIX.png";
import Mahindra from "../assets/images/MAHINDRA.png";
import Kotak from "../assets/images/KOTAK MAHINDRA.png";
import Kotakfin from "../assets/images/KOGTA_FINANCE-removebg-preview.png";
import Nissan from "../assets/images/Logo_Nissan_Motor_Company.png";
import Idfc from "../assets/images/IDFC BANK.png";
import Hdb from "../assets/images/HDB FINANCE.png";
import Hinduja from "../assets/images/HINDUJA.png";
import IKF from "../assets/images/IKF FINANCE.png";
import fortune from "../assets/images/FORTUNE FINANCE.png";
import Equitas from "../assets/images/Equitas-Small-Finance-Bank-1 (2).png";
import Daimler from "../assets/images/DAIMLER.png";
import Car from "../assets/images/CAR TRADE.png";
import Bajaj from "../assets/images/BAJAJ FINANCE.png";
import Boruka from "../assets/images/BORUKA.png";
import Cholaman from "../assets/images/cholamandalam-logo (2).png";

const ServicePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1026, // Tablet and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800, // Mobile and below
        settings: {
          slidesToShow: 1, // Single card per slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };


  const IncrementingCounter = ({ from = 1, to = 85, duration = 2000 }) => {
    const [count, setCount] = useState(from);
    
    useEffect(() => {
      const incrementTime = duration / (to - from); // Time per increment
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < to) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return to;
          }
        });
      }, incrementTime);
      
      return () => clearInterval(interval);
    }, [from, to, duration]);
    
    return (
      <div className="rounded-[100%] w-32 h-32 flex justify-center items-center bg-gradient-to-r from-primary to-green-500 p-10 text-center z-10 relative">
        <p className="text-4xl font-bold">{String(count).padStart(2, "0")}%</p>
      </div>
    );
  };
  
  const images = [
    { imgSrc: Poonawala },
    { imgSrc: Tatamotors },
    { imgSrc: TataCapital },
    { imgSrc: Sunadaram },
    { imgSrc: Volvo },
    { imgSrc: Cholaman },
    { imgSrc: Boruka },
    { imgSrc: Bajaj },
    { imgSrc: Car },
    { imgSrc: Daimler },
    { imgSrc: Equitas },
    { imgSrc: fortune },
    { imgSrc: IKF },
    { imgSrc: Hinduja },
    { imgSrc: Hdb },
    { imgSrc: Idfc },
    { imgSrc: Nissan },
    { imgSrc: Kotakfin },
    { imgSrc: Kotak },
    { imgSrc: Mahindra },
    { imgSrc: Masfin },
    { imgSrc: Orix },
  ];
  const servicesData = [
    {
      imgSrc: commit,
      title: "Vehicle Loan Recovery",
      description:
        "We specialize in vehicle loan recovery for banks and NBFCs, ensuring efficient asset recovery.",
    },
    {
      imgSrc: commit,
      title: "Asset Tracing",
      description:
        "Our team excels at tracing defaulted assets, helping banks and NBFCs locate and recover assets effectively.",
    },
    {
      imgSrc: commit,
      title: "Legal Assistance",
      description:
        "We offer legal support for loan recovery, ensuring compliance with all relevant regulations and laws.",
    },
    // Add more service data here...
  ];
  
  return (
    <div className="z-0 overflow-x-hidden">
      {/* -------------------------------------------Header Section----------------------------------------------- */}
      <div
        className="w-full bg-black bg-opacity-50 justify-center bg-cover bg-center bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${services})`, height: "50vh" }}
      >
        <div className="text-white text-center flex items-center justify-center font-roboto font-bold text-6xl">
          Services
        </div>
      </div>

      {/*------------------------------------------- Sliding Cards Section---------------------------------------- */}
      <div className="flex flex-col items-center text-center mt-12">
        <p className="text-orange-500 font-bold font-roboto mobile:text-[30px] tablet:text-[36px] laptop:text-[46px]">
          How We Work
        </p>
        <div className="bg-[#86c141] mobile:w-[100px] tablet:w-[140px] laptop:w-[105px] h-2 rounded-2xl mb-6"></div>
      </div>

      <div className="py-16 px-4 mobile:px-8 tablet:px-12 laptop:px-28">
        <Slider {...settings}>
          {servicesData.map((service, index) => (
            <div key={index} className="p-4">
              <div className="bg-white text-center shadow-xl rounded-md p-8 border hover:shadow-2xl duration-300 mobile:p-6 tablet:p-8 laptop:p-8">
                <img
                  src={service.imgSrc}
                  alt={service.title}
                  className="w-[80px] h-[80px] mobile:w-[80px] mobile:h-[80px] tablet:w-[100px] tablet:h-[100px] object-cover rounded-lg mx-auto mb-4"
                />
                <h3 className="text-lg mobile:text-lg tablet:text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm mobile:text-sm tablet:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>



      {/*---------------------------------------- Image and Content Section ----------------------------------------*/}
      
      <div>
        <div className="flex flex-col items-center text-center mt-12">
          <p className="text-orange-500 font-bold font-roboto mobile:text-[30px] tablet:text-[36px] laptop:text-[46px]">
            Collections Agency
          </p>
          <div className="bg-[#86c141] mobile:w-[100px] tablet:w-[140px] laptop:w-[105px] h-2 rounded-2xl mb-6"></div>
        </div>

        <div className="bg-white py-16 relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Green Circle Background */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-[200px] h-[200px] mobile:w-[300px] mobile:h-[300px] tablet:w-[400px] tablet:h-[400px] laptop:w-[600px] laptop:h-[600px] z-0 rounded-full bg-green-500 opacity-10"></div>
            </div>

            {/* Grid Container for Image and Content Blocks */}
            <div className="relative grid grid-cols-1  laptop:grid-cols-2 gap-8 z-10">
              {/* Left Side: Image with Ellipse Shape */}
              <div className="relative w-full h-auto tablet:hidden  mobile:hidden laptop:flex laptop:items-center laptop:justify-center">
                {/* Banking Image with Mask */}
                <img
                  src={banking}
                  alt="banking"
                  className="w-[540px]  h-[610px]  mobile:max-w-xs tablet:max-w-md object-cover"
                  style={{
                    maskImage: `url(${Ellipse160})`,
                    WebkitMaskImage: `url(${Ellipse160})`,
                  }}
                />
              </div>

              {/* Right Side: Content Blocks */}
              <div className="flex flex-col justify-center space-y-8">
                <div className="bg-white flex items-center gap-4 p-4 md:p-6 laptop:p-8 rounded-lg border border-t-2 shadow-lg">
                  <IncrementingCounter from={1} to={85} duration={2000} />
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-orange-500">
                      Expert Asset Recovery
                    </h2>
                    <p className="mt-2 text-gray-700">
                      With an 85% success rate, our asset recovery services ensure swift and secure resolution of defaulted loans.
                    </p>
                  </div>
                </div>

                <div className="bg-white flex items-center gap-4 p-4 md:p-6 laptop:p-8 rounded-lg border border-t-2 shadow-lg">
                  <IncrementingCounter from={1} to={95} duration={2000} />
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-orange-500">
                      Guaranteed Success
                    </h2>
                    <p className="mt-2 text-gray-700">
                      We provide reliable solutions with a 95% guarantee for successful recoveries, offering peace of mind to our clients.
                    </p>
                  </div>
                </div>

                <div className="bg-white flex items-center gap-4 p-4 md:p-6 laptop:p-8 rounded-lg border border-t-2 shadow-lg">
                  <IncrementingCounter from={1} to={65} duration={2000} />
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-orange-500">
                      Legal Expertise
                    </h2>
                    <p className="mt-2 text-gray-700">
                      With extensive legal knowledge, we ensure that all recovery processes are compliant with legal standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* Process Section */}

      
      <div className="relative bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center mb-12">
            <p className="text-orange-500 font-bold font-roboto mobile:text-[30px] tablet:text-[36px] laptop:text-[46px]">
              How We Work
            </p>
            <div className="bg-[#86c141] mobile:w-[100px] tablet:w-[140px] laptop:w-[105px] h-2 rounded-2xl mb-6"></div>
            <h1 className="mobile:text-2xl tablet:text-3xl laptop:text-4xl font-extrabold">
              Our Process for Successful Recoveries
            </h1>
            <p className="mt-4 mobile:text-base tablet:text-lg laptop:text-xl text-gray-900">
              Our structured approach ensures transparency, efficiency, and results, tailored to meet the unique needs of our clients.
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative flex mobile:flex-col tablet:flex-row laptop:flex-row justify-center items-center mt-20">
            <div className="flex mobile:flex-col tablet:flex-row laptop:flex-row items-center justify-center text-white mobile:gap-8 tablet:gap-16 laptop:gap-24">
              {/* Step 1 */}
              <div className="relative mobile:mb-8 tablet:mb-0 tablet:-mt-28 laptop:-mt-28 z-50 flex flex-col items-center">
                <div className="mobile:w-32 mobile:h-32 tablet:w-36 tablet:h-36 laptop:w-44 laptop:h-44 rounded-full bg-gradient-to-r from-primary to-green-500 shadow-lg mobile:p-6 tablet:p-8 laptop:p-10 text-center">
                  <span className="mobile:text-2xl tablet:text-3xl laptop:text-4xl font-bold">01.</span>
                  <p className="mt-2 mobile:text-xs tablet:text-sm laptop:text-base font-semibold font-roboto">
                    Initial Consultation
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mobile:mt-8 tablet:-mt-8 laptop:-mt-8 flex flex-col items-center">
                <div className="mobile:w-32 mobile:h-32 tablet:w-36 tablet:h-36 laptop:w-44 laptop:h-44 rounded-full bg-gradient-to-r from-primary to-green-500 shadow-lg mobile:p-6 tablet:p-8 laptop:p-10 text-center z-10">
                  <span className="mobile:text-2xl tablet:text-3xl laptop:text-4xl font-bold">02.</span>
                  <p className="mt-2 mobile:text-xs tablet:text-sm laptop:text-base font-semibold font-roboto">
                    Asset Tracing and Recovery Plan
                  </p>
                  <svg
                    className="absolute mobile:hidden tablet:block top-1/2 -mt-20 -ml-36 transform -translate-y-1/5 z-1"
                    width="120"
                    height="60"
                    viewBox="0 0 120 60"
                  >
                    <path
                      d="M 0,30 Q 60,0 120,30"
                      fill="transparent"
                      stroke="black"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>
                <svg
                  className="absolute mobile:hidden tablet:block top-1/2 mt-1 ml-3 left-[90%] transform -translate-y-3/4 -rotate-12 z-0"
                  width="120"
                  height="60"
                  viewBox="0 0 120 60"
                >
                  <path
                    d="M 0,30 Q 60,60 120,30"
                    fill="transparent"
                    stroke="black"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="relative mobile:mt-8  tablet:-mt-28 laptop:-mt-28 flex flex-col items-center">
                <div className="mobile:w-32 mobile:h-32 tablet:w-36 tablet:h-36 laptop:w-44 laptop:h-44 rounded-full bg-gradient-to-r from-primary to-green-500 shadow-lg mobile:p-6 tablet:p-8 laptop:p-10 text-center z-10">
                  <span className="mobile:text-2xl tablet:text-3xl laptop:text-4xl font-bold">03.</span>
                  <p className="mt-2 mobile:text-xs tablet:text-sm laptop:text-base font-semibold font-roboto">
                    Legal Assistance
                  </p>
                  <svg
                    className="absolute mobile:hidden tablet:block top-1/2 mt-3 -ml-1 left-full transform -translate-y-1/2 rotate-12 z-0"
                    width="120"
                    height="60"
                    viewBox="0 0 120 60"
                  >
                    <path
                      d="M 0,30 Q 60,0 120,30"
                      fill="transparent"
                      stroke="black"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative mobile:mt-8 tablet:mt-0 laptop:mt-0 flex flex-col items-center">
                <div className="mobile:w-32 mobile:h-32 tablet:w-36 tablet:h-36 laptop:w-44 laptop:h-44 rounded-full bg-gradient-to-r from-primary to-green-500 shadow-lg mobile:p-6 tablet:p-8 laptop:p-10 text-center z-10">
                  <span className="mobile:text-2xl tablet:text-3xl laptop:text-4xl font-bold">04.</span>
                  <p className="mt-2 mobile:text-xs tablet:text-sm laptop:text-base font-semibold font-roboto">
                    Final Recovery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cuurently working with  Section */}
      <div className="relative bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <p className="text-orange-500 font-bold font-roboto mobile:text-[30px] tablet:text-[36px] laptop:text-[46px]">
              Currently Working with
            </p>
            <div className="bg-[#86c141] mobile:w-[100px] tablet:w-[140px] laptop:w-[105px] h-2 rounded-2xl mb-6"></div>
          </div>

          {/* The container for scrolling images */}
          <div className="w-11/12 max-w-[1536px] mx-auto mt-20 relative h-24 overflow-hidden">
            <div className="absolute inset-0 flex space-x-4 animate-scrollLeft" style={{ width: '200%' }}>
              {/* Display images continuously */}
              {images.map((image, index) => (
                <div key={index} className="w-52 h-24 flex-shrink-0">
                  <img
                    src={image.imgSrc}
                    alt={`Client ${index + 1}`}
                    className="w-full h-full object-contain bg-cover"
                  />
                </div>
              ))}
              {images.map((image, index) => (
                <div key={index} className="w-52 h-24 flex-shrink-0">
                  <img
                    src={image.imgSrc}
                    alt={`Client ${index + 1}`}
                    className="w-full h-full object-contain bg-cover"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ServicePage;
