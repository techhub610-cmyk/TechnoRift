// src/components/BlogSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img from "../Assets/laptop.avif";
import shopify from "../Assets/shopify.jpeg"
import graphics from "../Assets/graphic.jpeg";
import marketing from "../Assets/marketing.jpeg";
import seo from "../Assets/seo.jpeg"

// Sample blog data (id must match the BlogPage route)
const blogs = [
  {
    id: "1",
    title: "A Guide for Entrepreneurs and Developers",
    tag: "E-commerce",
    date: "03 July 2025",
    author: "Hamza Ali",
    image: shopify
  },
  {
    id: "2",
    title: "Mastering Web Development: The Engine Behind the Modern Digital World",
    tag: "Full Stack Development",
    date: "01 July 2025",
    author: "Hamza Ali",
    image: img,
  },
  {
    id: "3",
    title: "Graphic Design: Creativity, Communication, and Trends in 2025",
    tag: "UI/UX Engineering",
    date: "30 June 2025",
    author: "Hamza Ali",
    image: graphics,
  },
  {
    id: "4",
    title: "SEO Essentials: A Comprehensive Guide for Boosting Your Website’s Visibility",
    tag: "UI/UX Engineering",
    date: "30 June 2025",
    author: "Hamza Ali",
    image: seo,
  },
  {
    id: "5",
    title: "Digital Marketing Management in 2025: Strategies, Channels, and Trends",
    tag: "UI/UX Engineering",
    date: "30 June 2025",
    author: "Hamza Ali",
    image: marketing,
  },
];

const BlogSection = () => {
  return (
    <section className="w-full min-h-screen py-16 px-6 bg-[#060708]">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl sm:text-5xl font-extrabold text-[#02B4D8] mb-4 tracking-wide"
      >
        TechnoRift Blog
      </motion.h1>
      <p className="text-center text-gray-400 text-lg max-w-3xl mx-auto mb-12">
        Dive into the world of full-stack innovation, developer insights, and project excellence—crafted by the TechnoRift team.
      </p>

      {/* Featured Blog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="relative rounded-xl overflow-hidden shadow-2xl mb-16"
        style={{ height: "30em" }}
      >
        <Link to="/blog/1">
          <img
            src={blogs[0].image}
            className="absolute left-0 top-0 w-full h-full object-cover z-0"
            alt="Featured Blog"
          />
          <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          <div className="p-8 absolute bottom-0 left-0 z-20">
            <span className="px-4 py-1 bg-[#02B4D8] text-white text-xs font-semibold rounded-full">
              Featured
            </span>
            <h2 className="text-3xl font-bold text-white mt-3">{blogs[0].title}</h2>
            <p className="mt-2 text-gray-300 text-sm">
              {blogs[0].author} - {blogs[0].date}
            </p>
          </div>
        </Link>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 + index * 0.2 }}
            className="relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
            style={{ height: "24em" }}
          >
            <Link to={`/blog/${blog.id}`}>
              <img
                src={blog.image}
                className="absolute left-0 top-0 w-full h-full object-center z-0"
                alt="Blog"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <div className="p-6 absolute bottom-0 left-0 z-20">
                <span className="px-3 py-1 bg-[#02B4D8] text-white text-xs rounded-full font-medium">
                  {blog.tag}
                </span>
                <h2 className="text-xl font-bold text-white mt-3">{blog.title}</h2>
                <p className="mt-2 text-gray-300 text-sm">
                  {blog.author} - {blog.date}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Subscribe Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-20 bg-[#02B4D8] text-white p-10 rounded-xl shadow-2xl"
      >
        <h3 className="text-2xl font-bold mb-3">Stay Ahead of the Curve</h3>
        <p className="mb-5">
          Subscribe for latest dev articles, project insights, and full-stack trends — powered by TechnoRift.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded bg-black text-white w-full sm:w-auto flex-1 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="p-3 rounded bg-black hover:bg-[#060708] transition-all">
            Subscribe
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogSection;
