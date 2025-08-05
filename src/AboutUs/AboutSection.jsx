import React from "react";

const AboutSection = () => {
    return (
        <section className="bg-[#02B4D8] py-32 px-4 md:px-20">
            {/* Main Heading */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[#030460] leading-tight text-[#02B4D8]">
                    Powering Innovation: Your Agile & Trusted Tech Partner
                </h1>
            </div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center gap-10">
                {/* Left Text Content */}
                <div className="md:w-1/2 text-white space-y-6">
                    <p>
                        Welcome to TechnoRift — where technology meets creativity. As a full-service software house, we help startups and enterprises accelerate their digital transformation through robust, scalable, and intelligent solutions.
                    </p>
                    <p>
                        At TechnoRift, we believe in building meaningful digital products that solve real-world problems. Our team of expert developers, designers, and strategists work collaboratively to turn your ideas into impactful, high-performing web and mobile applications tailored to your vision.
                    </p>
                </div>

                {/* Right Video/Animation */}
                <div className="md:w-1/2 flex justify-center">
                    {/* Replace with your own video or animation */}
                    <img
                        src="/Assets/hello.gif" // path to your GIF in the public folder
                        alt="Team Working Animation"
                        className="rounded-lg shadow-lg max-w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
