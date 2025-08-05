import React, { useState } from "react";

const tabs = [
  { label: "Paid Advertising on Social Networks", content: "We help brands run highly targeted paid advertising campaigns on platforms like Facebook, Instagram, TikTok, LinkedIn, Twitter, and YouTube, ensuring maximum reach, engagement, and ROI." },
  { label: "PR Management", content: "We manage your brand’s reputation and narrative across social platforms, creating press releases, influencer collaborations, and strategic communications that build trust and authority." },
  { label: "Facebook & Instagram Advertising", content: "Drive sales and engagement with performance-driven Facebook and Instagram ad campaigns tailored to your audience, using creative storytelling and precise targeting." },
  { label: "LinkedIn & YouTube Ads", content: "Reach professionals and broader audiences through optimized LinkedIn and YouTube ads that increase brand awareness and drive actionable results." },
  { label: "TikTok & Twitter Ads", content: "Engage younger and trending audiences with innovative TikTok and Twitter ads that captivate, entertain, and convert your followers into loyal customers." },
  { label: "D2C Social Media Advertising", content: "Accelerate your Direct-to-Consumer brand growth through highly personalized social media advertising strategies focused on conversions, customer loyalty, and lifetime value." },
];

export default function MarketingTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full py-12 px-8 bg-white text-center">
      
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#030460]">
        What Does TechnoRift Offer You?
      </h2>

      <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
        From performance-driven ad campaigns to impactful content strategies, TechnoRift empowers your brand to stand out in the digital space. 
        We manage your social media marketing with precision, innovation, and creativity—connecting your brand with the right audience, 
        sparking meaningful engagement, and building loyal communities. Start growing your online influence with a team that knows how to make every impression count.
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
