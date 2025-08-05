import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export default function MarketingService() {
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
              Social Media Marketing
            </h2>

            {/* Medium Paragraph */}
            <p className="text-xl text-blue-200 font-medium mb-4">
              Amplify Your Digital Presence with Strategic Engagement!
            </p>

            {/* Small Paragraph */}
            <p className="text-base text-blue-100 leading-relaxed max-w-xl mb-8">
              TechnoRift helps you connect, captivate, and convert your audience through result-driven social media strategies. 
              From brand storytelling to creative content campaigns, we craft compelling digital experiences that strengthen your brand identity. 
              Whether you're building awareness or scaling engagement, we help you stand out and grow fast on every platform.
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
              src="/Assets/social.png" // Replace with your actual image path
              alt="Marketing Service"
              className="w-full max-w-[700px] rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
