
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import { Users, TrendingUp, Target } from 'lucide-react';

const SocialProofSection = () => {
  const industryQuote = {
    quote: "We realized financial health isn't just good for customers - it's good business. Healthy customers are more profitable, have lower risk, and stay with you longer.",
    author: "Bank of America CEO, Financial Health Network's EMERGE conference",
    context: "The conversation has shifted from \"should we care about customer financial health?\" to \"how do we measure and optimize it?\""
  };

  const customerProofs = [
    {
      icon: <Users className="h-8 w-8 text-attune-teal" />,
      title: "Credit Human ($4.2B financial institution)",
      description: "Board mandated member financial health improvement."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-attune-teal" />,
      title: "Large Financial Services Firm",
      description: "Integrating our assessment into their user onboarding to drive engagement and retention through personalized financial insights."
    },
    {
      icon: <Target className="h-8 w-8 text-attune-teal" />,
      title: "Virginia Financial Institution ($5.8B)",
      description: "Discovered financially healthy members use 32% more products - because those products genuinely fit their situation."
    }
  ];

  return (
    <section className="bg-attune-gray py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Industry Leaders Quote */}
        <ScrollAnimation>
          <div className="bg-attune-teal text-white rounded-xl p-8 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-8">Why Smart Leaders Care About This</h2>
              <blockquote className="text-xl lg:text-2xl mb-6 text-balance">
                "{industryQuote.quote}"
              </blockquote>
              <p className="text-lg opacity-90 mb-8">
                — {industryQuote.author}
              </p>
              <p className="text-lg">
                {industryQuote.context.split('"').map((part, index) =>
                  index % 2 === 1 ? <strong key={index}>"{part}"</strong> : part
                )}
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Customer Proof Points */}
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-800">Our Customers Prove It Works</h2>
          </div>
        </ScrollAnimation>

        <div className="space-y-8 mb-12">
          {customerProofs.map((proof, index) => (
            <ScrollAnimation key={index} threshold={0.2} className={`delay-${index * 100}`}>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-attune-teal/10 p-3 rounded-lg flex-shrink-0">
                    {proof.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{proof.title}</h3>
                    <p className="text-gray-600">
                      {proof.description.includes('32%') ? (
                        <>
                          Discovered financially healthy members use <strong>32% more products</strong> - because those
                          products genuinely fit their situation.
                        </>
                      ) : (
                        proof.description
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation threshold={0.2}>
          <div className="text-center">
            <p className="text-lg text-gray-600">
              Different institution types. Same business insight:
              <strong className="text-gray-800"> financial health measurement drives better outcomes.</strong>
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default SocialProofSection;
