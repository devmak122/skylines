import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.svg"

const Header = () => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-12 mr-3" />
       

      </div>
      <nav>
        <ul className="flex  text-2xl space-x-20">
          <li>
            <Link 
              to="/" 
              className="text-primary  hover:text-green-400 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="text-primary  hover:text-green-400 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/Products" 
              className="text-primary  hover:text-green-400 transition-colors duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/clients" 
              className="text-primary  hover:text-green-400 transition-colors duration-300"
            >
              Clients
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="text-primary  hover:text-green-400  transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Link 
        to="/contact" 
        className="bg-orange-500 text-white px-4 py-2 font-semibold rounded hover:text-primary transition-colors duration-300"
      >
        Contact Us
      </Link>
    </div>
  </header>
);

export default Header;
