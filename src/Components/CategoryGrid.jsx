import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: "Grocery", imgSrc: "/images/grocery.svg",linkPages:"/grocery" },
  { name: "Beauty", imgSrc: "/images/beauty.svg",linkPages:"/beauty" },
  { name: "Fashion", imgSrc: "/images/fashion.svg" ,linkPages:"/fashion"},
  { name: "Home & Kitchen", imgSrc: "/images/home-kitchen.svg",linkPages:"/home-kitchen" },
];

const CategoryGrid = () => {
  const navigate=useNavigate()
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center"  onClick={()=>navigate(category?.linkPages)}>
            <img 
              src={category.imgSrc} 
              alt={category.name} 
              className="w-32 h-32 object-cover mb-4" 
            />
            <h2 className="text-lg font-bold">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
