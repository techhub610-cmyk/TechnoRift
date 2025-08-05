// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const skills = [
//   { title: "Design & Branding", percent: 90 },
//   { title: "Web & App Development", percent: 85 },
//   { title: "Digital Marketing", percent: 94 },
//   { title: "Social Media Marketing", percent: 84 },
//   { title: "SEO", percent: 82 },
// ];

// const SkillsSection = () => {
//   const [progress, setProgress] = useState(skills.map(() => 0));

//   useEffect(() => {
//     const timers = skills.map((skill, index) => {
//       return setTimeout(() => {
//         setProgress((prev) => {
//           const newProgress = [...prev];
//           newProgress[index] = skill.percent;
//           return newProgress;
//         });
//       }, index * 300); // stagger animation
//     });

//     return () => timers.forEach(clearTimeout);
//   }, []);

//   return (
//     <section className="min-h-screen bg-blue-900 text-white px-4 py-20 flex items-center">
//       <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
//         <div>
//           <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//             We Work Together To <br /> and Drive Your Business Growth, <br /> Delivering The Best
//           </h2>
//           <p className="mb-6 text-lg text-gray-300">
//             We are a dynamic and passionate team of experts with a problem-solving and growth mindset. With years of experience in delivering innovative marketing solutions, customized strategies, and channel expertise, we help elevate businesses and build their brand voice.
//           </p>
//           <p className="text-gray-200">
//             Our high-energy and diverse approach allows us to develop world class digital experiences that drive business growth.
//           </p>
//           <button className="mt-8 inline-flex items-center text-sm font-semibold border border-white px-6 py-3 hover:bg-white hover:text-black transition">
//             → Get Free Proposal
//           </button>
//         </div>

//         <div className="space-y-6">
//           {skills.map((skill, index) => (
//             <div key={index}>
//               <div className="flex justify-between mb-1">
//                 <span className="font-semibold text-white">{skill.title}</span>
//                 <span className="text-white">{progress[index]}%</span>
//               </div>
//               <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: `${progress[index]}%` }}
//                   transition={{ duration: 1 }}
//                   className="h-full bg-gradient-to-r from-pink-500 to-red-500 rounded-full"
//                 ></motion.div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;




import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const skills = [
    { title: "Design & Branding", percent: 90 },
    { title: "Web & App Development", percent: 85 },
    { title: "Digital Marketing", percent: 94 },
    { title: "Social Media Marketing", percent: 84 },
    { title: "SEO", percent: 82 },
];

const SkillsSection = () => {
    const [progress, setProgress] = useState(skills.map(() => 0));

    useEffect(() => {
        const timers = skills.map((skill, index) => {
            return setTimeout(() => {
                setProgress((prev) => {
                    const newProgress = [...prev];
                    newProgress[index] = skill.percent;
                    return newProgress;
                });
            }, index * 300); // stagger animation
        });

        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <section className="relative min-h-screen px-4 py-20 flex items-center overflow-hidden">
            {/* Solid Background Color */}
            <div className="absolute inset-0 bg-[#030460] z-0"></div>

            <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 text-white">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Powering Your Vision <br />With Smart Digital Solutions <br /> That Drive Impact
                    </h2>
                    <p className="mb-6 text-lg text-gray-300">
                       At TechnoRift, we’re more than just developers—we’re your growth partners. With a bold, problem-solving mindset and years of experience, our passionate team delivers tailored digital solutions and data-driven strategies that amplify your brand and accelerate success. From powerful software to seamless user experiences, we build the digital foundation that drives your business forward.
                    </p>
                    <p className="text-gray-200"></p>
                    <a
                        href="#"
                        className="inline-flex items-center group relative overflow-hidden text-lg font-semibold text-[#fcfcfc] transition duration-300 hover:shadow-lg"
                    >
                        <span
                            className="absolute left-0 top-0 h-full w-full bg-[#02B4D8] z-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out rounded-full"
                        ></span>
                        <span className="relative z-10 flex items-center px-6 py-2">
                            <span className="w-4 h-4 bg-[#02B4D8] rounded-full mr-3 transition-transform duration-300 group-hover:scale-115"></span>
                            <Link to="/calendar" className="group-hover:text-white text-white transition duration-300">Get Free Proposal </Link>
                            <span className="ml-2 transform text-white group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </span>
                    </a>
                </div>

                <div className="space-y-6">
                    {skills.map((skill, index) => (
                        <div key={index}>
                            <div className="flex justify-between mb-1">
                                <span className="font-semibold text-white">{skill.title}</span>
                                <span className="text-white">{progress[index]}%</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress[index]}%` }}
                                    transition={{ duration: 1 }}
                                    style={{ backgroundColor: "#02B4D8" }}
                                    className="h-full rounded-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
