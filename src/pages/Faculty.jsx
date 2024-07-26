import React from "react";
import { facultyMembers } from "../assets/data/data";

const Faculty = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-slate-800">
        Our Esteemed Faculty
      </h2>

      <section className="mb-12 bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold mb-4 text-gray-700 text-center">
          Welcome Message from the Principal
        </h3>
        <p className="text-gray-600 text-lg text-center">
          Welcome to our school's faculty page. Our dedicated team of educators and administrative staff are committed to providing the best learning environment for our students. Each member of our faculty brings a wealth of knowledge, experience, and a passion for teaching.
        </p>
      </section>

      <section className="mb-12 bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold mb-4 text-gray-700 text-center">
          Overview of Our Faculty
        </h3>
        <p className="text-gray-600 text-lg text-center">
          Our faculty is composed of highly qualified and experienced educators who are experts in their respective fields. They are dedicated to fostering a supportive and challenging academic environment. Here you can learn more about our outstanding faculty members.
        </p>
      </section>

      <section>
        <h3 className="text-3xl font-bold mb-8 text-gray-700 text-center">
          Faculty Profiles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover transition-transform transform hover:scale-110 duration-300"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-gray-700">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
              <p className="text-gray-600 mt-2">{member.qualifications}</p>
              <p className="text-gray-600 mt-2">{member.experience}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faculty;
