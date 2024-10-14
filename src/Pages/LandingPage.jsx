import React from 'react';
import LandingOfferSection from '../Components/LandingOfferSection';
import Poster from '../Components/Poster';
import CategoryGrid from '../Components/CategoryGrid';

const LandingPage = () => {
  return (
    <div>
      <div className='pt-4'>
        <CategoryGrid />
      </div>
      <div className='pt-4'>
        <Poster backgroundImage={"/images/mega-mart.svg"} opacity={"70%"} />
      </div>
      <LandingOfferSection title="Best Clothes" products={BestClothes} />
      <LandingOfferSection title="Beauty Product" products={beautyProducts} />
    </div>
  );
}

const BestClothes = [
  { name: 'Stylish Picks On Spoy', discount: '79%', img: 'stylish-picks.svg' },
  { name: 'LIBAS Kurti', discount: '80%', img: 'libas-kurti.svg' },
  { name: 'Casual Shirt', discount: '75%', img: 'casual-shirt.svg' },
  { name: 'Baby Girl Dress', discount: '75%', img: 'baby-girl-dress.svg' },
  { name: 'Lycra Blend Shree', discount: '80%', img: 'lycra-blend-shree.svg' },
  { name: 'Shirt', discount: '81%', img: 'shirt.svg' },
];

const beautyProducts = [
  { name: 'Lakme Beauty Product', discount: '79%', img: 'lakme-beauty.svg' },
  { name: 'Makeup Product', discount: '80%', img: 'makeup-product.svg' },
  { name: 'Biotique Skincare Kit', discount: '75%', img: 'biotique-skincare.svg' },
];

export default LandingPage;
