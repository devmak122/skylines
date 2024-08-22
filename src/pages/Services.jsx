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
import mahindra from "../assets/images/MAHINDRA.png";
import Kotak from "../assets/images/KOTAK MAHINDRA.png";
import Kotakfin from "../assets/images/KOGTA_FINANCE-removebg-preview.png";
import nissan from "../assets/images/Logo_Nissan_Motor_Company.png";
import idfc from "../assets/images/IDFC BANK.png";
import Hdb from "../assets/images/HDB FINANCE.png";
import Hinduja from "../assets/images/HINDUJA.png";
import IKF from "../assets/images/IKF FINANCE.png";
import fortune from "../assets/images/FORTUNE FINANCE.png";
import Equitas from "../assets/images/Equitas-Small-Finance-Bank-1 (2).png";
import Daimler from "../assets/images/DAIMLER.png";
import car from "../assets/images/CAR TRADE.png";
import Bajaj from "../assets/images/BAJAJ FINANCE.png";
import Boruka from "../assets/images/BORUKA.png";
import cholaman from "../assets/images/cholamandalam-logo (2).png";

const ServicePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const images = [
    {
      imgSrc: Poonawala,
    },
    {
      imgSrc: Tatamotors,
    },
    {
      imgSrc: TataCapital,
    },
    {
      imgSrc: Sunadaram,
    },
    {
      imgSrc: Volvo,
    },
    
    {
      imgSrc: cholaman,
    },
    {
      imgSrc: Boruka,
    },
    {
      imgSrc: Bajaj,
    },
    {
      imgSrc: car,
    },
    {
      imgSrc: Daimler,
    },
    {
      imgSrc: Equitas,
    },
    {
      imgSrc: fortune,
    },
    {
      imgSrc: IKF,
    },
    {
      imgSrc: Hinduja,
    },
    {
      imgSrc: Hdb,
    },
    {
      imgSrc: idfc,
    },
    {
      imgSrc: nissan,
    },
    {
      imgSrc: Kotakfin,
    },
    {
      imgSrc: Kotak,
    },
    {
      imgSrc: mahindra,
    },

    {
      imgSrc: Masfin,
    },
    {
      imgSrc: Orix,
    },
  ];
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
      <div className="rounded-[100%] w-32 h-32 flex justify-center items-center finalbg-gradient-to-r from-primary to-green-500 p-10 text-center z-10 relative">
        <p className="text-4xl font-bold">{String(count).padStart(2, "0")}%</p>
      </div>
    );
  };

  return (
    <div className="z-0 overflow-x-hidden">
      {/* Header Section */}
      <div
        className="w-full bg-black bg-opacity-50 justify-center bg-cover bg-center bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${services})`, height: "50vh" }}
      >
        <div className="text-white text-center flex items-center justify-center font-roboto font-bold text-6xl">
          Services
        </div>
      </div>

      {/* Sliding Cards Section */}
      <div className="flex flex-col items-center text-center mt-12">
        <p className="text-orange-500 font-bold font-roboto mobile:text-[30px] tablet:text-[36px] laptop:text-[46px]">
          How We Work
        </p>
        <div className="bg-[#86c141] mobile:w-[100px] tablet:w-[140px] laptop:w-[105px] h-2 rounded-2xl mb-6"></div>
      </div>
      <div className="py-16 px-28">
        <Slider {...settings}>
          <div className="p-4">
            <div className="bg-white text-center shadow-xl rounded-md p-8 border border-t-1  hover:shadow-2xl  duration-300">
              <img
                src={commit}
                alt="commit"
                className="w-[100px] h-[100px] object-cover text-center rounded-lg mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Vehicle Loan Recovery
              </h3>
              <p>
                We specialize in vehicle loan recovery
                <br /> for banks and NBFCs,
                <br />
                ensuring efficient asset recovery.
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white text-center shadow-xl rounded-md p-8  border border-t-1 hover:shadow-2xl  duration-300">
              <img
                src={commit}
                alt="commit"
                className="w-[100px] h-[100px] object-cover text-center rounded-lg mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Asset Tracing</h3>
              <p>
                Our team excels at tracing defaulted
                <br />
                assets, helping banks and NBFCs locate and
                <br />
                recover assets effectively.
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white text-center shadow-xl rounded-md p-8 border border-t-1  hover:shadow-2xl  duration-300">
              <img
                src={commit}
                alt="commit"
                className="w-[100px] h-[100px] object-cover text-center rounded-lg mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Legal Assistance</h3>
              <p>
                We offer legal support for loan recovery,
                <br /> ensuring compliance with all
                <br />
                relevant regulations and laws.
              </p>
            </div>
          </div>
          {/* Add more cards similarly for other services */}
        </Slider>
      </div>

      {/* Image and Content Section */}
      <div className="flex flex-col items-center text-center mt-12">
        <p className="text-orange-500 font-bold  font-roboto  mobile:text-[30px] tablet:text-[36px] laptop:text-[46px]">
          Collections Agency
        </p>
        <div className="bg-[#86c141] mobile:w-[100px] tablet:w-[140px] laptop:w-[105px] h-2 rounded-2xl mb-6"></div>
      </div>
      <div className="bg-white py-20 relative">
        <div className="bg-transparent relative">
          {/* Green Circle Background */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[600px] h-[600px] z-0 rounded-full bg-green-500 opacity-10"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
            {/* Left Side: Image with Ellipse Shape */}
            <div className="relative w-[91%] h-full">
              {/* Banking Image with Mask */}
              <img
                src={banking}
                alt="banking"
                className="absolute w-full bg-cover"
                style={{
                  maskImage: `url(${Ellipse160})`,
                  WebkitMaskImage: `url(${Ellipse160})`,
                }}
              />
            </div>

            {/* Right Side: Content Blocks */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="bg-white flex justify-center items-center gap-8 p-8 rounded-lg border border-t-2  shadow-lg">
                <IncrementingCounter from={1} to={85} duration={2000} />
                <div>
                  <h2 className="text-2xl font-bold text-orange-500">
                    Expert Asset Recovery
                  </h2>
                  <p className="mt-4 text-gray-700">
                    With an 85% success rate, our asset recovery services ensure
                    swift and secure resolution of defaulted loans.
                  </p>
                </div>
              </div>

              <div className="bg-white flex justify-center items-center gap-8 p-8 border border-t-2  rounded-lg shadow-lg">
                <IncrementingCounter from={1} to={95} duration={2000} />
                <div>
                  <h2 className="text-2xl font-bold text-orange-500">
                    Guaranteed Success
                  </h2>
                  <p className="mt-4 text-gray-700 ">
                    We provide reliable solutions with a 95% guarantee for
                    successful recoveries, offering peace of mind to our
                    clients.
                  </p>
                </div>
              </div>

              <div className="bg-white flex justify-center items-center gap-8 p-8 border border-t-2 rounded-lg shadow-lg">
                <IncrementingCounter from={1} to={65} duration={2000} />
                <div>
                  <h2 className="text-2xl font-bold text-orange-500">
                    Legal Expertise
                  </h2>
                  <p className="mt-4 text-gray-700">
                    With extensive legal knowledge, we ensure that all recovery
                    processes are compliant with legal standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="relative bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <p className="text-orange-500 font-bold font-roboto mobile:text-[30px] tablet:text-[36px] laptop:text-[46px]">
              How We Work
            </p>
            <div className="bg-[#86c141] mobile:w-[100px] tablet:w-[140px] laptop:w-[105px] h-2 rounded-2xl mb-6"></div>
            <h1 className="text-4xl font-extrabold">
              Our Process for Successful Recoveries
            </h1>
            <p className="mt-4 text-lg text-gray-900">
              Our structured approach ensures transparency, efficiency, and
              results, tailored to meet the unique needs of our clients.
            </p>
          </div>
          <div className="relative flex justify-center items-center mt-20">
            <div className="flex flex-row items-center  gap-24">
              {/* Step 1 */}
              <div className="relative -mt-28 z-50">
                {" "}
                {/* Move up */}
                <div className="w-44 h-44 rounded-full bg-gradient-to-r from-primary to-green-500  shadow-lg p-10 text-center z-10 relative">
                  <span className="text-4xl font-bold">01.</span>
                  <p className="mt-2 text-sm font-semibold font-roboto">
                    Initial Consultation
                  </p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="relative mt-8">
                {" "}
                {/* Move down */}
                <div className="w-44 h-44 rounded-full bg-gradient-to-r from-primary to-green-500  shadow-lg p-10 text-center z-50 relative">
                  <span className="text-4xl font-bold">02.</span>
                  <p className="mt-2 text-sm font-semibold font-roboto">
                    Asset Tracing and Recovery Plan
                  </p>
                  <svg
                    className="absolute top-1/2 -mt-20 -ml-36  transform -translate-y-1/5  z-1"
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
                  className="absolute top-1/2 mt-1 ml-3  left-[90%] transform  -translate-y-3/4 -rotate-12  z-0"
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
              <div className="relative -mt-28">
                {" "}
                {/* Move up */}
                <div className="w-44 h-44 rounded-full bg-gradient-to-r from-primary to-green-500  shadow-lg p-10 text-center z-10 relative">
                  <span className="text-4xl font-bold">03.</span>
                  <p className="mt-2 text-sm font-semibold font-roboto">
                    Legal Assistance
                  </p>
                  <svg
                    className="absolute top-1/2 mt-3 -ml-1 left-full transform -translate-y-1/2 rotate-12 z-0"
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
              <div className="relative mt-8">
                {" "}
                {/* Move down */}
                <div className="w-44 h-44 rounded-full bg-gradient-to-r from-primary to-green-500  shadow-lg p-10 text-center z-10 relative">
                  <span className="text-4xl font-bold">04.</span>
                  <p className="mt-2 text-sm font-semibold font-roboto">
                    Final Recovery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Process Section */}
      <div className="relative bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <p className="text-orange-500 font-bold font-roboto mobile:text-[30px] tablet:text-[36px] laptop:text-[46px]">
              Curtrently Working with
            </p>
            <div className="bg-[#86c141] mobile:w-[100px] tablet:w-[140px] laptop:w-[105px] h-2 rounded-2xl mb-6"></div>
          </div>
         
          <div className="w-11/12 max-w-[1536px] mx-auto mt-20 relative h-24 overflow-hidden">
    <div className="absolute inset-0 mask-gradient">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute w-52 h-24 bg-red-500 rounded-lg"
          style={{
            left: `calc(100% + ${index * 200}px)`,
            animation: `scrollLeft 30s linear infinite`,
            animationDelay: `calc(30s / ${images.length} * (${images.length} - ${index}))`,
          }}
        >
          <img
            src={image.imgSrc}
            alt={`item-${index}`}
            className="w-full h-full object-cover rounded-lg"
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
