import React from 'react';
import TouchCarousel from 'react-touch-carousel';
import touchWithMouseHOC from 'react-touch-carousel/lib/touchWithMouseHOC';
import CarouselContainer from './CarouselContainer.jsx';
import RenderCard from './RenderCard';

function Carousel() {
  const listOfData = [1,2,3,4,5,6,7,8,9];
  const Container = touchWithMouseHOC(CarouselContainer);

  return (
    <TouchCarousel
      component={ Container }
      cardCount={ listOfData.length }
      cardSize={ 150 }
      renderCard={ RenderCard }
    />
  );
}

export default Carousel;
