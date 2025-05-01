
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Download, ArrowRight, BookOpen, FileText, Building, School } from 'lucide-react';

const KnowledgeResources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search resources..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <Tabs defaultValue="best-practices" className="w-full">
        <TabsList className="grid grid-cols-4 w-full mb-8">
          <TabsTrigger value="best-practices">
            <BookOpen className="mr-2 h-4 w-4" />
            Best Practices
          </TabsTrigger>
          <TabsTrigger value="guides">
            <Building className="mr-2 h-4 w-4" />
            Implementation Guides
          </TabsTrigger>
          <TabsTrigger value="case-studies">
            <FileText className="mr-2 h-4 w-4" />
            Case Studies
          </TabsTrigger>
          <TabsTrigger value="training">
            <School className="mr-2 h-4 w-4" />
            Training Materials
          </TabsTrigger>
        </TabsList>

        <TabsContent value="best-practices" className="space-y-6">
          <BestPracticeLibrary />
        </TabsContent>

        <TabsContent value="guides" className="space-y-6">
          <ImplementationGuides />
        </TabsContent>

        <TabsContent value="case-studies" className="space-y-6">
          <CaseStudies />
        </TabsContent>

        <TabsContent value="training" className="space-y-6">
          <TrainingMaterials />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const BestPracticeLibrary = () => {
  const bestPractices = [
    {
      id: 1,
      title: "Financial Health Assessment Framework",
      description: "Comprehensive framework for evaluating members' financial health across multiple dimensions.",
      category: "Assessment",
      updated: "May 2025",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Digital Engagement Strategy Guide",
      description: "Best practices for engaging members through digital channels to improve financial health outcomes.",
      category: "Digital Strategy",
      updated: "April 2025",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Member Communication Templates",
      description: "Ready-to-use templates for effective financial health communications with members.",
      category: "Communication",
      updated: "April 2025",
      downloadUrl: "#"
    },
    {
      id: 4,
      title: "Financial Education Curriculum Design",
      description: "Guidelines for developing effective financial education programs for various audiences.",
      category: "Education",
      updated: "March 2025",
      downloadUrl: "#"
    },
    {
      id: 5,
      title: "Product Development Checklist",
      description: "Step-by-step checklist for developing financial products that support member financial health.",
      category: "Product",
      updated: "March 2025",
      downloadUrl: "#"
    }
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Best Practice Library</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bestPractices.map((practice) => (
          <Card key={practice.id}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{practice.title}</CardTitle>
                <Badge variant="outline">{practice.category}</Badge>
              </div>
              <CardDescription>{practice.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Updated: {practice.updated}</span>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const ImplementationGuides = () => {
  const departmentGuides = [
    {
      department: "Marketing",
      guides: [
        {
          id: 1,
          title: "Member Segmentation Guide",
          description: "How to segment members for targeted financial health communications",
          updated: "May 2025"
        },
        {
          id: 2,
          title: "Campaign Planning Toolkit",
          description: "Tools for planning effective financial health awareness campaigns",
          updated: "April 2025"
        }
      ]
    },
    {
      department: "Product",
      guides: [
        {
          id: 3,
          title: "Digital Tool Implementation Guide",
          description: "Step-by-step process for implementing financial health digital tools",
          updated: "May 2025"
        },
        {
          id: 4,
          title: "Product Impact Assessment Framework",
          description: "Framework for measuring the impact of products on member financial health",
          updated: "March 2025"
        }
      ]
    },
    {
      department: "Branch Operations",
      guides: [
        {
          id: 5,
          title: "Branch Staff Training Manual",
          description: "How to train branch staff to deliver financial health conversations",
          updated: "April 2025"
        },
        {
          id: 6,
          title: "In-Branch Financial Health Program Guide",
          description: "Guidelines for running in-branch financial health programs",
          updated: "February 2025"
        }
      ]
    },
    {
      department: "HR",
      guides: [
        {
          id: 7,
          title: "Employee Financial Health Program Guide",
          description: "How to implement a financial health program for employees",
          updated: "March 2025"
        }
      ]
    }
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Implementation Guides by Department</h3>
      <div className="space-y-6">
        {departmentGuides.map((dept) => (
          <Card key={dept.department}>
            <CardHeader>
              <CardTitle>{dept.department}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dept.guides.map((guide) => (
                  <div key={guide.id} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">{guide.title}</h4>
                        <p className="text-sm text-muted-foreground">{guide.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">Updated: {guide.updated}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Mountain View Credit Union: Financial Health Dashboard Implementation",
      industry: "Credit Union",
      size: "$2.5B Assets",
      results: "32% increase in member financial health scores within 12 months",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 2,
      title: "First Community Bank: Branch Staff Financial Coaching Program",
      industry: "Community Bank",
      size: "$850M Assets",
      results: "41% of members accessed coaching, 28% improved savings behavior",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Pioneer Financial: Digital Tool Suite for Financial Wellness",
      industry: "Financial Services",
      size: "125,000 Members",
      results: "3.8x increase in digital engagement, 22% reduction in high-cost debt",
      imageUrl: "/placeholder.svg"
    }
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Case Studies & Examples</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <Card key={study.id} className="overflow-hidden">
            <div className="h-48 bg-muted">
              <img 
                src={study.imageUrl}
                alt={study.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{study.title}</CardTitle>
              <CardDescription>
                <div className="flex justify-between">
                  <span>{study.industry}</span>
                  <span>{study.size}</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <h4 className="text-sm font-medium mb-1">Key Results:</h4>
                <p className="text-sm">{study.results}</p>
              </div>
              <Button variant="link" className="pl-0 mt-2">
                Read full case study
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const TrainingMaterials = () => {
  const trainingCategories = [
    {
      id: 1,
      title: "Self-Paced Online Courses",
      materials: [
        {
          id: 101,
          title: "Financial Health Assessment Fundamentals",
          duration: "2 hours",
          level: "Beginner"
        },
        {
          id: 102,
          title: "Coaching Skills for Financial Conversations",
          duration: "3 hours",
          level: "Intermediate"
        },
        {
          id: 103,
          title: "Data Analysis for Financial Health Metrics",
          duration: "4 hours",
          level: "Advanced"
        }
      ]
    },
    {
      id: 2,
      title: "Video Tutorials",
      materials: [
        {
          id: 201,
          title: "Using the Member Financial Health Dashboard",
          duration: "15 minutes",
          level: "Beginner"
        },
        {
          id: 202,
          title: "Setting Up Member Financial Health Alerts",
          duration: "12 minutes",
          level: "Intermediate"
        }
      ]
    },
    {
      id: 3,
      title: "Downloadable Worksheets",
      materials: [
        {
          id: 301,
          title: "Member Financial Health Assessment Worksheet",
          type: "PDF",
          pages: "5 pages"
        },
        {
          id: 302,
          title: "Implementation Planning Template",
          type: "Excel",
          pages: "Multiple sheets"
        },
        {
          id: 303,
          title: "Goal Setting Framework for Members",
          type: "PDF",
          pages: "8 pages"
        }
      ]
    }
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Training Materials & Tutorials</h3>
      <div className="space-y-8">
        {trainingCategories.map((category) => (
          <div key={category.id}>
            <h4 className="text-lg font-medium mb-4">{category.title}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.materials.map((material) => (
                <Card key={material.id} className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{material.title}</CardTitle>
                    <CardDescription>
                      {material.duration || material.type}
                      {material.level && ` • ${material.level}`}
                      {material.pages && ` • ${material.pages}`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button>
                      {category.id === 3 ? (
                        <>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </>
                      ) : (
                        <>
                          Start Learning
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeResources;
