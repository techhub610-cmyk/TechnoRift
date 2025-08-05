import React from "react";
import {
  FaBullseye,
  FaLightbulb,
  FaChartLine,
  FaBalanceScale,
  FaHandshake,
  FaSyncAlt,
} from "react-icons/fa";

const CoreValues = () => {
  const leftValues = [
    {
      icon: <FaBullseye />,
      title: "Client-First Development",
      desc: "At TechnoRift, our clients are our top priority. Every solution we craft is tailored to your business goals and user experience needs.",
    },
    {
      icon: <FaLightbulb />,
      title: "Tech-Driven Innovation",
      desc: "We thrive on solving complex challenges with creative technologies. Innovation is at the core of everything we build.",
    },
    {
      icon: <FaChartLine />,
      title: "Scalable & Measurable Impact",
      desc: "From MVPs to enterprise-grade solutions, our work is focused on driving sustainable growth and delivering measurable outcomes.",
    },
  ];

  const rightValues = [
    {
      icon: <FaBalanceScale />,
      title: "Integrity & Transparency",
      desc: "We build trust by operating with honesty and openness in our process, communication, and delivery.",
    },
    {
      icon: <FaHandshake />,
      title: "Partnership for Growth",
      desc: "We see ourselves as an extension of your team, working side-by-side to bring your ideas to life and scale your business.",
    },
    {
      icon: <FaSyncAlt />,
      title: "Agile Development Workflow",
      desc: "We move fast, adapt quickly, and stay flexible — ensuring your product stays ahead of the curve in a fast-evolving market.",
    },
  ];

  return (
    <section className="bg-[radial-gradient(circle_at_right,_#02B4D8_0%,_#0a0a0a_60%,_black_100%)] text-white py-20 px-6 md:px-24">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold tracking-wide mb-6 text-[#02B4D8]">CORE VALUES</h2>
        <p className="text-gray-300 max-w-4xl mx-auto text-lg">
          At TechnoRift, our cross-functional team of developers, designers, and strategists collaborates seamlessly to deliver high-impact digital solutions. From ideation to launch and beyond — we deliver with precision, innovation, and integrity.
        </p>
      </div>

      {/* Core Values Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT COLUMN (icons on right) */}
        <div className="relative">
          <div className="absolute right-5 top-0 h-full w-1 bg-[#02B4D8] z-0" />
          {leftValues.map((item, index) => (
            <div key={index} className="relative z-10 flex items-start mb-20 justify-between">
              <div className="mr-6">
                <h4 className="text-xl font-semibold mb-2 text-[#02B4D8]">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </div>
              <div className="bg-black border-2 border-[#02B4D8] p-3 rotate-45 z-10">
                <div className="-rotate-45 text-[#02B4D8] text-xl">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN (icons on left) */}
        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-1 bg-[#02B4D8] z-0" />
          {rightValues.map((item, index) => (
            <div key={index} className="relative z-10 flex items-start mb-20 justify-between">
              <div className="bg-black border-2 border-[#02B4D8] p-3 rotate-45 z-10">
                <div className="-rotate-45 text-[#02B4D8] text-xl">
                  {item.icon}
                </div>
              </div>
              <div className="ml-6 text-right">
                <h4 className="text-xl font-semibold mb-2 text-[#02B4D8]">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
