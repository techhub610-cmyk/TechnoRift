// import React, { useState, useEffect } from 'react';
// import 'animate.css';

// const ModalComponent = () => {
//   const [isOpen, setIsOpen] = useState(true); // Show on page load

//   useEffect(() => {
//     // Optional: if you want to add delay before modal shows
//     // const timer = setTimeout(() => setIsOpen(true), 1000); // show after 1 second
//     // return () => clearTimeout(timer);
//   }, []);

//   const closeModal = () => {
//     setIsOpen(false); // Hides the modal
//   };

//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg overflow-hidden shadow-lg animate__animated animate__zoomInDown w-full max-w-2xl relative">
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-xl text-gray-500 hover:text-red-500"
//             >
//               &times;
//             </button>

//             <div className="flex flex-col md:flex-row">
//               <div
//                 className="w-full md:w-1/2 min-h-[200px] bg-cover bg-center"
//                 style={{
//                   backgroundImage:
//                     "url('https://images.unsplash.com/photo-1525097596740-cb2a70e07e3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
//                 }}
//               ></div>

//               <div className="w-full md:w-1/2 p-6 text-center">
//                 <h2 className="text-2xl font-semibold mb-2">
//                   Welcome to Our Website
//                 </h2>
//                 <p className="text-gray-600 mb-4">
//                   This is an automatic modal on page load using Animate.css.
//                 </p>
//                 <button
//                   onClick={closeModal}
//                   className="w-full bg-[#28304e] text-white px-4 py-3 rounded-md uppercase font-semibold"
//                 >
//                   Close 
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ModalComponent;



import React, { useState, useEffect } from 'react';
import 'animate.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import poster1 from "../Assets/poster1.jpg"
import poster2 from "../Assets/Azadi sale Graphic designing-03-min.jpg"
import poster3 from "../Assets/Azadi sale Digital Marketing-01-min.jpg"

const posters = [
    poster1,
    poster2,
    poster3
];

const ModalComponent = () => {
    const [isOpen, setIsOpen] = useState(true); // Show on page load
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % posters.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + posters.length) % posters.length);
    };

    // Optional: Auto slide every 3 seconds
    useEffect(() => {
        const timer = setInterval(nextSlide, 3000); // autoplay
        return () => clearInterval(timer); // clear on unmount
    }, []);

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="bg-[radial-gradient(circle_at_right,_#02B4D8_0%,_#0a0a0a_60%,_black_100%)] rounded-lg shadow-lg animate__animated animate__zoomInDown w-full max-w-3xl relative overflow-hidden">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-3xl text-white` hover:text-red-500 z-10"
                        >
                            &times;
                        </button>

                        {/* Poster Slider */}
                        <div className="relative w-full h-[400px] flex items-center justify-center">
                            {/* Arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 text-white bg-black bg-opacity-50 p-2 rounded-full z-10"
                            >
                                <FaChevronLeft size={20} />
                            </button>
                            <img
                                src={posters[current]}
                                alt={`Poster ${current + 1}`}
                                className="max-w-full max-h-full object-contain"
                            />

                            <button
                                onClick={nextSlide}
                                className="absolute right-4 text-white bg-black bg-opacity-50 p-2 rounded-full z-10"
                            >
                                <FaChevronRight size={20} />
                            </button>
                        </div>

                        {/* Bottom Text + Close */}
                        <div className="p-6 text-center">
                            <h2 className="text-2xl font-semibold mb-2 text-white">
                                Welcome to TechHub!
                            </h2>
                            <p className="text-white mb-4">
                                Check out our latest course posters and offerings.
                            </p>
                            <button
                                onClick={closeModal}
                                className="bg-[#28304e] text-white px-6 py-3 rounded-md uppercase font-semibold"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalComponent;
