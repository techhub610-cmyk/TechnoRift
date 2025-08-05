import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AdvertisementSection() {
  return (
    <section className="relative bg-[#030460] px-4 sm:px-6 lg:px-24 pt-24 pb-32 overflow-visible">
      {/* Background Dots */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 grid lg:grid-cols-2 items-center gap-12 max-w-7xl mx-auto">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-[#02B4D8] mb-2">Book an appointment</p>
          <h2 className="text-4xl font-bold leading-tight text-white mb-4">
            Bring Your Vision to Life <br />
            <span className="text-[#02B4D8]">With Expert-Led Innovation!</span>            </h2>
          <p className="text-lg text-blue-100 mb-6 max-w-xl">
            Take the first step toward transforming your business with a free 30-minute consultation from <span className='text-[#02B4D8]'>TechnoRift.</span> <br />Our expert team will take the time to understand your goals, assess your current digital landscape, and craft a personalized roadmap for success. Whether you need cutting-edge software, a smarter user experience, or a growth-focused strategy, we’ll provide actionable insights and tailored solutions that move your business forward — fast, focused, and future-ready.
          </p>
          <Link to="/calendar" className="bg-white text-[#02B4D8] px-6 py-3 rounded-full font-semibold hover:bg-[#02B4D8] hover:text-white transition">
            Free Consultation
          </Link>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >
          <img
            src="/Assets/mockupp.png"
            alt="Phone mockup"
            className="w-[600px] max-w-full rotate-[-5deg] drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}





// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// export default function AdvertisementSection() {
//   return (
//     <>
//       {/* TOP: SOLID BACKGROUND COLOR */}
//       <section className="relative z-10 bg-[#030460] pt-52 pb-28 px-4 sm:px-6 lg:px-24 overflow-hidden">
//         {/* Background Dots */}
//         <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
//           <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//               <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
//                 <circle cx="1" cy="1" r="1" fill="white" />
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#dots)" />
//           </svg>
//         </div>

//         {/* Grid Layout */}
//         <div className="relative grid lg:grid-cols-2 items-center gap-12 max-w-7xl mx-auto z-10">
//           {/* LEFT TEXT */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <p className="text-sm text-[#02B4D8] mb-2">Book an appointment</p>
//             <h2 className="text-4xl font-bold leading-tight text-white mb-4">
//               Bring Your Vision to Life <br />
//               <span className="text-[#02B4D8]">With Expert-Led Innovation!</span>
//             </h2>
// <p className="text-lg text-blue-100 mb-6 max-w-xl">
//   Take the first step toward transforming your business with a free 30-minute consultation from <span className='text-[#02B4D8]'>TechnoRift.</span> <br />Our expert team will take the time to understand your goals, assess your current digital landscape, and craft a personalized roadmap for success. Whether you need cutting-edge software, a smarter user experience, or a growth-focused strategy, we’ll provide actionable insights and tailored solutions that move your business forward — fast, focused, and future-ready.
// </p>
// <Link to="/calendar" className="bg-white text-[#02B4D8] px-6 py-3 rounded-full font-semibold hover:bg-[#02B4D8] hover:text-white transition">
//   Free Consultation
// </Link>
//           </motion.div>

//           {/* RIGHT IMAGE (overlapping) */}
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="relative flex justify-center items-center"
//           >
//             <img
//               src="/combined-phones.png"
//               alt="Phones"
//               className="w-full max-w-[700px] absolute -bottom-44 right-0 rotate-[-5deg] drop-shadow-2xl z-20"
//             />
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }
