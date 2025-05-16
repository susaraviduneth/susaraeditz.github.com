import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-0"
          >
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 lg:aspect-w-4 lg:aspect-h-5 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Susara Editz team at work"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Accent elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-100 rounded-full"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-100 rounded-full"></div>
              
              {/* Stats overlay */}
              <div className="absolute -right-8 bottom-8 bg-white shadow-xl rounded-lg p-6 w-64">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-4xl font-bold text-indigo-600">5+</p>
                    <p className="text-gray-600 text-sm">Years of Experience</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-indigo-600">100+</p>
                    <p className="text-gray-600 text-sm">Happy Clients</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-indigo-600">350+</p>
                    <p className="text-gray-600 text-sm">Projects Completed</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-indigo-600">15+</p>
                    <p className="text-gray-600 text-sm">Design Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Susara Editz
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2018, Susara Editz has grown to become one of Sri Lanka's most respected graphic design studios, helping local and international businesses communicate effectively through captivating visual design.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                Our team of talented Sri Lankan designers brings together local cultural understanding and global design trends to create work that resonates with audiences while standing out in the marketplace.
              </p>
              
              <div className="border-l-4 border-indigo-600 pl-6 mb-8">
                <p className="text-xl text-gray-800 italic">
                  "We believe great design should be accessible to all Sri Lankan businesses, regardless of size. Our mission is to help local brands shine with world-class visual communication."
                </p>
                <p className="text-gray-600 mt-2">— Susara Perera, Founder</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <ListItem text="Deep understanding of Sri Lankan market and cultural nuances" />
                <ListItem text="Commitment to exceptional customer service and collaboration" />
                <ListItem text="Perfect blend of traditional Sri Lankan artistic heritage and modern design trends" />
                <ListItem text="Focus on designs that drive business results and engagement" />
              </ul>
              
              <a 
                href="/about" 
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ListItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start">
    <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <span className="text-gray-700">{text}</span>
  </li>
);

export default AboutSection;