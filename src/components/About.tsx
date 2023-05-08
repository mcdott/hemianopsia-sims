import React from "react";

const About: React.FC = () => {
  return (
    <div className='container mx-auto px-4 py-12 text-neutral-900'>
      <div className='text-center'>
        <h1 className='text-3xl lg:text-4xl font-bold mb-8'>About</h1>
        <p className='text-lg mx-auto max-w-3xl mb-12'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris.
        </p>
      </div>
      <h2 className='text-center text-2xl font-semibold mb-6'>Testimonials</h2>
      <div className='bg-tertiary p-6 rounded-lg mx-auto max-w-3xl mb-6'>
        <blockquote className='text-lg mb-6'>
          <p className='mb-4'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            Nulla quis sem at nibh elementum imperdiet."
          </p>
          <footer className='font-semibold'>
            &mdash; Pia Chowdhury, daughter of a person with hemianopsia
          </footer>
        </blockquote>
      </div>
      <div className='bg-tertiary p-6 rounded-lg mx-auto max-w-3xl mb-6'>
        <blockquote className='text-lg mb-6'>
          <p className='mb-4'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            Nulla quis sem at nibh elementum imperdiet."
          </p>
          <footer className='font-semibold'>
            &mdash; Sylvain, friend of a person with hemianopsia
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default About;
