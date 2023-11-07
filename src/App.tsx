import React, { useRef } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sims from "./components/Sims";
import Footer from "./components/Footer";
import About from "./components/About";
import Hemianopsia from "./components/Hemianopsia";

function App() {
  const simsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToSims = () => {
    if (simsRef.current) {
      simsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Navbar scrollToSims={scrollToSims} />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <div className='relative h-screen'>
                  <Hero scrollToSims={scrollToSims} />
                </div>
                <div ref={simsRef}>
                  <Sims />
                </div>
              </>
            }
          />
          <Route path='/about' element={<About />} />
          <Route path='/hemianopsia' element={<Hemianopsia />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
