import React from "react";

const benefits = [
  {
    number: "1",
    description: "Expand your reach and attract more leads with a professional website.",
  },
  {
    number: "2",
    description: "Boost your brand’s visibility and ROI through effective web design and development.",
  },
  {
    number: "3",
    description: "Our websites are intuitive, SEO-friendly, secure, and scalable as your business grows.",
  },
  {
    number: "4",
    description: "We create responsive, engaging websites that help your business succeed online.",
  },
];

export default function WorkBenefits() {
  return (
    <section className="w-full py-20 px-6 bg-[radial-gradient(circle_at_right,_#02B4D8_0%,_#0a0a0a_60%,_black_100%)] text-center">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#02B4D8] mb-16">
        Maximize results, enjoy the benefits
      </h2>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex items-start bg-white rounded-2xl shadow-md p-8 text-left hover:shadow-lg transition"
          >
            {/* Number */}
            <div className="text-5xl font-bold text-[#030460] mr-6">
              {item.number}
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
