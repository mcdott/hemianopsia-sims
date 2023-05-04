import React, { useRef } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sims from "./components/Sims";
import Footer from "./components/Footer";
import About from "./components/About";
// import Draw from "./components/Draw";
import Hemianopsia from "./components/Hemianopsia";

function App() {
  const simsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToSims = () => {
    if (simsRef.current) {
      simsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Navbar scrollToSims={scrollToSims} scrollToAbout={scrollToAbout} />
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
                <div ref={aboutRef}>
                  <About />
                </div>
              </>
            }
          />
          <Route path='/hemianopsia' element={<Hemianopsia />} />
          {/* <Route path='/draw' element={<Draw />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// separate pages for each section:
// import React, { useRef } from "react";
// import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Sliders from "./components/Sliders";
// import Footer from "./components/Footer";
// import About from "./components/About";
// import Draw from "./components/Draw";

// function App() {
//   const slidersRef = useRef<HTMLDivElement>(null);

//   const scrollToSliders = () => {
//     if (slidersRef.current) {
//       slidersRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <Router>
//       <div className='flex flex-col min-h-screen'>
//         <Navbar scrollToSliders={scrollToSliders} />
//         <Routes>
//           <Route
//             path='/'
//             element={
//               <>
//                 <div className='relative h-screen'>
//                   <Hero scrollToSliders={scrollToSliders} />
//                 </div>
//                 <div ref={slidersRef}>
//                   <Sliders />
//                 </div>
//               </>
//             }
//           />
//           <Route path='/about' element={<About />} />
//           <Route path='/draw' element={<Draw />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
