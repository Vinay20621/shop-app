export default function GroceryPosterCard() {
  return (
    <>
      <div className="flex justify-between max-w-full max-lg:flex-col ">
        {/* <div className="flex w-full "> */}
          <div className="flex lg:w-full  justify-between bg-customBeige m-2 ">
            <div className="flex text-customGreen md:text-2xl text-3xl max-[480px]:text-2xl font-semibold py-10 px-5">
              <h1>Foodgrains</h1>
            </div>
            <div className="flex   lg:w-1/2 md:w-2/5 sm:w-2/6 min-[560px]:w-[40%] min-[400px]:w-[30%]">
              <img src="/images/Foodgrains.svg" alt="" />
            </div>
          </div>
        {/* </div> */}

        <div className="flex-col flex w-full ">
          <div className="flex justify-between bg-customBeige  m-2">
            <div className="flex text-customGreen md:text-2xl text-3xl max-[480px]:text-2xl font-semibold py-10 px-5">
              <h1>Oil & Ghee</h1>
            </div>
            <div className="flex max-[480px]:w-[150px] ">
              <img src="/images/oil&ghee.svg" alt="" />
            </div>
          </div>

          <div className="flex justify-between bg-customBeige m-2">
            <div className="flex text-customGreen md:text-2xl text-3xl max-[480px]:text-2xl font-semibold py-10 px-5 " >
              <h1>Flours</h1>
            </div>
            <div className="flex max-[480px]:w-[150px]">
              <img src="/images/daal flours.svg" alt="" className="w-64" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
