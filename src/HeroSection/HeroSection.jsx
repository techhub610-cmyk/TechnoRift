// import React from "react";
// import img from "../Assets/back.png";
// import "../HeroSection/HeroSection.css";
// import "../HeroSection/global.css";
// import BirdsBackground from "../BirdsBackground/BirdsBackground";
// import { Link } from "react-router-dom";

// const HeroSection = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-[radial-gradient(circle_at_right,_#02B4D8_0%,_#0a0a0a_60%,_black_100%)]">
//       <BirdsBackground />

//       <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 md:px-20 text-white">
//         <div className="max-w-3xl space-y-6">
//           <h1 className="text-lg sm:text-xl md:text-4xl font-bold leading-snug md:leading-tight">
//             Transforming Brands Through <br />
//             <span className="relative inline-block w-fit">
//               <span className="relative z-10 text-[#02B4D8] font-extrabold whitespace-nowrap">
//                 Innovative Digital
//               </span>

//               {/* SVG Ellipses */}
//               <svg
//                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[220px] sm:w-[250px] md:w-[400px] h-[80px] md:h-[140px]"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 400 140"
//                 preserveAspectRatio="xMidYMid meet"
//               >
//                 <ellipse
//                   cx="200"
//                   cy="70"
//                   rx="170"
//                   ry="35"
//                   stroke="white"
//                   strokeWidth="2"
//                   fill="none"
//                   className="animated-ellipse"
//                 />
//                 <ellipse
//                   cx="200"
//                   cy="72"
//                   rx="169"
//                   ry="37"
//                   stroke="white"
//                   strokeWidth="1.5"
//                   fill="none"
//                   className="animated-ellipse"
//                 />
//               </svg>
//             </span>
//             <br />
//             Solutions
//           </h1>

//           <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
//             Empowering businesses with cutting-edge digital strategies,<br />
//             innovative technology solutions, and data-driven marketing <br />
//             to achieve sustainable growth and measurable success.
//           </p>

//           <a
//             href="#"
//             className="inline-flex items-center group relative overflow-hidden text-sm sm:text-base md:text-lg font-semibold text-[#fcfcfc] transition duration-300 hover:shadow-lg"
//           >
//             {/* Hover Background */}
//             <span className="absolute left-0 top-0 h-full w-full bg-[#02B4D8] z-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out rounded-full"></span>

//             {/* Button Content */}
//             <span className="relative z-10 flex items-center px-5 sm:px-6 py-2">
//               <span className="w-4 h-4 bg-[#02B4D8] rounded-full mr-2 sm:mr-3 transition-transform duration-300 group-hover:scale-115"></span>
//               <Link to="/calendar" className="group-hover:text-white text-white transition duration-300">
//                 Let's Get Started
//               </Link>
//               <span className="ml-2 transform text-white group-hover:translate-x-1 transition-transform duration-300">
//                 →
//               </span>
//             </span>
//           </a>
//         </div>
//       </div>

//       {/* Responsive Image */}
//       <div className="absolute bottom-4 sm:bottom-0 right-1/2 sm:right-0 transform sm:translate-x-0 translate-x-1/2 z-0 max-w-[90vw] sm:max-w-none">
//         <img
//           src={img}
//           alt="Hero"
//           className="w-[200px] sm:w-[300px] md:w-[500px] lg:w-[600px] object-contain"
//         />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";
import img from "../Assets/back.png";
import "../HeroSection/HeroSection.css";
import "../HeroSection/global.css";
import BirdsBackground from "../BirdsBackground/BirdsBackground";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative w-full h-auto sm:h-screen overflow-hidden bg-[radial-gradient(circle_at_right,_#02B4D8_0%,_#0a0a0a_60%,_black_100%)]">
      <BirdsBackground />

      {/* Layout for large screens */}
      <div className="hidden sm:flex relative z-10 justify-between items-center h-full px-4 sm:px-6 md:px-20 text-white">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-lg sm:text-xl md:text-4xl font-bold leading-snug md:leading-tight">
            Transforming Brands Through <br />
            <span className="relative inline-block w-fit">
              <span className="relative z-10 text-[#02B4D8] font-extrabold whitespace-nowrap">
                Innovative Digital
              </span>
              <svg
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[220px] sm:w-[250px] md:w-[400px] h-[80px] md:h-[140px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 140"
                preserveAspectRatio="xMidYMid meet"
              >
                <ellipse
                  cx="200"
                  cy="70"
                  rx="170"
                  ry="35"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  className="animated-ellipse"
                />
                <ellipse
                  cx="200"
                  cy="72"
                  rx="169"
                  ry="37"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  className="animated-ellipse"
                />
              </svg>
            </span>
            <br />
            Solutions
          </h1>

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            Empowering businesses with cutting-edge digital strategies,<br />
            innovative technology solutions, and data-driven marketing <br />
            to achieve sustainable growth and measurable success.
          </p>

          <a
            href="#"
            className="inline-flex items-center group relative overflow-hidden text-sm sm:text-base md:text-lg font-semibold text-[#fcfcfc] transition duration-300 hover:shadow-lg"
          >
            <span className="absolute left-0 top-0 h-full w-full bg-[#02B4D8] z-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out rounded-full"></span>
            <span className="relative z-10 flex items-center px-5 sm:px-6 py-2">
              <span className="w-4 h-4 bg-[#02B4D8] rounded-full mr-2 sm:mr-3 transition-transform duration-300 group-hover:scale-115"></span>
              <Link to="/calendar" className="group-hover:text-white text-white transition duration-300">
                Let's Get Started
              </Link>
              <span className="ml-2 transform text-white group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </a>
        </div>

        <div className="z-0">
          <img
            src={img}
            alt="Hero"
            className="w-[200px] sm:w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          />
        </div>
      </div>

      {/* Layout for small screens */}
      <div className="sm:hidden relative z-10 flex flex-col items-center justify-center text-white px-4 pt-20 pb-10 space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-xl font-bold leading-snug">
            Transforming Brands Through <br />
            <span className="relative inline-block w-fit">
              <span className="relative z-10 text-[#02B4D8] font-extrabold">
                Innovative Digital
              </span>
              <svg
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[180px] h-[60px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 140"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* <ellipse
                  cx="200"
                  cy="70"
                  rx="240"
                  ry="30"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  className="animated-ellipse"
                /> */}
                <ellipse
                  cx="200"
                  cy="72"
                  rx="248"
                  ry="32"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  className="animated-ellipse"
                />
              </svg>
            </span>{" "}
            <br />
            Solutions
          </h1>
          <p className="text-sm text-gray-300">
            Empowering businesses with cutting-edge digital strategies,<br />
            innovative technology solutions, and data-driven marketing <br />
            to achieve sustainable growth and measurable success.
          </p>

          <a
            href="#"
            className="inline-flex items-center group relative overflow-hidden text-sm font-semibold text-[#fcfcfc] transition duration-300 hover:shadow-lg"
          >
            <span className="absolute left-0 top-0 h-full w-full bg-[#02B4D8] z-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out rounded-full"></span>
            <span className="relative z-10 flex items-center px-5 py-2">
              <span className="w-4 h-4 bg-[#02B4D8] rounded-full mr-2 transition-transform duration-300 group-hover:scale-115"></span>
              <Link to="/calendar" className="group-hover:text-white text-white transition duration-300">
                Let's Get Started
              </Link>
              <span className="ml-2 transform text-white group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </a>
        </div>

        <img
          src={img}
          alt="Hero Small"
          className="w-[220px] mt-6 object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
