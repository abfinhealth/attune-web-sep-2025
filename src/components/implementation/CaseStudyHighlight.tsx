
import { Check } from 'lucide-react';

const CaseStudyHighlight = () => {
  const marketingTransformation = [
    "Developed a distinctive "Financial Progress Partnership" positioning",
    "Created integrated campaigns highlighting member outcome improvements",
    "Redesigned the digital and physical acquisition experience",
    "Implemented financial health-focused content strategy"
  ];

  const productEnhancement = [
    "Reimagined their checking account suite with financial health features",
    "Developed a SaveUP program with automated savings and rewards",
    "Created a debt consolidation offering focused on long-term financial improvement",
    "Implemented impact measurement for all enhanced products"
  ];

  const employeeEngagement = [
    "Launched comprehensive staff financial wellness program",
    "Developed financial health champions across departments",
    "Created role-specific training on financial health conversations",
    "Integrated financial health into performance expectations"
  ];

  const results = [
    "37% increase in new member acquisition through differentiated positioning",
    "52% improvement in Net Promoter Score",
    "21% reduction in employee turnover",
    "Financial health became primary brand differentiator",
    "Measurable improvements in member financial health metrics"
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-8">
        <div className="mb-6">
          <p className="text-lg text-gray-700 mb-6">
            <strong className="text-attune-teal-dark">Challenge:</strong>{" "}
            Horizon Credit Union ($850M in assets) had developed a financial health strategy but struggled to translate it into operational reality across departments.
          </p>
          
          <p className="text-lg text-gray-700 mb-6">
            <strong className="text-attune-teal-dark">Our Approach:</strong>{" "}
            Attune's Implementation Partnership focused on bringing financial health to life in three key areas:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="border-t-4 border-attune-teal-light rounded-md bg-gray-50 p-5">
            <h4 className="font-bold text-lg mb-3 text-attune-teal-dark">1. Marketing Transformation</h4>
            <ul className="space-y-2">
              {marketingTransformation.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-attune-teal-light flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-attune-teal-dark" />
                  </div>
                  <span className="ml-2 text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t-4 border-attune-orange-light rounded-md bg-gray-50 p-5">
            <h4 className="font-bold text-lg mb-3 text-attune-teal-dark">2. Product Enhancement</h4>
            <ul className="space-y-2">
              {productEnhancement.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-attune-orange-light flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-attune-teal-dark" />
                  </div>
                  <span className="ml-2 text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t-4 border-attune-yellow-light rounded-md bg-gray-50 p-5">
            <h4 className="font-bold text-lg mb-3 text-attune-teal-dark">3. Employee Engagement</h4>
            <ul className="space-y-2">
              {employeeEngagement.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-attune-yellow-light flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-attune-teal-dark" />
                  </div>
                  <span className="ml-2 text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h4 className="font-bold text-lg mb-3 text-attune-teal-dark">Results:</h4>
          <ul className="space-y-2">
            {results.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-attune-teal flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="ml-3 text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="border-l-4 border-attune-teal p-5 bg-gray-50 italic">
          <p className="text-gray-700">
            "Working with Attune allowed us to move beyond fragmented initiatives to a cohesive strategy that touches every part of our organization. Their implementation partnership was the difference between a good strategic plan and genuine transformation that our members can feel in every interaction."
          </p>
          <p className="mt-2 font-semibold text-attune-teal-dark">— Michael Rivera, COO, Horizon Credit Union</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHighlight;
