import React, { useState } from "react";
import { FaClock, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import img4 from "../Assets/Seo post for web-05.jpeg"

const courses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    category: "Development",
    duration: "20 weeks",
    image: "/Assets/web.jpg" ,
  },
  {
    id: 2,
    title: "Social Media Marketing",
    category: "Digital Marketing",
    duration: "12 weeks",
    image: "/Assets/marketing.jpg",
  },
  {
    id: 3,
    title: "Digital Marketing",
    category: "Digital Marketing",
    duration: "12 weeks",
    image: "/Assets/digital-min.jpeg",
  },
  {
    id: 4,
    title: "SEO",
    category: "Digital Marketing",
    duration: "12 weeks",
    image: "/Assets/seo.jpg",
  },
  {
    id: 5,
    title: "Shopify",
    category: "E-commerce",
    duration: "12 weeks",
    image: "/Assets/shopify.jpeg",
  },
  {
    id: 6,
    title: "Graphic Designing",
    category: "E-commerce",
    duration: "12 weeks",
    image: "/Assets/graphic.jpg" ,
  },
];

export default function CourseCatalog() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-[#0f0f0f] text-white py-24 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#02B4D8]">Course Catalog</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Search Bar */}
        <div className="flex justify-end mb-10">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-4 pr-10 bg-[#121212] border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Cards */}
        {filteredCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-md group transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-br-md">
                    10% Off
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gray-800 text-xs px-2 py-1 rounded-full font-medium">
                      {course.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs bg-gray-800 px-2 py-1 rounded-full">
                      <FaClock className="text-white text-[10px]" />
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-[#02B4D8] transition-colors duration-300">
                    {course.title}
                  </h3>
                  <button className="mt-3 text-sm text-blue-500 font-medium underline">
                    Read More
                  </button>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 mt-10">No courses found.</p>
        )}
      </div>
    </section>
  );
}
