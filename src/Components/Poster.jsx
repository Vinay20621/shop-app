import React from "react";

const Poster = ({ backgroundImage, opacity }) => {
  return (
    <div
      className="relative bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "437px",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(0deg, rgba(171, 46, 106, ${opacity}) 0%, rgba(157, 39, 96, ${opacity}) 44%, rgba(88, 24, 99, ${opacity}) 100%)`,
        }}
      ></div>

      <div className="relative flex flex-col items-center text-white p-4">
        <div className="items-start">
          <p className="font-domine text-[32px] text-[#FFC700] leading-none">
            DAFTARI
          </p>
          <p className="text-[64px] font-bold text-left leading-none">
            MEGA MART
          </p>
          <p className="text-[32px] font-inter text-left leading-none mb-4">
            The best stock at the best prices.
          </p>
        </div>
        <button className="text-[20px] text-[#552667] font-bold bg-[#FFFFFF] border-4 border-[#EC8E38] py-2 px-8 mt-4 rounded-full">
          SHOP AGAIN
        </button>
      </div>
    </div>
  );
};

export default Poster;
