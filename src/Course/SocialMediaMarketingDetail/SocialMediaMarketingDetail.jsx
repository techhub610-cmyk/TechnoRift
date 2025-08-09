import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "../LoaderCss/LoaderCss.css"
import { SiHtml5, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
    <svg className="pl" viewBox="0 0 160 160" width="160px" height="160px" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" />
          <stop offset="100%" stopColor="#fff" />
        </linearGradient>
        <mask id="mask1">
          <rect x="0" y="0" width="160" height="160" fill="url(#grad)" />
        </mask>
        <mask id="mask2">
          <rect x="28" y="28" width="104" height="104" fill="url(#grad)" />
        </mask>
      </defs>

      <g>
        <g className="pl__ring-rotate">
          <circle className="pl__ring-stroke" cx="80" cy="80" r="72" fill="none" stroke="hsl(223,90%,55%)" strokeWidth="16" strokeDasharray="452.39 452.39" strokeDashoffset="452" strokeLinecap="round" transform="rotate(-45,80,80)" />
        </g>
      </g>

      <g mask="url(#mask1)">
        <g className="pl__ring-rotate">
          <circle className="pl__ring-stroke" cx="80" cy="80" r="72" fill="none" stroke="hsl(193,90%,55%)" strokeWidth="16" strokeDasharray="452.39 452.39" strokeDashoffset="452" strokeLinecap="round" transform="rotate(-45,80,80)" />
        </g>
      </g>

      <g>
        <g strokeWidth="4" strokeDasharray="12 12" strokeDashoffset="12" strokeLinecap="round" transform="translate(80,80)">
          {[...Array(8)].map((_, i) => (
            <polyline
              key={i}
              className="pl__tick"
              stroke="hsl(223,10%,90%)"
              points="0,2 0,14"
              transform={`rotate(${i * 45 - 135},0,0) translate(0,40)`}
            />
          ))}
        </g>
      </g>

      <g mask="url(#mask1)">
        <g strokeWidth="4" strokeDasharray="12 12" strokeDashoffset="12" strokeLinecap="round" transform="translate(80,80)">
          {[...Array(8)].map((_, i) => (
            <polyline
              key={i}
              className="pl__tick"
              stroke="hsl(223,90%,80%)"
              points="0,2 0,14"
              transform={`rotate(${i * 45 - 135},0,0) translate(0,40)`}
            />
          ))}
        </g>
      </g>

      <g>
        <g transform="translate(64,28)">
          <g className="pl__arrows" transform="rotate(45,16,52)">
            <path fill="hsl(3,90%,55%)" d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z" />
            <path fill="hsl(223,10%,90%)" d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z" />
          </g>
        </g>
      </g>

      <g mask="url(#mask2)">
        <g transform="translate(64,28)">
          <g className="pl__arrows" transform="rotate(45,16,52)">
            <path fill="hsl(333,90%,55%)" d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z" />
            <path fill="hsl(223,90%,80%)" d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z" />
          </g>
        </g>
      </g>
    </svg>
  </div>
);



const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl max-w-md w-full relative text-black shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">Enroll in Course</h2>
        <p className="mb-4">Fill out your details to enroll.</p>
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 w-full mb-3 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 w-full mb-4 rounded"
        />
        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

