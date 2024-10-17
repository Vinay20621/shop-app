import React from "react";
import FashionOfferSection from "../Components/FashionOfferSection";
import Poster from "../Components/Poster";
import SectionBar from "../Components/SectionBar";

const FashionPage = () => {
  return (
    <div>
      <SectionBar/>
      <div className="pt-4">
        <Poster backgroundImage={"/images/FashionPoster.svg"} opacity={"70%"} />
      </div>
      <FashionOfferSection title="Top Offers" products={topOffers} />
      <FashionOfferSection title="Budget Bonanza" products={budgetBonanza} />
      <FashionOfferSection title="Hero Deals" products={heroDeals} />
    </div>
  );
};

const topOffers = [
  { name: "Stylish Picks On Spoy", discount: "75%", img: "stylish-picks.svg" },
  { name: "LIBAS Kurti", discount: "80%", img: "libas-kurti.svg" },
  { name: "Casual Shirt", discount: "75%", img: "casual-shirt.svg" },
  { name: "Baby Girl Dress", discount: "75%", img: "baby-girl-dress.svg" },
  { name: "Lycra Blend Shree", discount: "80%", img: "lycra-blend-shree.svg" },
  { name: "Shirt", discount: "81%", img: "shirt.svg" },
];

const budgetBonanza = [
  {
    name: "Biotique Skincare Kit",
    discount: "75%",
    img: "biotique-skincare.svg",
  },
  { name: "Baby Girl Dress", discount: "75%", img: "baby-girl-dress.svg" },
  { name: "Lyra Brand Stole", discount: "80%", img: "lycra-blend-shree.svg" },
  { name: "Makeup Product", discount: "80%", img: "makeup-product.svg" },
  { name: "Casual Shirt", discount: "75%", img: "casual-shirt.svg" },
  { name: "Lakme Beauty Product", discount: "79%", img: "lakme-beauty.svg" },
];

const heroDeals = [
  { name: "Makeup Product", discount: "80%", img: "makeup-product.svg" },
  { name: "Casual Shirt", discount: "75%", img: "casual-shirt.svg" },
  { name: "Lakme Beauty Product", discount: "79%", img: "lakme-beauty.svg" },
  {
    name: "Biotique Skincare Kit",
    discount: "75%",
    img: "biotique-skincare.svg",
  },
  { name: "Baby Girl Dress", discount: "75%", img: "baby-girl-dress.svg" },
  { name: 'Lycra Blend Shree', discount: '80%', img: 'lycra-blend-shree.svg' },
];

export default FashionPage;
