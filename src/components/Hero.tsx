import React from "react";
import { useState, useEffect } from "react";
import "./Hero.css"; // Adjust the import path to your CSS file if needed
import hero1 from "../assets/hero1-full-original-4000px.jpg";
import hero2 from "../assets/hero2-full-original-4000px.jpg";

const Hero = () => {
  const image1 = hero1;
  const image2 = hero2;
  const [heroImage, setHeroImage] = useState(image1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroImage((prevHeroImage) =>
        prevHeroImage === image1 ? image2 : image1
      );
    }, 2500);
    return () => clearInterval(intervalId);
  }, []);

  const isImage2 = heroImage === image2;

  return (
    <div className='relative w-full h-screen'>
      <img
        className='absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000'
        src={image1}
        alt='hero'
        style={{ opacity: isImage2 ? "0" : "1" }}
      />
      <img
        className='absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000'
        src={image2}
        alt='hero'
        style={{ opacity: isImage2 ? "1" : "0" }}
      />
      <div className='hero-text-container'>
        <div className='hero-text text-yellow-400 text-9xl font-extrabold text-shadow'>
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
    </div>
  );
};

export default Hero;
