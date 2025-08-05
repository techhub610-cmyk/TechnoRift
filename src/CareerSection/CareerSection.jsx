import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function CareerSection() {
  const jobs = [
    {
      title: "UI/UX & Product Designer",
      type: "Full Time",
      description:
        "Create intuitive interfaces and user experiences across digital platforms.",
      location: "Remote",
      salary: "$400 - $600",
    },
    {
      title: "Social Media Marketing",
      type: "Remote",
      description:
        "Craft and manage engaging social media content for brand growth.",
      location: "Remote",
      salary: "$400 - $600",
    },
    {
      title: "Web Developer",
      type: "Full Time",
      description:
        "Develop responsive web applications with front-end and back-end logic.",
      location: "Remote",
      salary: "$500 - $800",
    },
    {
      title: "Graphic Designer",
      type: "Full Time",
      description:
        "Create visual content including logos, branding, ads, and UIs.",
      location: "Remote",
      salary: "$350 - $600",
    },
    {
      title: "VP of Growth Marketing",
      type: "Full Time",
      description:
        "Drive strategic marketing initiatives and lead cross-functional teams.",
      location: "Remote",
      salary: "$800 - $1000",
    },
    {
      title: "Lead of Product Design",
      type: "Full Time",
      description:
        "Lead product design direction and collaborate on user-centric solutions.",
      location: "Remote",
      salary: "$700 - $900",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#001f3f] to-[#005f73] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden h-[450px] flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold font-serif"
        >
          Career Opportunities
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-lg max-w-2xl text-gray-200"
        >
          Shape your future with a team that's passionate, driven, and innovative.
        </motion.p>
      </div>

      {/* Intro Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <motion.div
          variants={fadeInUp}
          custom={0}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-cyan-300 mb-4">
            Where Passion Meets Purpose
          </h2>
          <p className="text-gray-100 max-w-3xl mx-auto text-lg">
            We don’t just build careers — we build futures. Join a culture of
            creativity, learning, and impactful work.
          </p>
        </motion.div>

        {/* Team Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <img
            src="/Assets/team.jpg"
            alt="Our team"
            className="rounded-xl w-full shadow-lg hover:scale-105 transition duration-500"
          />
        </motion.div>

        {/* Job Listings */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-white mb-10"
        >
          Open Positions
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-xl font-semibold text-cyan-300 group-hover:text-white transition">
                {job.title}
              </h3>
              <p className="text-gray-300 text-sm mt-2 mb-4">
                {job.description}
              </p>
              <div className="flex flex-wrap text-gray-400 text-sm gap-x-6 gap-y-2">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt /> {job.location}
                </span>
                <span className="flex items-center gap-2">
                  <FaBriefcase /> {job.type}
                </span>
                <span className="flex items-center gap-2">
                  <FaMoneyBillWave /> {job.salary}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


