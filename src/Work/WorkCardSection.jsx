// import React from "react";
// import mazito from "../Assets/mazito.jpg";
// import HSK from "../Assets/HSK.avif";
// import allan from "../Assets/allan.avif";
// import MCQueenz from "../Assets/mcq.avif";
// import excel from "../Assets/excel.avif";
// import BellBoy from "../Assets/bell.avif";
// import instafixit from "../Assets/insta.avif";


// const projects = [
//   {
//     title: "Mazito",
//     description:
//       "Mazito is a pet-friendly social platform that helps you connect with your pets, other pet lovers, and your community",
//     img: mazito,
//     bg: "from-[#0078B5] to-[#f9633a]",
//     hoverBorderColor: "bg-[#f9633a]",
//   },
//   {
//     title: "HSK Motors",
//     description:
//       "HSK Motors offers top-tier auto services supported by a strong digital presence through web development, branding, and social media marketing.",
//     img: HSK,
//     bg: "from-[#0078B5] to-[#fdfb05]",
//     hoverBorderColor: "bg-yellow-300",
//   },
//   {
//     title: "Allan Technologies",
//     description:
//       "Allan Technologies is a forward-thinking IT company providing cutting-edge solutions in web development, branding, and digital marketing to help businesses grow online.",
//     img: allan,
//     bg: "from-blue-400 to-[#030460]",
//     hoverBorderColor: "bg-white",
//   },
//   {
//     title: "MC Queenz Cafe",
//     description: "A cozy and modern café offering handcrafted beverages and fresh bites, brought to life with a vibrant brand identity and digital presence.",
//     img: MCQueenz, // replace with your actual image import
//     bg: "from-[#8B4513] to-[#2F1B0C]", // coffee-themed gradient suggestion
//     hoverBorderColor: "bg-[#da1f1b]",

//   },
//   {
//     title: "Excelencia Education Consultancy",
//     description: "Excelencia guides students toward global academic success through expert counseling, admission support, and visa guidance.",
//     img: excel, // replace with your image import
//     bg: "from-[#1E3A8A] to-[#000000]",
//     hoverBorderColor: "bg-[#76a534]",
//   },
//   {
//     title: "BellBoy",
//     description: "BellBoy is a smart delivery and logistics platform offering fast, reliable, and tech-driven solutions for businesses and individuals.",
//     img: BellBoy, // replace with your image import
//     bg: "from-green-500 to-[#0f172a]",
//     hoverBorderColor: "bg-[#f9a321]",

//   },
//   {
//     title: "Instafixit",
//     description: "Instafixit is an on-demand home repair and maintenance service, connecting users with trusted professionals for quick and reliable solutions.",
//     img: instafixit, // replace with your actual image import
//     bg: "from-[#00A88E] to-[#004C3F]",
//     hoverBorderColor: "bg-[#e7541c]",

//   }
// ];

// const WorkCardSection = () => {
//   return (
//     <section className="bg-[#111] py-20 px-4">
//       <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
//         {projects.map((project, idx) => (
//           <div
//             key={idx}
//             className={`group relative rounded-[20px] overflow-hidden bg-gradient-to-t ${project.bg} shadow-lg transform transition-transform duration-300 hover:scale-105`}
//           >
//             {/* Image */}
//             <div className="w-full h-64 bg-black">
//               <img
//                 src={project.img}
//                 alt={project.title}
//                 className="w-full h-full object-center"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-6 text-white space-y-2">
//               <h3 className="text-xl font-extrabold">{project.title}</h3>
//               <p className="text-sm leading-relaxed">{project.description}</p>
//             </div>

//             {/* Hover Bottom Border - always pinned to bottom of card */}
//             <div
//               className={`absolute bottom-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${project.hoverBorderColor}`}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WorkCardSection;
