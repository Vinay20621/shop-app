/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';


export default function HoverMenu({ category }) {
  const [hoveredSubCategory, setHoveredSubCategory] = useState(0); 

 
  useEffect(() => {
    if (category && category.subCategories && category.subCategories.length > 0) {
      setHoveredSubCategory(0); 
    }
  }, [category]);

  if (!category || !category.subCategories) {
    return null;
  }

  return (
    <div className="flex ">
   
      <div className="w-full bg-white border rounded-sm shadow-md p-5">
        <ul className="space-y-2">
          {category.subCategories.map((subCategory, subIndex) => (
            <li
              key={subIndex}
              className={`cursor-pointer p-2 hover:bg-gray-100 ${
                hoveredSubCategory === subIndex ? 'bg-gray-100' : ''
              }`}
              onMouseEnter={() => setHoveredSubCategory(subIndex)} 
            >
              {subCategory.name}

            </li>
          ))}
        </ul>
      </div>


      <div className="w-full bg-white border  rounded-sm shadow-md p-5">
        {hoveredSubCategory !== null && category.subCategories[hoveredSubCategory] ? (
          <ul className="space-y-2 ">
           <h3 className="font-semibold text-sm text-gray-500 ">
            More in {category.subCategories[hoveredSubCategory].name} 
            </h3>
            {category.subCategories[hoveredSubCategory].items.map((item, itemIndex) => (
              <li key={itemIndex} className="p-2">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p>No Items</p>
        )}
      </div>
    </div>
  );
}
