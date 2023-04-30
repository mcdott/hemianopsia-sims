import React, { useState, useEffect } from "react";
import "./Hero.css";
import hero1 from "../assets/hero1-full-original-4000px.jpg";
import hero2 from "../assets/hero2-full-original-4000px.jpg";

interface HeroProps {
  scrollToSims: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSims }) => {
  const image1 = hero1;
  const image2 = hero2;
  const [heroImage, setHeroImage] = useState(image1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const intervalId = setInterval(() => {
        setHeroImage((prevHeroImage) =>
          prevHeroImage === image1 ? image2 : image1
        );
      }, 2500);
      return () => clearInterval(intervalId);
    }
  }, [isPaused]);

  const isImage2 = heroImage === image2;

  const handlePauseClick = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className='relative w-full h-[calc(100%-4rem)]'>
      <img
        className='absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000'
        src={image1}
        alt='a city street scene'
        style={{ opacity: isImage2 ? "0" : "1" }}
      />
      <img
        className='absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000'
        src={image2}
        alt='a city street scene with the right half of the image obscured'
        style={{ opacity: isImage2 ? "1" : "0" }}
      />
      <div className='hero-text-container'>
        <div className='hero-text text-yellow-400 text-7xl font-extrabold text-shadow'>
          <div>See</div>
          <div>what</div>
          <div>it's</div>
          <div>like</div>
          <div>to</div>
          <div>see</div>
        </div>
      </div>
      <div
        className='differently-container text-white transition-opacity duration-1000'
        style={{ opacity: isImage2 ? "1" : "0" }}
      >
        <div className='differently'>differently</div>
      </div>
      <button
        aria-label='Pause or play the hero image slideshow'
        className='pause-button absolute top-4 right-4 px-1 py-1 text-lg bg-white hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300'
        onClick={handlePauseClick}
      >
        {isPaused ? "▶️" : "⏸️"}
      </button>
      <button
        className='try-the-sims absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-1 px-8 py-1 text-white bg-blue-500 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300'
        onClick={scrollToSims}
      >
        Try the simulations <br />
        &darr;
      </button>
    </div>
  );
};

export default Hero;
