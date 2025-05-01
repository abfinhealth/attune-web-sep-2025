
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import { Check, Sparkles } from 'lucide-react';

const ProblemSolutionSection = () => {
  const challenges = [
    'Struggle to differentiate beyond competitive rates',
    'Difficulty measuring mission impact in meaningful ways',
    'Disconnected initiatives across departments',
    'Unclear link between mission activities and business results',
    'Board pressure to demonstrate purpose while maintaining performance'
  ];

  const solutions = [
    'Integrated mission-margin framework that connects purpose to performance',
    'Comprehensive measurement system that proves your impact',
    'Enterprise-wide strategy that aligns all departments',
    'Implementation support that brings strategy to life',
    'Technology platform that makes measurement accessible and actionable'
  ];

  return (
    <section className="py-20 md:py-28 bg-attune-gray relative overflow-hidden">
      <div className="absolute top-20 right-20 w-16 h-16 opacity-20">
        <Sparkles className="w-full h-full text-attune-yellow" />
      </div>
      <div className="absolute bottom-40 left-40 w-12 h-12 opacity-20">
        <Sparkles className="w-full h-full text-attune-orange" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-attune-teal font-display">
              Transforming Challenges into Opportunities
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              From fragmented initiatives to strategic integration
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation className="delay-100">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 font-display">The Challenge</h3>
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <span className="text-red-500 text-lg">×</span>
                    </div>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation className="delay-200">
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-attune-teal">
              <h3 className="text-2xl font-semibold mb-6 text-attune-teal font-display">The Attune Solution</h3>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-attune-teal-light flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-attune-teal" />
                    </div>
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
