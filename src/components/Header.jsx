import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/my-logo-nobg.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-5 z-40 bg-black top-0 left-0 w-full flex justify-between items-center rounded transition-colors duration-300">
      <motion.div
        className=""
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img src={logo} alt="header_logo" className="h-14 w-35" />
      </motion.div>

      <motion.nav
        className="hidden lg:flex space-x-4 mr-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        {[
          "Home",
          "About",
          "Skills",
          "Projects",
          "Experience",
          "Education",
          "Contact",
        ].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-cyan-400 px-2 rounded font-bold transition duration-500 overflow-hidden hover:text-sky-100"
          >
            {item}
          </a>
        ))}
      </motion.nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black opacity-75 z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 md:hidden`}
        onClick={toggleMenu}
        style={{ overflowX: "hidden" }} // Ensure no horizontal overflow
      >
        <div className="p-4 h-1/2 flex flex-col justify-center items-center space-y-4 menu-content mt-32">
          {[
            "Home",
            "About",
            "Skills",
            "Projects",
            "Experience",
            "Education",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white px-2 py-1 rounded hover:text-sky-400 font-bold transition duration-300"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <div className="lg:hidden mr-14 pb-14">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none z-50 fixed bg-black opacity-75 p-4 flex items-center justify-center rounded-full font-bold shadow-3xl-sky"
        >
          <div className="w-6 h-6 relative">
            <span
              className={`block absolute z-50 h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                isOpen ? "rotate-45 top-2" : "top-1"
              }`}
            ></span>
            <span
              className={`block absolute z-50 h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                isOpen ? "-rotate-45 top-2" : "top-3"
              }`}
            ></span>
            <span
              className={`block absolute z-50 h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                isOpen ? "-rotate-45 top-2" : "top-5"
              }`}
            ></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import logo from "../assets/my-logo-nobg.png";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="p-5 z-40 bg-black top-0 left-0 w-full flex justify-between items-center rounded transition-colors duration-300">
//       <motion.div
//         className=""
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5 }}
//       >
//         <img src={logo} alt="header_logo" className="h-14 w-35" />
//       </motion.div>
//       {/* <motion.h1
//         className="text-2xl font-bold"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5 }}
//       >
//         <span className="text-sky-400">Sw</span>
//         <span className="gradient-text">echchha</span>
//       </motion.h1> */}

//       <motion.nav
//         className="hidden md:flex space-x-4 mr-10"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5 }}
//       >
//         {[
//           "Home",
//           "About",
//           "Skills",
//           "Projects",
//           "Experience",
//           "Education",
//           "Contact",
//         ].map((item) => (
//           <Link
//             key={item}
//             to={`/${item.toLowerCase()}`}
//             className="text-cyan-400 px-2 rounded font-bold transition duration-500 overflow-hidden hover:text-sky-100"
//           >
//             {item}
//           </Link>
//         ))}
//       </motion.nav>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed inset-0 bg-black opacity-75 z-50 transform ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-500 md:hidden`}
//         onClick={toggleMenu}
//         style={{ overflowX: "hidden" }} // Ensure no horizontal overflow
//       >
//         <div className="p-4 h-1/2 flex flex-col justify-center items-center space-y-4 menu-content">
//           {[
//             "Home",
//             "About",
//             "Skills",
//             "Projects",
//             "Experience",
//             "Education",
//             "Contact",
//           ].map((item) => (
//             <Link
//               key={item}
//               to={`/${item.toLowerCase()}`}
//               className="text-white px-2 py-1 rounded hover:text-sky-400 font-bold transition duration-300"
//               onClick={toggleMenu}
//             >
//               {item}
//             </Link>
//           ))}
//         </div>
//       </div>

//       <div className="md:hidden mr-14 pb-14">
//         <button
//           onClick={toggleMenu}
//           className="text-white focus:outline-none z-50 fixed bg-black opacity-75 p-4 flex items-center justify-center rounded-full font-bold shadow-3xl-sky"
//         >
//           <div className="w-6 h-6 relative">
//             <span
//               className={`block absolute z-50 h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
//                 isOpen ? "rotate-45 top-2" : "top-1"
//               }`}
//             ></span>
//             <span
//               className={`block absolute z-50 h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
//                 isOpen ? "-rotate-45 top-2" : "top-3"
//               }`}
//             ></span>
//             <span
//               className={`block absolute z-50 h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
//                 isOpen ? "-rotate-45 top-2" : "top-5"
//               }`}
//             ></span>
//           </div>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;
