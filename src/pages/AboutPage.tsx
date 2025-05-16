import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Award, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Susara Editz</h1>
            <p className="text-xl text-indigo-200">
              Sri Lanka's premier graphic design studio, creating impactful visual solutions since 2018.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Susara Editz was founded in 2018 by Susara Perera, a graphic design graduate with a vision to elevate Sri Lankan businesses through world-class design. What began as a one-person freelance operation has grown into a dynamic studio of talented designers, serving clients across the country.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our journey has been one of continuous growth and learning. From our humble beginnings creating logos for local shops in Colombo, we've expanded to provide comprehensive design services for businesses of all sizes throughout Sri Lanka.
            </p>
            <p className="text-lg text-gray-600">
              Today, Susara Editz is recognized as one of the leading graphic design studios in Sri Lanka, known for blending local cultural elements with contemporary design trends to create work that resonates with local audiences while meeting international standards.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Susara Editz team" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-indigo-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 h-24 w-24 bg-yellow-100 rounded-full -z-10"></div>
          </motion.div>
        </div>
        
        {/* Key Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard 
            icon={<Clock className="h-8 w-8 text-indigo-600" />}
            value="5+"
            label="Years of Experience"
          />
          <StatCard 
            icon={<Users className="h-8 w-8 text-indigo-600" />}
            value="100+"
            label="Happy Clients"
          />
          <StatCard 
            icon={<Award className="h-8 w-8 text-indigo-600" />}
            value="15+"
            label="Design Awards"
          />
          <StatCard 
            icon={<Star className="h-8 w-8 text-indigo-600" />}
            value="350+"
            label="Projects Completed"
          />
        </div>
      </div>
      
      {/* Our Mission & Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guided by our core principles, we strive to create meaningful design that makes a difference for Sri Lankan businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard 
              title="Local Expertise, Global Standards" 
              description="We combine deep understanding of Sri Lankan culture with international design principles to create work that resonates locally while meeting global standards."
            />
            <ValueCard 
              title="Business-Focused Design" 
              description="Every design decision is made with your business goals in mind, ensuring our work not only looks beautiful but also drives tangible results."
            />
            <ValueCard 
              title="Collaborative Approach" 
              description="We believe the best results come from close collaboration with our clients, involving you throughout the creative process."
            />
            <ValueCard 
              title="Continuous Innovation" 
              description="The design landscape is always evolving, and so are we. We're committed to staying at the forefront of design trends and technologies."
            />
            <ValueCard 
              title="Attention to Detail" 
              description="We believe that excellence lies in the details. Every element of our designs is carefully considered and crafted with precision."
            />
            <ValueCard 
              title="Social Responsibility" 
              description="As a Sri Lankan business, we're committed to giving back to our community through pro bono work for local nonprofits and environmental initiatives."
            />
          </div>
        </div>
      </div>
      
      {/* Meet Our Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our talented designers bring a wealth of experience and creativity to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamMember 
            name="Susara Perera"
            role="Founder & Creative Director"
            image="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <TeamMember 
            name="Amal Fernando"
            role="Senior Brand Designer"
            image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <TeamMember 
            name="Priya Jayawardena"
            role="UI/UX Designer"
            image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <TeamMember 
            name="Dinesh Rajapakse"
            role="Packaging Specialist"
            image="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
      </div>
      
      {/* Clients Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Sri Lankan Brands</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to have worked with some of the most respected companies in Sri Lanka.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Client {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-indigo-900 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help elevate your brand with exceptional design solutions.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-indigo-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode; value: string; label: string }> = ({
  icon,
  value,
  label
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-lg shadow-md text-center"
  >
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </motion.div>
);

const ValueCard: React.FC<{ title: string; description: string }> = ({
  title,
  description
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-lg shadow-md"
  >
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const TeamMember: React.FC<{ name: string; role: string; image: string }> = ({
  name,
  role,
  image
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <div className="mb-4 relative mx-auto w-56 h-56 rounded-full overflow-hidden">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </motion.div>
);

export default AboutPage;