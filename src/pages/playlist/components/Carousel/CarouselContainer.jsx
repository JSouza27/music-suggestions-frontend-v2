import React from 'react';
import { CaroureslContainer, CarouselTrack } from './Style';

function CarouselContainer (props) {
  const { cursor, ...rest } = props;
  const cardSize = 187;
  const translateX = cursor.toFixed(5) * cardSize;

  return (
    <CaroureslContainer>
      <CarouselTrack
        style={ { transform: `translate3d(${translateX}px, 0, 0)` } }
        { ...rest }  
      />
    </CaroureslContainer>
  );
}

export default CarouselContainer;