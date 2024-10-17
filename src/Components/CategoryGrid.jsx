import React from 'react';

const categories = [
  { name: "Grocery", imgSrc: "/images/grocery.svg" },
  { name: "Beauty", imgSrc: "/images/beauty.svg" },
  { name: "Fashion", imgSrc: "/images/fashion.svg" },
  { name: "Home & Kitchen", imgSrc: "/images/home-kitchen.svg" },
];

const CategoryGrid = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
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
