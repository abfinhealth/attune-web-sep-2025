
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import { TrendingUp, Users, CircleCheckBig, BarChart } from 'lucide-react';

const ValuePropositionSection = () => {
  const proofPoints = [
    {
      title: 'Strategic Clarity',
      description: 'Align your entire organization around financial health as both your mission and your business model',
      icon: <Users className="w-10 h-10 text-attune-purple" />
    },
    {
      title: 'Measurable Member Improvement',
      description: 'Track and demonstrate how your initiatives directly improve member financial outcomes',
      icon: <CircleCheckBig className="w-10 h-10 text-attune-purple" />
    },
    {
      title: 'Business Growth',
      description: 'Drive increased deposits, loans, and loyalty through financial health as your value proposition',
      icon: <TrendingUp className="w-10 h-10 text-attune-purple" />
    },
    {
      title: 'Market Differentiation',
      description: 'Stand out from banks and fintechs by proving your unique impact on member financial lives',
      icon: <BarChart className="w-10 h-10 text-attune-purple" />
    }
  ];

  return (
    <section className="bg-attune-gray py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Mission and Margin: Two Sides of the Same Coin
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              When you improve financial outcomes for members, you strengthen your bottom line
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation threshold={0.2}>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-attune-purple-dark">The Attune Difference</h3>
            <p className="text-gray-700 mb-4">
              At Attune, we've redefined how credit unions approach financial health—not as a side initiative or charitable effort, but as the core of your business model and competitive advantage.
            </p>
            <p className="text-gray-700">
              Our integrated approach connects your mission impact directly to business outcomes, transforming how you operate, measure success, and differentiate in a crowded market.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {proofPoints.map((point, index) => (
            <ScrollAnimation key={point.title} threshold={0.2} className="delay-100">
              <div className="bg-white rounded-xl p-6 shadow-md h-full card-hover">
                <div className="mb-4">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
