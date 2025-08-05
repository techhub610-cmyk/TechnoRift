import React, { useState } from "react";

const tabs = [
  {
    label: "On-Page SEO",
    content:
      "We optimize your website's content, meta tags, headings, and internal linking to improve search engine visibility and create a seamless user experience.",
  },
  {
    label: "Off-Page SEO",
    content:
      "Boost your site's authority with strategic backlinks, guest posting, and digital PR to elevate your search engine rankings across the web.",
  },
  {
    label: "Local SEO",
    content:
      "Enhance your visibility in local search results with Google Business Profile optimization and geo-targeted strategies that bring customers to your door.",
  },
  {
    label: "Technical SEO",
    content:
      "We ensure your site meets modern technical standards—optimizing speed, structure, mobile usability, and indexability for peak performance.",
  },
  {
    label: "E-commerce SEO",
    content:
      "Increase traffic and conversions by optimizing product pages, category structures, and implementing schema for better product discovery.",
  },
];

export default function SeoTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full py-12 px-8 bg-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#030460]">
        What Does TechnoRift Offer You?
      </h2>

      <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
        At TechnoRift, we deliver result-driven SEO solutions tailored to your business goals. Our services combine deep expertise, advanced tools, and proven strategies to help you rank higher, attract more traffic, and convert visitors into customers. Partner with TechnoRift to unlock your true digital growth potential.
      </p>

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

      <div className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed bg-gray-50 p-8 rounded-xl shadow">
        {tabs[activeTab].content}
      </div>
    </section>
  );
}
