import React from 'react'
import pro_bg from "../assets/images/pro_bg.png"
import pro4 from "../assets/images/pro4.jpg"
import product4 from "../assets/images/product2.jpg"
import product1 from "../assets/images/product1.jpg"
import pro3 from "../assets/images/pro3.jpg"
import pro5 from "../assets/images/pro5.jpg"
import pro6 from "../assets/images/pro6.jpg"

const Product = () => {
  return (
    <div>
      <div
        className="w-full  bg-black bg-opacity-50 justify-center bg-cover bg-center bg-no-repeat flex flex-col items-center"
        style={{ backgroundImage: `url(${pro_bg})`, height: '50vh' }}
      >
        <h1 className="text-white text-center flex items-center justify-center font-bold text-6xl">Products</h1>
      </div>
      <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 mx-4 my-4 p-6">
        <div className="relative flex flex-col items-center justify-center p-4 bg-white rounded-lg leading-10">
          <div className="absolute laptop:top-[-10px] laptop:left-[-20px] mobile:top-[10px] mobile:left-[10px] w-16 h-16 border-t-[8px] border-l-[8px] border-orange-500 mobile:mt-[70px] mobile:ml-[-10px] laptop:mt-[90px] laptop:ml-[20px]"></div>
          <p className="text-[35px] font-bold text-primary mobile:text-center mt-0 mb-10 z-10">20 MVA Core Coil</p>
          <img src={pro4} alt="pro4" className="w-full h-[300px] object-cover z-10" />
          <div className="absolute laptop:bottom-[-10px] laptop:right-[-20px] mobile:bottom-[10px] mobile:right-[10px] w-16 h-16 border-b-[8px] border-r-[8px] border-orange-500 mobile:mb-[170px] mobile:mr-[-10px] laptop:mb-[150px] laptop:mr-[20px]"></div>
          <p className="text-[22px] font-semibold text-primary mobile:text-center mt-7 mb-4 z-10">20 MVA Core Coil Assembly Work</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg border-none z-10"><label>View Products</label></button>
        </div>

        <div className="relative flex flex-col items-center justify-center p-4 bg-white rounded-lg leading-10">
          <div className="absolute laptop:top-[-10px] laptop:left-[-20px] mobile:top-[10px] mobile:left-[10px] w-16 h-16 border-t-[8px] border-l-[8px] border-orange-500 mobile:mt-[70px] mobile:ml-[-10px] laptop:mt-[90px] laptop:ml-[20px]"></div>
          <p className="text-[35px] font-bold text-primary mobile:text-center mt-0 mb-10 z-10">200 MVA Core Coil</p>
          <img src={product4} alt="product4" className="w-full h-[300px] object-cover z-10" />
          <div className="absolute laptop:bottom-[-10px] laptop:right-[-20px] mobile:bottom-[10px] mobile:right-[10px] w-16 h-16 border-b-[8px] border-r-[8px] border-orange-500 mobile:mb-[170px] mobile:mr-[-10px] laptop:mb-[150px] laptop:mr-[20px]"></div>
          <p className="text-[22px] font-semibold text-primary mobile:text-center mt-7 mb-4 z-10">200 MVA Core Coil Assembly Work</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg border-none z-10"><label>View Products</label></button>
        </div>

        <div className="relative flex flex-col items-center justify-center p-4 bg-white rounded-lg leading-10">
          <div className="absolute laptop:top-[-10px] laptop:left-[-20px] mobile:top-[10px] mobile:left-[10px] w-16 h-16 border-t-[8px] border-l-[8px] border-orange-500 mobile:mt-[70px] mobile:ml-[-10px] laptop:mt-[90px] laptop:ml-[20px]"></div>
          <p className="text-[35px] font-bold text-primary mobile:text-center mt-0 mb-10 z-10">31.5 MVA Core Coil</p>
          <img src={pro3} alt="pro3" className="w-full h-[300px] object-cover z-10" />
          <div className="absolute laptop:bottom-[-10px] laptop:right-[-20px] mobile:bottom-[10px] mobile:right-[10px] w-16 h-16 border-b-[8px] border-r-[8px] border-orange-500 mobile:mb-[170px] mobile:mr-[-10px] laptop:mb-[150px] laptop:mr-[20px]"></div>
          <p className="text-[22px] font-semibold text-primary mobile:text-center mt-7 mb-4 z-10">31.5 MVA Core Coil Assembly Work</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg border-none z-10"><label>View Products</label></button>
        </div>

        <div className="relative flex flex-col items-center justify-center p-4 bg-white rounded-lg leading-10">
          <div className="absolute laptop:top-[-10px] laptop:left-[-20px] mobile:top-[10px] mobile:left-[10px] w-16 h-16 border-t-[8px] border-l-[8px] border-orange-500 mobile:mt-[70px] mobile:ml-[-10px] laptop:mt-[90px] laptop:ml-[20px]"></div>
          <p className="text-[35px] font-bold text-primary mobile:text-center mt-0 mb-10 z-10">25 MVA Core Coil</p>
          <img src={product1} alt="product1" className="w-full h-[300px] object-cover z-10" />
          <div className="absolute laptop:bottom-[-10px] laptop:right-[-20px] mobile:bottom-[10px] mobile:right-[10px] w-16 h-16 border-b-[8px] border-r-[8px] border-orange-500 mobile:mb-[170px] mobile:mr-[-10px] laptop:mb-[150px] laptop:mr-[20px]"></div>
          <p className="text-[22px] font-semibold text-primary mobile:text-center mt-7 mb-4 z-10">25 MVA Core Coil Assembly Work</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg border-none z-10"><label>View Products</label></button>
        </div>

        <div className="relative flex flex-col items-center justify-center p-4 bg-white rounded-lg leading-10">
          <div className="absolute laptop:top-[-10px] laptop:left-[-20px] mobile:top-[10px] mobile:left-[10px] w-16 h-16 border-t-[8px] border-l-[8px] border-orange-500 mobile:mt-[110px] mobile:ml-[-10px] laptop:mt-[90px] laptop:ml-[20px]"></div>
          <p className="text-[35px] font-bold text-primary mobile:text-center mt-0 mb-10 z-10">25 MVA Core Transformer</p>
          <img src={pro5} alt="pro5" className="w-full h-[300px] object-cover z-10" />
          <div className="absolute laptop:bottom-[-10px] laptop:right-[-20px] mobile:bottom-[10px] mobile:right-[10px] w-16 h-16 border-b-[8px] border-r-[8px] border-orange-500 mobile:mb-[170px] mobile:mr-[-10px] laptop:mb-[150px] laptop:mr-[20px]"></div>
          <p className="text-[22px] font-semibold text-primary mobile:text-center mt-7 mb-4 z-10">Repairing of 25 MVA Transformer</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg border-none z-10"><label>View Products</label></button>
        </div>

        <div className="relative flex flex-col items-center justify-center p-4 bg-white rounded-lg leading-10">
          <div className="absolute laptop:top-[-10px] laptop:left-[-20px] mobile:top-[10px] mobile:left-[10px] w-16 h-16 border-t-[8px] border-l-[8px] border-orange-500 mobile:mt-[70px] mobile:ml-[-10px] laptop:mt-[90px] laptop:ml-[20px]"></div>
          <p className="text-[35px] font-bold text-primary mobile:text-center mt-0 mb-10 z-10">11 MVA Furnace</p>
          <img src={pro6} alt="pro6" className="w-full h-[300px] object-cover z-10" />
          <div className="absolute laptop:bottom-[-10px] laptop:right-[-20px] mobile:bottom-[10px] mobile:right-[10px] w-16 h-16 border-b-[8px] border-r-[8px] border-orange-500 mobile:mb-[130px] mobile:mr-[-10px] laptop:mb-[150px] laptop:mr-[20px]"></div>
          <p className="text-[22px] font-semibold text-primary mobile:text-center mt-7 mb-4 z-10">11 MVA Furnace Transformer</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg border-none z-10"><label>View Products</label></button>
        </div>
      </div>
    </div>
  )
}

export default Product
