import React from "react";

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-full object-cover'
        src='https://images.unsplash.com/photo-1678644444767-0c8f00d8c5ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNnx4SHhZVE1ITGdPY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60'
        alt='street view'
      />
      <div>
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-white'>
          See what it's like to see differently
        </h1>
      </div>
      <p>try the simulations</p>
    </div>
  );
};

export default Hero;
