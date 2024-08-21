import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import services from "../assets/images/services.svg";
import banking from "../assets/images/banking.jpg";
import Ellipse160 from "../assets/images/Ellipse-160.png";
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

  return (
    <div className="z-0 overflow-x-hidden">
      {/* Header Section */}
      <div
        className="w-full bg-black bg-opacity-50 justify-center bg-cover bg-center bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${services})`, height: "50vh" }}
      >
        <div className="text-white text-center flex items-center justify-center  font-roboto font-bold text-6xl">
          Services
        </div>
      </div>
      {/* Sliding Cards Section */}
      <div className="py-16">
        <Slider {...settings}>
          <div className="p-4">
            <div className="bg-purple-600 rounded-md p-8">
              <h3 className="text-xl font-semibold">WEBSITE MAINTENANCE</h3>
              <p>
                Ensure smooth performance and security of your website with our
                reliable maintenance services.
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-purple-600 rounded-md p-8">
              <h3 className="text-xl font-semibold">DIGITAL MARKETING</h3>
              <p>
                Boost your brand's online presence and drive growth with our
                customized digital marketing strategies.
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-purple-600 rounded-md p-8">
              <h3 className="text-xl font-semibold">GRAPHIC DESIGN</h3>
              <p>
                Experience visually captivating interfaces and seamless user
                journeys crafted by our expert team.
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-purple-600 rounded-md p-8">
              <h3 className="text-xl font-semibold">GRAPHIC DESIGN</h3>
              <p>
                Experience visually captivating interfaces and seamless user
                journeys crafted by our expert team.
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-purple-600 rounded-md p-8">
              <h3 className="text-xl font-semibold">GRAPHIC DESIGN</h3>
              <p>
                Experience visually captivating interfaces and seamless user
                journeys crafted by our expert team.
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-purple-600 rounded-md p-8">
              <h3 className="text-xl font-semibold">GRAPHIC DESIGN</h3>
              <p>
                Experience visually captivating interfaces and seamless user
                journeys crafted by our expert team.
              </p>
            </div>
          </div>
          {/* Add three more cards similarly */}
        </Slider>
      </div>

      {/* Image and Content Section */}
      <div className="bg-white  py-20">
        <div className="bg-transparent py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side: Image with Ellipse Shape */}

            {/* Ellipse Shape */}
            <div className="relative w-[91%] h-full">
              {/* Banking Image with Mask */}
              <img
                src={banking} // Path to banking image
                alt="banking"
                className="absolute  w-full  bg-cover "
                style={{
                  maskImage: `url(${Ellipse160})`,
                  WebkitMaskImage: `url(${Ellipse160})`,
                }}
              />
            </div>

            {/* Right Side: Content Blocks */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-purple-900">
                  Creative Approach
                </h2>
                <p className="mt-4 text-gray-700">
                  We embrace innovation and creativity to deliver unique
                  solutions, ensuring your project stands out and achieves
                  remarkable results.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-purple-900">
                  Guaranteed Success
                </h2>
                <p className="mt-4 text-gray-700">
                  Our proven track record and commitment to excellence ensure
                  success, providing peace of mind and confidence in every
                  project.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-purple-900">
                  Brand Strategy
                </h2>
                <p className="mt-4 text-gray-700">
                  Crafting cohesive brand identities and impactful strategies to
                  elevate your brand's presence and resonate with your target
                  audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="relative bg-gradient-to-b from-primary to-gray-50 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wide">
              How We Work
            </h2>
            <h1 className="text-4xl font-extrabold">
              Our Process For Delivering Results
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Collaboratively, we listen, strategize, and execute tailored
              solutions, ensuring transparency, communication, and satisfaction
              throughout the process.
            </p>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="flex flex-row items-center space-y-6 gap-16">
              {/* Step 1 */}
              <div className="relative -mt-28">
                {" "}
                {/* Move up */}
                <div className="rounded-full bg-gradient-to-r from-orange-500 to-blue-500  p-10 text-center z-10 relative">
                  <span className="text-4xl font-bold">01.</span>
                  <p className="mt-2">
                    Make An
                    <br /> Appointment
                  </p>
                </div>
                <svg
                  className="absolute top-1/2 mt-10 -ml-10 left-full transform -translate-y-1/2 z-0"
                  width="120"
                  height="60"
                  viewBox="0 0 120 60"
                >
                  <path
                    d="M 0,30 Q 60,60 120,30"
                    fill="transparent"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
              {/* Step 2 */}
              <div className="relative mt-8">
                {" "}
                {/* Move down */}
                <div className="rounded-full bg-gradient-to-r from-primary to-black p-10 text-center z-10 relative">
                  <span className="text-4xl font-bold">02.</span>
                  <p className="mt-2">
                    Meet an Our
                    <br />
                    Team
                  </p>
                </div>
                <svg
                  className="absolute top-1/2 mt-10 -ml-10 left-full transform -translate-y-1/2 z-0"
                  width="120"
                  height="60"
                  viewBox="0 0 120 60"
                >
                  <path
                    d="M 0,30 Q 60,60 120,30"
                    fill="transparent"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
              {/* Step 3 */}
              <div className="relative -mt-28">
                {" "}
                {/* Move up */}
                <div className="rounded-full bg-gradient-to-r from-primary to-black p-10 text-center z-10 relative">
                  <span className="text-4xl font-bold">03.</span>
                  <p className="mt-2">
                    Get <br />
                    Consultation
                  </p>
                </div>
                <svg
                  className="absolute top-1/2 left-full transform -translate-y-1/2 z-0"
                  width="120"
                  height="60"
                  viewBox="0 0 120 60"
                >
                  <path
                    d="M 0,30 Q 60,60 120,30"
                    fill="transparent"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
              {/* Step 4 */}
              <div className="relative mt-8">
                {" "}
                {/* Move down */}
                <div className="rounded-full bg-gradient-to-r from-primary to-black p-10 text-center z-10 relative">
                  <span className="text-4xl font-bold">04.</span>
                  <p className=" mt-2">
                    Start <br /> the Project
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full">
              Contact Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default ServicePage;
