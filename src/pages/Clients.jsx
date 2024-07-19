import React from 'react';
import ABB from "../assets/images/ABB_logo.svg";
import Description from "../assets/images/client_bg.svg";
import TebianElectricApparatus from "../assets/images/TebianElectricApparatus.svg";
import img3 from "../assets/images/img3.svg";
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
    <div className="">
        <div
            className="w-full bg-black bg-opacity-50 justify-center bg-center  bg-cover bg-no-repeat flex flex-col items-center"
            style={{ backgroundImage: `url(${Description})`, height: '50vh' }}
        >
            <h1 className="text-white text-center flex items-center justify-center font-bold text-6xl">Client</h1>
        </div>
        <div className="container mx-auto py-8 ">
            <h1 className="text-center text-[48px] font-bold mb-8 text-primary pb-12">Our Client's</h1>

            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-6 mx-4 my-4 ml-11 mobile:ml-[-5px]">
                <div className="relative group">
                    <div className="absolute flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px] rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                        <img src={ABB} alt="ABB" className="h-20" />
                        <p className="text-[30px] text-center text-customGreen font-bold pt-3">ABB Ltd<br />Group</p>
                    </div>
                    <div className="bg-green-500 h-[72px] w-[72px] mt-44  mobile: ml-[-10px] mobile:mt-[175px]"></div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px] rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                    <img src={TebianElectricApparatus} alt="TebianElectricApparatus" className="h-20" />
                    <p className="text-[30px] text-center text-customGreen font-bold pt-3">Tebian Electric<br />Apparatus</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px] rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                    <img src={img3} alt="img3" className="h-20" />
                    <p className="text-[30px] text-center text-customGreen font-bold pt-3">Prolec<br />Energy</p>
                </div>
                <div className="relative group">
                    <div className="absolute flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px] rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                        <img src={company4img} alt="company4img" className="h-20" />
                        <p className="text-[30px] text-center text-customGreen font-bold pt-3">Raychem RPG (p)<br />Ltd.</p>
                    </div>
                    <div className="bg-green-100 h-[72px] w-[72px] mt-[-85px] ml-[170px] mobile:mt-[-10px] mobile:ml-[255px]"></div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px] rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10 mobile:mt-[185px]">
                    <img src={img5} alt="img5" className="h-20" />
                    <p className="text-[30px] text-center text-customGreen font-bold pt-3">ATLANTA<br />ELECTRICALS</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px] rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                    <img src={img6} alt="img6" className="h-20" />
                    <p className="text-[30px] text-center text-customGreen font-bold pt-3">RattanIndia<br />Enterprises</p>
                </div>
                <div className="relative">
                    <div className="absolute flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px] rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                        <img src={img7} alt="img7" className="h-20" />
                        <p className="text-[30px] text-center text-customGreen font-bold pt-3">TMC Transformers<br />Spa</p>
                    </div>
                    <div className="bg-green-100 h-[80px] w-[80px] mt-[-25px] ml-[299px] mobile:ml-[-22px] mobile:mt-[-10px]"></div>
                </div>
                <div className="relative group">
                    <div className="absolute flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px] rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10 mobile:mt-[185px]">
                        <img src={img8} alt="img8" className="h-20" />
                        <p className="text-[30px] text-center text-customGreen font-bold pt-3">Schneider<br />Electric</p>
                    </div>
                    <div className="border-t-[12px] border-r-[12px] border-customGreen h-[72px] w-[72px] mt-[-15px] ml-[256px] mobile:mt-[165px] mobile:ml-[252px]"></div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px] rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10 mobile:mt-[175px]">
                    <img src={img9} alt="img9" className="h-20" />
                    <p className="text-[30px] text-center text-customGreen font-bold pt-3">CG Power and<br />Industrial Solutions</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px] rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                    <img src={img10} alt="img10" className="h-20" />
                    <p className="text-[30px] text-center text-customGreen font-bold pt-3">Shree<br />Cement</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px] rounded-lg border-[3px] border-customGreen my-2 leading-10">
                    <img src={img11} alt="img11" className="h-20" />
                    <p className="text-[30px] text-center text-customGreen font-bold pt-3">Electrotherm<br />India Ltd.</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px] rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                    <img src={img12} alt="img12" className="h-20 scale-110" />
                    <p className="text-[30px] text-center text-customGreen font-bold pt-3">Kirloskar<br />Group</p>
                </div>
                <div className="relative group">
                    <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px] rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                        <img src={img13} alt="img13" className="h-20" />
                        <p className="text-[30px] text-center text-customGreen font-bold pt-3">Bridgestone<br />Manufacturing</p>
                    </div>
                    <div className="border-b-[12px] border-l-[12px] border-orange-600 h-[72px] w-[72px] mt-[-55px] ml-[-15px]"></div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px] rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                    <img src={img14} alt="img14" className="h-20 scale-125" />
                    <p className="text-[30px] text-center text-customGreen font-bold pt-3">Shilchar<br />Technologies</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md w-[296px] h-[215px] rounded-lg border-[3px] border-customGreen mx-2 my-2 leading-10">
                    <img src={img15} alt="img15" className="h-20 scale-125" />
                    <p className="text-[30px] text-center text-customGreen font-bold pt-3">Tesla<br />Transformers</p>
                </div>
            </div>
        </div>
    </div>
);

export default Clients;
