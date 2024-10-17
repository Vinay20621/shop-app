import Section from "./../Components/Section";
import GroceryPosterCard from "./../Components/GroceryPosterCard";
import Banner from "../Components/Banner";

function Grocery() {
  return (
    <div className="min-h-screen  w-full bg-customGray ">
      <div className="flex-1 justify-between mt-2 mb-2 bg-white min-[320px]:gap-0">
        <Section dataFile="CategoryData" />
      </div>

      <div className="">
        <GroceryPosterCard />
      </div>

      <div className="flex-1 justify-center mt-2 mb-2 bg-customBeige p-5 ">
        <Section sectionTitle="Tea & Coffee" dataFile="TeaCoffeeData" />
      </div>
      <div >
          <Banner/>
      </div>
    </div>
  );
}

export default Grocery;
