import React from "react";

export default function Banner(){
    return(
        <section className="flex w-full h-[500px]">
            <div className="flex justify-center items-center w-[70%] bg-[#29A841]">
                <div className="flex items-center justify-center flex-col">
                <h1 className="text-[#FFD600] font-semibold xl:text-[70px] lg:text-[50px] md:text-[40px] sm:text-[35px]">SUPER GROCERY SHOP</h1>
                <h2 className="text-white font-semibold xl:text-[40px] lg:text-[30px] md:text-[30px] sm:text-[20px]">EVERYTHING YOU NEED</h2>
                <h3 className="text-white">www.megamart.com</h3>
                    <div className="grid grid-cols-2 gap-1 ml-[150px]">
                    <button className="text-[#29A841]  font-semibold mt-5 w-[150px] h-[50px] border-4 border-[#FFD600] bg-white rounded-full">SHOP AGAIN</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center w-[16%] bg-[#FFD600]">
                <div>
                <img src="/Rectangle_218.svg" alt="" />
                </div>
            </div>
            <div className="flex-auto w-[10%] bg-[#29A841]">

            </div>
        </section>
    )
}