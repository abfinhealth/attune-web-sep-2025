import React from 'react';
import ScrollAnimation from '../ui/ScrollAnimation';

const ValuePropositionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation threshold={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center font-display text-attune-teal">
              Mission and Margin:<br className="hidden md:block" /> 
              Two Sides of the Same Coin
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation threshold={0.1} delay={200}>
            <p className="text-lg md:text-xl mb-6 text-gray-700 text-center font-light">
              We believe that financial institutions can do well by doing good. Our platform helps you align your mission with your business goals, creating a virtuous cycle of growth and impact.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
