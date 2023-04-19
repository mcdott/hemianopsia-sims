// App.tsx

import React, { useRef } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sliders from "./components/Sliders";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const slidersRef = useRef<HTMLDivElement>(null);

  const scrollToSliders = () => {
    if (slidersRef.current) {
      slidersRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Navbar scrollToSliders={scrollToSliders} />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <div className='relative h-screen'>
                  <Hero scrollToSliders={scrollToSliders} />
                </div>
                <div ref={slidersRef}>
                  <Sliders />
                </div>
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
