
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import { BookOpen, Handshake, BarChart, Sparkles } from 'lucide-react';
import Illustration from '@/components/ui/Illustration';

const ThreePillarsSection = () => {
  const pillars = [
    {
      title: 'Strategic Framework',
      description: 'We help you craft a comprehensive financial health strategy that aligns your board, executive team, and departments around a shared vision and measurable goals.',
      icon: <BookOpen className="w-12 h-12 text-attune-teal" />,
      iconBg: 'bg-attune-teal-light',
      illustration: 'checklist'
    },
    {
      title: 'Implementation Partnership',
      description: 'We work alongside your teams to bring financial health to life—from marketing campaigns to product development to branch transformations to employee programs.',
      icon: <Handshake className="w-12 h-12 text-attune-teal" />,
      iconBg: 'bg-attune-orange-light',
      illustration: 'plant'
    },
    {
      title: 'Measurement Platform',
      description: 'Our technology makes it easy to collect, analyze, and report on financial health data that connects mission impact to business outcomes.',
      icon: <BarChart className="w-12 h-12 text-attune-teal" />,
      iconBg: 'bg-attune-teal-light',
      illustration: 'chart'
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute -top-10 right-10 w-20 h-20 opacity-10">
        <Sparkles className="w-full h-full text-attune-yellow" />
      </div>
      <div className="absolute bottom-10 left-10 w-16 h-16 opacity-10">
        <Sparkles className="w-full h-full text-attune-orange" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-attune-teal font-display">
              Our Integrated Approach
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              We bring together the strategy, implementation support, and technology you need
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <ScrollAnimation key={pillar.title} threshold={0.2} className={`delay-${index * 100}`}>
              <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col card-hover">
                <div className="flex justify-center mb-6">
                  <Illustration 
                    type={pillar.illustration as 'plant' | 'chart' | 'checklist'} 
                    className="mb-4"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-attune-teal text-center font-display">
                  {pillar.title}
                </h3>
                <p className="text-gray-700 text-center flex-grow">
                  {pillar.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreePillarsSection;
