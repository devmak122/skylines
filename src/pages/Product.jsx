import React from 'react';
import { motion } from 'framer-motion';
import pro_bg from "../assets/images/pro_bg.png";
import pro4 from "../assets/images/pro4.jpg";
import product4 from "../assets/images/product2.jpg";
import product1 from "../assets/images/product1.jpg";
import pro3 from "../assets/images/pro3.jpg";
import pro5 from "../assets/images/pro5.jpg";
import pro6 from "../assets/images/pro6.jpg";
import Typewriter from 'react-typewriter-effect';


const products = [
  {
    title: "20 MVA Core Coil",
    imgSrc: pro4,
    description: "20 MVA Core Coil Assembly Work"
  },
  {
    title: "200 MVA Core Coil",
    imgSrc: product4,
    description: "200 MVA Core Coil Assembly Work"
  },
  {
    title: "31.5 MVA Core Coil",
    imgSrc: pro3,
    description: "31.5 MVA Core Coil Assembly Work"
  },
  {
    title: "25 MVA Core Coil",
    imgSrc: product1,
    description: "25 MVA Core Coil Assembly Work"
  },
  {
    title: "25MVA Core Transformer",
    imgSrc: pro5,
    description: "Repairing of 25 MVA Transformer"
  },
  {
    title: "11 MVA Furnace",
    imgSrc: pro6,
    description: "11 MVA Furnace Transformer"
  }
];

const Product = () => {
  return (
    <div>
      <div
        className="w-full bg-black bg-opacity-50 justify-center bg-cover bg-center bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${pro_bg})`, height: '50vh' }}
      >
        <div
          className="text-white text-center flex items-center justify-center font-bold text-6xl">
          <Typewriter
            text=" Products"
            typeSpeed={100}
            startDelay={500}
            cursorColor="white"
          />
        </div>
      </div>
      <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 mx-4 my-4 p-6">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center justify-center p-4 bg-white rounded-lg leading-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="absolute laptop:top-[-10px] laptop:left-[-20px] mobile:top-[10px] mobile:left-[10px] w-16 h-16 border-t-[8px] border-l-[8px] border-orange-500 mobile:mt-[70px] mobile:ml-[-10px] laptop:mt-[90px] laptop:ml-[20px]"></div>
            <motion.p
              className="text-[35px] font-bold text-primary mobile:text-center mt-0 mb-10 z-10"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {product.title}
            </motion.p>
            <motion.img
              src={product.imgSrc}
              alt={product.title}
              className="w-full h-[300px] object-cover z-10 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute laptop:bottom-[-10px] laptop:right-[-20px] mobile:bottom-[10px] mobile:right-[10px] w-16 h-16 border-b-[8px] border-r-[8px] border-orange-500 mobile:mb-[170px] mobile:mr-[-10px] laptop:mb-[150px] laptop:mr-[20px]"></div>
            <motion.p
              className="text-[22px] font-semibold text-primary mobile:text-center mt-7 mb-4 z-10"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              {product.description}
            </motion.p>
            <motion.button
              className="bg-orange-500 text-white px-4 py-2 rounded-lg border-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.1,
                rotate: 1,
                backgroundColor: '#FF9F59', // Coral color for hover effect
                transition: { duration: 0.3 }
              }}
            >
              View Products
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Product;
