/* eslint-disable react/prop-types */
import CustomCarousel from './CustomCarousel';
import {CategoryData} from './../Data/CategoryData'
import {TeaCoffeeData} from './../Data/TeaCoffeeData'


export default function Section({ sectionTitle, dataFile }) {
    
    const dataFiles = {
        CategoryData: CategoryData,
        TeaCoffeeData: TeaCoffeeData,
      };
    

    const filteredItems = dataFiles[dataFile] || [];

  return (
    <div className="">
      <h2 className="text-3xl font-semibold text-customBrown m-1 p-2">{sectionTitle}</h2>
      <CustomCarousel items={filteredItems} />
    </div>
  );
}
