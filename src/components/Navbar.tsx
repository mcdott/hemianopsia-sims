// Navbar.tsx

import React from "react";

interface NavbarProps {
  scrollToSims: () => void;
  scrollToHemianopsia: () => void;
  scrollToAbout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  scrollToSims,
  scrollToHemianopsia,
  scrollToAbout,
}) => {
  return (
    <nav className='bg-blue-500 p-4 text-white font-bold'>
      <ul className='flex items-center justify-between'>
        <li className='text-2xl'>Hemianopsia Sims</li>
        <li>
          <ul className='flex items-center space-x-4'>
            <li>
              <button onClick={scrollToSims}>Simulations</button>
            </li>
            <li>
              <button onClick={scrollToHemianopsia}>Hemianopsia</button>
            </li>
            <li>
              <button onClick={scrollToAbout}>About</button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
