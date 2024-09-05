import React from 'react';
import pro_bg from "../assets/images/pro_bg.png";
import pro4 from "../assets/images/pro4.jpg";
import product4 from "../assets/images/product2.jpg";
import product1 from "../assets/images/product1.jpg";
import pro3 from "../assets/images/pro3.jpg";
import pro5 from "../assets/images/pro5.jpg";
import pro6 from "../assets/images/pro6.jpg";




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
    title: "11 MVA  Furnace Transformer",
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
          className="text-white text-center flex items-center justify-center  font-roboto font-bold text-6xl">
         Products
        </div>
      </div>
      <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 mx-4 my-4 p-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative flex flex-col  items-center justify-center p-4 bg-white  leading-10">
            <div className="absolute laptop:top-[25px] laptop:left-[55px] mobile:top-[90px] mobile:left-[18px] w-16 h-16 border-t-[5px] border-l-[5px] border-orange-500 mobile:mt-[70px] mobile:ml-[-10px] laptop:mt-[90px] laptop:ml-[20px]"></div>
            <p
              className="text-[35px] font-semibold font-roboto text-primary mobile:text-center mt-10 mb-10  z-10"
                         >
              {product.title}
            </p>
            <img
              src={product.imgSrc}
              alt={product.title}
              className="w-3/5 mobile:w-11/12 h-[200px] object-cover bg-cover   z-10 "
             
            />
            <div className="absolute laptop:bottom-[20px] laptop:right-[56px] mobile:bottom-[50px] mobile:right-[18px] w-16 h-16 border-b-[5px] border-r-[5px] border-orange-500 mobile:mb-[170px] mobile:mr-[-10px] laptop:mb-[150px] laptop:mr-[20px]"></div>
            <p
              className="text-[22px] font-semibold font-poppins text-primary mobile:text-center mt-12 mb-9 z-10">
              {product.description}
            </p>
            <button
              className="bg-orange-500 font-poppins
               text-white px-4 py-2 rounded-lg border-none">
              View Products
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
