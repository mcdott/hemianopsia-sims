import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  scrollToSims: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSims }) => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='nav-container'>
      <div className='nav-content'>
        <h1 className='nav-title'>
          Hemianopsia <span className='title-accented'>Sims</span>
        </h1>
        <button
          aria-label='Toggle navigation'
          className='nav-button'
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
      </div>
      <ul
        className={`${
          isMobileMenuOpen ? "nav-menu mobile-menu-open" : "nav-menu"
        }`}
      >
        {!isHomePage ? (
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
            <li>
              {/* <Link to='/read' className='link-hover transition-duration'>
                Read
              </Link> */}
            </li>
            <li className='nav-link md-border-none max-w-xs'>
              <Link to='/about' className='link-hover transition-duration'>
                About
              </Link>
            </li>
            {/* <li>
              <Link to='/learn' className='link-hover transition-duration'>
                Learn
              </Link>
            </li> */}
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
