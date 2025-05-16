import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    return Icon ? <Icon className="h-14 w-14 text-indigo-600" /> : null;
  };

  return (
    <div>
      {/* Page Header */}
      <div className="bg-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-indigo-200">
              Professional graphic design services tailored for Sri Lankan businesses.
            </p>
          </div>
        </div>
      </div>
      
      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/3 bg-indigo-50 p-8 flex items-center justify-center">
                {getIcon(service.icon)}
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-300"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure your project meets your business goals and exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep 
              number="01"
              title="Discovery"
              description="We start by understanding your business, audience, and objectives through in-depth consultations."
            />
            <ProcessStep 
              number="02"
              title="Strategy"
              description="Based on research, we develop a design strategy aligned with your business goals and audience needs."
            />
            <ProcessStep 
              number="03"
              title="Creation"
              description="Our designers craft visual solutions that communicate your brand's message effectively."
            />
            <ProcessStep 
              number="04"
              title="Refinement"
              description="We refine the designs based on your feedback until they perfectly meet your expectations."
            />
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FaqItem 
                question="What types of businesses do you work with?"
                answer="We work with all types of businesses in Sri Lanka, from small local shops to large corporations. Our services are tailored to meet the specific needs of each client regardless of size or industry."
              />
              <FaqItem 
                question="How long does a typical project take?"
                answer="Project timelines vary depending on complexity. A logo design might take 1-2 weeks, while a complete brand identity could take 4-6 weeks. We'll provide a detailed timeline during our initial consultation."
              />
              <FaqItem 
                question="Do you offer packages for startups?"
                answer="Yes, we have special packages designed specifically for Sri Lankan startups that include essential design elements to get your business off the ground within budget."
              />
              <FaqItem 
                question="Can you help with printing services?"
                answer="Absolutely! We have partnerships with quality printers across Sri Lanka and can manage the entire process from design to final printed materials."
              />
              <FaqItem 
                question="Do you work with clients outside of Sri Lanka?"
                answer="While our focus is on serving Sri Lankan businesses, we do work with international clients who are either targeting the Sri Lankan market or appreciate our design aesthetic."
              />
              <FaqItem 
                question="What is your payment process?"
                answer="We typically require a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we can arrange milestone-based payments."
              />
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center bg-indigo-900 text-white p-12 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Let's Create Something Amazing Together</h2>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto mb-8">
            Ready to elevate your brand with professional design? Contact us today to discuss your project.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-white text-indigo-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

const ProcessStep: React.FC<{ number: string; title: string; description: string }> = ({
  number,
  title,
  description
}) => (
  <div className="bg-white p-8 rounded-xl shadow-md relative">
    <div className="absolute -top-4 -left-4 bg-indigo-600 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold">
      {number}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FaqItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer
}) => (
  <div>
    <h4 className="text-lg font-semibold text-gray-900 mb-2">{question}</h4>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default ServicesPage;