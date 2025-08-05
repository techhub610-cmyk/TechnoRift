import React from "react";

const benefits = [
  {
    number: "1",
    description: "Develop customized strategies that increase your visibility and establish trust with your target audience.",
  },
  {
    number: "2",
    description: "Enhance your return on investment with targeted marketing plans designed to significantly increase profits at competitive rates.",
  },
  {
    number: "3",
    description: "Receive comprehensive insights and strategies to optimize your website’s conversion rates and click-through rates.",
  },
  {
    number: "4",
    description: "Choose from a variety of scalable packages that adapt to your evolving business needs.",
  },
];

export default function SeoBenefits() {
  return (
    <section className="w-full py-20 px-6 bg-[radial-gradient(circle_at_right,_#02B4D8_0%,_#0a0a0a_60%,_black_100%)] text-center">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#02B4D8] mb-16">
        BENEFITS FOR YOU, TRUST FOR US!
      </h2>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex items-start bg-white rounded-2xl shadow-md p-8 text-left hover:shadow-lg transition"
          >
            {/* Number */}
            <div className="text-5xl font-bold text-[#400000] mr-6">
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
