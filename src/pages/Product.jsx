import React from 'react'
import product_bg from "../assets/images/product_bg.svg"
import pro4 from "../assets/images/pro4.jpg"
import product4 from "../assets/images/product2.jpg"
import product1 from "../assets/images/product1.jpg"
import pro3 from "../assets/images/pro3.jpg"
import pro5 from "../assets/images/pro5.jpg"

import pro6 from "../assets/images/pro6.jpg"

const Product = () => {
  return (
    <div>
          <div class="relative">
        <img src={product_bg} class="w-[1920px] h-[600px] " alt="product_bg"/>
        <div class="absolute inset-0 flex items-center justify-center text-white text-[96px] font-bold">
            Products
        </div>
      </div>
      <div class=" grid grid-cols-3 gap-6 md:grid-cols-2 lg:grid-cols-2 mx-4 my-4 ml-11">

        <div class="flex flex-col items-center justify-center p-4 bg-white rounded-lg mx-2 my-2 leading-10 ">
            <p class="text-[35px] font-bold text-primary mt-0 mb-10  ">20 MVA Core Coil</p>
            <img src={pro4} alt="pro4" class="h-[488px] w-[650px]"/>
            <p class="text-[22px] font-semibold text-primary mt-7 mb-4">20 MVA Core Coil Assembly Work</p>
            <button class="bg-orange-500 text-white px-4 rounded-lg border-none"><label>View Products</label></button>
        </div>
        <div class="flex flex-col items-center justify-center p-4 bg-white  rounded-lg mx-2 my-2 leading-10">
            <p class="text-[35px] font-bold text-primary mt-0 mb-10 my-10">200 MVA Core Coil</p>
            <img src={product4} alt="product4" class="h-[488px] w-[650px]"/>
            <p class="text-[22px] font-semibold text-primary mt-7 mb-4">200 MVA Core Coil Assembly Work</p>
            <button class="bg-orange-500 text-white px-4 rounded-lg border-none"><label>View Products</label></button>

        </div>
        <div class="flex flex-col items-center justify-center p-4 bg-white  rounded-lg   mx-2 my-2 leading-10">
            <p class="text-[35px] font-bold text-primary mt-0 mb-10 my-10">31.5 MVA Core Coil</p>
            <img src={pro3} alt="pro3" class="h-[488px] w-[650px]"/>
            <p class="text-[22px] font-semibold text-primary mt-7 mb-4">31.5 MVA Core Coil Assembly Work</p>
            <button class="bg-orange-500 text-white px-4 rounded-lg border-none"><label>View Products</label></button>

        </div>
        <div class="flex flex-col items-center justify-center p-4 bg-white  rounded-lg   mx-2 my-2 leading-10">
            <p class="text-[35px] font-bold text-primary mt-0 mb-10 my-10">25 MVA Core Coil</p>
            <img src={product1} alt="product1" class="h-[488px] w-[650px]"/>
            <p class="text-[22px] font-semibold text-primary mt-7 mb-4">20 MVA Core Coil Assembly Work</p>
            <button class="bg-orange-500 text-white px-4 rounded-lg border-none"><label>View Products</label></button>

        </div>
        <div class="flex flex-col items-center justify-center p-4 bg-white  rounded-lg   mx-2 my-2 leading-10">
            <p class="text-[35px] font-bold text-primary mt-0 mb-10 my-10">25 MVA Core Transformer</p>
            <img src={pro5} alt="pro5" class="h-[488px] w-[650px]"/>
            <p class="text-[22px] font-semibold text-primary mt-7 mb-4">Repairing of 25 MVA Transformer</p>
            <button class="bg-orange-500 text-white px-4 rounded-lg border-none"><label>View Products</label></button>

        </div>
        <div class="flex flex-col items-center justify-center p-4 bg-white  rounded-lg   mx-2 my-2 leading-10">
            <p class="text-[35px] font-bold text-primary mt-0 mb-10 my-10">11 MVA Furnace</p>
                <img src={pro6} alt="pro6" class="h-[488px] w-[650px]"/>
                <p class="text-[22px] font-semibold text-primary mt-7 mb-4">11 MVA Furnace Transformer</p>
                <button class="bg-orange-500 text-white px-4 rounded-lg border-none"><label>View Products</label></button>

            </div>
      </div>
      
    </div>
  )
}

export default Product
