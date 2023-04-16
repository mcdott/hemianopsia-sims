import React, { useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sliders from "./components/Sliders";
import Footer from "./components/Footer";

function App() {
  const slidersRef = useRef<HTMLDivElement>(null);

  const scrollToSliders = () => {
    if (slidersRef.current) {
      slidersRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='relative h-screen'>
        <Navbar scrollToSliders={scrollToSliders} />
        <Hero scrollToSliders={scrollToSliders} />
      </div>
      <div ref={slidersRef}>
        <Sliders />
      </div>
      <Footer />
    </div>
  );
}

export default App;
