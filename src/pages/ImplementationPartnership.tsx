
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import ImplementationAreaCard from '@/components/implementation/ImplementationAreaCard';
import ImplementationApproachPhase from '@/components/implementation/ImplementationApproachPhase';
import CaseStudyHighlight from '@/components/implementation/CaseStudyHighlight';
import ImplementationDifference from '@/components/implementation/ImplementationDifference';

const ImplementationPartnership = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Implementation areas data
  const implementationAreas = [
    {
      title: "Marketing & Member Experience",
      description: "We help you position financial health as your core value proposition and create member experiences that drive improvement.",
      points: [
        "Financial Health Value Proposition",
        "Campaign Strategy and Execution",
        "Member Journey Mapping",
        "Content Development",
        "Channel Optimization"
      ],
      color: "bg-attune-teal-light"
    },
    {
      title: "Product Development",
      description: "We help you design and enhance products that measurably improve member financial health while driving business growth.",
      points: [
        "Financial Health Product Assessment",
        "Product Design and Redesign",
        "Solution Bundling",
        "Adoption Strategy",
        "Impact Measurement"
      ],
      color: "bg-attune-orange-light"
    },
    {
      title: "Branch & Retail Transformation",
      description: "We help you transform your branches into financial health centers where every interaction advances member wellbeing.",
      points: [
        "Branch Experience Design",
        "Staff Training and Capability Building",
        "Process Redesign",
        "Technology Integration",
        "Performance Metrics"
      ],
      color: "bg-attune-yellow-light"
    },
    {
      title: "HR & Employee Wellness",
      description: "We help you build financial health from the inside out, starting with your own team members.",
      points: [
        "Employee Financial Health Assessment",
        "Wellness Program Development",
        "Purpose Connection",
        "Performance Frameworks",
        "Financial Health Champions"
      ],
      color: "bg-attune-teal-light"
    },
    {
      title: "Operational Alignment",
      description: "We help you integrate financial health throughout your day-to-day operations and processes.",
      points: [
        "Process Redesign",
        "Technology Optimization",
        "Policy Review",
        "Vendor Management",
        "Continuous Improvement"
      ],
      color: "bg-attune-orange-light"
    }
  ];

  // Implementation approach phases
  const implementationPhases = [
    {
      title: "Assessment & Planning",
      description: "We begin by understanding your current state and defining clear implementation goals:",
      items: [
        "Organizational readiness evaluation",
        "Implementation opportunity mapping",
        "Priority area identification",
        "Resource assessment and planning",
        "Quick win identification",
        "Long-term roadmap development"
      ]
    },
    {
      title: "Hands-On Implementation",
      description: "We work alongside your teams to bring financial health to life:",
      items: [
        "Workshop facilitation and training",
        "Initiative design and execution",
        "Tool and template customization",
        "Staff coaching and capability building",
        "Cross-functional coordination",
        "Implementation troubleshooting"
      ]
    },
    {
      title: "Progress Tracking",
      description: "We help you monitor implementation effectiveness and adjust as needed:",
      items: [
        "Implementation milestone tracking",
        "Adoption and engagement measurement",
        "Progress reporting and visualization",
        "Obstacle identification and resolution",
        "Success story documentation",
        "Strategic adjustment recommendations"
      ]
    },
    {
      title: "Capability Building",
      description: "We develop your internal capacity for sustained financial health implementation:",
      items: [
        "Knowledge transfer and documentation",
        "Staff training and certification",
        "Internal champion development",
        "Implementation playbook creation",
        "Process integration and standardization",
        "Continuous learning mechanisms"
      ]
    }
  ];

  // Implementation differences
  const differentiators = [
    {
      title: "Integrated Expertise",
      description: "Our implementation partners bring specialized knowledge in different functional areas while maintaining a cohesive, cross-functional approach."
    },
    {
      title: "Practical Tools",
      description: "We provide tested frameworks, templates, and resources that make implementation manageable for busy teams with competing priorities."
    },
    {
      title: "Hands-On Support",
      description: "We don't just advise—we roll up our sleeves and work alongside your teams to overcome obstacles and drive progress."
    },
    {
      title: "Measurement Focus",
      description: "We ensure implementation efforts connect to measurable outcomes for both members and your credit union."
    },
    {
      title: "Capability Building",
      description: "We transfer knowledge and build internal capacity, ensuring sustainable implementation beyond our direct involvement."
    }
  ];

  // Implementation gap challenges
  const implementationGapChallenges = [
    "Limited expertise in financial health application",
    "Competing priorities and resource constraints",
    "Siloed approaches without cross-functional coordination",
    "Lack of practical tools and frameworks",
    "Difficulty sustaining momentum beyond initial efforts"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-attune-teal-light to-attune-gray py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-attune-teal-dark mb-6">Implementation Partnership</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Bring Financial Health to Life Across Your Organization
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-lg text-gray-700 max-w-4xl mx-auto">
              <p className="mb-8">
                Attune's Implementation Partnership helps credit unions move from strategy to action, bringing financial health to life through marketing campaigns, product development, branch transformations, HR initiatives, and operational changes.
              </p>
            </div>
          </div>
        </section>

        {/* The Implementation Gap Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-attune-teal-dark mb-6">The Implementation Gap</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Many credit unions struggle to translate their financial health vision into operational reality. Even with strong strategic intentions, implementation often falls short due to:
                </p>
                
                <ul className="space-y-3 mb-8">
                  {implementationGapChallenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                        <span className="text-red-500 text-lg">×</span>
                      </div>
                      <span className="ml-3 text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Our Hands-On Approach */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold text-attune-teal-dark mb-8 text-center">Our Hands-On Approach</h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center mb-12">
                Attune doesn't just provide recommendations—we work alongside your teams to implement financial health strategies across your organization. Our implementation partners bring specialized expertise in different functional areas while maintaining a cohesive, integrated approach.
              </p>
            </ScrollAnimation>
            
            <div className="space-y-10">
              {implementationAreas.map((area, index) => (
                <ImplementationAreaCard 
                  key={index} 
                  title={area.title} 
                  description={area.description} 
                  points={area.points} 
                  colorClass={area.color} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Our Implementation Approach */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold text-attune-teal-dark mb-8 text-center">Our Implementation Approach</h2>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 gap-8">
              {implementationPhases.map((phase, index) => (
                <ImplementationApproachPhase
                  key={index}
                  title={phase.title}
                  description={phase.description}
                  items={phase.items}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold text-attune-teal-dark mb-8 text-center">Case Study: Horizon Credit Union</h2>
            </ScrollAnimation>
            
            <CaseStudyHighlight />
          </div>
        </section>

        {/* What Makes Our Implementation Partnership Different */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold text-attune-teal-dark mb-8 text-center">What Makes Our Implementation Partnership Different</h2>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((diff, index) => (
                <ImplementationDifference 
                  key={index} 
                  title={diff.title} 
                  description={diff.description} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold text-attune-teal-dark mb-6">Ready to Bring Financial Health to Life?</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                Schedule a consultation to discuss how Attune's Implementation Partnership can help your credit union translate financial health strategy into operational reality across your organization.
              </p>
              <Button className="bg-attune-teal hover:bg-attune-teal-dark text-white px-8 py-3 text-lg">
                Schedule a Consultation <ArrowRight size={20} className="ml-2" />
              </Button>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ImplementationPartnership;
