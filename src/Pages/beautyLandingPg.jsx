import React from "react";
import { useState } from "react";


import { CategoryData } from "../Data/CategoryData";
import { TeaCoffeeData } from "../Data/TeaCoffeeData";
import BeautySection from "../Components/beautySection";
import BeautyCarousel from "../Components/beautyCarousel";
import { Beautydata } from "../Data/beauty";
export default function Landingpg(){
   
    return(
        <section>
            <div className="h-[70px] grid grid-cols-5 gap-5 place-items-center mx-[20px] ">
                <div className="">
                    Skin Care
                </div>
                <div className="">
                    Body Care
                </div>
                <div className="">
                    Hair Care
                </div>
                <div className="">
                    Fragrance
                </div>
                <div className="">
                    Makeup Products
                </div>

            </div>

            <div className="w-full h-[437px] bg-[url('Group15.svg')] ">
            <div className="flex items-center justify-center flex-col">
                <div className="mt-[80px] ">
                <h1 className="text-[#FFD600] xl:text-[30px] lg:text-[40px] md:text-[40px] sm:text-[35px]">DAFTARI</h1>
                <h2 className="text-white font-semibold xl:text-[50px] lg:text-[30px] md:text-[30px] sm:text-[20px]">MEGA MART</h2>
                <h3 className="text-white text-[30px]">The best stock at best prices</h3>
                    <div className="grid grid-cols-2 gap-1 sm:ml-[120px] max-[640px]:ml-[80px]">
                    <button className="text-[#552667]  font-semibold max-[640px]:w-[100px] mt-5 w-[120px] h-[50px] border-4 border-[#FFD600] bg-white rounded-full">SHOP AGAIN</button>
                    </div>
                </div>
            </div>
            </div>

            <div className="mt-8 w-full h-[735px] bg-cover bg-no-repeat bg-[url('Rectangle_248.png')] ">
            <div className="mr-[60px] grid grid-cols-6 gap-10 p-10 place-items-center">
        {Beautydata.map((person, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="rounded-full w-[120px] h-[120px] bg-cover bg-center"
              style={{ backgroundImage: `url(${person.img})` }}
            ></div>
            
            <p className="mt-2 text-sm text-center">{person.name}</p>
          </div>
        ))}
       </div>
       
     </div>
     <BeautySection dataFile="BeautyData" />
<div className=" grid grid-cols-3 gap-[90px] px-[90px] h-[100px]">
  {/* First Div */}
  <div className="bg-white flex flex-col items-center drop-shadow-lg">
    <img 
      src="gucci.png" 
      alt="Sample Image 1" 
      className="w-[80%] h-[70%] object-cover mt-[50px]" 
    />
    <p className="mt-4 text-center text-lg">Image 1 Description</p>
  </div>

  {/* Second Div */}
  <div className="bg-white flex flex-col items-center drop-shadow-lg">
    <img 
      src="dior.png" 
      alt="Sample Image 2" 
      className="w-[80%] h-[70%] object-cover mt-[50px]" 
    />
    <p className="mt-4 text-center text-lg">Image 2 Description</p>
  </div>

  {/* Third Div */}
  <div className="bg-white flex flex-col items-center drop-shadow-lg">
    <img 
      src="lash.png" 
      alt="Sample Image 3" 
      className="w-[80%] h-[70%] object-cover mt-[50px]" 
    />
    <p className="mt-4 text-center text-lg">Image 3 Description</p>
  </div>


            </div>
        </section>
    )
}