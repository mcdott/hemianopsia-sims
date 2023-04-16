import React from "react";

interface NavbarProps {
  scrollToSliders: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSliders }) => {
  return (
    <nav className='bg-blue-500 p-4 text-white font-bold'>
      <ul className='flex items-center justify-between'>
        <li className='text-2xl'>Hemianopsia Sims</li>
        <li>
          <ul className='flex items-center space-x-4'>
            <li>
              <button
                className='focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors duration-300'
                onClick={scrollToSliders}
              >
                Simulations
              </button>
            </li>
            <li>
              <a
                href='#'
                className='focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors duration-300'
              >
                About
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
