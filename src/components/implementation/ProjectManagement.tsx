
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from '@/hooks/use-toast';
import { Calendar, ChevronRight, Plus, Route } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  owner: {
    name: string;
    avatar: string;
    initials: string;
  };
  team: {
    name: string;
    avatar?: string;
    initials: string;
  }[];
  startDate: string;
  dueDate: string;
  status: 'not-started' | 'in-progress' | 'on-hold' | 'completed';
  progress: number;
  description: string;
  integratedWith: string[];
}

const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Financial Education Platform',
    owner: {
      name: 'Sarah Johnson',
      avatar: '',
      initials: 'SJ'
    },
    team: [
      { name: 'Alex Kim', initials: 'AK' },
      { name: 'Lisa Chen', initials: 'LC' },
      { name: 'David Park', avatar: '', initials: 'DP' }
    ],
    startDate: '2025-02-15',
    dueDate: '2025-07-30',
    status: 'in-progress',
    progress: 35,
    description: 'Development and launch of digital financial education platform with interactive modules and personalized learning paths.',
    integratedWith: ['Jira', 'Asana']
  },
  {
    id: '2',
    name: 'Mobile Banking Enhancement',
    owner: {
      name: 'Michael Chen',
      avatar: '',
      initials: 'MC'
    },
    team: [
      { name: 'Rachel Torres', initials: 'RT' },
      { name: 'James Wilson', initials: 'JW' }
    ],
    startDate: '2025-03-10',
    dueDate: '2025-08-15',
    status: 'in-progress',
    progress: 42,
    description: 'Enhancing mobile banking app with financial health score tracking, personalized insights, and goal setting features.',
    integratedWith: ['Trello', 'GitHub']
  },
  {
    id: '3',
    name: 'Staff Financial Health Training',
    owner: {
      name: 'Emily Rodriguez',
      avatar: '',
      initials: 'ER'
    },
    team: [
      { name: 'Daniel Lee', initials: 'DL' },
      { name: 'Michelle Garcia', initials: 'MG' }
    ],
    startDate: '2025-01-20',
    dueDate: '2025-04-30',
    status: 'completed',
    progress: 100,
    description: 'Training program for all member-facing staff on financial health concepts, coaching techniques, and member support.',
    integratedWith: ['Asana']
  },
  {
    id: '4',
    name: 'Emergency Savings Program',
    owner: {
      name: 'Jason Clark',
      avatar: '',
      initials: 'JC'
    },
    team: [
      { name: 'Sophia Martinez', initials: 'SM' },
      { name: 'Thomas Brown', initials: 'TB' },
      { name: 'Linda Johnson', initials: 'LJ' }
    ],
    startDate: '2025-04-05',
    dueDate: '2025-09-20',
    status: 'not-started',
    progress: 0,
    description: 'Development and implementation of automated emergency savings program with incentives and personalized goal setting.',
    integratedWith: ['Monday', 'Slack']
  }
];

const getStatusBadge = (status: Project['status']) => {
  switch (status) {
    case 'not-started':
      return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Not Started</Badge>;
    case 'in-progress':
      return <Badge className="bg-blue-100 text-blue-800 border-blue-200">In Progress</Badge>;
    case 'on-hold':
      return <Badge className="bg-amber-100 text-amber-800 border-amber-200">On Hold</Badge>;
    case 'completed':
      return <Badge className="bg-green-100 text-green-800 border-green-200">Completed</Badge>;
  }
};

const ProjectManagement = () => {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.status === activeTab);

  const handleConnectTool = () => {
    toast({
      title: "Integration Started",
      description: "You'll be redirected to connect your project management tool.",
      duration: 3000
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="not-started">Not Started</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>
      
      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{project.name}</CardTitle>
                {getStatusBadge(project.status)}
              </div>
              <CardDescription className="line-clamp-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{new Date(project.startDate).toLocaleDateString()} - {new Date(project.dueDate).toLocaleDateString()}</span>
                  </div>
                  <span className="font-medium">{project.progress}% Complete</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex -space-x-2">
                    <Avatar className="h-7 w-7 border-2 border-white">
                      {project.owner.avatar ? (
                        <AvatarImage src={project.owner.avatar} alt={project.owner.name} />
                      ) : (
                        <AvatarFallback>{project.owner.initials}</AvatarFallback>
                      )}
                    </Avatar>
                    
                    {project.team.slice(0, 3).map((member, i) => (
                      <Avatar key={i} className="h-7 w-7 border-2 border-white">
                        {member.avatar ? (
                          <AvatarImage src={member.avatar} alt={member.name} />
                        ) : (
                          <AvatarFallback>{member.initials}</AvatarFallback>
                        )}
                      </Avatar>
                    ))}
                    
                    {project.team.length > 3 && (
                      <Avatar className="h-7 w-7 border-2 border-white">
                        <AvatarFallback>+{project.team.length - 3}</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-attune-teal">
                    View Details
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {/* Add Project Card */}
        <Card className="border-dashed border-2 bg-gray-50 flex items-center justify-center h-[250px] cursor-pointer hover:bg-gray-100 transition-colors">
          <CardContent className="flex flex-col items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-attune-teal-light flex items-center justify-center mb-3">
              <Plus className="h-6 w-6 text-attune-teal" />
            </div>
            <p className="text-lg font-medium">Add New Project</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Integrations Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Route className="h-5 w-5" />
            Project Management Integrations
          </CardTitle>
          <CardDescription>
            Connect with your existing project management tools for seamless tracking
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Jira', 'Asana', 'Monday', 'Trello', 'GitHub', 'Slack'].map(tool => (
              <Card key={tool} className="overflow-hidden">
                <CardContent className="p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center mr-3">
                      <span className="font-bold">{tool.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium">{tool}</p>
                      <p className="text-xs text-muted-foreground">
                        {projects.some(p => p.integratedWith.includes(tool)) ? 'Connected' : 'Not connected'}
                      </p>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant={projects.some(p => p.integratedWith.includes(tool)) ? "outline" : "default"}
                    onClick={handleConnectTool}
                  >
                    {projects.some(p => p.integratedWith.includes(tool)) ? 'Manage' : 'Connect'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectManagement;
