import Section from "./../Components/Section";
import GroceryPosterCard from "./../Components/GroceryPosterCard";

function Grocery() {
  return (
    
    <div className="min-h-screen  w-full bg-customGray ">
      <div className="flex-1 justify-between mt-2 mb-2 bg-white">
        <Section dataFile="CategoryData" />
      </div>
      <div className="flex gap-3 ">
        <div className="flex   w-full ">
          <GroceryPosterCard indexId={0} />
        </div>
        <div className="flex-row gap-4  w-full ">
          <GroceryPosterCard indexId={1} />
          <GroceryPosterCard indexId={2} />
        </div>
      </div>
      <div className="flex-1 justify-center mt-2 mb-2 bg-customBeige p-5 ">
        <Section sectionTitle="Tea & Coffee" dataFile="TeaCoffeeData" />
      </div>
      <div></div>
    </div>
  );
}

export default Grocery;
