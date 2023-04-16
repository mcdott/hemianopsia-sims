import React, { useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Sliders from "./components/Sliders";

function App() {
  const slidersRef = useRef<HTMLDivElement>(null);

  const scrollToSliders = () => {
    if (slidersRef.current) {
      slidersRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Hero scrollToSliders={scrollToSliders} />
      <div ref={slidersRef}>
        <Sliders />
      </div>
    </div>
  );
}

export default App;
