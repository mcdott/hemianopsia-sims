import React, { ReactNode } from "react";

interface SimProps {
  position: "left" | "right";
  simId: string;
  title: string;
  iframeSrcMobile: string;
  iframeSrcDesktop: string;
  description: ReactNode;
}

const Sim: React.FC<SimProps> = ({
  position,
  simId,
  title,
  iframeSrcMobile,
  iframeSrcDesktop,
  description,
}) => (
  <div
    className={`flex flex-col md:flex-row items-center justify-center md:space-x-8 mb-8 ${
      position === "right" ? "md:flex-row-reverse" : ""
    }`}
  >
    <div className='w-full md:w-2/3'>
      <div
        id={simId}
        className='relative w-full h-96 rounded-lg shadow-md mb-6 md:mb-0 overflow-hidden'
      >
        <iframe
          className='absolute inset-0 w-full h-full'
          src={iframeSrcMobile}
          width='400'
          height='400'
          title={title}
        ></iframe>
        <iframe
          className='hidden md:block absolute inset-0 w-full h-full'
          src={iframeSrcDesktop}
          width='800'
          height='400'
          title={title}
        ></iframe>
      </div>
    </div>
    <div className='w-full md:w-1/3'>
      <h1 className='text-2xl text-neutral-900 font-bold mb-4'>{title}</h1>
      <p className='text-neutral-700'>{description}</p>
    </div>
  </div>
);

export default Sim;
