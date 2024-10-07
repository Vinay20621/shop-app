import React from 'react'
import OfferSection from '../Components/OfferSection';
import Poster from '../Components/Poster';



const LandingPage = () => {
  return (
    <div>
      <div className='pt-4'>
        <Poster/>
      </div>
      
      <OfferSection title="Best Clothes" products={BestClothes} />
      <OfferSection title="Top Offers" products={topOffers} />
      <OfferSection title="Budget Bonanza" products={budgetBonanza} />
      <OfferSection title="Hero Deals" products={heroDeals} />
      <OfferSection title="Beauty Product" products={beautyProducts} />
    </div>
  )
}

const topOffers = [
    { name: 'Stylish Picks On Spoy', discount: '75%', img: 'stylish-picks.svg' },
    { name: 'LIBAS Kurti', discount: '80%', img: 'libas-kurti.svg' },
    { name: 'Casual Shirt', discount: '75%', img: 'casual-shirt.svg' },
  ];
  
  const budgetBonanza = [
    { name: 'Biotique Skincare Kit', discount: '75%', img: 'biotique-skincare.svg' },
    { name: 'Baby Girl Dress', discount: '75%', img: 'baby-girl-dress.svg' },
    { name: 'Lyra Brand Stole', discount: '80%', img: 'lycra-blend-shree.svg' },
  ];
  
  const heroDeals = [
    { name: 'Makeup Product', discount: '80%', img: 'makeup-product.svg' },
    { name: 'Casual Shirt', discount: '75%', img: 'casual-shirt.svg' },
    { name: 'Lakme Beauty Product', discount: '79%', img: 'lakme-beauty.svg' },
  ];
  
  const BestClothes = [
    { name: 'Stylish Picks On Spoy', discount: '79%', img: 'stylish-picks.svg' },
    { name: 'LIBAS Kurti', discount: '80%', img: 'libas-kurti.svg' },
    { name: 'Casual Shirt', discount: '75%', img: 'casual-shirt.svg' },
    { name: 'Baby Girl Dress', discount: '75%', img: 'baby-girl-dress.svg' },
    { name: 'Lycra Blend Shree', discount: '80%', img: 'lycra-blend-shree.svg' },
    { name: 'Shirt', discount: '81%', img: 'shirt.svg' },
  ];

  const beautyProducts = [
    { name: '', discount: '79%', img: 'lakme-beauty.svg' },
    { name: '', discount: '80%', img: 'makeup-product.svg' },
    { name: '', discount: '75%', img: 'biotique-skincare.svg' },
  ];
export default LandingPage
