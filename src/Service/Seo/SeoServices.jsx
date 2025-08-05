import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export default function SeoServices() {
  return (
    <>
      {/* MAIN SECTION */}
      <section className="relative z-10 bg-[#0078B5] pt-52 pb-28 px-4 sm:px-6 lg:px-24 overflow-hidden">

        {/* Grid Layout */}
        <div className="relative grid lg:grid-cols-2 items-center gap-12 max-w-7xl mx-auto z-10">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Big Heading */}
            <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-4">
              Search Engine Optimization
            </h2>

            {/* Medium Paragraph */}
            <p className="text-xl text-blue-200 font-medium mb-4">
              Rank Higher and Outshine Your Competition with TechnoRift’s SEO Services!
            </p>

            {/* Small Paragraph */}
            <p className="text-base text-blue-100 leading-relaxed max-w-xl mb-8">
              Want to climb Google rankings and stand out in your industry? TechnoRift’s SEO specialists use cutting-edge techniques to drive targeted traffic to your website. 
              From on-page optimization to technical audits and content strategies, we ensure your business gets the visibility it deserves.
              <br /><br />
              Partner with TechnoRift to unlock consistent growth through search and build a strong, sustainable online presence.
            </p>

            {/* Get Free Consultation Button */}
            <button className="relative overflow-hidden px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300">
              <Link to="/calendar" className="relative z-10">Get Free Consultation</Link>
              <span className="absolute inset-0 bg-gradient-to-t from-blue-700 to-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
            </button>
          </motion.div>

          {/* RIGHT SIDE - IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            <img
              src="/Assets/seo.png"
              alt="SEO Services"
              className="w-full max-w-[700px] rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
