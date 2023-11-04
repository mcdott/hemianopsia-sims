import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  scrollToSims: () => void;
  scrollToAbout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSims, scrollToAbout }) => {
  const location = useLocation();

  const isHemianopsiaPage = location.pathname === "/hemianopsia";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='nav-container'>
      <ul className='nav-list'>
        <li className='nav-item'>Hemianopsia Sims</li>
        <li>
          <button className='nav-button' onClick={toggleMobileMenu}>
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
          <ul
            className={`${
              isMobileMenuOpen ? "mobile-menu-open" : "mobile-menu"
            } md-static md-bg-transparent md-flex items-center space-x-4 transition-all duration-300`}
          >
            {isHemianopsiaPage ? (
              <li className='nav-link'>
                <Link to='/' className='link-hover transition-duration'>
                  Home
                </Link>
              </li>
            ) : (
              <>
                <li className='nav-link md-border-none max-w-xs'>
                  <button
                    className='link-hover transition-duration'
                    onClick={scrollToSims}
                  >
                    Simulations
                  </button>
                </li>
                <li className='nav-link md-border-none max-w-xs'>
                  <button
                    className='link-hover transition-duration'
                    onClick={scrollToAbout}
                  >
                    About
                  </button>
                </li>
                <li>
                  <Link
                    to='/hemianopsia'
                    className='link-hover transition-duration'
                  >
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
