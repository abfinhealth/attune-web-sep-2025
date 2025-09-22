
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../ui/ScrollAnimation';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-attune-teal-light rounded-full filter blur-3xl opacity-30 transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-attune-orange-light rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2"></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8">
          <Sparkles className="text-attune-yellow w-full h-full opacity-60" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6">
          <Sparkles className="text-attune-orange w-full h-full opacity-60" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation threshold={0.1} className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
              Your leadership knows member financial health drives business results.
              <span className="text-attune-teal"> We prove it.</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation threshold={0.1} delay={200}>
            <p className="text-xl md:text-2xl mb-6 text-gray-700 font-light">
              Whether you're managing member outcomes, optimizing product portfolios, or improving user engagement - the
              question is always the same: "How do we measure financial health impact?"
            </p>
          </ScrollAnimation>
          <ScrollAnimation threshold={0.1} delay={300}>
            <p className="text-lg text-gray-800 mb-10 font-medium">Here's how our customers do it.</p>
          </ScrollAnimation>
          <ScrollAnimation threshold={0.1} delay={400}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
                Talk to Our Team
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path 
            fill="#F9F9F9" 
            fillOpacity="1" 
            d="M0,96L60,85.3C120,75,240,53,360,48C480,43,600,53,720,69.3C840,85,960,107,1080,101.3C1200,96,1320,64,1380,48L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
