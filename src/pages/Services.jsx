import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import services from "../assets/images/services.svg"

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
        style={{ backgroundImage: `url(${services})`, height: '50vh' }}
      >
        <div
          className="text-white text-center flex items-center justify-center  font-roboto font-bold text-6xl">
          Services
        </div>
      </div>
      {/* Sliding Cards Section */}
      <section className="py-16">
        <Slider {...settings}>
          <div className="p-4">
            <div className="bg-purple-600 rounded-md p-8">
              <h3 className="text-xl font-semibold">WEBSITE MAINTENANCE</h3>
              <p>Ensure smooth performance and security of your website with our reliable maintenance services.</p>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-purple-600 rounded-md p-8">
              <h3 className="text-xl font-semibold">DIGITAL MARKETING</h3>
              <p>Boost your brand's online presence and drive growth with our customized digital marketing strategies.</p>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-purple-600 rounded-md p-8">
              <h3 className="text-xl font-semibold">GRAPHIC DESIGN</h3>
              <p>Experience visually captivating interfaces and seamless user journeys crafted by our expert team.</p>
            </div>
          </div>
          {/* Add three more cards similarly */}
        </Slider>
      </section>

      {/* Image and Content Section */}
      <section className="flex items-center justify-between py-16">
        <div className="w-1/2">
          <img src="/path-to-your-image.jpg" alt="Creative Team" className="rounded-md shadow-lg" />
        </div>
        <div className="w-1/2 pl-16">
          <h2 className="text-4xl font-bold mb-6">Grow Your Online Presence.</h2>
          <p className="text-lg mb-4">With 4+ years of expertise, we deliver exceptional solutions tailored to your needs, ensuring satisfaction and success for every project.</p>
          <div>
            <div className="mb-4">
              <span className="font-bold text-lg">90% Creative Approach</span>
              <p>We embrace innovation and creativity to deliver unique solutions, ensuring your project stands out and achieves remarkable results.</p>
            </div>
            <div className="mb-4">
              <span className="font-bold text-lg">100% Guaranteed Success</span>
              <p>Our proven track record and commitment to excellence ensure success, providing peace of mind and confidence in every project.</p>
            </div>
            <div>
              <span className="font-bold text-lg">85% Brand Strategy</span>
              <p>Crafting cohesive brand identities and impactful strategies to elevate your brand’s presence and resonate with your target audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <div className="relative bg-gradient-to-b from-purple-900 to-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wide">How We Work</h2>
          <h1 className="text-4xl font-extrabold">Our Process For Delivering Results</h1>
          <p className="mt-4 text-lg text-gray-300">
            Collaboratively, we listen, strategize, and execute tailored solutions, ensuring transparency, 
            communication, and satisfaction throughout the process.
          </p>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="flex flex-row items-center space-y-6 gap-16">
            {/* Step 1 */}
            <div className="relative -mt-28"> {/* Move up */}
              <div className="rounded-full bg-gradient-to-r from-purple-700 to-pink-500 p-10 text-center z-10 relative">
                <span className="text-4xl font-bold">01.</span>
                <p className="mt-2">Make An<br/> Appointment</p>
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
            <div className="relative mt-8"> {/* Move down */}
              <div className="rounded-full bg-gradient-to-r from-purple-700 to-pink-500 p-10 text-center z-10 relative">
                <span className="text-4xl font-bold">02.</span>
                <p className="mt-2">Meet an Our<br/>Team</p>
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
            <div className="relative -mt-28"> {/* Move up */}
              <div className="rounded-full bg-gradient-to-r from-purple-700 to-pink-500 p-10 text-center z-10 relative">
                <span className="text-4xl font-bold">03.</span>
                <p className="mt-2">Get <br/>Consultation</p>
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
            <div className="relative mt-8"> {/* Move down */}
              <div className="rounded-full bg-gradient-to-r from-purple-700 to-pink-500 p-10 text-center z-10 relative">
                <span className="text-4xl font-bold">04.</span>
                <p className=" mt-2">Start <br/> the Project</p>
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
