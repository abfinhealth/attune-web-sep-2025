
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">The Bottom Line</h2>
            <p className="text-xl text-gray-600 mb-8">
              When you make someone financially healthier, they do more business with you.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Not because you're selling harder, but because your products genuinely help their situation. That's the
              shift every financial services leader is figuring out.
            </p>
            <p className="text-xl font-semibold text-gray-800 mb-10">Ready to measure what matters?</p>
            <Link to="/contact" className="bg-attune-teal hover:bg-attune-teal-dark text-white font-medium py-4 px-8 rounded-md transition-all duration-300 inline-flex items-center gap-2 text-lg">
              Talk to Our Team
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CTASection;
