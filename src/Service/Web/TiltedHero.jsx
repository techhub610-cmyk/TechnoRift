import React from "react";

export default function TiltedSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#030460] to-black text-white overflow-hidden">
      {/* Text Content */}
      <div className="relative z-10 max-w-6xl mx-auto py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#02B4D8]">
          Searching for a Tech-Driven Digital Solution? <br className="hidden md:block" />
          TechnoRift Has You Covered!
        </h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-200">
          At TechnoRift, we specialize in building modern, high-performance websites and digital platforms tailored to your business needs. Whether it's WordPress, Shopify, Framer, or custom full-stack development, we deliver powerful solutions with a focus on speed, scalability, and user experience. Our services include eCommerce development, API integrations, front-end UI/UX, and back-end architecture — all crafted to ensure your digital presence is strong, seamless, and built for growth. Let TechnoRift elevate your brand with technology that makes an impact.
        </p>
      </div>
    </section>
  );
}
