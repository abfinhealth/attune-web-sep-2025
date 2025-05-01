
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Building2, TrendingUp, LineChart, Handshake, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ForCreditUnions = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-attune-teal-light py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-attune-teal-dark mb-6">For Credit Unions</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-attune-teal-dark mb-6">Financial Health: Your Competitive Advantage</h2>
            <p className="text-xl text-gray-700 mb-8">How leading credit unions are transforming their business through financial health</p>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 mb-6">
                Credit unions were founded on the principle of people helping people—and today, that mission is more relevant than ever. But in a crowded financial services landscape, credit unions face unique challenges in demonstrating their value, measuring their impact, and competing effectively while staying true to their purpose.
              </p>
              <p className="text-gray-700">
                At Attune, we help credit unions transform these challenges into opportunities by making financial health the core of their business model and competitive advantage.
              </p>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-10 text-center">Meeting Today's Credit Union Challenges</h2>
            
            <div className="space-y-12">
              {/* Challenge 1 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-attune-teal-light p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-attune-teal mb-3">Demonstrating Value Beyond Rates</h3>
                  <div className="mb-4">
                    <strong className="block text-gray-700 mb-2">The Challenge:</strong>
                    <p className="text-gray-700">
                      In a competitive landscape where rates and fees are increasingly commoditized, credit unions struggle to articulate their unique value proposition to members and prospects.
                    </p>
                  </div>
                  <div>
                    <strong className="block text-gray-700 mb-2">The Attune Solution:</strong>
                    <p className="text-gray-700">
                      We help you develop a differentiated position based on improving member financial health outcomes—creating value that banks and fintechs can't easily replicate and that resonates deeply with what members truly need.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-attune-teal/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-12 h-12 text-attune-teal" />
                  </div>
                </div>
              </div>

              {/* Challenge 2 */}
              <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                <div className="bg-attune-teal-light p-6 rounded-lg md:order-2">
                  <h3 className="text-xl font-bold text-attune-teal mb-3">Measuring Mission Impact</h3>
                  <div className="mb-4">
                    <strong className="block text-gray-700 mb-2">The Challenge:</strong>
                    <p className="text-gray-700">
                      Credit unions know their mission matters, but often lack robust ways to measure, track, and report on their impact in terms that connect to business performance.
                    </p>
                  </div>
                  <div>
                    <strong className="block text-gray-700 mb-2">The Attune Solution:</strong>
                    <p className="text-gray-700">
                      Our measurement platform provides comprehensive metrics that quantify both member financial health improvements and their connection to business outcomes—giving your board and leadership clear visibility into mission fulfillment.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center md:order-1">
                  <div className="w-24 h-24 bg-attune-teal/10 rounded-full flex items-center justify-center">
                    <LineChart className="w-12 h-12 text-attune-teal" />
                  </div>
                </div>
              </div>

              {/* Challenge 3 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-attune-teal-light p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-attune-teal mb-3">Competing with Banks and Fintechs</h3>
                  <div className="mb-4">
                    <strong className="block text-gray-700 mb-2">The Challenge:</strong>
                    <p className="text-gray-700">
                      Traditional financial institutions and digital disruptors are targeting credit union members with sophisticated marketing, seamless experiences, and innovative technology.
                    </p>
                  </div>
                  <div>
                    <strong className="block text-gray-700 mb-2">The Attune Solution:</strong>
                    <p className="text-gray-700">
                      We help you leverage your purpose as a genuine competitive advantage—transforming how you communicate your value, design your experiences, and develop products that demonstrably improve financial lives in ways competitors cannot.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-attune-teal/10 rounded-full flex items-center justify-center">
                    <Building2 className="w-12 h-12 text-attune-teal" />
                  </div>
                </div>
              </div>

              {/* Challenge 4 */}
              <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                <div className="bg-attune-teal-light p-6 rounded-lg md:order-2">
                  <h3 className="text-xl font-bold text-attune-teal mb-3">Aligning Around Purpose</h3>
                  <div className="mb-4">
                    <strong className="block text-gray-700 mb-2">The Challenge:</strong>
                    <p className="text-gray-700">
                      Despite good intentions, many credit unions struggle to translate their purpose into strategic action that guides decisions at every level of the organization.
                    </p>
                  </div>
                  <div>
                    <strong className="block text-gray-700 mb-2">The Attune Solution:</strong>
                    <p className="text-gray-700">
                      Our strategic framework cascades financial health from board-level vision into department-specific goals and front-line actions—creating alignment that connects daily operations to your fundamental purpose.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center md:order-1">
                  <div className="w-24 h-24 bg-attune-teal/10 rounded-full flex items-center justify-center">
                    <Handshake className="w-12 h-12 text-attune-teal" />
                  </div>
                </div>
              </div>

              {/* Challenge 5 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-attune-teal-light p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-attune-teal mb-3">Moving Beyond Fragmented Initiatives</h3>
                  <div className="mb-4">
                    <strong className="block text-gray-700 mb-2">The Challenge:</strong>
                    <p className="text-gray-700">
                      Financial education programs, community outreach, and member resources often exist as isolated initiatives without cohesive strategy or measurable outcomes.
                    </p>
                  </div>
                  <div>
                    <strong className="block text-gray-700 mb-2">The Attune Solution:</strong>
                    <p className="text-gray-700">
                      We help you integrate disparate efforts into a comprehensive financial health approach that spans your entire organization—maximizing impact through coordination and shared purpose.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-attune-teal/10 rounded-full flex items-center justify-center">
                    <LineChart className="w-12 h-12 text-attune-teal" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 px-4 bg-attune-teal-light">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-10 text-center">Credit Unions Bringing Financial Health to Life</h2>
            
            <div className="space-y-10">
              {/* Case Study 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-attune-teal-dark mb-2">Community First Credit Union</h3>
                  <div className="flex flex-wrap gap-6 mb-4 text-sm">
                    <p><strong>Asset Size:</strong> $1.8 billion</p>
                    <p><strong>Members:</strong> 140,000</p>
                    <p><strong>Challenge:</strong> Various financial wellness programs but no cohesive strategy</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Transformation Journey:</h4>
                    <p className="text-gray-700">
                      Community First worked with Attune to develop an enterprise-wide financial health strategy that connected their mission directly to their business model. By integrating financial health into their marketing, product development, branch experiences, and employee programs, they created a distinctive position in their market and measurable improvements for members.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Results:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>43% improvement in member financial health scores</li>
                      <li>28% increase in product adoption</li>
                      <li>2.3x higher deposit growth</li>
                      <li>92% of employees report greater mission alignment</li>
                    </ul>
                  </div>
                  
                  <blockquote className="italic text-gray-700 border-l-4 border-attune-teal pl-4 py-2 mb-4">
                    "Attune has transformed how we think about our mission. Financial health isn't just something we talk about anymore—it's how we operate, differentiate, and grow. Our board, leadership team, and employees are all aligned around a shared vision that drives both purpose and performance."
                    <footer className="mt-2 font-medium">— Sarah Johnson, CEO, Community First Credit Union</footer>
                  </blockquote>
                  
                  <Button variant="outline" className="flex items-center gap-2 text-attune-teal border-attune-teal hover:bg-attune-teal hover:text-white">
                    Read the Full Case Study <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-attune-teal-dark mb-2">Horizon Credit Union</h3>
                  <div className="flex flex-wrap gap-6 mb-4 text-sm">
                    <p><strong>Asset Size:</strong> $850 million</p>
                    <p><strong>Members:</strong> 72,000</p>
                    <p><strong>Challenge:</strong> Strong community focus but fragmented initiatives</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Transformation Journey:</h4>
                    <p className="text-gray-700">
                      Horizon partnered with Attune to move from disconnected programs to a cohesive financial health strategy. By developing a financial health measurement baseline, creating a distinctive marketing approach, redesigning their member onboarding experience, and implementing an employee financial wellness program, they established financial health as their primary differentiator.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Results:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>37% increase in new member acquisition</li>
                      <li>52% improvement in Net Promoter Score</li>
                      <li>21% reduction in employee turnover</li>
                      <li>Financial health became primary brand differentiator</li>
                    </ul>
                  </div>
                  
                  <blockquote className="italic text-gray-700 border-l-4 border-attune-teal pl-4 py-2 mb-4">
                    "Working with Attune allowed us to move beyond fragmented initiatives to a cohesive strategy that touches every part of our organization. Their measurement platform has given us unprecedented visibility into both our mission impact and business outcomes, proving that financial health truly drives our success."
                    <footer className="mt-2 font-medium">— Michael Rivera, COO, Horizon Credit Union</footer>
                  </blockquote>
                  
                  <Button variant="outline" className="flex items-center gap-2 text-attune-teal border-attune-teal hover:bg-attune-teal hover:text-white">
                    Read the Full Case Study <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-attune-teal-dark mb-2">Evergreen Financial Cooperative</h3>
                  <div className="flex flex-wrap gap-6 mb-4 text-sm">
                    <p><strong>Asset Size:</strong> $1.2 billion</p>
                    <p><strong>Members:</strong> 95,000</p>
                    <p><strong>Challenge:</strong> Difficulty measuring impact beyond donations and volunteer hours</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Transformation Journey:</h4>
                    <p className="text-gray-700">
                      Evergreen began their financial health journey by focusing first on their employees. By implementing a comprehensive staff financial wellness program, they built internal capability and credibility that created a foundation for member-facing initiatives. This inside-out approach transformed their culture and created authentic advocates for financial health.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Results:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>35% improvement in employee financial health scores</li>
                      <li>68% reduction in financial stress-related productivity loss</li>
                      <li>24% decrease in turnover</li>
                      <li>47% increase in employee-referred new members</li>
                    </ul>
                  </div>
                  
                  <blockquote className="italic text-gray-700 border-l-4 border-attune-teal pl-4 py-2 mb-4">
                    "Starting with our employees' financial health created a powerful foundation for our broader transformation. Our team members became authentic advocates for financial health because they experienced the impact firsthand. This approach has created a genuine cultural shift that our members can feel in every interaction."
                    <footer className="mt-2 font-medium">— Elena Rodriguez, CEO, Evergreen Financial Cooperative</footer>
                  </blockquote>
                  
                  <Button variant="outline" className="flex items-center gap-2 text-attune-teal border-attune-teal hover:bg-attune-teal hover:text-white">
                    Read the Full Case Study <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="text-center">
                <Button variant="outline" className="flex items-center gap-2 mx-auto text-attune-teal border-attune-teal hover:bg-attune-teal hover:text-white">
                  View All Success Stories <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Health in Action Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-4 text-center">Financial Health in Action</h2>
            <p className="text-gray-700 text-center mb-10">Financial health transformation touches every part of your credit union. Here's how it comes to life across key departments:</p>
            
            <div className="space-y-8">
              <div className="bg-attune-teal-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-attune-teal-dark mb-4">Marketing & Member Experience</h3>
                
                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">The Financial Health Approach:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Position financial health as your core value proposition</li>
                    <li>Develop messaging that highlights member outcome improvements</li>
                    <li>Create campaigns that attract members seeking financial progress</li>
                    <li>Redesign acquisition journeys with financial health at the center</li>
                    <li>Measure impact through both engagement and health improvement metrics</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Example in Action:</h4>
                  <p className="text-gray-700">
                    Horizon Credit Union redesigned their member acquisition strategy around financial health, moving from rate-based messaging to outcome-focused communication. Their "Progress Together" campaign highlighted real member financial health improvements and led to a 37% increase in new accounts while attracting members with higher lifetime value potential.
                  </p>
                </div>
              </div>
              
              <div className="bg-attune-teal-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-attune-teal-dark mb-4">Product Development</h3>
                
                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">The Financial Health Approach:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Design products that measurably improve financial outcomes</li>
                    <li>Enhance existing offerings with financial health features</li>
                    <li>Create solution bundles that address specific life challenges</li>
                    <li>Develop metrics that connect product usage to health improvements</li>
                    <li>Implement feedback loops to continuously optimize impact</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Example in Action:</h4>
                  <p className="text-gray-700">
                    Community First Credit Union transformed their auto loan experience by integrating financial health considerations into the application process. By helping members understand affordability beyond monthly payments and providing ownership cost transparency, they reduced loan delinquency by 24% while improving member satisfaction and financial confidence.
                  </p>
                </div>
              </div>
              
              <div className="bg-attune-teal-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-attune-teal-dark mb-4">Retail/Branch Operations</h3>
                
                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">The Financial Health Approach:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Transform branches into financial health centers</li>
                    <li>Train staff as financial health coaches, not transaction processors</li>
                    <li>Redesign physical spaces to facilitate financial conversations</li>
                    <li>Implement technology that personalizes the in-person experience</li>
                    <li>Measure branch performance through health impact metrics</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Example in Action:</h4>
                  <p className="text-gray-700">
                    Evergreen Financial Cooperative redesigned their flagship branch as a "Financial Health Hub" with dedicated coaching spaces, interactive technology, and community financial education areas. This transformation increased branch traffic by 18% and drove a 32% increase in new relationship openings.
                  </p>
                </div>
              </div>
              
              <div className="bg-attune-teal-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-attune-teal-dark mb-4">HR & Employee Wellness</h3>
                
                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">The Financial Health Approach:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Implement comprehensive employee financial wellness programs</li>
                    <li>Connect staff financial health to member impact</li>
                    <li>Incorporate financial health into performance metrics</li>
                    <li>Develop financial health champions across departments</li>
                    <li>Create authentic advocates through personal experience</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Example in Action:</h4>
                  <p className="text-gray-700">
                    Horizon Credit Union launched an employee financial wellness program that included personalized coaching, emergency savings support, and debt reduction assistance. This initiative reduced financial stress, decreased turnover by 21%, and created authentic advocates who could speak from personal experience about financial health improvements.
                  </p>
                </div>
              </div>
              
              <div className="bg-attune-teal-light rounded-lg p-6">
                <h3 className="text-xl font-bold text-attune-teal-dark mb-4">Executive & Board Engagement</h3>
                
                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">The Financial Health Approach:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Align strategic planning around financial health as core purpose</li>
                    <li>Develop integrated mission-margin metrics for leadership</li>
                    <li>Create board reporting that connects impact to performance</li>
                    <li>Implement financial health-centered decision frameworks</li>
                    <li>Measure success through both mission fulfillment and financial results</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Example in Action:</h4>
                  <p className="text-gray-700">
                    Community First Credit Union redesigned their board reporting to highlight financial health impact alongside traditional performance metrics. This approach transformed strategic discussions, aligned resource allocation with mission fulfillment, and created clearer decision-making frameworks for leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 px-4 bg-attune-teal-light">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-10 text-center">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium text-gray-800">How is Attune different from other financial education or wellness providers?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1 text-gray-700">
                  Unlike traditional providers that focus solely on education or tools, Attune offers a comprehensive approach that integrates financial health into your entire business model. We help you transform how you operate—from strategy to implementation to measurement—making financial health your competitive advantage, not just a side program.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium text-gray-800">We already have financial education programs. Why do we need Attune?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1 text-gray-700">
                  Education alone rarely drives lasting behavior change or measurable outcomes. Our approach moves beyond education to create integrated strategies that span marketing, product development, operations, and measurement—connecting your purpose directly to your business performance and demonstrating clear ROI.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium text-gray-800">How long does it take to see results from financial health initiatives?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1 text-gray-700">
                  While the full transformation journey is typically measured in years, our clients see meaningful quick wins within the first 3-6 months. These early successes build momentum and demonstrate value while laying the foundation for more comprehensive change. Our phased approach ensures you see both short-term impact and long-term transformation.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium text-gray-800">How do we measure the ROI of financial health initiatives?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1 text-gray-700">
                  Our measurement platform connects member financial health improvements directly to business metrics like deposit growth, loan performance, product adoption, and loyalty. This allows you to quantify both the mission impact and business return of your financial health investments—proving that purpose and performance reinforce each other.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium text-gray-800">How does this work with our existing strategic plan?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1 text-gray-700">
                  We don't replace your strategic plan—we help you infuse financial health into it. For some credit unions, financial health becomes their north star, while for others it's a key strategic pillar. We meet you where you are and help you integrate financial health in ways that enhance your existing priorities and strengthen your distinctive market position.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="bg-white rounded-lg shadow-sm border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-medium text-gray-800">What size credit unions do you work with?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1 text-gray-700">
                  We work with credit unions across the asset spectrum, from $250 million to $10+ billion. Our approach is tailored to your specific context, resources, and objectives. We've structured our service packages to provide appropriate options regardless of your size or complexity.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="text-center mt-8">
              <Button variant="outline" className="flex items-center gap-2 mx-auto text-attune-teal border-attune-teal hover:bg-attune-teal hover:text-white">
                View All FAQs <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-attune-teal text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Bring Financial Health to Life?</h2>
            <p className="text-lg mb-8">
              Join leading credit unions transforming their business through financial health. Schedule a consultation to discuss your unique situation and explore how Attune can help you make financial health your competitive advantage.
            </p>
            <Button className="bg-white text-attune-teal hover:bg-gray-100 hover:text-attune-teal-dark">
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ForCreditUnions;
