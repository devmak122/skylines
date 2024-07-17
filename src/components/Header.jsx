import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/logo.svg";

const Header = () => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <NavLink to="/" activeClassName="text-green-400">
          <img src={logo} alt="logo" className="h-12 mr-3" />
        </NavLink>
      </div>
      <nav>
        <ul className="flex text-2xl space-x-20">
          <li>
            <NavLink
              to="/"
              activeClassName="text-green-400"
              className="text-primary hover:text-green-400 transition-colors duration-300"
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="text-green-400"
              className="text-primary hover:text-green-400 transition-colors duration-300"
              exact
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              activeClassName="text-green-400"
              className="text-primary hover:text-green-400 transition-colors duration-300"
              exact
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clients"
              activeClassName="text-green-400"
              className="text-primary hover:text-green-400 transition-colors duration-300"
              exact
            >
              Clients
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="text-green-400"
              className="text-primary hover:text-green-400 transition-colors duration-300"
              exact
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink
        to="/contact"
        className="bg-orange-500 text-white px-4 py-2 font-semibold rounded hover:text-primary transition-colors duration-300"
        exact
      >
        Contact Us
      </NavLink>
    </div>
  </header>
);

export default Header;