const courseDetails = {
  1: {
    title: "Full-Stack Web Development",
    category: "Development",
    image: "/Assets/web.jpg",
    description:
      "The web development course is taught by experienced faculty members who bring their industry expertise to the classroom.",
    skills: [
      "Front-End Development with React.js and Next.js",
      "Back-End Development with Node.js",
      "Database Management using MongoDB",
      "Responsive Web Design",
      "Web Development Best Practices",
    ],
    extraSections: [
      {
        title: "Overview:",
        content:
          "In today's digital age, web development has become a fundamental skill across industries. From startups to enterprises, every organization requires fast, responsive, and dynamic websites or applications to serve their customers effectively. This course equips learners with full-stack development knowledge — from designing user-friendly interfaces to managing backend systems and databases.",
      },
      {
        title: "The Growing Demand for Web Development:",
        content:
          "As more businesses move online, the demand for skilled web developers continues to surge. A website is often the first impression customers have of a company. With the rise of mobile-first approaches, responsive design, and the need for performance optimization, developers are more valuable than ever.",
      },
      {
        title: "Why Choose This Course?",
        content:
          "This course is tailored for beginners and intermediate learners who want to break into web development. Through project-based learning and real-world case studies, you will gain both practical coding skills and an understanding of development workflows used in professional environments.",
      },
      {
        title: "What Sets This Course Apart?",
        list: [
          "Expert Instructors",
          "Practical Learning",
          "Job-Focused Curriculum",
          "Portfolio Building",
          "Career Guidance",
        ],
      },
      {
        title: "Technologies You’ll Master",
        list: ["Front-end", "Back-end", "Database", "Tools", "DevOps"],
      },
    ],
  },
  2: {
    title: "Social Media Marketing",
    category: "Marketing",
    image: "/Assets/marketing.jpg",
    description:
      "Learn to grow and engage your audience across Facebook, Instagram, and LinkedIn with strategies, ads, and analytics.",
    skills: [
      "Content Strategy and Planning",
      "Paid Ad Campaigns (Meta, Google)",
      "Audience Targeting & Segmentation",
      "Analytics & Social Reporting",
      "Influencer & Brand Collaboration",
    ],
    extraSections: [
      {
        title: "Overview:",
        content:
          "Social media marketing is essential for businesses aiming to connect with their target audiences. This course provides a complete roadmap for mastering key social platforms, advertising strategies, and audience engagement techniques.",
      },
      {
        title: "The Growing Demand for Digital Marketers:",
        content:
          "With billions of users on platforms like Instagram, Facebook, and LinkedIn, businesses are investing more than ever in social strategies. Skilled marketers are needed to create data-driven campaigns that deliver real ROI.",
      },
      {
        title: "Why Choose This Course?",
        content:
          "This program is ideal for beginners and professionals who want to specialize in social media. With real-world projects and platform-specific techniques, you’ll gain practical skills to manage campaigns and drive growth.",
      },
      {
        title: "What Sets This Course Apart?",
        list: [
          "Hands-on Campaign Creation",
          "Expert-Led Strategy Sessions",
          "Latest Platform Algorithms and Trends",
          "Analytics & Performance Reporting",
          "Client and Brand Management",
        ],
      },
      {
        title: "Tools & Platforms You’ll Learn",
        list: [
          "Meta Business Suite",
          "Google Ads",
          "Canva for Social Creatives",
          "Hootsuite / Buffer",
          "LinkedIn Ads & Insights",
        ],
      },
    ],
  },
  3: {
    title: "Digital Marketing",
    category: "Marketing",
    image: "/Assets/digital-min.jpeg",
    description:
      "Master content calendars, community management, and strategic execution across major platforms.",
    skills: [
      "Content Calendar Planning",
      "Community Engagement & Support",
      "Social Listening & Response",
      "Post Scheduling & Optimization",
      "Crisis Management & Moderation",
    ],
    extraSections: [
      {
        title: "Overview:",
        content:
          "Social media managers are the voice of the brand online. This course equips learners with essential tools to manage accounts, schedules, and communities with professionalism and precision.",
      },
      {
        title: "The Role of a Social Media Manager:",
        content:
          "Companies need professionals who can not only post content but also monitor feedback, analyze trends, and adapt strategies accordingly. Effective management ensures a consistent and valuable digital presence.",
      },
      {
        title: "Why Choose This Course?",
        content:
          "Designed for aspiring social media managers, this course includes practical tools, case studies, and templates to get you job-ready from day one.",
      },
      {
        title: "What You’ll Learn",
        list: [
          "Community Management Best Practices",
          "Scheduling Tools and Automation",
          "Brand Voice & Tone Management",
          "Crisis Communication Planning",
          "Time-saving Workflows",
        ],
      },
    ],
  },
  4: {
    title: "SEO (Search Engine Optimization)",
    category: "Marketing",
    image: "/Assets/seo.jpg",
    description:
      "Understand the core principles of SEO to improve site rankings and grow organic traffic.",
    skills: [
      "Keyword Research",
      "On-Page SEO Optimization",
      "Technical SEO",
      "Content Strategy",
      "Backlink Building",
    ],
    extraSections: [
      {
        title: "Overview:",
        content:
          "SEO is the backbone of online visibility. This course introduces the core pillars of SEO, from content structure to technical enhancements that boost your site’s position on Google.",
      },
      {
        title: "Why SEO Matters in 2025:",
        content:
          "With more competition online, SEO is key to being found by your customers. Businesses that rank well drive more traffic, leads, and revenue without relying on paid ads.",
      },
      {
        title: "What You’ll Learn:",
        list: [
          "Keyword & Competitor Analysis",
          "On-Page Optimization Techniques",
          "Site Speed & Technical Performance",
          "Content Clusters & Topic Authority",
          "Link Building & Outreach",
        ],
      },
    ],
  },
  5: {
    title: "Shopify Development",
    category: "Ecommerce",
    image: "/Assets/shopify.jpeg",
    description:
      "Build, customize, and manage Shopify stores with confidence—from theme setup to app integration.",
    skills: [
      "Store Setup and Theme Customization",
      "Product Management",
      "Shopify Liquid Templating",
      "Payment & Shipping Configuration",
      "Shopify App Integration",
    ],
    extraSections: [
      {
        title: "Overview:",
        content:
          "Shopify is one of the most popular e-commerce platforms. This course helps you become a professional Shopify developer capable of building fully functional online stores.",
      },
      {
        title: "Why Learn Shopify in 2025:",
        content:
          "As global e-commerce grows, Shopify is becoming the go-to platform for entrepreneurs and agencies. Developers who know how to build on Shopify are in high demand.",
      },
      {
        title: "What Sets This Course Apart:",
        list: [
          "Hands-on Shopify Projects",
          "Theme Development Using Liquid",
          "Real Client Store Case Studies",
          "Payment & Shipping Mastery",
          "Launch Readiness & Store Optimization",
        ],
      },
    ],
  },
  6: {
  title: "Graphic Design",
  category: "Design & Creative",
  image: "/Assets/graphic.jpg",
  description:
    "Master the fundamentals of visual communication—from typography and color theory to real-world design tools like Adobe Photoshop and Illustrator.",
  skills: [
    "Adobe Photoshop & Illustrator",
    "Typography & Layout",
    "Brand Identity Design",
    "Social Media Creatives",
    "Creative Portfolio Development",
  ],
  extraSections: [
    {
      title: "Overview:",
      content:
        "This course is designed to turn beginners into skilled graphic designers by teaching the essential principles of design and hands-on use of industry-standard tools.",
    },
    {
      title: "Why Learn Graphic Design in 2025:",
      content:
        "In today's visual world, graphic design is essential for branding, marketing, and communication. Whether freelancing or working with agencies, skilled designers are in constant demand.",
    },
    {
      title: "What Sets This Course Apart:",
      list: [
        "Real Client-Based Projects",
        "Mastery of Adobe Tools",
        "Design Theory + Practical Implementation",
        "Personal Brand & Portfolio Building",
        "Creative Feedback & Mentorship Sessions",
      ],
    },
  ],
},

};

