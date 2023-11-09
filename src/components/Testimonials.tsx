import React from "react";
import "./Testimonials.css";

const Testimonials: React.FC = () => {
  return (
    <main className='testimonials-container'>
      <h2 className='testimonials-heading'>Testimonials</h2>
      <figure className='testimonial'>
        <figcaption>
          <blockquote>
            <p>Space for someone to, hopefully, say something nice.</p>
          </blockquote>
          <h3>Tom Chu</h3>
          <h4>Husband of person with hemianopsia</h4>
        </figcaption>
      </figure>
      <figure className='testimonial'>
        <figcaption>
          <blockquote>
            <p>Another space for someone to, hopefully, say something nice.</p>
          </blockquote>
          <h3>Belius Szabo</h3>
          <h4>Optometry student</h4>
        </figcaption>
      </figure>
      <figure className='testimonial'>
        <figcaption>
          <blockquote>
            <p>
              Yet another space for someone to, hopefully, say something nice.
            </p>
          </blockquote>
          <h3>Solana Durek</h3>
          <h4>Parent of child with hemianopsia</h4>
        </figcaption>
      </figure>
    </main>
  );
};

export default Testimonials;
