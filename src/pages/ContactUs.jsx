import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-6 lg:p-12 bg-gray-50">
      {/* Header */}
      <header className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600">
          We're here to help. Reach out to us with any questions or concerns you may have.
        </p>
      </header>

      {/* Contact Details */}
      <section className="mb-12 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h3 className="text-3xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="mb-6 md:mb-0 flex-1">
            <p className="text-lg font-medium text-gray-700 mb-2">
              <i className="fas fa-map-marker-alt text-blue-500"></i> Address:
            </p>
            <p className="text-gray-600">
              Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code
            </p>
          </div>
          <div className="mb-6 md:mb-0 flex-1">
            <p className="text-lg font-medium text-gray-700 mb-2">
              <i className="fas fa-phone-alt text-green-500"></i> Phone:
            </p>
            <p className="text-gray-600">+1 (123) 456-7890</p>
          </div>
          <div className="flex-1">
            <p className="text-lg font-medium text-gray-700 mb-2">
              <i className="fas fa-envelope text-red-500"></i> Email:
            </p>
            <p className="text-gray-600">
              <a href="mailto:info@springdale.edu" className="text-blue-500 hover:underline">info@springdale.edu</a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold mb-6 text-gray-800">Send Us a Message</h3>
        <form
          action="mailto:info@springdale.edu" 
          method="post" 
          encType="text/plain"
          className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2 text-lg font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2 text-lg font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2 text-lg font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Google Maps Integration */}
      <section>
        <h3 className="text-3xl font-semibold mb-6 text-gray-800">Our Location</h3>
        <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.971946051317!2d-71.05888038431647!3d42.3600829791858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370a90b8e437f%3A0x4f7b5d2346a0a5a8!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1657724881167!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
