
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';

const StrategicFramework = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-attune-teal-light to-attune-gray py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-attune-teal-dark mb-6">Strategic Framework</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Align Your Entire Organization Around Financial Health
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              Attune's Strategic Framework helps credit unions develop comprehensive financial health strategies that cascade from board-level planning through every department. We ensure your entire organization is aligned around financial health as both your mission and your competitive advantage.
            </p>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-8">The Challenge</h2>
            <p className="text-lg text-gray-700 mb-8">
              Many credit unions struggle with strategic alignment around financial health. While leaders may articulate a commitment to member financial wellbeing, this often doesn't translate into cohesive strategies, measurable goals, or operational priorities across the organization.
            </p>
            <h3 className="text-xl font-semibold text-attune-teal-dark mb-4">Common challenges include:</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
              <li>Disconnected initiatives across departments</li>
              <li>Difficulty articulating financial health as a competitive advantage</li>
              <li>Unclear metrics for measuring mission impact</li>
              <li>Strategic plans that separate mission from business objectives</li>
              <li>Board uncertainty about financial health ROI</li>
            </ul>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-8">Our Approach</h2>
            <p className="text-lg text-gray-700 mb-12">
              Attune's Strategic Framework addresses these challenges through a comprehensive, multi-level approach:
            </p>

            {/* Board Level Integration */}
            <div className="mb-16 bg-white p-8 rounded-lg shadow-md border-t-4 border-attune-teal">
              <h3 className="text-2xl font-bold text-attune-teal-dark mb-6">Board Level Integration</h3>
              <p className="text-lg text-gray-700 mb-6">
                We help your board understand, embrace, and govern financial health as your core purpose and competitive advantage.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-attune-teal-dark mb-2">Purpose Articulation</h4>
                  <p className="text-gray-700">
                    Develop a clear, compelling vision of how financial health defines your credit union's unique value and impact.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-attune-teal-dark mb-2">Strategic Planning Integration</h4>
                  <p className="text-gray-700">
                    Embed financial health throughout your strategic plan, ensuring it's not a separate initiative but the foundation of your strategy.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-attune-teal-dark mb-2">Performance Metrics</h4>
                  <p className="text-gray-700">
                    Create board-level indicators that connect financial health impact to business performance, proving the mission-margin linkage.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-attune-teal-dark mb-2">Governance Framework</h4>
                  <p className="text-gray-700">
                    Establish how the board will oversee, measure, and advance your financial health strategy over time.
                  </p>
                </div>
              </div>
            </div>

            {/* Executive Alignment */}
            <div className="mb-16 bg-white p-8 rounded-lg shadow-md border-t-4 border-attune-yellow">
              <h3 className="text-2xl font-bold text-attune-teal-dark mb-6">Executive Alignment</h3>
              <p className="text-lg text-gray-700 mb-6">
                We align your leadership team around financial health as the organizing principle for decisions, resources, and priorities.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-attune-teal-dark mb-2">Leadership Development</h4>
                  <p className="text-gray-700">
                    Build your executive team's capability to lead through a financial health lens, understanding both the mission impact and business case.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-attune-teal-dark mb-2">Annual Goal Alignment</h4>
                  <p className="text-gray-700">
                    Create an integrated goal framework that connects financial health objectives to operational and financial targets.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-attune-teal-dark mb-2">Cross-Functional Governance</h4>
                  <p className="text-gray-700">
                    Establish mechanisms for coordinating financial health initiatives across departments, avoiding silos and fragmentation.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-attune-teal-dark mb-2">Resource Allocation</h4>
                  <p className="text-gray-700">
                    Develop frameworks for investing in financial health initiatives that deliver both mission impact and business returns.
                  </p>
                </div>
              </div>
            </div>

            {/* Enterprise-Wide Strategy */}
            <div className="mb-16 bg-white p-8 rounded-lg shadow-md border-t-4 border-attune-orange">
              <h3 className="text-2xl font-bold text-attune-teal-dark mb-6">Enterprise-Wide Strategy</h3>
              <p className="text-lg text-gray-700 mb-6">
                We cascade your financial health strategy throughout the organization, ensuring every department understands their role.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-attune-teal-dark mb-2">Departmental Integration</h4>
                  <p className="text-gray-700">
                    Translate enterprise financial health goals into department-specific objectives, metrics, and initiatives.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-attune-teal-dark mb-2">Initiative Prioritization</h4>
                  <p className="text-gray-700">
                    Develop criteria for selecting and sequencing financial health initiatives based on impact potential and resource requirements.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-attune-teal-dark mb-2">Role Clarity</h4>
                  <p className="text-gray-700">
                    Define how each function contributes to financial health objectives, from front-line staff to specialized teams.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-attune-teal-dark mb-2">Execution Planning</h4>
                  <p className="text-gray-700">
                    Create detailed roadmaps for implementing financial health strategies across the organization, with clear milestones and accountabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-8">Key Benefits</h2>
            <p className="text-lg text-gray-700 mb-8">
              Attune's Strategic Framework delivers several important outcomes for credit unions:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-attune-teal-dark mb-4">Strategic Clarity</h3>
                <p className="text-gray-700">
                  A unified understanding of how financial health defines your purpose and competitive advantage.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-attune-teal-dark mb-4">Organizational Alignment</h3>
                <p className="text-gray-700">
                  Cohesive direction across departments with clear connections between daily activities and your mission.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-attune-teal-dark mb-4">Resource Optimization</h3>
                <p className="text-gray-700">
                  Better allocation of time, money, and attention toward initiatives that advance both purpose and performance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-attune-teal-dark mb-4">Measurement Focus</h3>
                <p className="text-gray-700">
                  Clear metrics that demonstrate your impact and inform continuous improvement.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <h3 className="text-xl font-semibold text-attune-teal-dark mb-4">Competitive Differentiation</h3>
                <p className="text-gray-700">
                  A distinctive market position based on improved member financial outcomes, not just rates and fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-12">Our Process</h2>
            
            {/* Process Cards */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-attune-teal">
                <h3 className="text-2xl font-bold text-attune-teal-dark mb-4">Discovery & Assessment</h3>
                <p className="text-lg text-gray-700 mb-4">
                  We begin by understanding your current state:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Strategic plan analysis</li>
                  <li>Organizational structure review</li>
                  <li>Existing initiatives inventory</li>
                  <li>Current metrics evaluation</li>
                  <li>Stakeholder interviews</li>
                  <li>Competitive positioning assessment</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-attune-yellow">
                <h3 className="text-2xl font-bold text-attune-teal-dark mb-4">Strategy Development</h3>
                <p className="text-lg text-gray-700 mb-4">
                  We then craft your financial health strategy:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Board and executive alignment sessions</li>
                  <li>Financial health vision articulation</li>
                  <li>Strategic objective development</li>
                  <li>Organization-wide goal framework</li>
                  <li>Initiative identification and prioritization</li>
                  <li>Resource allocation planning</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-attune-orange">
                <h3 className="text-2xl font-bold text-attune-teal-dark mb-4">Implementation Planning</h3>
                <p className="text-lg text-gray-700 mb-4">
                  We prepare for successful execution:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Departmental implementation roadmaps</li>
                  <li>Role and responsibility mapping</li>
                  <li>Milestone and timeline development</li>
                  <li>Success metric definition</li>
                  <li>Quick win identification</li>
                  <li>Change management planning</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-attune-teal-dark">
                <h3 className="text-2xl font-bold text-attune-teal-dark mb-4">Measurement Framework</h3>
                <p className="text-lg text-gray-700 mb-4">
                  We establish how you'll track progress:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Board-level dashboard development</li>
                  <li>Department-specific metrics creation</li>
                  <li>Data collection process design</li>
                  <li>Reporting frequency and format</li>
                  <li>Continuous improvement mechanisms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-8">Case Study: Community First Credit Union</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-attune-teal-dark mb-2">Challenge:</h3>
                <p className="text-gray-700">
                  Community First Credit Union ($1.8B in assets) had various financial wellness programs but no cohesive strategy connecting these initiatives to their core business model or competitive position.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-attune-teal-dark mb-2">Our Approach:</h3>
                <p className="text-gray-700 mb-4">
                  Attune worked with Community First to develop an enterprise-wide strategic framework that positioned financial health at the center of both their mission and their market strategy:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>We facilitated board and executive sessions that redefined financial health as their fundamental purpose and competitive advantage</li>
                  <li>We developed a comprehensive strategic plan with financial health as the organizing principle</li>
                  <li>We created department-specific objectives that connected daily operations to member financial outcomes</li>
                  <li>We established a measurement framework that linked financial health improvements to business performance</li>
                </ol>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-attune-teal-dark mb-2">Results:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Board unanimously adopted financial health as their strategic North Star</li>
                  <li>Leadership team aligned annual goals around financial health outcomes</li>
                  <li>All departments developed financial health integration plans</li>
                  <li>92% of employees reported greater mission alignment</li>
                  <li>Financial health became their primary market differentiator</li>
                  <li>43% improvement in member financial health scores</li>
                  <li>2.3x higher deposit growth compared to pre-transformation</li>
                </ul>
              </div>
              
              <blockquote className="border-l-4 border-attune-teal pl-4 italic text-gray-700">
                "Attune's Strategic Framework transformed how we think about our mission. Financial health isn't just something we talk about anymore—it's how we operate, differentiate, and grow. Our board, leadership team, and employees are all aligned around a shared vision that drives both purpose and performance."
                <footer className="mt-2 text-gray-600 font-medium">— Sarah Johnson, CEO, Community First Credit Union</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* How We Deliver Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-8">How We Deliver</h2>
            <p className="text-lg text-gray-700 mb-8">
              Attune's Strategic Framework is delivered through a combination of:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-attune-teal-dark mb-3">Facilitated Sessions</h3>
                <p className="text-gray-700">
                  Interactive workshops with your board, executive team, and department leaders to develop shared understanding and ownership.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-attune-teal-dark mb-3">Strategic Planning Support</h3>
                <p className="text-gray-700">
                  Guidance for integrating financial health throughout your formal strategic planning process and documentation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-attune-teal-dark mb-3">Alignment Tools</h3>
                <p className="text-gray-700">
                  Frameworks, templates, and resources to help translate high-level strategy into department-specific plans.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-attune-teal-dark mb-3">Implementation Roadmaps</h3>
                <p className="text-gray-700">
                  Detailed guides for bringing your financial health strategy to life across different areas of your organization.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <h3 className="text-xl font-semibold text-attune-teal-dark mb-3">Governance Design</h3>
                <p className="text-gray-700">
                  Structures and processes for ongoing oversight, coordination, and evolution of your financial health strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-attune-teal-light">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-6">Ready to Align Your Organization Around Financial Health?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Schedule a consultation to discuss how Attune's Strategic Framework can help your credit union develop a comprehensive financial health strategy that transforms how you operate, compete, and create value.
            </p>
            <Link to="/contact">
              <Button className="bg-attune-teal hover:bg-attune-teal-dark text-white px-8 py-6 text-lg">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StrategicFramework;
