
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-attune-purple-dark text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-attune-purple rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-attune-blue rounded-full filter blur-3xl opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to bring financial health to life?
            </h2>
            <p className="text-lg md:text-xl mb-10 text-white opacity-90">
              Join leading credit unions transforming their business through financial health
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="#" className="bg-white text-attune-purple-dark hover:bg-opacity-90 font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center gap-2">
                Schedule a Consultation
                <ArrowRight size={18} />
              </Link>
              <Link to="#" className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center gap-2">
                Explore Our Approach
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CTASection;
