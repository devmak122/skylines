import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md w-full z-40  font-poppins">
      <div className="container mx-auto flex justify-between items-center p-5">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="logo" className="h-14" />
        </NavLink>

        <button
          onClick={handleMenuToggle}
          className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <div className={`fixed inset-x-0 top-20 bg-white shadow-md md:relative md:top-0 md:bg-transparent md:shadow-none md:flex md:items-center md:space-x-8 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col md:flex-row md:space-x-20 text-lg mobile:text-center font-semibold">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-green-400 transition-colors duration-300 p-4 md:p-0"
                  : "text-black hover:text-green-400 transition-colors duration-300 p-4 md:p-0"
              }
              exact
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-green-400 transition-colors duration-300 p-4 md:p-0"
                  : "text-black hover:text-green-400 transition-colors duration-300 p-4 md:p-0"
              }
              exact
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/products"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-green-400 transition-colors duration-300 p-4 md:p-0"
                  : "text-black hover:text-green-400 transition-colors duration-300 p-4 md:p-0"
              }
              exact
            >
              PRODUCTS
            </NavLink>
            <NavLink
              to="/clients"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-green-400 transition-colors duration-300 p-4 md:p-0"
                  : "text-black hover:text-green-400 transition-colors duration-300 p-4 md:p-0"
              }
              exact
            >
               CLIENTS
            </NavLink>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-green-400 transition-colors duration-300 p-4 md:p-0"
                  : "text-black hover:text-green-400 transition-colors duration-300 p-4 md:p-0"
              }
              exact
            >
               CONTACT
            </NavLink>
          </nav>
          <div className="flex justify-center mt-4 md:hidden">
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="bg-orange-500 text-white text-lg px-4 py-2 font-semibold rounded hover:bg-orange-600 transition-colors duration-300"
              exact
            >
              CONTACT US
            </NavLink>
          </div>
        </div>

        <NavLink
          to="/contact"
          className="hidden md:block bg-orange-500 text-lg text-white px-8 py-3 font-semibold rounded hover:bg-orange-600 transition-colors duration-300"
          exact
        >
CONTACT US
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
