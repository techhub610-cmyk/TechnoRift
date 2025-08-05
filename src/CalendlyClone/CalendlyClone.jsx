import React, { useEffect, useState } from "react";
import { IoMdClock } from "react-icons/io";
import logo from "../Assets/technorift.png"; // adjust path as needed

const CalendlySection = () => {
  const [timezone, setTimezone] = useState("Asia/Karachi");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="relative z-10 min-h-screen py-20 px-6 sm:px-10 lg:px-20 bg-[radial-gradient(circle_at_right,_#02B4D8_0%,_#0a0a0a_60%,_black_100%)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start bg-[radial-gradient(circle_at_right,_#02B4D8_0%,_#0a0a0a_60%,_black_100%)] bg-opacity-95 p-10 rounded-3xl shadow-2xl">
        {/* Left Section */}
        <div className="space-y-6">
          <img src={logo} alt="logo" className="w-36 mb-2" />
          <div>
            <h1 className="text-3xl font-bold text-[#02B4D8]">TechnoRift</h1>
            <h2 className="text-4xl font-extrabold text-white mt-2 leading-snug">
              Free Consultation<br />30 Minutes Strategy Session
            </h2>
          </div>
          <div className="text-gray-700 text-base leading-relaxed">
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <span className="text-lg text-white hover:text-[#02B4D8]"><IoMdClock /></span> 30 minutes session
            </div>
            <p className="mt-4 text-white">
              Book a free consultation to discuss strategies, innovations, and tailored
              solutions to grow your business. Let’s bring your ideas to life with expert insights.
            </p>
          </div>
          {/* <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Time Zone</label>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {timeZones.map((zone) => (
                <option key={zone} value={zone}>{zone}</option>
              ))}
            </select>
          </div> */}
        </div>

        {/* Right Section (Calendly Embed) */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <div
            className="calendly-inline-widget"
            data-url={`https://calendly.com/techhub610/30min?timezone=${timezone}`}
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CalendlySection;
