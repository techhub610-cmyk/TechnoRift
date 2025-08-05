import React from "react";
import partner1 from "../Assets/facebook.png";
import partner2 from "../Assets/tiktok.png";
import partner3 from "../Assets/google.png";
import partner4 from "../Assets/hubspot.png";

export default function ContactForm() {
  return (
    <div className="relative w-full overflow-hidden font-poppins">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/contact-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row text-white py-16 px-6 md:px-20">
        {/* Left Side */}
        <div className="md:w-1/2 mb-12 md:mb-0 relative group">
          <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-gradient-to-b from-red-500 to-pink-500 blur-2xl opacity-50 animate-float group-hover:animate-floatHover transition-all duration-700 ease-in-out"></div>

          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
            Let’s Bring Your <br />
            <span className="text-[#02B4D8]">Ideas to Life!</span>
          </h2>

          <p className="text-lg mb-8">Every great project starts with a conversation.</p>

          <div className="bg-[#030460] rounded-xl p-4 inline-block">
            <p className="text-[#02B4D8] font-semibold mb-2">Our Partner's</p>
            <div className="flex gap-4">
              <img src={partner1} alt="Facebook" className="h-8" />
              <img src={partner2} alt="TikTok" className="h-8" />
              <img src={partner3} alt="Google" className="h-8" />
              <img src={partner4} alt="HubSpot" className="h-8" />
            </div>
          </div>
        </div>

        {/* Right Side: SheetMonkey Connected Form */}
        <form
          action="https://api.sheetmonkey.io/form/qWE4tLsg8X1Rmf4kubduPV"
          method="POST"
          className="md:w-1/2 space-y-6 bg-white bg-opacity-90 p-6 rounded-xl text-black"
        >
          <div>
            <label className="block mb-1">Name*</label>
            <input
              type="text"
              name="Name"
              className="w-full border border-black px-4 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Email*</label>
            <input
              type="email"
              name="Email"
              className="w-full border border-black px-4 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Phone*</label>
            <input
              type="tel"
              name="Phone"
              className="w-full border border-black px-4 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Website</label>
            <input
              type="text"
              name="Website"
              className="w-full border border-black px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Description</label>
            <textarea
              name="Description"
              className="w-full border border-black px-4 py-2 rounded"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#02B4D8] hover:bg-[#93E2F1] text-white px-6 py-2 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
