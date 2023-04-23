import React from "react";

const Sim: React.FC<{
  position: "left" | "right";
  simId: string;
  title: string;
  iframeSrcMobile: string;
  iframeSrcDesktop: string;
}> = ({ position, simId, title, iframeSrcMobile, iframeSrcDesktop }) => (
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
        {/* p5.js slider will be placed here */}
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
      <h1 className='text-2xl font-bold mb-4'>{title}</h1>
      <p className='text-gray-700'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
);

const Sims = () => {
  return (
    <div className='container mx-auto px-4 py-12'>
      <Sim
        position='left'
        simId='slider1'
        title='Draw & Doodle'
        iframeSrcMobile='https://openprocessing.org/sketch/1858436/embed/?plusEmbedHash=ZDg5MTM5YWU3NjVhMGVhOWQ0OWE0NzRmOTgyNDRlYzEyNTA1MjQ1ZDRkZGU1MmU3ZGYyMGY5ZGI5ZmZjY2EyYzhmMmVkZTUyMDY2NDJhZmI0MTIyNjFjNWE0NmFjMDdjMTY4MDdkMDJiOWU1ODIwMmFlNjRlOTE3NzU0ZTZhOTdnZE12QldaYUx5ZG1XNU5EK1Vib1c0N2JOT21XQXN6L2dva3poMHZ2MFRNa21IU1BQMUVFeURmZ09KVkpLVlEvYk9LR2JnS3pzNmdxM04zMXFHWmM0QT09'
        iframeSrcDesktop='https://openprocessing.org/sketch/1906372/embed/?plusEmbedHash=YTc5NWUyOGQwM2Y1YmI2NDAxNzI1OTdiMTk0ZDU3NzNlMGQzMTFlYTA4ZTdhZTQ2YmYyYmQ1YmNmOWE5OTBlYzdhZjI0OGVmYTUxNzc0MWRmYjY5MDg2ZjhhODk5MGQwYzk3NTY2ZmE5Y2VmNGZkZmNjYzg4ZTFlMzY3NTJmNjdGdFpyU1kreXlyMTRiUW15OHRKTmZmN0ZpV2h2UktVNWhBMld1YkRpWWF5L2NvMDVjWXU5V2llZTRyYnVSWmJMQTN1LzRkaitiQUdOZ3dPK1pocXJzdz09'
      />
      {/* Add other sliders here */}
      {/* Replace the iframeSrcMobile and iframeSrcDesktop with the respective values for other sliders */}
      <Sim
        position='right'
        simId='slider2'
        title='Play'
        iframeSrcMobile='https://openprocessing.org/sketch/XXXX/embed/'
        iframeSrcDesktop='https://openprocessing.org/sketch/XXXX/embed/'
      />
      <Sim
        position='left'
        simId='slider3'
        title='Read'
        iframeSrcMobile='https://openprocessing.org/sketch/XXXX/embed/'
        iframeSrcDesktop='https://openprocessing.org/sketch/XXXX/embed/'
      />
    </div>
  );
};

export default Sims;
