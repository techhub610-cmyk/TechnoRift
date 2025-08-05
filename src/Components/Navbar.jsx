import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from "../Assets/technorift.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 w-full z-50 px-6 md:px-20 py-4 flex justify-between items-center text-white font-sans bg-transparent backdrop-blur-md"
    >
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-wide text-white">
        <img src={logo} className="w-44" alt="Logo" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        {/* <Link to="/work" className="hover:text-[#02B4D8] text-white text-lg transition">Work</Link> */}

        {/* Services Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button className="flex items-center text-white text-lg space-x-1 hover:text-[#02B4D8] transition">
            <span>Services</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          <div
            className={`absolute top-8 left-0 bg-white text-black rounded shadow-md w-60 py-2 z-50 transition-all duration-300 ease-in-out transform ${
              isHovered ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
            }`}
          >
            <Link to="/web" className="block px-4 py-2 hover:bg-[#02B4D8] hover:text-white whitespace-nowrap">Website Development</Link>
            <Link to="/marketing" className="block px-4 py-2 hover:bg-[#02B4D8] hover:text-white whitespace-nowrap">Social Media Marketing</Link>
            <Link to="/manage" className="block px-4 py-2 hover:bg-[#02B4D8] hover:text-white whitespace-nowrap">Social Media Management</Link>
            <Link to="/seo" className="block px-4 py-2 hover:bg-[#02B4D8] hover:text-white whitespace-nowrap">Search Engine Optimization</Link>
          </div>
        </div>

        <Link to="/course" className="hover:text-[#02B4D8] text-white text-lg transition">Courses</Link>
        <Link to="/career" className="hover:text-[#02B4D8] text-white text-lg transition">Career</Link>
        <Link to="/blog" href="#" className="hover:text-[#02B4D8] text-white text-lg transition">Blog</Link>
        {/* <Link to="/team" className="hover:text-[#02B4D8] text-white text-lg transition">Our Team</Link> */}
        <Link to="/about" className="hover:text-[#02B4D8] text-white text-lg transition">About Us</Link>
        <Link to="/contact" className="hover:text-[#02B4D8] text-white text-lg transition">Contact</Link>
      </div>

      {/* Get Free Proposal Button - Desktop */}
      <a
        href="#"
        className="hidden md:flex items-center group relative overflow-hidden text-lg font-semibold text-[#fcfcfc] transition duration-300 hover:shadow-lg"
      >
        <span
          className="absolute left-4 top-0 h-full w-[calc(100%-1.5rem)] bg-[#02B4D8] z-0 rounded-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000 ease-out"
        ></span>

        <span className="relative z-10 flex items-center px-6 py-2 pl-4">
          <span className="w-5 h-5 bg-[#02B4D8] rounded-full mr-4 transition-transform duration-300 group-hover:scale-115"></span>
          <Link to="/calendar" className="group-hover:text-white text-white transition duration-300">Get Free Proposal</Link>
          <span className="ml-2 transform text-white group-hover:translate-x-1 transition-transform duration-300">→</span>
        </span>
      </a>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center space-x-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 text-white px-6 py-4 space-y-4 md:hidden transition-all duration-300">
          {/* <Link to="/work"href="#" className="block hover:text-[#ff3c00]">Work</Link> */}

          {/* Mobile Services Dropdown */}
          <div className="space-y-1">
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="flex items-center space-x-1 hover:text-[#02B4D8] transition"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transform transition ${isMobileDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {isMobileDropdownOpen && (
              <div className="ml-4 space-y-1 text-sm text-gray-300">
                <Link to="/web" href="#" className="block hover:text-[#02B4D8]">Website Development</Link>
                <Link to="/marketing" href="#" className="block hover:text-[#02B4D8]">Social Media Marketing</Link>
                <Link to="/manage" href="#" className="block hover:text-[#02B4D8]">Social Media Management</Link>
                <Link to="/seo" href="#" className="block hover:text-[#02B4D8]">SEO</Link>
              </div>
            )}
          </div>

          <Link to="/course" href="#" className="block hover:text-[#02B4D8]">Courses</Link>
          <Link to="/career" href="#" className="block hover:text-[#02B4D8]">Career</Link>
          <Link to="/blog" href="#" className="block hover:text-[#02B4D8]">Blog</Link>
          {/* <Link to="/team" href="#" className="block hover:text-[#ff3c00]">Our Team</Link> */}
          <Link to="/about" href="#" className="block hover:text-[#02B4D8]">About Us</Link>
          <Link to="/contact" href="#" className="block hover:text-[#02B4D8]">Contact</Link>

          {/* Mobile CTA */}
          <a
            href="#"
            className="inline-block bg-white text-[#02B4D8] text-sm px-4 py-2 rounded-full font-semibold shadow hover:bg-[#02B4D8] hover:text-white transition"
          >
            Get Free Proposal
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
