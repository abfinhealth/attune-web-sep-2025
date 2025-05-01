
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import { BookOpen, Handshake, BarChart } from 'lucide-react';

const ThreePillarsSection = () => {
  const pillars = [
    {
      title: 'Strategic Framework',
      description: 'We help you craft a comprehensive financial health strategy that aligns your board, executive team, and departments around a shared vision and measurable goals.',
      icon: <BookOpen className="w-12 h-12 text-attune-purple" />,
      iconBg: 'bg-attune-purple-light'
    },
    {
      title: 'Implementation Partnership',
      description: 'We work alongside your teams to bring financial health to life—from marketing campaigns to product development to branch transformations to employee programs.',
      icon: <Handshake className="w-12 h-12 text-attune-purple" />,
      iconBg: 'bg-attune-blue-light'
    },
    {
      title: 'Measurement Platform',
      description: 'Our technology makes it easy to collect, analyze, and report on financial health data that connects mission impact to business outcomes.',
      icon: <BarChart className="w-12 h-12 text-attune-purple" />,
      iconBg: 'bg-attune-purple-light'
    }
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
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
                <div className={`${pillar.iconBg} w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-attune-purple-dark text-center">
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
