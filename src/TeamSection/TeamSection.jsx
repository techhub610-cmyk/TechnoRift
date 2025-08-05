// import React, { useState } from "react";
// import { FaLinkedin } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import team1 from "../Assets/SIR.png";
// import team2 from "../Assets/HAMZA.jpg";
// import team3 from "../Assets/AZIB.jpg";
// import team4 from "../Assets/TALAL.jpg";

// const teamMembers = [
//   {
//     id: 1,
//     name: "Sarah Jhonson",
//     role: "CEO",
//     image: team1,
//     description: "Expert in UI/UX with 5 years of experience."
//   },
//   {
//     id: 2,
//     name: "Hamza Ali",
//     role: "Developer",
//     image: team2,
//     description: "Full Stack Developer proficient in MERN stack."
//   },
//   {
//     id: 3,
//     name: "Muhammad Azib",
//     role: "Developer",
//     image: team3,
//     description: "Growth marketing specialist with a creative edge."
//   },
//   {
//     id: 4,
//     name: "Talal Ashraf",
//     role: "Shopify",
//     image: team4,
//     description: "Creative director with a passion for branding."
//   }
// ];

// const roles = [ "All","CEO", "Developer", "Shopify", "Marketing"];

// const TeamSection = () => {
//   const [activeRole, setActiveRole] = useState("All");

//   const filteredTeam =
//     activeRole === "All"
//       ? teamMembers
//       : teamMembers.filter((member) => member.role === activeRole);

//   return (
//     <section className="bg-black py-16 text-white">
//       <div className="px-4 mx-auto max-w-screen-xl text-center lg:px-6">
//         <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
//           <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Our Team</h2>
//           <p className="font-light text-gray-400 sm:text-xl">
//             Meet the people behind the success of TechnoRift.
//           </p>
//         </div>

//         <div className="flex justify-center gap-4 mb-10 flex-wrap">
//           {roles.map((role) => (
//             <button
//               key={role}
//               onClick={() => setActiveRole(role)}
//               className={`px-4 py-2 border rounded-full text-sm font-medium transition-colors duration-300 hover:bg-white hover:text-black ${
//                 activeRole === role ? "bg-white text-black" : "text-white border-gray-500"
//               }`}
//             >
//               {role}
//             </button>
//           ))}
//         </div>

//         <div className="grid gap-8 mb-6 lg:mb-16 sm:grid-cols-2 md:grid-cols-4">
//           {filteredTeam.map(({ id, name, role, image, description }) => (
//             <div
//               key={id}
//               className="text-center rounded-lg border border-gray-700 p-6 hover:shadow-xl transition duration-300"
//             >
//               <img
//                 className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
//                 src={image}
//                 alt={name}
//                 loading="lazy"
//               />
//               <h3 className="mb-1 text-xl font-bold tracking-tight text-white">{name}</h3>
//               <p className="text-gray-400 mb-2">{role}</p>
//               <p className="text-sm text-gray-500">{description}</p>
//               <ul className="flex justify-center mt-4 space-x-4">
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-[rgb(213,86,83)]"><FaInstagram /></a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-gray-400 hover:text-blue-600 w-5 h-5"><FaLinkedin /></a>
//                 </li>
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;