const relatedCourses = [
  { id: 2, title: "Social Media Marketing", image: "/Assets/marketing.jpg" },
  { id: 3, title: "Digital Marketing", image: "/Assets/digital-min.jpeg" },
  { id: 4, title: "SEO", image: "/Assets/seo.jpg" },
  { id: 5, title: "Shopify", image: "/Assets/shopify.jpeg" },
  { id: 6, title: "Graphic Design", image: "/Assets/graphic.jpg" },
];

export default function CourseDetail() {
  const { id } = useParams();
  const course = courseDetails[id];

  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!course) return <div className="text-white p-10">Course not found.</div>;
  if (loading) return <Loader />;

  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="flex-1">
            <h3 className="text-sm text-white mt-6 uppercase font-semibold mb-2">
              {course.category}
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#02B4D8]">{course.title}</h1>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl">{course.description}</p>
            <div className="flex gap-4">
              <Link to="/courseform"
                onClick={() => setModalOpen(true)}
                className="bg-[#02B4D8] hover:bg-[#93E2F1] px-6 py-2 rounded-full text-white font-semibold"
              >
                Enroll Now
              </Link>
              <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-[#02B4D8] hover:border-[#02B4D8] hover:text-white transition">
                Course Outline
              </button>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-md">
            <img
              src={course.image}
              alt={course.title}
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
            {course.icons && (
              <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-2 rounded-md backdrop-blur-sm flex gap-4">
                {course.icons.map((Icon, i) => (
                  <Icon key={i} className="text-2xl text-white" />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="lg:flex gap-12">
          <div className="lg:w-2/3">
            <h2 className="text-xl text-[#02B4D8] font-bold mb-4">Skills You Will Gain</h2>
            <ul className="list-disc pl-5 space-y-3 text-gray-300">
              {course.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>

            {course.extraSections?.map((sec, i) => (
              <div key={i} className="mt-10">
                <h3 className="text-xl font-bold text-[#02B4D8] mb-1">{sec.title}</h3>
                {sec.content && <p className="text-gray-300">{sec.content}</p>}
                {sec.list && (
                  <ul className="list-disc pl-5 space-y-2 text-gray-300 mt-2">
                    {sec.list.map((item, j) => (
                      <li key={j}><strong>{item}</strong></li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="lg:w-1/3 mt-12 lg:mt-0 space-y-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#02B4D8]">Related Courses</h2>
            {relatedCourses.map((rc) => (
              <Link
                to={`/courses/${rc.id}`}
                key={rc.id}
                className="bg-[#1a1a1a] hover:bg-[#2a2a2a] p-3 rounded-lg flex gap-3 items-center transition"
              >
                <img
                  src={rc.image}
                  alt={rc.title}
                  className="w-20 h-16 object-cover rounded"
                />
                <div>
                  <h4 className="text-sm font-medium text-white">{rc.title}</h4>
                  <p className="text-xs text-blue-400 flex items-center gap-1">
                    Read Article <FaArrowRight className="text-xs mt-[1px]" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
