
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProblemSolutionSection = () => {
  const steps = [
    {
      number: 1,
      title: '30-second assessment',
      description: 'Using industry-standard FinHealth Score®'
    },
    {
      number: 2,
      title: 'Instant insights',
      description: 'On member segments and intervention opportunities'
    },
    {
      number: 3,
      title: 'Track progress',
      description: 'Which programs actually improve financial health over time'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <ScrollAnimation key={step.number} threshold={0.2} className={`delay-${index * 100}`}>
                <div className="text-center">
                  <div className="bg-attune-teal text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation threshold={0.2} delay={400}>
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                No data science team required. No complex integration. Just measurement that turns financial health from
                aspiration to business strategy.
              </p>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-attune-teal text-attune-teal hover:bg-attune-teal hover:text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
              >
                See How It Works
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
