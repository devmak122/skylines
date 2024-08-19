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
      <section className="text-center py-16 bg-purple-800">
        <h2 className="text-4xl font-bold mb-8">Our Process For Delivering Results</h2>
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <div className="bg-purple-600 text-2xl font-bold rounded-full h-16 w-16 flex items-center justify-center">01</div>
            <p className="mt-4">Make An Appointment</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-600 text-2xl font-bold rounded-full h-16 w-16 flex items-center justify-center">02</div>
            <p className="mt-4">Meet Our Team</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-600 text-2xl font-bold rounded-full h-16 w-16 flex items-center justify-center">03</div>
            <p className="mt-4">Get Consultation</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-600 text-2xl font-bold rounded-full h-16 w-16 flex items-center justify-center">04</div>
            <p className="mt-4">Start Project</p>
          </div>
        </div>
        <button className="mt-8 px-6 py-3 bg-pink-600 text-white font-semibold rounded-md">Contact Now</button>
      </section>

      {/* Footer */}
    
    </div>
  );
};

export default ServicePage;
