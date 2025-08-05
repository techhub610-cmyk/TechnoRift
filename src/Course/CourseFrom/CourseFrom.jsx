import React from "react";

const CourseForm = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-gray-200 mt-12">
      <h2 className="text-4xl font-extrabold text-center text-[#02B4D8] mb-4">
        Enroll in a Course
      </h2>
      <p className="text-center text-gray-600 mb-8 text-base">
        Fill out the form below to get started. We’ll contact you with more details.
      </p>

      <form
        action="https://api.sheetmonkey.io/form/qWE4tLsg8X1Rmf4kubduPV"
        method="POST"
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="Name"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#02B4D8]"
          />
          <input
            type="email"
            name="Email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#02B4D8]"
          />
          
        </div>

        {/* Course Selection */}
        <input
            type="text"
            name="Contact"
            placeholder="Contact Number"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#02B4D8]"
          />
        <select
          name="Course"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#02B4D8]"
        >
          <option value="">Select a Course</option>
          <option value="Full-Stack Web Development">Full-Stack Web Development</option>
          <option value="Social Media Marketing">Social Media Marketing</option>
          <option value="Social Media Management">Social Media Management</option>
          <option value="SEO">SEO</option>
          <option value="Shopify">Shopify</option>
          <option value="Graphic Designing">Graphic Designing</option>
        </select>


        <textarea
          name="Message"
          placeholder="Why are you interested in this course?"
          rows="4"
          className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#02B4D8]"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-[#02B4D8] hover:bg-[#039fc2] text-white rounded-md text-lg font-semibold transition duration-300"
        >
          Submit Enrollment
        </button>
      </form>

      <p className="text-xs text-gray-400 text-center mt-6">
        We respect your privacy. Your details are safe with us.
      </p>
    </div>
  );
};

export default CourseForm;
