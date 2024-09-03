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
          <nav className="flex flex-col md:flex-row md:space-x-20 text-[17px]  mobile:text-sm mobile:text-center font-semibold">
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
              to="/About"
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
              to="/Products"
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
              to="/Services"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-green-400 transition-colors duration-300 p-4 md:p-0"
                  : "text-black hover:text-green-400 transition-colors duration-300 p-4 md:p-0"
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
                  ? "text-green-400 transition-colors duration-300 p-4 md:p-0"
                  : "text-black hover:text-green-400 transition-colors duration-300 p-4 md:p-0"
              }
              exact
            >
               CLIENTS
            </NavLink>
            <NavLink
              to="/Contact"
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
              to="/Contact"
              onClick={closeMenu}
              className="bg-orange-500 text-white text-lg px-4 py-2 font-semibold rounded mobile:text-sm   hover:bg-orange-600 transition-colors duration-300"
              exact
            >
              CONTACT US
            </NavLink>
          </div>
        </div>

        <NavLink
          to="/Contact"
          className="hidden md:block bg-orange-500 text-[17px]  mobile:text-sm  text-white px-8 py-3 font-semibold rounded hover:bg-orange-600 transition-colors duration-300"
          exact
        >
CONTACT US
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

// import React, { useState, useEffect, useRef } from 'react';
// import { NavLink } from 'react-router-dom';
// import logo from "../assets/images/logo.svg";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   // Function to check screen size and set menu state
//   const checkScreenSize = () => {
//     if (window.innerWidth <= 1025) {
//       setIsMenuOpen(true); // Open menu on mobile and tablet
//     } else {
//       setIsMenuOpen(false); // Close menu on larger screens
//     }
//   };

//   useEffect(() => {
//     checkScreenSize(); // Check screen size on component mount

//     // Update menu state on window resize
//     window.addEventListener('resize', checkScreenSize);
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   // Handle menu toggle
//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Close menu
//   const closeMenu = () => {
//     if (window.innerWidth <= 1025) {
//       setIsMenuOpen(false);
//     }
//   };

//   // Handle click outside to close menu
//   const handleClickOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setIsMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (isMenuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isMenuOpen]);

//   return (
//     <header className="bg-white shadow-md w-full z-40 font-poppins">
//       <div className="container mx-auto flex justify-between items-center p-5">
//         <NavLink to="/" className="flex items-center">
//           <img src={logo} alt="logo" className="h-14" />
//         </NavLink>

//         {/* Toggle button for mobile/tablet */}
//         <button
//           onClick={handleMenuToggle}
//           className="laptop:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//           </svg>
//         </button>

//         {/* Navigation links */}
//         <div
//           ref={menuRef}  // Reference to the menu
//           className={`tablet:fixed inset-x-0 top-20 bg-white shadow-md  lg:top-0 lg:bg-transparent lg:shadow-none lg:flex lg:items-center lg:space-x-8 ${isMenuOpen ? 'block' : 'hidden'
//             }`}
//         >
//           <nav className="flex flex-col lg:flex-row lg:space-x-20 text-[17px] mobile:text-sm mobile:text-center font-semibold">
//             <NavLink
//               to="/"
//               onClick={closeMenu}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-green-400 transition-colors duration-300 p-4 lg:p-0"
//                   : "text-black hover:text-green-400 transition-colors duration-300 p-4 lg:p-0"
//               }
//               exact
//             >
//               HOME
//             </NavLink>
//             <NavLink
//               to="/About"
//               onClick={closeMenu}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-green-400 transition-colors duration-300 p-4 lg:p-0"
//                   : "text-black hover:text-green-400 transition-colors duration-300 p-4 lg:p-0"
//               }
//               exact
//             >
//               ABOUT
//             </NavLink>
//             <NavLink
//               to="/Products"
//               onClick={closeMenu}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-green-400 transition-colors duration-300 p-4 lg:p-0"
//                   : "text-black hover:text-green-400 transition-colors duration-300 p-4 lg:p-0"
//               }
//               exact
//             >
//               PRODUCTS
//             </NavLink>
//             <NavLink
//               to="/Services"
//               onClick={closeMenu}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-green-400 transition-colors duration-300 p-4 lg:p-0"
//                   : "text-black hover:text-green-400 transition-colors duration-300 p-4 lg:p-0"
//               }
//               exact
//             >
//               SERVICES
//             </NavLink>
//             <NavLink
//               to="/Clients"
//               onClick={closeMenu}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-green-400 transition-colors duration-300 p-4 lg:p-0"
//                   : "text-black hover:text-green-400 transition-colors duration-300 p-4 lg:p-0"
//               }
//               exact
//             >
//               CLIENTS
//             </NavLink>
//             <NavLink
//               to="/Contact"
//               onClick={closeMenu}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-green-400 transition-colors duration-300 p-4 lg:p-0"
//                   : "text-black hover:text-green-400 transition-colors duration-300 p-4 lg:p-0"
//               }
//               exact
//             >
//               CONTACT
//             </NavLink>
//           </nav>
//           <div className="flex justify-center mt-4 lg:hidden">
//             <NavLink
//               to="/Contact"
//               onClick={closeMenu}
//               className="bg-orange-500 text-white text-lg px-4 py-2 font-semibold rounded mobile:text-sm hover:bg-orange-600 transition-colors duration-300"
//               exact
//             >
//               CONTACT US
//             </NavLink>
//           </div>
//         </div>

//         {/* Contact Us button for desktop */}
//         <NavLink
//           to="/Contact"
//           className="hidden lg:block bg-orange-500 text-[17px] mobile:text-sm text-white px-8 py-3 font-semibold rounded hover:bg-orange-600 transition-colors duration-300"
//           exact
//         >
//           CONTACT US
//         </NavLink>
//       </div>
//     </header>
//   );
// };

// export default Header;
