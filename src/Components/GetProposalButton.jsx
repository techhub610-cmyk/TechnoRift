import React, { useState } from "react";

const GetProposalButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex items-center gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Outside Circle */}
      <div
        className={`w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#ff3c00] transition-transform duration-300 ${
          hovered ? "scale-110" : "scale-100"
        } cursor-pointer`}
      ></div>

      {/* Main Button */}
      <button
        className={`relative overflow-hidden px-6 py-2 rounded-full border border-[#02B4D8] font-semibold shadow-md transition-colors duration-300 z-10
        ${hovered ? "text-[#02B4D8]" : "text-white"}
      `}
      >
        <span className="relative z-10">Get Free Proposal</span>

        {/* Animated background from left */}
        <span
          className={`absolute inset-0 bg-white rounded-full z-0 origin-left transition-transform duration-500 ease-out
          ${hovered ? "scale-x-100" : "scale-x-0"}
        `}
        ></span>
      </button>
    </div>
  );
};

export default GetProposalButton;
