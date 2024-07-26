import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6 lg:p-12 bg-white shadow-lg rounded-lg">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-slate-700 ">About Us</h2>
      
      <section className="mb-12 bg-gray-100 p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 duration-300">
        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
        </p>
        <h3 className="text-3xl font-bold mb-4 text-slate-800 text-center">Vision</h3>
        <p className="text-lg leading-relaxed mb-6 text-gray-700 text-center">
          To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
        </p>
        <h3 className="text-3xl font-bold mb-4 text-slate-800 text-center">Mission</h3>
        <p className="text-lg leading-relaxed mb-6 text-gray-700 text-center">
          To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
        </p>
        <h3 className="text-3xl font-bold mb-4 text-slate-800 text-center">Principal's Message</h3>
        <p className="text-lg leading-relaxed text-gray-700 text-center">
          At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-50 p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 duration-300">
          <h3 className="text-3xl font-bold mb-4 text-slate-800 text-center">History</h3>
          <p className="text-lg leading-relaxed text-gray-700 text-center">
            Springdale Public School has a rich history of academic excellence and innovation. Our journey began with a vision to create a nurturing educational environment.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 duration-300">
          <h3 className="text-3xl font-bold mb-4 text-slate-800 text-center">Facilities</h3>
          <p className="text-lg leading-relaxed text-gray-700 text-center">
            Our state-of-the-art facilities include modern classrooms, science labs, a library, sports complex, and more to support the holistic development of our students.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
