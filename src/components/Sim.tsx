import React, { ReactNode } from "react";

interface SimProps {
  position: "left" | "right";
  simId: string;
  title: string;
  titleNonAccented: string;
  iframeSrcMobile: string;
  iframeSrcDesktop: string;
  description: ReactNode;
}

const Sim: React.FC<SimProps> = ({
  position,
  simId,
  title,
  titleNonAccented,
  iframeSrcMobile,
  iframeSrcDesktop,
  description,
}) => (
  <div
    className={`flex flex-col md:flex-row items-center justify-center pt-8 pb-8 md:space-x-8 md:pt-20 md:pb-20 ${
      position === "right" ? "md:flex-row-reverse bg-primary" : "bg-secondary"
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
          titleNonAccented={titleNonAccented}
        ></iframe>
        <iframe
          className='hidden md:block absolute inset-0 w-full h-full'
          src={iframeSrcDesktop}
          width='800'
          height='400'
          title={title}
          titleNonAccented={titleNonAccented}
        ></iframe>
      </div>
    </div>
    <div className='w-full md:w-1/3 pl-8 pr-12'>
      <h1 className='text-3xl text-primary font-extrabold mb-4 '>
        {title}{" "}
        <span className='text-darkGrey font-medium'>{titleNonAccented}</span>{" "}
      </h1>
      <p className='text-neutral-700'>{description}</p>
    </div>
  </div>
);

export default Sim;
