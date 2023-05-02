// Navbar.tsx

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  scrollToSims: () => void;
  scrollToAbout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSims, scrollToAbout }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClassName =
    "focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors duration-300 hover:font-bold";

  const isHemianopsiaPage = location.pathname === "/hemianopsia";

  return (
    <nav className='bg-blue-500 p-4 text-white font-semibold'>
      <ul className='flex items-center justify-between'>
        <li className='text-2xl'>Hemianopsia Sims</li>
        <li>
          <button
            className='md:hidden focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors duration-300 hover:font-bold'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {/* Hamburger icon */}☰
          </button>
          <ul
            className={`${
              mobileMenuOpen ? "flex" : "hidden"
            } md:flex items-center space-x-4`}
          >
            {isHemianopsiaPage ? (
              <li>
                <Link to='/' className={`${linkClassName}`}>
                  Home
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <button className='hover:font-bold' onClick={scrollToSims}>
                    Simulations
                  </button>
                </li>
                <li>
                  <Link to='/hemianopsia' className={`${linkClassName}`}>
                    What is Hemianopsia?
                  </Link>
                </li>
                <li>
                  <button className='hover:font-bold' onClick={scrollToAbout}>
                    About
                  </button>
                </li>
              </>
            )}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
