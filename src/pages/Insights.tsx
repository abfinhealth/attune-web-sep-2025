
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

const Insights = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-attune-purple-light/20 to-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-attune-purple-dark mb-4">Insights</h1>
            <h2 className="text-xl md:text-2xl text-center text-gray-600 mb-8">Perspectives on Financial Health Transformation</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto">
              Explore our latest thinking, research, and practical guidance on bringing financial health to life at your credit union. 
              Our insights draw from our extensive work with credit unions across the country and our deep expertise in 
              financial health measurement and implementation.
            </p>
          </div>
        </section>

        {/* Featured Insights Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-attune-purple-dark">Featured Insights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeaturedCard 
                title="The Mission-Margin Connection: How Financial Health Drives Credit Union Performance"
                description="Financial health isn't just a mission imperative—it's a powerful business driver. This research report quantifies the relationship between member financial health improvements and key business metrics, demonstrating how purpose and performance reinforce each other."
              />
              <FeaturedCard 
                title="Beyond Financial Education: Building Pathways to Lasting Behavior Change"
                description="Traditional financial education often falls short of driving meaningful change. This white paper explores how credit unions can move beyond knowledge transfer to create integrated approaches that combine education, coaching, product design, and personalized experiences."
              />
              <FeaturedCard 
                title="Measuring What Matters: A New Framework for Financial Health Impact"
                description="What gets measured gets managed—but many credit unions struggle to quantify their mission impact. This guide introduces Attune's comprehensive measurement methodology and explains how to implement it at your organization."
              />
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="blog" className="w-full">
              <TabsList className="grid w-full md:w-auto md:inline-flex grid-cols-2 md:grid-cols-4 h-auto gap-2 mb-8">
                <TabsTrigger value="blog" className="py-3">Blog</TabsTrigger>
                <TabsTrigger value="case-studies" className="py-3">Case Studies</TabsTrigger>
                <TabsTrigger value="research" className="py-3">Research</TabsTrigger>
                <TabsTrigger value="resources" className="py-3">Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="blog" className="mt-6">
                <h2 className="text-3xl font-bold mb-8 text-attune-purple-dark">Blog</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <BlogPost 
                    title="Financial Health as Competitive Advantage: Lessons from Market Leaders"
                    author="Andy Bandyopadhyay, Founder & CEO"
                    date="April 15, 2025"
                    description="In a crowded financial services landscape, credit unions need meaningful differentiation beyond rates and fees. This post explores how leading credit unions are positioning financial health as their fundamental competitive advantage—and seeing remarkable results in member acquisition, engagement, and loyalty."
                  />
                  <BlogPost 
                    title="Aligning Your Board Around Financial Health Strategy"
                    author="Jennifer Tescher, Board Member"
                    date="March 28, 2025"
                    description="Effective financial health transformation requires board-level commitment and understanding. Drawing from her extensive experience with financial institutions, Jen shares practical approaches for engaging your board in financial health strategy and governance."
                  />
                  <BlogPost 
                    title="The Five Myths of Financial Health Measurement"
                    author="Sarah Thompson, Head of Research"
                    date="February 12, 2025"
                    description="Many credit unions have misconceptions about what it takes to measure financial health effectively. This post debunks common myths and provides clarity on building measurement approaches that drive real insight and action."
                  />
                  <BlogPost 
                    title="Department Spotlight: Transforming Marketing Through Financial Health"
                    author="Michael Chen, Implementation Partner"
                    date="January 30, 2025"
                    description="How can marketing departments reimagine their role through a financial health lens? This post explores how leading credit unions are developing messaging, campaigns, and member experiences that bring financial health to life in compelling ways."
                  />
                </div>
                <div className="text-center">
                  <Button variant="outline" className="border-attune-purple text-attune-purple hover:bg-attune-purple hover:text-white">
                    View All Blog Posts
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="case-studies" className="mt-6">
                <h2 className="text-3xl font-bold mb-8 text-attune-purple-dark">Case Studies</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                  <CaseStudyCard 
                    title="Community First Credit Union: Financial Health as Organizational North Star"
                    description="Community First Credit Union ($1.8B in assets) transformed their approach to both mission and margin by placing financial health at the center of their business model. This case study details their journey from fragmented initiatives to an integrated strategy that drives measurable improvements for both members and the credit union."
                    results={[
                      "43% improvement in member financial health scores",
                      "28% increase in product adoption",
                      "2.3x higher deposit growth",
                      "92% of employees report greater mission alignment"
                    ]}
                  />
                  <CaseStudyCard 
                    title="Horizon Credit Union: Differentiating Through Financial Health"
                    description="Horizon Credit Union ($850M in assets) faced increasing competition and needed a distinctive market position. This case study shows how they developed a financial health strategy that transformed their marketing, product development, and member experience—leading to breakthrough growth and engagement."
                    results={[
                      "37% increase in new member acquisition",
                      "52% improvement in Net Promoter Score",
                      "21% reduction in employee turnover",
                      "Financial health became primary brand differentiator"
                    ]}
                  />
                  <CaseStudyCard 
                    title="Evergreen Financial Cooperative: Employee Financial Wellness as Foundation"
                    description="Evergreen Financial Cooperative ($1.2B in assets) recognized that employee financial health was the essential first step in their transformation. This case study explores their comprehensive approach to staff wellness and how it created a foundation for member-facing initiatives."
                    results={[
                      "35% improvement in employee financial health scores",
                      "68% reduction in financial stress-related productivity loss",
                      "24% decrease in turnover",
                      "47% increase in employee-referred new members"
                    ]}
                  />
                </div>
                <div className="text-center">
                  <Button variant="outline" className="border-attune-purple text-attune-purple hover:bg-attune-purple hover:text-white">
                    View All Case Studies
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="research" className="mt-6">
                <h2 className="text-3xl font-bold mb-8 text-attune-purple-dark">Research</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                  <ResearchCard 
                    title="The State of Credit Union Financial Health 2025"
                    description="Our comprehensive study of the financial health landscape across the credit union industry. Drawing from data across hundreds of institutions, this report identifies emerging trends, best practices, and opportunities for leadership."
                  />
                  <ResearchCard 
                    title="Financial Health Segmentation: Beyond Traditional Demographics"
                    description="This research moves past conventional segmentation approaches to understand how financial health needs evolve throughout member journeys. The report introduces a new framework for targeting, product development, and personalization."
                  />
                  <ResearchCard 
                    title="Quantifying the Business Impact of Financial Health Initiatives"
                    description="This ROI study examines the business case for financial health investment across credit unions of different sizes. With detailed case examples and calculation methodologies, it provides a framework for measuring the return on financial health initiatives."
                  />
                </div>
                <div className="text-center">
                  <Button variant="outline" className="border-attune-purple text-attune-purple hover:bg-attune-purple hover:text-white">
                    View All Research
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="resources" className="mt-6">
                <h2 className="text-3xl font-bold mb-8 text-attune-purple-dark">Resources</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <ResourceCard 
                    title="Financial Health Assessment Toolkit"
                    description="Everything you need to begin measuring financial health at your credit union, including survey templates, scoring methodologies, implementation guides, and reporting frameworks."
                  />
                  <ResourceCard 
                    title="Board Presentation Template: The Business Case for Financial Health"
                    description="A customizable presentation template for making the case to your board for financial health as a strategic priority. Includes key data points, case examples, and discussion prompts."
                  />
                  <ResourceCard 
                    title="Financial Health Strategy Worksheet"
                    description="A practical worksheet to help your leadership team identify financial health integration opportunities across departments and develop a cohesive approach."
                  />
                  <ResourceCard 
                    title="Department Implementation Guides"
                    description="Specialized playbooks for implementing financial health in specific areas: Marketing & Member Experience, Product Development, Branch Operations, Human Resources."
                    isMultiGuide={true}
                  />
                </div>
                <div className="text-center">
                  <Button variant="outline" className="border-attune-purple text-attune-purple hover:bg-attune-purple hover:text-white">
                    View All Resources
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-attune-purple-light/20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-4 text-attune-purple-dark text-center">Subscribe to Our Insights</h2>
            <p className="text-center text-gray-700 mb-8">
              Stay updated with our latest thinking on financial health transformation for credit unions. 
              Our monthly newsletter delivers practical guidance, success stories, and resources directly to your inbox.
            </p>
            <div className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow"
              />
              <Button className="bg-attune-purple hover:bg-attune-purple-dark">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-center text-gray-600 mt-4">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

// Component for featured insight cards
const FeaturedCard = ({ title, description }: { title: string; description: string }) => (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardContent className="p-6">
      <div className="bg-attune-purple/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-attune-purple"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold text-attune-purple-dark mb-3">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <Button variant="link" className="text-attune-purple px-0 hover:text-attune-purple-dark">
        Read More
      </Button>
    </CardContent>
  </Card>
);

// Component for blog post cards
const BlogPost = ({ title, author, date, description }: { title: string; author: string; date: string; description: string }) => (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardContent className="p-6">
      <h3 className="text-xl font-bold text-attune-purple-dark mb-3">{title}</h3>
      <div className="flex items-center mb-4 text-sm text-gray-600">
        <span className="font-medium">{author}</span>
        <span className="mx-2">•</span>
        <div className="flex items-center">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <Button variant="link" className="text-attune-purple px-0 hover:text-attune-purple-dark">
        Read More
      </Button>
    </CardContent>
  </Card>
);

// Component for case study cards
const CaseStudyCard = ({ title, description, results }: { title: string; description: string; results: string[] }) => (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardContent className="p-6">
      <h3 className="text-xl font-bold text-attune-purple-dark mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <h4 className="font-bold text-gray-800 mb-2">Results:</h4>
      <ul className="mb-6 space-y-2">
        {results.map((result, index) => (
          <li key={index} className="flex items-start">
            <span className="text-attune-teal mr-2">•</span>
            <span className="text-gray-700">{result}</span>
          </li>
        ))}
      </ul>
      <Button variant="link" className="text-attune-purple px-0 hover:text-attune-purple-dark">
        Read the Case Study
      </Button>
    </CardContent>
  </Card>
);

// Component for research cards
const ResearchCard = ({ title, description }: { title: string; description: string }) => (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardContent className="p-6">
      <div className="bg-attune-purple/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-attune-purple"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <line x1="10" y1="9" x2="8" y2="9"></line>
        </svg>
      </div>
      <Badge className="bg-attune-teal mb-3">Research Report</Badge>
      <h3 className="text-xl font-bold text-attune-purple-dark mb-3">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <Button variant="link" className="text-attune-purple px-0 hover:text-attune-purple-dark">
        Download Research
      </Button>
    </CardContent>
  </Card>
);

// Component for resource cards
const ResourceCard = ({ title, description, isMultiGuide = false }: { title: string; description: string; isMultiGuide?: boolean }) => (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardContent className="p-6">
      <div className="bg-attune-purple/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-attune-purple"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
          <path d="M8 7h6"></path>
          <path d="M8 11h8"></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold text-attune-purple-dark mb-3">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <Button variant="link" className="text-attune-purple px-0 hover:text-attune-purple-dark">
        {isMultiGuide ? 'Browse Implementation Guides' : 'Download Resource'}
      </Button>
    </CardContent>
  </Card>
);

export default Insights;
