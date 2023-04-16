import React from "react";

const Slider: React.FC<{
  position: "left" | "right";
  sliderId: string;
  title: string;
}> = ({ position, sliderId, title }) => (
  <div
    className={`flex flex-col md:flex-row items-center justify-center md:space-x-8 mb-8 ${
      position === "right" ? "md:flex-row-reverse" : ""
    }`}
  >
    <div className='w-full md:w-2/3'>
      <div
        id={sliderId}
        className='w-full h-96 bg-gray-300 rounded-lg shadow-md mb-6 md:mb-0'
      >
        {/* p5.js slider will be placed here */}
      </div>
    </div>
    <div className='w-full md:w-1/3'>
      <h1 className='text-2xl font-bold mb-4'>{title}</h1>
      <p className='text-gray-700'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
);

const Sliders = () => {
  return (
    <div className='container mx-auto px-4 py-12'>
      <Slider position='left' sliderId='slider1' title='Draw & Doodle' />
      <Slider position='right' sliderId='slider2' title='Play' />
      <Slider position='left' sliderId='slider3' title='Read' />
    </div>
  );
};

export default Sliders;
