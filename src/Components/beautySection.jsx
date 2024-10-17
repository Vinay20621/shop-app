/* eslint-disable react/prop-types */
import BeautyCarousel from './beautyCarousel';
import {CategoryData} from './../Data/CategoryData'
import {BeautyData} from './../Data/BeautyData'

import {TeaCoffeeData} from './../Data/TeaCoffeeData'

export default function beautySection({ sectionTitle, dataFile }) {
    
    const dataFiles = {
        BeautyData: BeautyData,
        CategoryData: CategoryData,
        TeaCoffeeData: TeaCoffeeData,
        
      };
    

    const filteredItems = dataFiles[dataFile] || [];

  return (
    <div className="">
      <h2 className="text-3xl font-semibold text-customBrown m-1 p-2">{sectionTitle}</h2>
      <BeautyCarousel items={filteredItems} />
    </div>
  );
}
