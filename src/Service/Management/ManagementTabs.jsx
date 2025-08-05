import React, { useState } from "react";

const tabs = [
  {
    label: "Facebook & Messenger",
    content:
      "We expertly manage your Facebook and Messenger presence by creating engaging posts, laser-targeted ad campaigns, and fostering real-time interactions that build strong digital communities and boost engagement.",
  },
  {
    label: "YouTube & TikTok",
    content:
      "From viral short-form TikTok clips to impactful YouTube videos, TechnoRift helps your brand entertain, educate, and convert audiences through smart storytelling and data-driven publishing strategies.",
  },
  {
    label: "Twitter & LinkedIn",
    content:
      "We craft timely, high-impact content for Twitter (X) and build professional brand authority on LinkedIn—strengthening your thought leadership, sparking meaningful conversations, and driving B2B growth.",
  },
  {
    label: "Pinterest & Instagram",
    content:
      "Our team creates scroll-stopping visual content on Pinterest and Instagram to drive brand discovery, product interest, and powerful conversion outcomes with every campaign.",
  },
];

export default function ManagementTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full py-12 px-8 bg-white text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#030460]">
        What Does TechnoRift Offer You?
      </h2>

      {/* Description */}
      <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
        TechnoRift’s social media experts manage your Facebook, Twitter (X), LinkedIn, YouTube, TikTok, Pinterest, and Instagram with precision—crafting high-converting content, optimizing for platform algorithms, and engaging audiences that matter. From trend-driven reels to strategic ad placements, we help your brand rise, connect, and dominate in the digital space.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-2 rounded-full border text-sm font-semibold transition-all
              ${
                activeTab === index
                  ? "bg-[##02B4D8] text-black"
                  : "bg-[#030460] text-white hover:bg-[#02B4D8]"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed bg-gray-50 p-8 rounded-xl shadow">
        {tabs[activeTab].content}
      </div>
    </section>
  );
}
