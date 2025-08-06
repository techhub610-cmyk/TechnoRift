import React from 'react';
import video from "../Assets/hello.mp4"

const AboutTwo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white">
      
      {/* Left Side - Video */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="w-full max-w-[500px] max-h-[350px] rounded-lg object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 md:pl-12">
        <p className="text-gray-600 mb-4 leading-relaxed">
          At TechnoRift, we are passionate about crafting digital solutions that transform businesses.
          Our team is committed to delivering impactful experiences through innovative design and seamless development.
          With each project, we strive to push the boundaries of creativity and precision.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our slogan is <span className="font-semibold text-[#02B4D8]">"Engineering Ideas Into Digital Realities."</span>
          We work hand-in-hand with our clients to understand their vision and bring it to life with cutting-edge technology
          and a future-focused mindset. Let's build your digital future together.
        </p>
      </div>

    </div>
  );
};

export default AboutTwo;
