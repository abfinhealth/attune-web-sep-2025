
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const MeasurementPlatform = () => {
  const assessmentFeatures = [
    "Multidimensional Scoring: Measure financial health across key dimensions (spend, save, borrow, and plan) using validated assessment approaches.",
    "Segmentation Analysis: Understand how financial health varies across member segments based on demographics, life stage, product usage, and other factors.",
    "Trend Tracking: Monitor changes in financial health over time, identifying patterns, improvements, and emerging needs.",
    "Benchmark Comparison: Compare your credit union's results against industry benchmarks and peer institutions to contextualize your performance.",
    "Personalized Insights: Generate individualized financial health profiles that can guide personalized recommendations and interventions."
  ];

  const dataIntegrationFeatures = [
    "Core Banking Connection: Integrate with your core banking system to incorporate transactional data into financial health analysis without manual effort.",
    "Survey Management: Administer financial health assessments to members and employees through multiple channels with automated processing.",
    "Multi-Source Aggregation: Combine data from various systems (lending, digital banking, CRM, etc.) for a complete view of financial health factors.",
    "Automated Processing: Transform raw data into meaningful financial health indicators through intelligent algorithms and data science.",
    "Secure Data Management: Maintain rigorous data security and privacy protections throughout the collection and analysis process."
  ];

  const analysisReportingFeatures = [
    "Interactive Dashboards: Visualize financial health metrics through customizable dashboards tailored to different user needs and perspectives.",
    "Custom Report Generation: Create compelling reports for various stakeholders, from board presentations to department-specific analyses.",
    "Drill-Down Capabilities: Explore data at multiple levels of granularity, from enterprise-wide trends to specific member segments.",
    "Narrative Generation: Automatically translate data into meaningful narratives that explain the "so what" behind the numbers.",
    "Export and Sharing: Easily share insights through multiple formats, including PDF reports, PowerPoint presentations, and interactive dashboards."
  ];

  const missionMarginFeatures = [
    "Business Impact Quantification: Connect financial health improvements to key business metrics like deposit growth, loan performance, and loyalty.",
    "Initiative ROI Assessment: Measure the return on investment for specific financial health initiatives across both mission and margin dimensions.",
    "Strategic Decision Support: Provide data-driven guidance for resource allocation, initiative prioritization, and strategic adjustments.",
    "Board-Ready Reporting: Create integrated mission-margin narratives that demonstrate how purpose and performance reinforce each other.",
    "Predictive Modeling: Forecast how financial health improvements will translate to business outcomes over different time horizons."
  ];

  const departmentViews = [
    {
      title: "Marketing View",
      features: [
        "Campaign impact on financial health metrics",
        "Acquisition performance through financial health lens",
        "Member journey analysis",
        "Content effectiveness",
        "Channel optimization insights"
      ]
    },
    {
      title: "Product View",
      features: [
        "Product impact on financial health dimensions",
        "Adoption and usage patterns",
        "Feature effectiveness",
        "Product opportunity identification",
        "Impact comparison across offerings"
      ]
    },
    {
      title: "Retail/Branch View",
      features: [
        "Location-specific financial health impact",
        "Staff performance metrics",
        "Interaction effectiveness",
        "In-person vs. digital comparison",
        "Branch transformation insights"
      ]
    },
    {
      title: "HR View",
      features: [
        "Employee financial health trends",
        "Department comparison",
        "Wellness program impact",
        "Correlation with employee performance",
        "Engagement and retention impacts"
      ]
    }
  ];

  const advancedAnalyticsFeatures = [
    "Segmentation Engine: Identify patterns and opportunities across member segments based on financial health profiles and behaviors.",
    "Initiative Tracking: Measure the specific impact of financial health initiatives through controlled comparison and time-series analysis.",
    "Predictive Analytics: Forecast financial health trajectories and identify early intervention opportunities before problems arise.",
    "Scenario Modeling: Simulate the potential impact of different approaches to optimize resource allocation and strategy.",
    "Text Analytics: Extract insights from qualitative data like member feedback, success stories, and implementation challenges."
  ];

  const implementationSteps = [
    {
      title: "Discovery & Planning",
      items: [
        "Current state assessment",
        "Data source identification",
        "Implementation roadmap development",
        "Success metric definition",
        "Stakeholder alignment"
      ]
    },
    {
      title: "Technical Implementation",
      items: [
        "Core system integration",
        "Data validation and mapping",
        "Dashboard configuration",
        "User setup and permissions",
        "Security verification"
      ]
    },
    {
      title: "User Training",
      items: [
        "Role-based training sessions",
        "Administrator certification",
        "Resource documentation",
        "Best practice guidance",
        "User community access"
      ]
    },
    {
      title: "Launch & Optimization",
      items: [
        "Go-live support",
        "Initial insights review",
        "Adoption monitoring",
        "Refinement recommendations",
        "Continuous improvement planning"
      ]
    }
  ];

  const ongoingSupportFeatures = [
    "Technical Support: Responsive assistance for platform questions, issue resolution, and enhancement requests.",
    "Strategic Guidance: Expert advice on interpreting data, developing insights, and translating findings into action.",
    "Regular Health Checks: Proactive review of your implementation to identify opportunities for greater value and impact.",
    "Community of Practice: Access to a network of peer institutions using the platform, sharing best practices and innovations.",
    "Continuous Enhancement: Regular platform updates with new features, improved capabilities, and evolving methodologies."
  ];

  const technicalDetails = [
    "Cloud-based SaaS platform with secure, multi-tenant architecture",
    "API connectivity with major core banking systems",
    "Secure file transfer for batch processing",
    "Direct database connections where appropriate",
    "Web services for real-time data exchange",
    "SOC 2 compliance",
    "Bank-grade encryption",
    "Role-based access controls",
    "Comprehensive audit logging",
    "Regular penetration testing",
    "99.9% uptime guarantee",
    "Sub-second query response for standard reports",
    "Support for millions of member records",
    "Daily data refreshes with real-time options"
  ];

  const userRoles = [
    "Administrators (platform management)",
    "Executives (enterprise-wide access)",
    "Department Leaders (functional view access)",
    "Analysts (data exploration capabilities)",
    "Viewers (dashboard and report access)"
  ];

  const accessMethods = [
    "Web-based interface (desktop and mobile responsive)",
    "Scheduled report delivery via email",
    "Export to common formats (PDF, Excel, PowerPoint)",
    "API access for custom integration"
  ];

  return (
    <>
      <Navbar />
      <div className="pt-24 sm:pt-28 mb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-attune-teal-dark mb-6">Measurement Platform</h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Connect Mission Impact to Business Outcomes
            </p>
            <div className="mt-8 max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                Attune's Measurement Platform makes it easy to collect, analyze, and report on financial health data that links mission impact to business performance. Our technology provides the metrics and insights to prove your impact and optimize your approach.
              </p>
            </div>
          </div>
        </div>

        {/* The Challenge Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-6">The Measurement Challenge</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Credit unions struggle to measure and demonstrate their impact on member financial health in ways that are:
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-2">
              {[
                "Connected to business outcomes",
                "Accessible to non-technical users",
                "Actionable for strategic decisions",
                "Credible with boards and stakeholders",
                "Sustainable without major resource investments"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-attune-teal flex items-center justify-center mr-3">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comprehensive Solution Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-attune-teal-dark mb-6">Our Comprehensive Solution</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                The Attune Measurement Platform addresses these challenges through an integrated approach to financial health measurement:
              </p>
            </div>

            {/* Financial Health Assessment */}
            <div className="mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-bold text-attune-teal-dark mb-4">Financial Health Assessment</h3>
                <p className="text-gray-700 mb-6">
                  Comprehensive methodology for measuring member and employee financial health across multiple dimensions.
                </p>
                <div className="space-y-4">
                  {assessmentFeatures.map((feature, index) => {
                    const [title, description] = feature.split(': ');
                    return (
                      <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <h4 className="text-lg font-semibold text-attune-teal-dark">{title}</h4>
                        <p className="text-gray-600">{description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Data Integration */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-bold text-attune-teal-dark mb-4">Data Integration</h3>
                <p className="text-gray-700 mb-6">
                  Seamless collection and integration of financial health data from multiple sources.
                </p>
                <div className="space-y-4">
                  {dataIntegrationFeatures.map((feature, index) => {
                    const [title, description] = feature.split(': ');
                    return (
                      <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <h4 className="text-lg font-semibold text-attune-teal-dark">{title}</h4>
                        <p className="text-gray-600">{description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Analysis & Reporting */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-2xl font-bold text-attune-teal-dark mb-4">Analysis & Reporting</h3>
                <p className="text-gray-700 mb-6">
                  Intuitive tools for exploring data, generating insights, and communicating impact.
                </p>
                <div className="space-y-4">
                  {analysisReportingFeatures.map((feature, index) => {
                    const [title, description] = feature.split(': ');
                    return (
                      <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <h4 className="text-lg font-semibold text-attune-teal-dark">{title}</h4>
                        <p className="text-gray-600">{description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mission-Margin Connection */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-attune-teal-dark mb-4">Mission-Margin Connection</h3>
                <p className="text-gray-700 mb-6">
                  Frameworks and metrics that demonstrate how financial health improvements drive business performance.
                </p>
                <div className="space-y-4">
                  {missionMarginFeatures.map((feature, index) => {
                    const [title, description] = feature.split(': ');
                    return (
                      <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <h4 className="text-lg font-semibold text-attune-teal-dark">{title}</h4>
                        <p className="text-gray-600">{description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Platform Features */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-6">Key Platform Features</h2>
          </div>

          {/* Executive Dashboard */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-attune-teal-dark mb-6">Executive Dashboard</h3>
            <p className="text-lg text-gray-700 mb-6">
              The Executive Dashboard provides leadership with a high-level view of financial health performance and business impact:
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-3">
                {[
                  "Financial health score trends across the membership",
                  "Business metrics correlated with financial health improvements",
                  "Progress against strategic financial health objectives",
                  "Initiative performance summary",
                  "Board-ready visualizations and insights"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-attune-teal-light flex items-center justify-center mt-1">
                      <Check className="w-3 h-3 text-attune-teal-dark" />
                    </div>
                    <span className="ml-3 text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Department Views */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-attune-teal-dark mb-6">Department Views</h3>
            <p className="text-lg text-gray-700 mb-6">
              Specialized dashboards tailored to different functional areas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departmentViews.map((view, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-attune-teal-dark mb-4">{view.title}</h4>
                    <ul className="space-y-2">
                      {view.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-attune-teal-light flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-attune-teal-dark" />
                          </div>
                          <span className="ml-2 text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Advanced Analytics */}
          <div>
            <h3 className="text-2xl font-bold text-attune-teal-dark mb-6">Advanced Analytics</h3>
            <p className="text-lg text-gray-700 mb-6">
              Sophisticated analysis capabilities for deeper insights:
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                {advancedAnalyticsFeatures.map((feature, index) => {
                  const [title, description] = feature.split(': ');
                  return (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <h4 className="text-lg font-semibold text-attune-teal-dark">{title}</h4>
                      <p className="text-gray-600">{description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Implementation & Support */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-attune-teal-dark mb-6">Implementation & Support</h2>
            </div>

            {/* Platform Onboarding */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-attune-teal-dark mb-6">Platform Onboarding</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our structured approach ensures successful implementation:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {implementationSteps.map((step, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-attune-teal-dark mb-4">{step.title}</h4>
                      <ul className="space-y-2">
                        {step.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-attune-teal-light flex items-center justify-center mt-0.5">
                              <Check className="w-3 h-3 text-attune-teal-dark" />
                            </div>
                            <span className="ml-2 text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Ongoing Support */}
            <div>
              <h3 className="text-2xl font-bold text-attune-teal-dark mb-6">Ongoing Support</h3>
              <p className="text-lg text-gray-700 mb-6">
                Comprehensive assistance for sustained value:
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-4">
                  {ongoingSupportFeatures.map((feature, index) => {
                    const [title, description] = feature.split(': ');
                    return (
                      <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <h4 className="text-lg font-semibold text-attune-teal-dark">{title}</h4>
                        <p className="text-gray-600">{description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-6">Case Study: Community First Credit Union</h2>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                <strong className="text-attune-teal-dark">Challenge:</strong>{" "}
                Community First Credit Union ($1.8B in assets) struggled to measure their mission impact in ways that connected to their business performance and strategic decisions.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                <strong className="text-attune-teal-dark">Our Approach:</strong>{" "}
                Attune implemented our Measurement Platform to provide integrated insights on financial health impact:
              </p>

              <ol className="list-decimal pl-5 space-y-2 mb-8">
                <li className="text-gray-700">Established comprehensive financial health baseline for members and employees</li>
                <li className="text-gray-700">Integrated data from core banking, surveys, and operational systems</li>
                <li className="text-gray-700">Created tailored dashboards for board, executive team, and departments</li>
                <li className="text-gray-700">Developed mission-margin metrics connecting financial health to business outcomes</li>
                <li className="text-gray-700">Implemented initiative tracking to measure ROI across both dimensions</li>
              </ol>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="font-bold text-lg mb-4 text-attune-teal-dark">Results:</h4>
                <ul className="space-y-2">
                  {[
                    "43% improvement in member financial health scores",
                    "Clear demonstration of correlation between financial health and deposit growth",
                    "Board alignment around financial health as strategic priority",
                    "Data-driven decisions for initiative investment and expansion",
                    "92% of employees reporting greater understanding of mission impact"
                  ].map((item, index) => (
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
                  "Attune's Measurement Platform transformed how we understand and communicate our impact. For the first time, we can clearly see and demonstrate how improving member financial health directly contributes to our business performance. This has created unprecedented strategic clarity and alignment from our board through every department."
                </p>
                <p className="mt-2 font-semibold text-attune-teal-dark">— Sarah Johnson, CEO, Community First Credit Union</p>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Specifications */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-attune-teal-dark mb-6">Platform Specifications</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Technical Details */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-attune-teal-dark mb-4">Technical Details</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-attune-teal-dark mb-2">Deployment Model</h4>
                  <p className="text-gray-700">Cloud-based SaaS platform with secure, multi-tenant architecture</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-attune-teal-dark mb-2">Integration Capabilities</h4>
                  <ul className="space-y-1 ml-4 list-disc text-gray-700">
                    {technicalDetails.slice(1, 5).map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-attune-teal-dark mb-2">Security & Compliance</h4>
                  <ul className="space-y-1 ml-4 list-disc text-gray-700">
                    {technicalDetails.slice(5, 10).map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-attune-teal-dark mb-2">Performance</h4>
                  <ul className="space-y-1 ml-4 list-disc text-gray-700">
                    {technicalDetails.slice(10).map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* User Access */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-attune-teal-dark mb-4">User Access</h3>
                <div className="mb-6">
                  <h4 className="font-semibold text-attune-teal-dark mb-2">Role-Based Permissions</h4>
                  <ul className="space-y-1 ml-4 list-disc text-gray-700">
                    {userRoles.map((role, index) => (
                      <li key={index}>{role}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-attune-teal-dark mb-2">Access Methods</h4>
                  <ul className="space-y-1 ml-4 list-disc text-gray-700">
                    {accessMethods.map((method, index) => (
                      <li key={index}>{method}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-attune-teal-dark py-16 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Measure Your Financial Health Impact?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Schedule a demo to see how Attune's Measurement Platform can help your credit union connect mission impact to business outcomes through comprehensive financial health measurement.
            </p>
            <Button className="bg-white text-attune-teal-dark hover:bg-gray-100 text-lg px-8 py-6 h-auto">
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MeasurementPlatform;
