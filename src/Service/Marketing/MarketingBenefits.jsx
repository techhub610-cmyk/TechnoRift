import React from "react";

const benefits = [
  {
    number: "1",
    description: "Our seasoned strategists ensure top-tier management and success for every campaign.",
  },
  {
    number: "2",
    description: "Achieve 100% ROI growth with our strategic social media marketing plans and monthly performance reports.",
  },
  {
    number: "3",
    description: "Strengthen your social credibility, driving more repeat purchases through word-of-mouth.",
  },
  {
    number: "4",
    description: "Custom strategies aligned with your goals, turning followers into loyal customers.",
  },
];

export default function MarketingBenefits() {
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
