import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <main className='about-container'>
      <section className='about-section'>
        <h1 className='about-heading'>About</h1>
        <p className='about-paragraph'>
          Hemianopsia Sims grew out of a unique challenge in my teaching career:
          helping Eva, a fourth-grade student with hemianopsia, convey to her
          classmates how she perceived the world. When words proved
          insufficient, I crafted a few interactive activities to give Eva's
          peers a glimpse into her visual experience.
        </p>
        <p className='about-paragraph'>
          The response to these simple simulations was unexpectedly profound —
          Eva's classmates embraced their new understanding of hemianopsia,
          applying it in thoughtful ways to make her school day easier.
        </p>
        <p className='about-paragraph'>
          The mission of this website is to extend the impact of these tools
          beyond a single classroom by sharing them with the world. If you see
          value in them, please join in by spreading the word! Together, we can
          increase understanding of hemianopsia, one simulation at a time.
        </p>
      </section>
    </main>
  );
};

export default About;
