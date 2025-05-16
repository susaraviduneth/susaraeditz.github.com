import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioItems, categories } from '../data/portfolioData';
import { PortfolioItem } from '../types';
import { ExternalLink } from 'lucide-react';

const PortfolioGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Creative Portfolio
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our diverse range of graphic design projects for Sri Lankan businesses and organizations.
        </p>
      </div>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
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
                  className="absolute inset-0 bg-indigo-900 bg-opacity-80 flex flex-col items-center justify-center p-6 text-white"
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
    </div>
  );
};

export default PortfolioGrid;