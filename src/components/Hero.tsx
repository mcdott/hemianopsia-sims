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

  // TODO fix play/pause button
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
    <div className='hero-container'>
      <img
        className='hero-image'
        src={image1}
        alt='a city street scene'
        style={{ opacity: isImage2 ? "0" : "1" }}
      />
      <img
        className='hero-image'
        src={image2}
        alt='a city street scene with the right half of the image obscured'
        style={{ opacity: isImage2 ? "1" : "0" }}
      />
      <div className='hero-text-container'>
        <div className='hero-text text-secondary text-4xl md:text-6xl lg:text-7xl font-extrabold text-shadow'>
          <div>See</div>
          <div>what</div>
          <div>it's</div>
          <div>like</div>
          <div>to</div>
          <div>see</div>
          <div
            className='italic text-amber-400 text-shadow transition-opacity duration-1000'
            style={{ opacity: isImage2 ? "1" : "0" }}
          >
            differently
          </div>
        </div>
      </div>
      <button
        aria-label='Pause or play the hero image slideshow'
        className='play-pause-button'
        onClick={handlePauseClick}
      ></button>
      <button className='try-the-sims-button' onClick={scrollToSims}>
        Try the simulations <br />▼
      </button>
    </div>
  );
};

export default Hero;
