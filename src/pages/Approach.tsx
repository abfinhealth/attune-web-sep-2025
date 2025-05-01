
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ChevronRight } from 'lucide-react';

const Approach: React.FC = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
          <div className="section-container">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl">
              Our Approach
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
              Financial Health as Your Business Model
            </p>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl">
              Our unique approach integrates mission and margin to transform your organization from the inside out. 
              We help credit unions place financial health at the core of their business model—not as a charitable 
              initiative, but as their fundamental competitive advantage.
            </p>
          </div>
        </section>

        {/* Mission + Margin Framework */}
        <section className="py-16 md:py-24 bg-white">
          <div className="section-container">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mission + Margin Framework
              </h2>
              <div className="w-20 h-1 bg-attune-teal mb-8"></div>
              <h3 className="text-2xl font-semibold mb-6 text-attune-teal-dark">
                Beyond Corporate Social Responsibility
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl">
                At Attune, we've reimagined the relationship between purpose and performance. Financial 
                health isn't a side initiative or charitable effort—it's your core business and competitive advantage.
              </p>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl">
                Our Mission + Margin Framework is built on a simple but powerful insight: when credit unions improve 
                financial outcomes for members, they also strengthen their own bottom line. It's not a choice between 
                doing good and doing well—it's a virtuous cycle.
              </p>

              <div className="bg-attune-teal-light p-6 rounded-lg mb-8">
                <h4 className="font-bold text-attune-teal-dark mb-4">The Virtuous Cycle:</h4>
                <ol className="space-y-2 text-gray-800">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">1.</span>
                    <span>Better member financial health leads to higher balances, engagement, and loyalty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">2.</span>
                    <span>Improved financial outcomes drive increased deposits, loans, and product adoption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">3.</span>
                    <span>Strategic focus on financial health creates organizational alignment and operational efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">4.</span>
                    <span>Purposeful differentiation establishes a unique market position that attracts new members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">5.</span>
                    <span>Measurable impact provides strategic clarity for continuous improvement</span>
                  </li>
                </ol>
              </div>

              <p className="text-lg text-gray-700 max-w-3xl">
                When financial health is central to your business model—not separate from it—everything changes. 
                Your purpose and performance become aligned, reinforcing each other rather than competing for 
                resources and attention.
              </p>
            </div>
          </div>
        </section>

        {/* How We Bring Financial Health to Life */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Bring Financial Health to Life
            </h2>
            <div className="w-20 h-1 bg-attune-teal mb-8"></div>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              Our comprehensive methodology guides credit unions through every step of their financial health transformation journey:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-attune-teal-light rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-attune-teal">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Assessment & Baseline</h3>
                <p className="text-gray-700 mb-4">We establish your current state through:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Member financial health measurement</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Employee financial wellness assessment</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Organizational readiness evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Competitive positioning analysis</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Benchmark comparison with industry standards</span>
                  </li>
                </ul>
                <p className="mt-4 text-gray-700">This creates a clear starting point and identifies your greatest opportunities for impact.</p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-attune-teal-light rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-attune-teal">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Strategy Development</h3>
                <p className="text-gray-700 mb-4">We craft a comprehensive financial health strategy that includes:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Core value proposition articulation</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Strategic objective definition</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Enterprise-wide goal alignment</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Resource allocation framework</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Success metrics and targets</span>
                  </li>
                </ul>
                <p className="mt-4 text-gray-700">This creates strategic clarity and direction for your entire organization.</p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-attune-teal-light rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-attune-teal">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Organization Alignment</h3>
                <p className="text-gray-700 mb-4">We align your credit union around financial health through:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Board and executive engagement</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Department-level strategy translation</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Role clarity and responsibility mapping</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Change management planning</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Internal communication frameworks</span>
                  </li>
                </ul>
                <p className="mt-4 text-gray-700">This ensures everyone understands their role in bringing financial health to life.</p>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-attune-teal-light rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-attune-teal">4</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Implementation Planning</h3>
                <p className="text-gray-700 mb-4">We develop detailed implementation roadmaps for:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Marketing and member experience</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Product development and enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Branch and digital experience transformation</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Employee wellness and engagement</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Operations and technology alignment</span>
                  </li>
                </ul>
                <p className="mt-4 text-gray-700">This translates high-level strategy into concrete actions across departments.</p>
              </div>

              {/* Step 5 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-attune-teal-light rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-attune-teal">5</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Execution Support</h3>
                <p className="text-gray-700 mb-4">We provide hands-on guidance through:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Implementation coaching and facilitation</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Cross-functional collaboration support</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Initiative management and tracking</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Capability building and training</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Quick-win identification and execution</span>
                  </li>
                </ul>
                <p className="mt-4 text-gray-700">This moves you from planning to action with confidence and momentum.</p>
              </div>

              {/* Step 6 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-attune-teal-light rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-attune-teal">6</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Measurement & Optimization</h3>
                <p className="text-gray-700 mb-4">We establish a continuous improvement cycle through:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Impact tracking and visualization</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>ROI analysis and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Strategic adjustment recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Success story documentation</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-attune-teal mr-1 flex-shrink-0" />
                    <span>Next-phase opportunity identification</span>
                  </li>
                </ul>
                <p className="mt-4 text-gray-700">This proves your impact and identifies ways to enhance it over time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Beyond Traditional Metrics */}
        <section className="py-16 md:py-24 bg-white">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beyond Traditional Metrics
            </h2>
            <div className="w-20 h-1 bg-attune-teal mb-8"></div>
            
            <h3 className="text-2xl font-semibold mb-6 text-attune-teal-dark">
              A New Way to Measure Success
            </h3>
            
            <p className="text-lg text-gray-700 mb-10 max-w-3xl">
              Attune helps credit unions move past limited approaches to measuring both mission and margin:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="border-l-4 border-attune-teal pl-6">
                <h4 className="font-bold text-xl mb-3">Beyond Return on Member</h4>
                <p className="text-gray-700">
                  Traditional approaches focus narrowly on rate advantages and fee avoidance. We measure the full 
                  spectrum of financial health improvements, capturing how you help members spend, save, borrow, 
                  and plan in ways that build long-term financial resilience and capability.
                </p>
              </div>
              
              <div className="border-l-4 border-attune-orange pl-6">
                <h4 className="font-bold text-xl mb-3">Beyond Brand Awareness</h4>
                <p className="text-gray-700">
                  Traditional metrics focus on recognition and perception. We help you prove that members who 
                  bank with you actually improve their financial lives—creating a value proposition based on 
                  tangible outcomes, not just good feelings.
                </p>
              </div>
              
              <div className="border-l-4 border-attune-teal-dark pl-6">
                <h4 className="font-bold text-xl mb-3">Beyond Education</h4>
                <p className="text-gray-700">
                  Traditional programs focus on knowledge transfer with limited evidence of behavior change. 
                  We integrate education with coaching, product design, and personalized experiences to drive 
                  measurable financial health outcomes that last.
                </p>
              </div>
              
              <div className="border-l-4 border-attune-purple pl-6">
                <h4 className="font-bold text-xl mb-3">Beyond Digital Transformation</h4>
                <p className="text-gray-700">
                  Traditional approaches focus on technology for its own sake. We provide the differentiator 
                  that makes your digital experience meaningful—using technology to deliver personalized financial 
                  health insights, recommendations, and solutions.
                </p>
              </div>
              
              <div className="border-l-4 border-attune-yellow pl-6 md:col-span-2">
                <h4 className="font-bold text-xl mb-3">Beyond Vulnerable Populations</h4>
                <p className="text-gray-700">
                  Traditional initiatives target only specialized segments. We help you build financial health 
                  strategies for all members across their lifelong journey—recognizing that financial health needs 
                  evolve and that inclusive approaches create greater impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Measurable Impact */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Measurable Impact for Members and Your Credit Union
            </h2>
            <div className="w-20 h-1 bg-attune-teal mb-8"></div>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              Our approach delivers concrete results for both mission and margin:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-attune-teal-dark mb-4">Member Financial Health Improvements</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Financial Wellness Scores</strong>: Measurable improvements in member financial health across spend, save, borrow, and plan dimensions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Behavior Change</strong>: Increased savings rates, reduced high-cost debt, improved credit scores, and greater financial confidence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Life Outcomes</strong>: Progress toward important financial goals like homeownership, education, retirement readiness, and financial security</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-attune-teal-dark mb-4">Business Performance Gains</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Deposit Growth</strong>: Increased balances and reduced volatility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Lending Performance</strong>: Higher loan volumes with improved quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Product Adoption</strong>: Greater products per member and deeper relationships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Member Acquisition</strong>: Improved new member growth through differentiated value proposition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Loyalty & Retention</strong>: Higher satisfaction, engagement, and lifetime value</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-attune-teal-dark mb-4">Organizational Alignment</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Employee Engagement</strong>: Increased purpose connection and reduced turnover</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Operational Efficiency</strong>: Streamlined processes focused on what matters most</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Strategic Clarity</strong>: Unified direction across departments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Resource Optimization</strong>: Better allocation of time, attention, and budget</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-attune-teal-dark mb-4">Market Differentiation</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Competitive Positioning</strong>: Clear differentiation from banks and other credit unions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Brand Strength</strong>: Purpose-driven identity that resonates with members and communities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Category Leadership</strong>: Recognition as a financial health authority</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Partnership Opportunities</strong>: Enhanced collaboration with aligned organizations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="py-16 md:py-24 bg-attune-teal text-white">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Commitment</h2>
            <p className="text-lg mb-8 max-w-3xl">
              Working with Attune means transforming your credit union from the inside out—making financial health 
              the core of who you are and how you compete, not just something you talk about. We help you prove 
              that improving member financial health is not only your mission but your most powerful path to 
              sustainable growth.
            </p>
            <a 
              href="#"
              className="inline-flex items-center px-8 py-3 bg-white text-attune-teal font-medium rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Approach;
