import React, { useState } from "react";

const tabs = [
  { label: "WordPress Development Services", content: "We offer tailored WordPress development services that go beyond standard solutions. Our team builds custom themes, plugins, and seamless integrations to enhance your website’s functionality, ensuring it aligns perfectly with your business goals. From optimized performance to unique design elements, we craft websites that not only engage users but also drive conversions." },
  { label: "Shopify Development Services", content: "We create powerful Shopify eCommerce solutions that help businesses build, customize, and scale their online stores. Our Shopify experts deliver highly functional, responsive, and engaging storefronts that convert visitors into loyal customers." },
  { label: "Frontend Development", content: "We build sleek and responsive front-end interfaces using modern frameworks like React, Vue, and Angular, ensuring fast load times, engaging UI/UX, and seamless user interactions." },
  { label: "Backend Development", content: "Our backend development ensures secure, scalable, and robust API integrations, databases, and server-side solutions using Node.js, PHP, and other technologies to support your web applications." },
  { label: "Website Speed Optimization", content: "We optimize your website’s performance by minimizing load times, improving Core Web Vitals, and ensuring a fast, smooth browsing experience across all devices and networks." },
  { label: "Single Page Applications (SPAs)", content: "We build dynamic single-page applications (SPAs) for seamless, app-like web experiences that drive user engagement without unnecessary page reloads." },
];

export default function WebTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full py-12 px-8 bg-white text-center">
      
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#030460]">
        What TechnoRift Offers You
      </h2>

      <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
        TechnoRift delivers future-ready web development services designed to scale with your business. From WordPress to SPAs, we engineer high-performance websites, eCommerce platforms, and custom CMS solutions. Our team specializes in combining sleek UI/UX with powerful back-end architecture to provide responsive, secure, and lightning-fast digital experiences. Whether you're launching a startup or upgrading an enterprise system, TechnoRift builds tech that performs and impresses.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-2 rounded-full border text-sm font-semibold transition-all
              ${activeTab === index
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
