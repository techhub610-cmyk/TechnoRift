import React, { useState, useEffect } from 'react';
import 'animate.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import poster0 from "../Assets/technorift_banner.png"
// import poster1 from "../Assets/poster1.jpg"
// import poster2 from "../Assets/poster2.jpg"
// import poster3 from "../Assets/poster3.jpg"

const posters = [
    poster0,
    // poster1,
    // poster2,
    // poster3
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
                                Welcome to TechnoRift!
                            </h2>
                            <p className="text-white mb-4">
                                Check out our latest course posters and offerings.
                            </p>
                            <button
                                onClick={closeModal}
                                className="bg-[#28304e] text-white px-6 py-3 rounded-md uppercase font-semibold hover:text-red-500 z-10"

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
