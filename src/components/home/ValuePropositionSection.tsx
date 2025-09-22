import React from 'react';
import ScrollAnimation from '../ui/ScrollAnimation';
import { CheckCircle } from 'lucide-react';

const ValuePropositionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimation threshold={0.1}>
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Is This You?</h2>
          </ScrollAnimation>

          <ScrollAnimation threshold={0.1} delay={200}>
            <div className="space-y-4">
              {[
                "Leadership believes member financial health drives business results",
                "Your team can integrate measurement into existing touchpoints",
                "You have budget authority for member experience initiatives",
                "You need data to prove financial health programs actually work",
                '"Member financial outcomes" appears in your strategic plan or board presentations',
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-attune-teal mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation threshold={0.1} delay={400}>
            <div className="mt-8 p-6 bg-white border border-gray-200 rounded-lg">
              <p className="text-gray-600 italic">
                If member financial health isn't a business priority for your organization, we're probably not a fit.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
