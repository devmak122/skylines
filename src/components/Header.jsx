import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md  w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="logo" className="h-12" />
        </NavLink>

        <button
          onClick={handleMenuToggle}
          className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <div className={`fixed inset-x-0 top-16 bg-white shadow-md md:relative md:top-0 md:bg-transparent md:shadow-none md:flex md:items-center md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col md:flex-row md:space-x-6 text-lg">
            <NavLink
              to="/"
              activeClassName="text-green-400"
              className="text-primary hover:text-green-400 transition-colors duration-300 p-4 md:p-0"
              exact
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="text-green-400"
              className="text-primary hover:text-green-400 transition-colors duration-300 p-4 md:p-0"
              exact
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              activeClassName="text-green-400"
              className="text-primary hover:text-green-400 transition-colors duration-300 p-4 md:p-0"
              exact
            >
              Products
            </NavLink>
            <NavLink
              to="/clients"
              activeClassName="text-green-400"
              className="text-primary hover:text-green-400 transition-colors duration-300 p-4 md:p-0"
              exact
            >
              Clients
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="text-green-400"
              className="text-primary hover:text-green-400 transition-colors duration-300 p-4 md:p-0"
              exact
            >
              Contact
            </NavLink>
          </nav>

          <NavLink
            to="/contact"
            className="bg-orange-500 text-white px-4 py-2 font-semibold rounded hover:bg-orange-600 transition-colors duration-300 mt-4 mx-4 md:mt-0 md:mx-0 md:hidden"
            exact
          >
            Contact Us
          </NavLink>
        </div>

        <NavLink
          to="/contact"
          className="hidden md:block bg-orange-500 text-white px-4 py-2 font-semibold rounded hover:bg-orange-600 transition-colors duration-300"
          exact
        >
          Contact Us
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
