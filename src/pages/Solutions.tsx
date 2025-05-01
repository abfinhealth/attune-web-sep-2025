
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import SolutionComponent from '@/components/solutions/SolutionComponent';
import PackageCard from '@/components/solutions/PackageCard';
import ModuleCard from '@/components/solutions/ModuleCard';

const Solutions = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Solution framework data
  const strategicFramework = {
    title: "Strategic Framework",
    description: "We help you craft a comprehensive financial health strategy that aligns your entire organization—from board-level planning through every department.",
    items: [
      {
        subtitle: "Board Level Integration",
        points: [
          "Purpose articulation and strategic planning",
          "Performance metrics that connect mission to margin",
          "Governance frameworks for financial health oversight"
        ]
      },
      {
        subtitle: "Executive Alignment",
        points: [
          "Leadership development and capability building",
          "Cross-functional collaboration models",
          "Resource allocation and prioritization frameworks"
        ]
      },
      {
        subtitle: "Enterprise-Wide Strategy",
        points: [
          "Departmental goal cascading",
          "Financial health integration roadmaps",
          "Change management and adoption planning"
        ]
      }
    ]
  };

  const implementationPartnership = {
    title: "Implementation Partnership",
    description: "We don't just deliver recommendations—we work alongside your teams to bring financial health strategies to life in every part of your organization.",
    items: [
      {
        subtitle: "Marketing & Member Experience",
        points: [
          "Financial health value proposition development",
          "Campaign strategy and execution",
          "Member journey mapping and optimization",
          "Messaging frameworks and content development"
        ]
      },
      {
        subtitle: "Product Development",
        points: [
          "Financial health-centered product design",
          "Solution evaluation and enhancement",
          "Feature prioritization based on health impact",
          "Adoption and engagement strategies"
        ]
      },
      {
        subtitle: "Branch Transformation",
        points: [
          "Financial health center design",
          "Staff training and capability building",
          "In-person experience optimization",
          "Technology integration for personalized interactions"
        ]
      },
      {
        subtitle: "HR & Employee Wellness",
        points: [
          "Staff financial health assessment and improvement",
          "Performance metrics tied to financial health outcomes",
          "Training and development programs",
          "Employee engagement through purpose alignment"
        ]
      },
      {
        subtitle: "Operational Integration",
        points: [
          "Process redesign through a financial health lens",
          "System and technology optimization",
          "Vendor management and partner alignment",
          "Continuous improvement frameworks"
        ]
      }
    ]
  };

  const measurementPlatform = {
    title: "Measurement Platform",
    description: "Our technology makes it easy to collect, analyze, and report on financial health data that connects mission impact to business outcomes.",
    items: [
      {
        subtitle: "Financial Health Assessment",
        points: [
          "Comprehensive measurement methodology",
          "Multidimensional scoring and analysis",
          "Segmentation by life stage and need state",
          "Trend tracking and progress visualization"
        ]
      },
      {
        subtitle: "Data Integration",
        points: [
          "Core banking system connections",
          "Multi-source data aggregation",
          "Automated processing and validation",
          "Secure, compliant data management"
        ]
      },
      {
        subtitle: "Analysis & Reporting",
        points: [
          "Interactive dashboards and visualizations",
          "Custom report generation",
          "Board-ready presentation materials",
          "Department-specific views and insights"
        ]
      },
      {
        subtitle: "ROI Framework",
        points: [
          "Initiative tracking and measurement",
          "Business impact quantification",
          "Resource optimization modeling",
          "Strategic decision support"
        ]
      }
    ]
  };

  // Service packages data
  const servicePackages = [
    {
      name: "Foundation",
      subtitle: "Financial Health Essentials",
      description: "For credit unions beginning their financial health journey",
      features: [
        {
          title: "Initial Financial Health Assessment",
          items: [
            "Member financial health baseline analysis",
            "Employee financial health assessment",
            "Organizational readiness evaluation",
            "Benchmark comparison with industry standards"
          ]
        },
        {
          title: "Measurement Framework Setup",
          items: [
            "Implementation of core financial health metrics",
            "Dashboard configuration for leadership visibility",
            "Quarterly data collection process"
          ]
        },
        {
          title: "Strategic Roadmap",
          items: [
            "Board and executive alignment session",
            "Financial health integration opportunities map",
            "Prioritized 12-month action plan"
          ]
        },
        {
          title: "Knowledge Building",
          items: [
            "Financial health fundamentals training for key staff",
            "Quarterly strategy check-ins",
            "Access to Attune's resource library"
          ]
        }
      ],
      idealFor: [
        "Credit unions seeking to establish a baseline understanding of financial health",
        "Organizations that need to respond to board requests for mission measurement",
        "Teams looking for a structured starting point with clear next steps"
      ],
      investment: "$75,000 - $125,000 annually",
      note: "Pricing varies based on credit union asset size and complexity",
      quickWins: "30-60 days",
      fullImplementation: "3-6 months",
      color: "attune-teal-light"
    },
    {
      name: "Acceleration",
      subtitle: "Financial Health Integration",
      description: "For credit unions ready to operationalize financial health across departments",
      features: [
        {
          title: "Department-Level Implementation",
          items: [
            "Two department-specific implementation playbooks (choose from):",
            "- Marketing & Member Experience",
            "- Product Development",
            "- Retail/Branch Operations",
            "- HR & Employee Wellness",
            "Implementation coaching and tracking"
          ]
        },
        {
          title: "Enhanced Measurement",
          items: [
            "Expanded metrics linking financial health to business outcomes",
            "Member segmentation analysis",
            "ROI framework for financial health initiatives"
          ]
        },
        {
          title: "Targeted Implementation",
          items: [
            "Two major initiative implementations per year",
            "Cross-functional project management",
            "Results documentation and case studies"
          ]
        },
        {
          title: "Capability Building",
          items: [
            "Financial health champions program",
            "Quarterly implementation workshops",
            "Change management support"
          ]
        }
      ],
      includesFoundation: true,
      idealFor: [
        "Credit unions with established financial health metrics seeking operational integration",
        "Organizations ready to move beyond measurement to action",
        "Teams looking to demonstrate tangible financial health improvements"
      ],
      investment: "$150,000 - $250,000 annually",
      note: "Pricing varies based on credit union asset size and implementation scope",
      quickWins: "60-90 days",
      fullImplementation: "6-12 months",
      color: "attune-yellow-light"
    },
    {
      name: "Transformation",
      subtitle: "Enterprise Financial Health Integration",
      description: "For credit unions committed to making financial health their core business strategy",
      features: [
        {
          title: "Enterprise Strategy Integration",
          items: [
            "Board-level strategic planning facilitation",
            "Annual goal-setting alignment across all departments",
            "Financial health as competitive advantage positioning"
          ]
        },
        {
          title: "Comprehensive Implementation",
          items: [
            "All department implementation playbooks and coaching",
            "Strategic initiative development and execution",
            "Vendor and partner ecosystem alignment"
          ]
        },
        {
          title: "Advanced Analytics",
          items: [
            "Predictive financial health modeling",
            "Member lifetime value analysis through financial health lens",
            "Competitive differentiation measurement"
          ]
        },
        {
          title: "Organizational Transformation",
          items: [
            "Executive leadership development program",
            "Financial health-centered performance metrics",
            "Cultural transformation support"
          ]
        }
      ],
      includesAcceleration: true,
      idealFor: [
        "Credit unions seeking comprehensive transformation around financial health",
        "Organizations ready to differentiate through financial health as core strategy",
        "Leaders committed to reimagining their business model"
      ],
      investment: "$300,000 - $500,000 annually",
      note: "Pricing varies based on credit union asset size and transformation scope",
      quickWins: "90-120 days",
      fullImplementation: "12-24 months",
      color: "attune-orange-light"
    },
    {
      name: "Innovation",
      subtitle: "Financial Health Leadership",
      description: "For industry pioneers seeking to define the future of financial health",
      features: [
        {
          title: "Innovation Partnership",
          items: [
            "Co-creation of new financial health solutions",
            "Access to Attune's innovation lab resources",
            "Early access to new methodologies and technologies"
          ]
        },
        {
          title: "Industry Leadership",
          items: [
            "Thought leadership content development",
            "Case study publication and promotion",
            "Speaking and presentation opportunities"
          ]
        },
        {
          title: "Advanced Strategic Support",
          items: [
            "On-demand executive advisory",
            "Quarterly board engagement",
            "Strategic opportunity identification"
          ]
        },
        {
          title: "Community Impact",
          items: [
            "Community financial health assessment",
            "Multi-stakeholder initiative development",
            "Impact measurement and storytelling"
          ]
        }
      ],
      includesTransformation: true,
      idealFor: [
        "Industry leaders seeking to pioneer financial health innovation",
        "Credit unions wanting to establish themselves as financial health authorities",
        "Organizations with ambitious community impact goals"
      ],
      investment: "$500,000+ annually",
      note: "Custom pricing based on innovation scope and partnership structure",
      quickWins: "Custom timeline",
      fullImplementation: "Ongoing partnership",
      color: "bg-gradient-to-br from-attune-teal-light to-attune-orange-light"
    }
  ];

  // Module add-ons data
  const moduleAddOns = [
    {
      title: "Financial Health Data Integration",
      price: "$25,000+"
    },
    {
      title: "Employee Financial Wellness Program",
      price: "$40,000+"
    },
    {
      title: "Member Financial Health Journey Mapping",
      price: "$35,000+"
    },
    {
      title: "Branch Transformation Blueprint",
      price: "$50,000+"
    },
    {
      title: "Financial Health Marketing Campaign",
      price: "$45,000+"
    }
  ];

  // Enterprise solutions data
  const enterpriseSolutions = [
    "League/Association Programs",
    "CUSO Partnerships",
    "Multi-Credit Union Collaboratives"
  ];

  // Implementation steps
  const implementationSteps = [
    {
      number: 1,
      title: "Discovery Call",
      description: "We'll understand your current situation, challenges, and goals"
    },
    {
      number: 2,
      title: "Needs Assessment",
      description: "We'll identify the right package and customizations for your organization"
    },
    {
      number: 3,
      title: "Proposal Development",
      description: "You'll receive a detailed proposal with scope, deliverables, and pricing"
    },
    {
      number: 4,
      title: "Kickoff Planning",
      description: "We'll align on timeline, resources, and success metrics"
    },
    {
      number: 5,
      title: "Implementation",
      description: "Begin your financial health transformation journey"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-attune-teal-light to-attune-gray py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-attune-teal-dark mb-6">Solutions</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Comprehensive Solutions for Financial Health Integration
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-lg text-gray-700 max-w-4xl mx-auto">
              <p className="mb-8">
                From assessment to transformation, we provide the strategy, implementation support, and technology you need to make financial health the core of your credit union's business model and competitive advantage.
              </p>
            </div>
          </div>
        </section>

        {/* Three Components Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-8 text-center">Three Integrated Components for Financial Health Success</h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mt-12">
              <SolutionComponent 
                title={strategicFramework.title}
                description={strategicFramework.description}
                items={strategicFramework.items}
                color="bg-attune-teal-light"
              />
              
              <SolutionComponent 
                title={implementationPartnership.title}
                description={implementationPartnership.description}
                items={implementationPartnership.items}
                color="bg-attune-orange-light"
              />
              
              <SolutionComponent 
                title={measurementPlatform.title}
                description={measurementPlatform.description}
                items={measurementPlatform.items}
                color="bg-attune-yellow-light"
              />
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-12 text-center">Service Packages</h2>
            
            <div className="space-y-12">
              {servicePackages.map((pkg, index) => (
                <PackageCard key={index} package={pkg} />
              ))}
            </div>
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-8 text-center">Custom Solutions</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12 text-center">
              Beyond our standard packages, Attune offers custom solutions designed for specific needs:
            </p>

            {/* Module Add-Ons */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-attune-teal-dark mb-6">Module Add-Ons</h3>
              <p className="text-lg text-gray-700 mb-8">
                Enhance any package with specialized modules:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                {moduleAddOns.map((module, index) => (
                  <ModuleCard key={index} title={module.title} price={module.price} />
                ))}
              </div>
            </div>

            {/* Enterprise Solutions */}
            <div>
              <h3 className="text-2xl font-bold text-attune-teal-dark mb-6">Enterprise Solutions</h3>
              <p className="text-lg text-gray-700 mb-4">
                For multi-entity organizations, networks, or associations:
              </p>
              
              <ul className="list-disc pl-5 text-lg text-gray-700 mb-6">
                {enterpriseSolutions.map((solution, index) => (
                  <li key={index} className="mb-2">{solution}</li>
                ))}
              </ul>
              
              <p className="text-gray-700 italic">
                Contact us for custom pricing based on your specific requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-12 text-center">Implementation Timeline</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
                <thead className="bg-attune-teal-light">
                  <tr>
                    <th className="py-3 px-4 text-left">Package</th>
                    <th className="py-3 px-4 text-left">Quick Wins</th>
                    <th className="py-3 px-4 text-left">Full Implementation</th>
                  </tr>
                </thead>
                <tbody>
                  {servicePackages.map((pkg, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="py-3 px-4 font-medium">{pkg.name}</td>
                      <td className="py-3 px-4">{pkg.quickWins}</td>
                      <td className="py-3 px-4">{pkg.fullImplementation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-8 text-center">Getting Started</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12 text-center">
              Ready to bring financial health to life at your credit union? Here's how to get started:
            </p>
            
            <div className="grid md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {implementationSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center relative border-t-4 border-attune-teal">
                  <div className="w-10 h-10 rounded-full bg-attune-teal flex items-center justify-center text-white font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-attune-teal-dark mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                  
                  {index < implementationSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform translate-x-full">
                      <div className="w-4 h-0.5 bg-gray-300"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button className="bg-attune-teal hover:bg-attune-teal-dark text-white px-8 py-3 text-lg">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
