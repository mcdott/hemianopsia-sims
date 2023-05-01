// Navbar.tsx

import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  scrollToSims: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSims }) => {
  const location = useLocation();

  const linkClassName =
    "focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors duration-300";
  const activeLinkClassName = "bg-white text-blue-500";

  return (
    <nav className='bg-blue-500 p-4 text-white font-bold'>
      <ul className='flex items-center justify-between'>
        <li className='text-2xl'>Hemianopsia Sims</li>
        <li>
          <ul className='flex items-center space-x-4'>
            <li>
              <Link
                to='/'
                className={`${linkClassName} ${
                  location.pathname === "/" ? activeLinkClassName : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <button
                className={`${linkClassName} ${
                  location.pathname === "/" ? activeLinkClassName : ""
                }`}
                onClick={scrollToSims}
              >
                Simulations
              </button>
            </li>
            <li>
              <Link
                to='/hemianopsia'
                className={`${linkClassName} ${
                  location.pathname === "/hemianopsia"
                    ? activeLinkClassName
                    : ""
                }`}
              >
                Hemianopsia
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className={`${linkClassName} ${
                  location.pathname === "/about" ? activeLinkClassName : ""
                }`}
              >
                About
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
