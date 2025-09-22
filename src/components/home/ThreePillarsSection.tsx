
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import { Target, TrendingUp, Users, Sparkles } from 'lucide-react';
import Illustration from '@/components/ui/Illustration';

const ThreePillarsSection = () => {
  const cards = [
    {
      title: 'The Problem',
      description: 'You\'re running financial health programs but can\'t prove they work',
      icon: <Target className="w-12 h-12 text-red-500" />,
      titleColor: 'text-red-500',
      illustration: 'checklist'
    },
    {
      title: 'The Solution',
      description: '30-second assessment that measures what actually predicts member behavior',
      icon: <TrendingUp className="w-12 h-12 text-attune-teal" />,
      titleColor: 'text-attune-teal',
      illustration: 'chart'
    },
    {
      title: 'The Result',
      description: 'Data showing which initiatives improve financial health (and which don\'t)',
      icon: <Users className="w-12 h-12 text-green-600" />,
      titleColor: 'text-green-600',
      illustration: 'plant'
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
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800 font-display">
              What We Actually Do
            </h2>
            <div className="mb-12">
              <p className="text-xl text-gray-600 mb-6">
                You know how most financial institutions ask "what products do you want?" instead of "how can we help
                you improve your financial situation?"
              </p>
              <p className="text-lg text-gray-800 font-medium">
                We built the measurement infrastructure so you can focus on the second question.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <ScrollAnimation key={card.title} threshold={0.2} className={`delay-${index * 100}`}>
              <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col card-hover text-center">
                <div className="flex justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${card.titleColor} font-display`}>
                  {card.title}
                </h3>
                <p className="text-gray-700 flex-grow">
                  {card.description}
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
