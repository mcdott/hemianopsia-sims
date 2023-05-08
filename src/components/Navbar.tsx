import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  scrollToSims: () => void;
  scrollToAbout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSims, scrollToAbout }) => {
  const location = useLocation();

  const linkClassName =
    "focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors duration-300 hover:font-bold";

  const isHemianopsiaPage = location.pathname === "/hemianopsia";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='bg-primary p-4 text-white font-semibold relative z-10'>
      <ul className='flex items-center justify-between'>
        <li className='text-2xl'>Hemianopsia Sims</li>
        <li>
          {!isMobileMenuOpen && (
            <button
              className='md:hidden focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50'
              onClick={toggleMobileMenu}
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </button>
          )}
          {isMobileMenuOpen && (
            <button
              className='md:hidden focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50'
              onClick={toggleMobileMenu}
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </button>
          )}
          <ul
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } absolute bg-primary top-full right-0 md:static md:bg-transparent md:flex items-center space-x-4 transition-all duration-300`}
          >
            {isHemianopsiaPage ? (
              <li className='border-b border-white text-left p-1'>
                <Link to='/' className={`${linkClassName}`}>
                  Home
                </Link>
              </li>
            ) : (
              <>
                <li className='border-b border-white md:border-b-0 text-left p-1 max-w-xs'>
                  <button className='hover:font-bold' onClick={scrollToSims}>
                    Simulations
                  </button>
                </li>
                <li className='border-b border-white md:border-b-0 text-left p-1 max-w-xs'>
                  <button className='hover:font-bold' onClick={scrollToAbout}>
                    About
                  </button>
                </li>
                <li>
                  <Link to='/hemianopsia' className={`${linkClassName}`}>
                    What is Hemianopsia?
                  </Link>
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
