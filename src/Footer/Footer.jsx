// import React from "react";
// import logo from "../Assets/technorift.png";
// import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
// import { Link } from "react-router-dom";
// // import BirdsBackground from "../BirdsBackground/BirdsBackground";

// const Footer = () => {
//   const socialLinks = [
//     {
//       icon: FaLinkedinIn,
//       url: "https://www.linkedin.com/company/technorift/",
//     },
//     {
//       icon: FaInstagram,
//       url: "https://www.instagram.com/technorift600/profilecard/?igsh=dnphNnlrcW11cnc0",
//     },
//     {
//       icon: FaFacebookF,
//       url: "https://www.facebook.com/share/1CYyH5zVnc/?mibextid=wwXIfr",
//     },
//     {
//       icon: FaYoutube,
//       url: "https://youtube.com/@techhub-600?si=h_FyLdtS2dKP6qr3",
//     },
//     {
//       icon: FaTiktok,
//       url: "https://www.tiktok.com/@techhub41?_t=ZN-8yH5F7HK2Y2&_r=1",
//     },
//   ];

//   return (
//     <footer className="relative overflow-hidden text-white px-6 py-24 isolate">
//       {/* ✅ Birds Animation Behind Footer Only */}
//       {/* <div className="absolute inset-0 z-[-1] pointer-events-none">
//         <BirdsBackground />
//       </div> */}

//       {/* ✅ Transparent Gradient Layer */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_#02B4D8_0%,_#0a0a0a_60%,_black_100%)] opacity-90 z-[-1]" />

//       {/* ✅ Watermark Logo */}
//       <div className="absolute inset-0 flex items-center justify-center opacity-5 z-[-1]">
//         <img src={logo} alt="Watermark" className="max-w-[700px]" />
//       </div>

//       {/* ✅ Footer Content */}
//       <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 text-center lg:text-left">
//         {/* Left Column */}
//         <div className="space-y-8 lg:col-span-2">
//           <h2 className="text-5xl font-extrabold leading-tight">
//             Builds Your <span className="text-[#02B4D8]">Brand</span> Voice
//           </h2>
//           <p className="text-lg text-gray-300 font-medium">
//             Elevate your brand with our Expert Digital Marketing Services
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             <div>
//               <h3 className="text-2xl font-bold mb-4">Expertise</h3>
//               <ul className="text-lg space-y-3 text-gray-300 font-medium">
//                 <li>Website Design & Development</li>
//                 <li>Graphic Designing & Video Editing</li>
//                 <li>Branding</li>
//                 <li>Social Media Marketing</li>
//                 <li>UI/UX</li>
//                 <li>Social Media Management</li>
//                 <li>Search Engine Optimization</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold mb-4">About</h3>
//               <ul className="text-lg space-y-3 text-gray-300 font-medium">
//                 <li className="hover:text-[#02B4D8]">
//                   <Link to="/about">About Us</Link>
//                 </li>
//                 <li className="hover:text-[#02B4D8]">
//                   <Link to="/expertise">Expertise</Link>
//                 </li>
//                 <li className="hover:text-[#02B4D8]">
//                   <Link to="/blog">Blog</Link>
//                 </li>
//                 <li className="hover:text-[#02B4D8]">
//                   <Link to="/contact">Contact Us</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="space-y-8">
//           <div>
//             <h3 className="text-xl font-bold underline">Book Your Appointment</h3>
//             <p className="text-3xl font-extrabold mt-2">+923171708491</p>
//             <p className="text-lg text-gray-300 font-medium">Pakistan</p>
//           </div>

//           {/* ✅ Social Icons with Links */}
//           <div className="flex gap-6 justify-center lg:justify-start text-2xl mt-4">
//             {socialLinks.map(({ icon: Icon, url }, index) => (
//               <a
//                 key={index}
//                 href={url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="transition-all duration-300 hover:text-[#02B4D8] hover:-translate-y-1"
//               >
//                 <Icon className="cursor-pointer" />
//               </a>
//             ))}
//           </div>

