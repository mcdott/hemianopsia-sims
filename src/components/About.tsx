import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <main className='about-container'>
      <section className='about-section'>
        <h1 className='about-heading'>About</h1>
        <p className='about-paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris.
        </p>
      </section>
      <section>
        <h2 className='about-subheading'>Testimonials</h2>
        <figure className='about-figure'>
          <blockquote className='about-blockquote'>
            <p className='mb-4'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet."
            </p>
            <figcaption className='about-figcaption'>
              &mdash; Pia Chowdhury, daughter of a person with hemianopsia
            </figcaption>
          </blockquote>
        </figure>
        <figure className='about-figure'>
          <blockquote className='about-blockquote'>
            <p className='mb-4'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet."
            </p>
            <figcaption className='about-figcaption'>
              &mdash; Sylvain, friend of a person with hemianopsia
            </figcaption>
          </blockquote>
        </figure>
      </section>
    </main>
  );
};

export default About;
