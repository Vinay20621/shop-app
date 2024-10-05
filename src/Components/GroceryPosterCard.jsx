/* eslint-disable react/prop-types */
import { PosterData } from "../Data/PosterData";

export default function GroceryPosterCard({ indexId }) {
  const filteredItems = PosterData;
  const item = filteredItems[indexId];

  if (!item) {
    return <div className="text-red-500">Item not found</div>; 
  }

  return (
    <div className="flex flex-row  mt-2 mb-2 bg-customBeige  overflow-hidden">
      <div className="flex justify-start sm:p-6 md:p-8 lg:p-10">
        <h1 className="lg:text-3xl md:text-3xl sm:text-2xl font-semibold text-customGreen">{item.title}</h1>
      </div>
      <div className="flex justify-end items-end p-1">
        <img
          src={item.imageSrc}
          alt={item.title}
          className="lg:w-[80%] sm:w-[80%] md:w-[100%] "
        />
      </div>
    </div>
  );
}
