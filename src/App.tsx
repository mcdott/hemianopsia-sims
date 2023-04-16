import React, { useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"; // Add this line
import Sliders from "./components/Sliders";

function App() {
  const slidersRef = useRef<HTMLDivElement>(null);

  const scrollToSliders = () => {
    if (slidersRef.current) {
      slidersRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='h-screen'>
      <div className='relative h-screen'>
        <Navbar scrollToSliders={scrollToSliders} /> {/* Add this line */}
        <Hero scrollToSliders={scrollToSliders} />
      </div>
      <div ref={slidersRef}>
        <Sliders />
      </div>
    </div>
  );
}

export default App;
