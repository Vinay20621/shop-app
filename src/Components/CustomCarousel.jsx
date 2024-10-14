/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import Card from './card';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HoverMenu from './HoverMenu';

export default function CustomCarousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [hoverIndex, setHoverIndex] = useState(null);
  const carouselRef = useRef(null); 

  const updateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 640) {
      setSlidesToShow(3);
    } else if (screenWidth <= 1024) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(5);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const getVisibleItems = () => {
    let visibleItems = [];
    for (let i = 0; i < slidesToShow; i++) {
      visibleItems.push(items[(currentIndex + i) % items.length]);
    }
    return visibleItems;
  };

 
  const handleTouchStart = (e) => {
    carouselRef.current.startX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!carouselRef.current.startX) return;

    const currentX = e.touches[0].clientX;
    const difference = carouselRef.current.startX - currentX;

 
    if (difference > 50) {
      handleNext(); 
      carouselRef.current.startX = null;
    } else if (difference < -50) {
      handlePrev();
      carouselRef.current.startX = null;
    }
  };

  return (
    <div
      className="overflow-x-scroll scrollbar-hide flex"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      ref={carouselRef} 
    >
      <div className="w-full lg:p-5 md:px-10 sm:px-6 min-[320px]:p-1 flex-1 justify-between items-center">
        <div className="flex overflow-hidden justify-center">
         
          <button onClick={handlePrev} className="flex justify-center max-[600px]:hidden items-center">
            <ArrowBackIosIcon />
          </button>

          
          <div
            className="flex lg:justify-between max-lg:justify-around transition-transform ease-in-out duration-700"
            style={{
              width: `${slidesToShow * 100}%`,
            }}
          >
            {getVisibleItems().map((item, index) => (
              <div
                key={index}
                className={`shrink-0 lg:px-2
                  w-${slidesToShow === 1 ? 'full' : slidesToShow === 2 ? '1/2' : slidesToShow === 3 ? '1/3' : '1/7'} 
                  md:w-${slidesToShow === 1 ? 'full' : slidesToShow === 2 ? '1/2' : '1/3'} 
                  lg:w-1/6`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <Card title={item.title} imageSrc={item.imageSrc} altText={item.title} />

               
                {hoverIndex === index && !(window.innerWidth <= 1024) && (
                  <div className="absolute">
                    <HoverMenu category={items[hoverIndex]} />
                  </div>
                )}
              </div>
            ))}
          </div>

         
          <button onClick={handleNext} className="flex justify-center max-[600px]:hidden items-center">
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
