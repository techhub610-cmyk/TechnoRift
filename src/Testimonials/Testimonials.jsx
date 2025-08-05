import React, { useState, useEffect } from "react";

const TestimonialsCarousel = () => {
    const testimonials = [
        {
            quote: "Technorifts transformed our online presence. Their web development expertise is unmatched!",
            author: "Sarah Chen, CEO of InnovateCorp"
        },
        {
            quote: "The SEO course was incredibly insightful. We saw immediate results in our organic rankings.",
            author: "Mark Johnson, Digital Marketing Manager"
        },
        {
            quote: "Their marketing strategies are truly innovative. Our lead generation has never been better.",
            author: "Emily White, Founder of Creative Solutions"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % testimonials.length
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % testimonials.length
        );
    };

    return (
        <section className="py-20 px-6 md:px-12 bg-[#030460] text-white relative overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                What Our Clients Say
            </h2>

            <div className="relative max-w-4xl mx-auto">
                {/* Carousel Controls */}
                <button
                    onClick={goToPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-[#02B4D8] p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 z-30"
                    aria-label="Previous testimonial"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-[#02B4D8] p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 z-30"
                    aria-label="Next testimonial"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

                {/* Testimonial Card */}
                <div className="bg-white text-[#02B4D8] p-8 md:p-10 rounded-2xl shadow-xl border border-white transition-all duration-500">
                    <p className="text-xl md:text-2xl italic font-medium mb-6 text-center">
                        “{testimonials[currentIndex].quote}”
                    </p>
                    <p className="text-lg font-bold text-center">- {testimonials[currentIndex].author}</p>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsCarousel;
