import React, { useRef } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sims from "./components/Sims";
import Read from "./components/Read";
// import Scratch from "./components/Scratch";
import Footer from "./components/Footer";
import About from "./components/About";
// import Learn from "./components/Learn";
import Testimonials from "./components/Testimonials";

function App() {
  const simsRef = useRef<HTMLDivElement>(null);

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
                {/* <div>
                  <Scratch />
                </div> */}
                <div>
                  <Testimonials />
                </div>
              </>
            }
          />
          <Route path='/about' element={<About />} />
          {/* <Route path='/learn' element={<Learn />} /> */}
          <Route path='/read' element={<Read />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
