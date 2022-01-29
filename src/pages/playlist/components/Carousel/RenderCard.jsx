import React from 'react';
import CardCarrousel from '../Card/Index';

function RenderCard(index, modIndex, cursor) {
  return (
    <div key={ index }>
      <CardCarrousel />
    </div>
  );
}

export default RenderCard;
