import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1066) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white shadow-md w-full z-40 font-poppins top-0">
      <div className="container mx-auto flex justify-between items-center p-5">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="logo" className="h-14" />
        </NavLink>

        {/* Mobile and Tablet Menu Button */}
        <button
          onClick={handleMenuToggle}
          className="block laptop:hidden text-gray-500 hover:text-black focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Dropdown Menu for Mobile and Tablet */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } laptop:hidden absolute top-24 tablet:top-20 left-0 w-full bg-white shadow-lg`}
        >
          <nav
            className="grid grid-cols-1 tablet:grid-cols-1 gap-5 text-[17px] font-semibold items-center  text-center p-4 tablet:p-6"
          >
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-green-400 transition-colors duration-300"
                  : "text-black hover:text-green-400 transition-colors duration-300"
              }
              exact
            >
              HOME
            </NavLink>
            <NavLink
              to="/About"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-green-400 transition-colors duration-300"
                  : "text-black hover:text-green-400 transition-colors duration-300"
              }
              exact
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/Products"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-green-400 transition-colors duration-300"
                  : "text-black hover:text-green-400 transition-colors duration-300"
              }
              exact
            >
              PRODUCTS
            </NavLink>
            <NavLink
              to="/Services"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-green-400 transition-colors duration-300"
                  : "text-black hover:text-green-400 transition-colors duration-300"
              }
              exact
            >
              SERVICES
            </NavLink>
            <NavLink
              to="/Clients"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-green-400 transition-colors duration-300"
                  : "text-black hover:text-green-400 transition-colors duration-300"
              }
              exact
            >
              CLIENTS
            </NavLink>
         
          </nav>

          {/* Mobile CTA Button */}
          <div className="flex justify-center mt-4 tablet:hidden">
            <NavLink
              to="/Contact"
              onClick={closeMenu}
              className="bg-orange-500 text-white text-lg px-4 py-2 font-semibold rounded hover:bg-orange-600 transition-colors duration-300"
              exact
            >
              CONTACT US
            </NavLink>
          </div>
        </div>

        {/* Laptop View Links */}
        <nav className="hidden laptop:flex space-x-20 text-[17px] font-semibold items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 transition-colors duration-300"
                : "text-black hover:text-green-400 transition-colors duration-300"
            }
            exact
          >
            HOME
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 transition-colors duration-300"
                : "text-black hover:text-green-400 transition-colors duration-300"
            }
            exact
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/Products"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 transition-colors duration-300"
                : "text-black hover:text-green-400 transition-colors duration-300"
            }
            exact
          >
            PRODUCTS
          </NavLink>
          <NavLink
            to="/Services"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 transition-colors duration-300"
                : "text-black hover:text-green-400 transition-colors duration-300"
            }
            exact
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/Clients"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 transition-colors duration-300"
                : "text-black hover:text-green-400 transition-colors duration-300"
            }
            exact
          >
            CLIENTS
          </NavLink>
        </nav>

        {/* Laptop CTA Button */}
        <NavLink
          to="/Contact"
          className="hidden laptop:block bg-orange-500 text-[17px] text-white px-8 py-3 font-semibold rounded hover:bg-orange-600 transition-colors duration-300"
          exact
        >
          CONTACT US
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