//           <div>
//             <h3 className="text-2xl font-bold leading-snug">
//               Subscribe for<br />Newsletter
//             </h3>
//             <div className="flex items-center mt-4 bg-white rounded-full overflow-hidden w-full max-w-sm mx-auto lg:mx-0">
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="flex-1 px-5 py-3 text-black text-lg font-medium focus:outline-none"
//               />
//               <button className="text-red-500 text-lg font-semibold px-4">Subscribe</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom Text */}
//       <div className="relative z-10 text-center text-sm text-gray-400 mt-16 font-medium">
//         Privacy Policy | Terms & Condition © 2025 All rights reserved TechnoRift
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import logo from "../Assets/technorift.png";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
// import BirdsBackground from "../BirdsBackground/BirdsBackground";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/company/technorift/",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/technorift600/profilecard/?igsh=dnphNnlrcW11cnc0",
    },
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/share/1CYyH5zVnc/?mibextid=wwXIfr",
    },
    {
      icon: FaYoutube,
      url: "https://youtube.com/@techhub-600?si=h_FyLdtS2dKP6qr3",
    },
    {
      icon: FaTiktok,
      url: "https://www.tiktok.com/@techhub41?_t=ZN-8yH5F7HK2Y2&_r=1",
    },
  ];

  return (
    <footer className="relative overflow-hidden text-white px-6 py-24 isolate">
      {/* ✅ Birds Animation Behind Footer Only */}
      {/* <div className="absolute inset-0 z-[-1] pointer-events-none">
        <BirdsBackground />
      </div> */}

      {/* ✅ Transparent Gradient Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_#02B4D8_0%,_#0a0a0a_60%,_black_100%)] opacity-90 z-[-1]" />

      {/* ✅ Watermark Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 z-[-1]">
        <img src={logo} alt="Watermark" className="max-w-[700px]" />
      </div>

      {/* ✅ Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 text-center lg:text-left">
        {/* Left Column */}
        <div className="space-y-8 lg:col-span-2">
          <h2 className="text-5xl font-extrabold leading-tight">
            Builds Your <span className="text-[#02B4D8]">Brand</span> Voice
          </h2>
          <p className="text-lg text-gray-300 font-medium">
            Elevate your brand with our Expert Digital Marketing Services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">Expertise</h3>
              <ul className="text-lg space-y-3 text-gray-300 font-medium">
                <li>Website Design & Development</li>
                <li>Graphic Designing & Video Editing</li>
                <li>Branding</li>
                <li>Social Media Marketing</li>
                <li>UI/UX</li>
                <li>Social Media Management</li>
                <li>Search Engine Optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">About</h3>
              <ul className="text-lg space-y-3 text-gray-300 font-medium">
                <li className="hover:text-[#02B4D8]">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="hover:text-[#02B4D8]">
                  <Link to="/expertise">Expertise</Link>
                </li>
                <li className="hover:text-[#02B4D8]">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="hover:text-[#02B4D8]">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold underline">Book Your Appointment</h3>
            <p className="text-3xl font-extrabold mt-2">+92308 1122334</p>
            <p className="text-3xl font-extrabold mt-2">+92317 1708491</p>
            <p className="text-3xl font-extrabold mt-2">+92321 7834384</p>
            <p className="text-lg text-gray-300 font-medium">Pakistan</p>
          </div>

          {/* ✅ Social Icons with Links */}
          <div className="flex gap-6 justify-center lg:justify-start text-2xl mt-4">
            {socialLinks.map(({ icon: Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:text-[#02B4D8] hover:-translate-y-1"
              >
                <Icon className="cursor-pointer" />
              </a>
            ))}
          </div>

          {/* ✅ Newsletter Form (SheetMonkey Connected) */}
          <div>
            <h3 className="text-2xl font-bold leading-snug">
              Subscribe for<br />Newsletter
            </h3>
            <form
              action="https://api.sheetmonkey.io/form/qWE4tLsg8X1Rmf4kubduPV"
              method="POST"
              className="flex items-center mt-4 bg-white rounded-full overflow-hidden w-full max-w-sm mx-auto lg:mx-0"
            >
              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                required
                className="flex-1 px-5 py-3 text-black text-lg font-medium focus:outline-none"
              />
              <button
                type="submit"
                className="text-red-500 text-lg font-semibold px-4"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="relative z-10 text-center text-sm text-gray-400 mt-16 font-medium">
        Privacy Policy | Terms & Condition © 2025 All rights reserved TechnoRift
      </div>
    </footer>
  );
};

export default Footer;
