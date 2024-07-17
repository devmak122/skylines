import React from 'react';
import ABB from "../assets/images/ABB_logo.svg"
import Description from "../assets/images/Group 1000001788.svg"
import TebianElectricApparatus from "../assets/images/TebianElectricApparatus.svg"
import  img3 from "../assets/images/img3.svg";
import company4img from "../assets/images/company4img.svg";
import img5 from "../assets/images/img5.svg";
import img6 from "../assets/images/img6.svg";
import img7 from "../assets/images/img7.svg";
import img8 from "../assets/images/img8.svg";
import img9 from "../assets/images/img9.svg";
import img10 from "../assets/images/img10.svg";

import img11 from "../assets/images/img11.svg";


import img12 from "../assets/images/img12.svg";
import img13 from "../assets/images/img13.svg";
import img14 from "../assets/images/img14.svg";
import img15 from "../assets/images/img15.svg";


const Clients = () => (
  <div className="p-4">
    <div class="relative">
        <img src={Description} class="w-[1920px] h-[600px]" alt="Description"/>
        <div class="absolute inset-0 flex items-center justify-center text-white text-[96px] font-bold">
            CLIENTS
        </div>
      </div>
      <div class="container mx-auto py-8">
        <h1 class="text-center text-[48px] font-bold mb-8 text-primary pb-12" >Our Client's</h1>

        <div class="grid grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-4 mx-4 my-4 ml-11">

            <div class="relative group">
            <div class="absolute flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px] rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                <img src={ABB} alt="ABB" class="h-20"/>
                <p class="text-[30px] text-center text-customGreen font-bold pt-3">ABB Ltd<br/>Group</p>
            </div>
            <div class="bg-green-500 h-[72px] w-[72px] mt-44 ml-[-10px]"></div>
            </div>
            <div class="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px]  rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                <img src={TebianElectricApparatus} alt="TebianElectricApparatus" class="h-20"/>
                <p class="text-[30px] text-center text-customGreen font-bold pt-3">Tebian Electric<br/>Apparatus</p>
            </div>
            <div class="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px]  rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                <img src={img3} alt="img3" class="h-20"/>
                <p class="text-[30px] text-center text-customGreen font-bold pt-3">Prolec<br/>Energy</p>
            </div>
            <div class="relative group">
            <div class="absolute flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px]  rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                <img src={company4img} alt="company4img" class="h-20"/>
                <p class="text-[30px] text-center text-customGreen font-bold pt-3">Raychem RPG (p)<br/>Ltd.</p>
            </div>
            <div class="bg-green-100 h-[72px] w-[72px] mt-[-85px] ml-[170px]"></div>
        </div>
            <div class="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px]  rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                <img src={img5} alt="img5" class="h-20"/>
                <p class="text-[30px] text-center text-customGreen font-bold pt-3">ATLANTA<br/>ELECTRICALS</p>
            </div>
            
            <div class="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px]  rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                <img src={img6} alt="img6" class="h-20"/>
                <p class="text-[30px] text-center text-customGreen font-bold pt-3">RattanIndia<br/>Enterprises</p>
            </div>
            <div class="relative">
            <div class="absolute flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px]  rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                <img src={img7} alt="img7" class="h-20"/>
                <p class="text-[30px] text-center text-customGreen font-bold pt-3">TMC Transformers<br/>Spa</p>
            </div>
            <div class="bg-green-100 h-[80px] w-[80px] mt-[-25px] ml-[299px]"></div>
        </div>
            <div class="relative group">
            <div class=" absolute flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px]  rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                <img src={img8} alt="img8" class="h-20"/>
                <p class="text-[30px] text-center text-customGreen font-bold pt-3">Schneider<br/>Electric</p>
            </div>
            <div class="border-t-[12px] border-r-[12px] border-customGreen h-[72px] w-[72px] mt-[-15px] ml-[256px]"></div>
            </div>
            <div class="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px]  rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                <img src={img9} alt="img9" class="h-20"/>
                <p class="text-[30px] text-center text-customGreen font-bold pt-3">CG Power and<br/>Industrial Solutions</p>
            </div>
            <div class="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px]  rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                <img src={img10} alt="img10" class="h-20"/>
                <p class="text-[30px] text-center text-customGreen font-bold pt-3">Shree<br/>Cement</p>
            </div>
            <div class="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px]  rounded-lg border-[3px] border-customGreen  my-2 leading-10">
                <img src={img11} alt="img11" class="h-20"/>
                <p class="text-[30px] text-center text-customGreen font-bold pt-3">Electrotherm<br/>India Ltd.</p>
            </div>
            <div class="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px]  rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                <img src={img12} alt="img12" class="h-20 scale-110"/>
                <p class="text-[30px] text-center text-customGreen font-bold pt-3">Kirloskar<br/>Group</p>
            </div>
            <div class="relative group">
            <div class="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px]  rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                <img src={img13} alt="img13" class="h-20"/>
                <p class="text-[30px] text-center text-customGreen font-bold pt-3">Bridgestone<br/>Manufacturing</p>
            </div>
            <div class="border-b-[12px] border-l-[12px] border-orange-600 h-[72px] w-[72px] mt-[-55px] ml-[-15px]"></div>
        </div>
            <div class=" flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px]  rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                <img src={img14} alt="img14" class="h-20 scale-125		"/>
                <p class="text-[30px] text-center text-customGreen font-bold pt-3">Shilchar<br/>Technologies</p>
            </div>
            <div class="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px]  rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                <img src={img15} alt="img15" class="h-20 scale-125"/>
                <p class="text-[30px] text-center text-customGreen font-bold  pt-3">Tesla<br/>Transformers</p>
            </div>
        </div>
    </div>
  </div>
);

export default Clients;
