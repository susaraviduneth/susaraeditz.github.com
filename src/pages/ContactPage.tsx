import React from 'react';
import ContactSection from '../components/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-indigo-200">
              Have a project in mind? Let's talk about how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <ContactSection />
      
      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="h-96 bg-gray-200 relative">
            {/* Here you would normally embed a map, but for now we'll use a placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 mb-2">Map of Sri Lanka</p>
                <p className="text-gray-500 text-sm">Susara Editz is located in Colombo, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;