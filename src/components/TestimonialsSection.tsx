import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialData } from '../data/testimonialsData';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  
  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
  };
  
  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };
  
  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [current]);
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div className="bg-indigo-900 py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-800 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-700 rounded-full opacity-20 transform translate-x-1/4 translate-y-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
            Hear from businesses across Sri Lanka who have transformed their brands with our design services.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Quote className="h-16 w-16 text-indigo-700 opacity-30 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'tween', duration: 0.5 }}
                className="absolute w-full h-full flex flex-col md:flex-row items-center bg-indigo-800 bg-opacity-30 rounded-xl p-6 md:p-10"
              >
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-indigo-400">
                    <img 
                      src={testimonialData[current].avatar} 
                      alt={testimonialData[current].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3 md:pl-8 text-center md:text-left">
                  <blockquote className="text-white text-lg md:text-xl italic mb-6">
                    "{testimonialData[current].comment}"
                  </blockquote>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{testimonialData[current].name}</h4>
                    <p className="text-indigo-300">{testimonialData[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prev}
              className="p-2 rounded-full bg-indigo-800 hover:bg-indigo-700 text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-2">
              {testimonialData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === current ? 'bg-white' : 'bg-indigo-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="p-2 rounded-full bg-indigo-800 hover:bg-indigo-700 text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;