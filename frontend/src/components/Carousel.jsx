// 'use client';

import { Carousel } from 'flowbite-react';


function DefaultCarousel() {
  return (
    
    <Carousel >
      <img
        alt="..."
        src='/shock_bubbles.jpg'
        className='h-96 w-full object-cover'
      />
      <img
        alt="..."
        src='/sour_pais.jpg'
        className='h-96 w-full object-cover'
      />
      <img
        alt="..."
        src='/spring_drink.gif'
        className='h-96 w-full object-cover'
      />
    </Carousel>
  )
}

export default DefaultCarousel;
