import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioItems, categories } from '../data/portfolioData';
import { ArrowRight, ExternalLink } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div>
      {/* Page Header */}
      <div className="bg-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-xl text-indigo-200">
              Explore our creative work for businesses across Sri Lanka and beyond.
            </p>
          </div>
        </div>
      </div>
      
      {/* Filters & Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="relative overflow-hidden rounded-lg shadow-lg"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                    style={{
                      transform: hoveredItem === item.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  
                  {/* Overlay on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-indigo-900 bg-opacity-90 flex flex-col items-center justify-center p-6 text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-center mb-4">{item.description}</p>
                    <span className="inline-flex items-center text-sm uppercase tracking-wider bg-white bg-opacity-20 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <button className="mt-4 flex items-center text-white border border-white rounded-full px-4 py-2 text-sm hover:bg-white hover:text-indigo-900 transition-colors duration-300">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </button>
                  </motion.div>
                </div>
                
                {/* Title visible by default */}
                <div className="p-4 bg-white">
                  <h3 className="font-medium text-lg text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center bg-gray-50 p-12 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to start your project?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Let's create something amazing together that captures your brand's essence and connects with your audience.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors duration-300"
          >
            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;