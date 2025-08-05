import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { SiHtml5, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const relatedCourses = [
  {
    id: 2,
    title: "Android Development JAVA",
    image: "/Assets/android.jpg",
  },
  {
    id: 3,
    title: "Graphic Designing",
    image: "/Assets/design.jpg",
  },
  {
    id: 4,
    title: "Amazon FBA",
    image: "/Assets/amazon.jpg",
  },
  {
    id: 5,
    title: "Digital Marketing",
    image: "/Assets/marketing.jpg",
  },
];

export default function WebCourseDetail() {
  const { slug } = useParams();

  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* LEFT */}
          <div className="flex-1 ">
            <h3 className="text-sm text-[#02B4D8] uppercase font-semibold mb-2">
              Development
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Full-Stack Web Development
            </h1>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl">
              The web development course is taught by experienced faculty members who
              bring their industry expertise to the classroom.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#02B4D8] hover:bg-blue-700 px-6 py-2 rounded-full text-white font-semibold">
                Enroll Now
              </button>
              <button className="border border-[#02B4D] px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition">
                Course Outline
              </button>
            </div>
          </div>

          {/* RIGHT - IMAGE WITH ICONS */}
          <div className="flex-1 relative w-full max-w-md">
            <img
              src="/Assets/fullstack.jpg"
              alt="Course"
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-2 rounded-md backdrop-blur-sm flex gap-4">
              <SiHtml5 className="text-orange-500 text-2xl" />
              <SiExpress className="text-white text-2xl" />
              <SiReact className="text-cyan-400 text-2xl" />
              <SiNodedotjs className="text-green-500 text-2xl" />
            </div>
          </div>
        </div>

        {/* Course Description & Related Courses */}
        <div className="lg:flex gap-12">
          {/* ABOUT THIS COURSE */}
          <div className="lg:w-2/3">
            <h2 className="text-xl text-blue-400 font-bold mb-4">About this Course</h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Overview:</h3>
                <p>
                  In today's digital age, web development has emerged as a vital and in-demand skill. The need for skilled professionals who can design, develop, and deploy user-friendly websites continues to grow rapidly. This full-stack course offers learners a solid foundation in web development, covering everything from building responsive front-end interfaces to managing dynamic backend systems and databases.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-1">The Growing Demand for Web Development:</h3>
                <p>
                  In the modern business world, an effective online presence is essential. Organizations rely on professional websites as their primary point of contact with clients. With growing competition and digital transformation, there is a high demand for developers who can create visually engaging, functional, and high-performing websites that offer seamless user experiences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-1">Why Choose This Course?</h3>
                <p>
                  This program is designed to meet current industry needs and equip students with the skills necessary to succeed as web developers. Through hands-on training and project-based learning, learners gain real-world experience while working with cutting-edge tools and technologies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-1">Skills You Will Gain:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Front-End Development with React.js and Next.js:</strong> Learn to build modern user interfaces with reusable components, routing, and state management.</li>
                  <li><strong>Back-End Development with Node.js:</strong> Understand how to create APIs, manage server logic, and handle user authentication and data flow.</li>
                  <li><strong>Database Management using MongoDB:</strong> Work with NoSQL databases to design schemas, store structured data, and perform data operations.</li>
                  <li><strong>Responsive Web Design:</strong> Learn techniques for creating websites that look great on all devices, using flexible layouts and media queries.</li>
                  <li><strong>Web Development Best Practices:</strong> Explore Git, clean code principles, debugging strategies, and testing methods to build maintainable applications.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-1">What Sets This Course Apart?</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Expert Instructors:</strong> Learn from professionals with hands-on industry experience and deep technical knowledge.</li>
                  <li><strong>Practical Learning:</strong> Engage in real-world projects and exercises that simulate professional development environments.</li>
                  <li><strong>Job-Focused Curriculum:</strong> All topics are selected based on what top employers are looking for in front-end and back-end developers today.</li>
                  <li><strong>Portfolio Building:</strong> By the end of the course, students will have a complete developer portfolio to showcase their skills.</li>
                  <li><strong>Career Guidance:</strong> Receive support in preparing resumes, practicing interviews, and applying for jobs or internships.</li>
                </ul>
              </div>

              <div>
                <p>
                  Whether you're looking to switch careers, grow your skills, or launch your first development job, this course provides everything you need to succeed in the evolving digital world. With a comprehensive, hands-on approach and guidance from experts, you’ll gain confidence in building real-world applications from scratch.
                </p>
              </div>
            </div>
          </div>

          {/* RELATED COURSES */}
          <div className="lg:w-1/3 mt-12 lg:mt-0 space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Related Courses</h2>
            {relatedCourses.map((course) => (
              <Link
                to={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
                key={course.id}
                className="bg-[#1a1a1a] hover:bg-[#2a2a2a] p-3 rounded-lg flex gap-3 items-center transition"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-20 h-16 object-cover rounded"
                />
                <div>
                  <h4 className="text-sm font-medium text-white">{course.title}</h4>
                  <p className="text-xs text-blue-400 flex items-center gap-1">
                    Read Article <FaArrowRight className="text-xs mt-[1px]" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
