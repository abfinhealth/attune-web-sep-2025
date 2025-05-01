
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart as BarChartIcon, CalendarDays, Flag, ListTodo, Milestone } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  progress: number;
  status: 'on-track' | 'at-risk' | 'behind' | 'completed';
  startDate: string;
  dueDate: string;
  completedMilestones: number;
  totalMilestones: number;
  teamSize: number;
}

interface StatusSummary {
  onTrack: number;
  atRisk: number;
  behind: number;
  completed: number;
}

const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Financial Education Platform',
    progress: 35,
    status: 'on-track',
    startDate: '2025-02-15',
    dueDate: '2025-07-30',
    completedMilestones: 2,
    totalMilestones: 8,
    teamSize: 6
  },
  {
    id: '2',
    name: 'Mobile Banking Enhancement',
    progress: 42,
    status: 'at-risk',
    startDate: '2025-03-10',
    dueDate: '2025-08-15',
    completedMilestones: 3,
    totalMilestones: 7,
    teamSize: 4
  },
  {
    id: '3',
    name: 'Staff Financial Health Training',
    progress: 100,
    status: 'completed',
    startDate: '2025-01-20',
    dueDate: '2025-04-30',
    completedMilestones: 5,
    totalMilestones: 5,
    teamSize: 3
  },
  {
    id: '4',
    name: 'Emergency Savings Program',
    progress: 0,
    status: 'behind',
    startDate: '2025-04-05',
    dueDate: '2025-09-20',
    completedMilestones: 0,
    totalMilestones: 6,
    teamSize: 5
  },
  {
    id: '5',
    name: 'Financial Health Member Portal',
    progress: 68,
    status: 'on-track',
    startDate: '2025-01-10',
    dueDate: '2025-06-15',
    completedMilestones: 5,
    totalMilestones: 9,
    teamSize: 7
  }
];

// Monthly progress data for trend chart
const MONTHLY_DATA = [
  { month: 'Jan', completed: 5, planned: 6 },
  { month: 'Feb', completed: 8, planned: 10 },
  { month: 'Mar', completed: 12, planned: 14 },
  { month: 'Apr', completed: 15, planned: 20 },
  { month: 'May', completed: 22, planned: 25 }
];

const getStatusColor = (status: Project['status']) => {
  switch (status) {
    case 'on-track': return '#10b981';
    case 'at-risk': return '#f59e0b';
    case 'behind': return '#ef4444';
    case 'completed': return '#8b5cf6';
    default: return '#6b7280';
  }
};

const getStatusBadge = (status: Project['status']) => {
  switch (status) {
    case 'on-track':
      return <Badge className="bg-green-100 text-green-800 border-green-200">On Track</Badge>;
    case 'at-risk':
      return <Badge className="bg-amber-100 text-amber-800 border-amber-200">At Risk</Badge>;
    case 'behind':
      return <Badge className="bg-red-100 text-red-800 border-red-200">Behind</Badge>;
    case 'completed':
      return <Badge className="bg-purple-100 text-purple-800 border-purple-200">Completed</Badge>;
  }
};

const calculateStatusSummary = (projects: Project[]): StatusSummary => {
  return {
    onTrack: projects.filter(p => p.status === 'on-track').length,
    atRisk: projects.filter(p => p.status === 'at-risk').length,
    behind: projects.filter(p => p.status === 'behind').length,
    completed: projects.filter(p => p.status === 'completed').length
  };
};

const StatusDashboard = () => {
  const [projects] = useState<Project[]>(MOCK_PROJECTS);
  const statusSummary = calculateStatusSummary(projects);
  
  const statusData = [
    { name: 'On Track', value: statusSummary.onTrack, color: '#10b981' },
    { name: 'At Risk', value: statusSummary.atRisk, color: '#f59e0b' },
    { name: 'Behind', value: statusSummary.behind, color: '#ef4444' },
    { name: 'Completed', value: statusSummary.completed, color: '#8b5cf6' }
  ];
  
  // Calculate overall completion percentage across all projects
  const totalMilestones = projects.reduce((sum, project) => sum + project.totalMilestones, 0);
  const completedMilestones = projects.reduce((sum, project) => sum + project.completedMilestones, 0);
  const overallCompletionPercentage = totalMilestones > 0 
    ? Math.round((completedMilestones / totalMilestones) * 100) 
    : 0;
  
  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overall Completion</p>
                <div className="text-2xl font-bold">{overallCompletionPercentage}%</div>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <BarChartIcon className="h-6 w-6 text-blue-700" />
              </div>
            </div>
            <Progress value={overallCompletionPercentage} className="mt-3" />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Projects</p>
                <div className="text-2xl font-bold">{projects.length}</div>
              </div>
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Flag className="h-6 w-6 text-purple-700" />
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 text-sm">
              <div className="text-green-600">{statusSummary.onTrack} on track</div>
              {statusSummary.behind > 0 && <div className="text-red-600">{statusSummary.behind} behind</div>}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Milestones</p>
                <div className="text-2xl font-bold">{completedMilestones} / {totalMilestones}</div>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <Milestone className="h-6 w-6 text-green-700" />
              </div>
            </div>
            <Progress value={(completedMilestones / totalMilestones) * 100} className="mt-3" />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Due This Month</p>
                <div className="text-2xl font-bold">3</div>
              </div>
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                <CalendarDays className="h-6 w-6 text-amber-700" />
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 text-sm">
              <div>1 milestone</div>
              <div>2 deliverables</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Project Status</TabsTrigger>
          <TabsTrigger value="milestones">Milestone Status</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          {/* Status Distribution Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg">Status Distribution</CardTitle>
                <CardDescription>
                  Current status of all implementation projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={statusData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={90}
                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                      >
                        {statusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Project Progress */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Project Progress</CardTitle>
                <CardDescription>
                  Completion percentage across active projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={projects.filter(p => p.status !== 'completed')}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis 
                        dataKey="name" 
                        type="category" 
                        width={150}
                        tick={{ fontSize: 12 }}
                      />
                      <Tooltip formatter={(value) => [`${value}%`, 'Progress']} />
                      <Bar dataKey="progress" name="Progress">
                        {projects.filter(p => p.status !== 'completed').map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={getStatusColor(entry.status)} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Upcoming Deliverables */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Deliverables</CardTitle>
              <CardDescription>
                Deliverables due in the next 30 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project</TableHead>
                    <TableHead>Deliverable</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Mobile Banking Enhancement</TableCell>
                    <TableCell>User Testing Report</TableCell>
                    <TableCell>May 12, 2025</TableCell>
                    <TableCell>James Wilson</TableCell>
                    <TableCell><Badge className="bg-amber-100 text-amber-800">At Risk</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Financial Education Platform</TableCell>
                    <TableCell>Content Module Draft</TableCell>
                    <TableCell>May 15, 2025</TableCell>
                    <TableCell>Lisa Chen</TableCell>
                    <TableCell><Badge className="bg-green-100 text-green-800">On Track</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Emergency Savings Program</TableCell>
                    <TableCell>Requirements Document</TableCell>
                    <TableCell>May 20, 2025</TableCell>
                    <TableCell>Jason Clark</TableCell>
                    <TableCell><Badge className="bg-red-100 text-red-800">Behind</Badge></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Project Status Dashboard</CardTitle>
              <CardDescription>
                Detailed status of all implementation projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project Name</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Timeline</TableHead>
                    <TableHead>Milestones</TableHead>
                    <TableHead>Team Size</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map(project => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={project.progress} className="w-24" />
                          <span className="text-xs">{project.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(project.status)}</TableCell>
                      <TableCell className="whitespace-nowrap">
                        {new Date(project.startDate).toLocaleDateString()} - {new Date(project.dueDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        {project.completedMilestones}/{project.totalMilestones}
                      </TableCell>
                      <TableCell>{project.teamSize}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map(project => (
              <Card key={project.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    {getStatusBadge(project.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="mt-1" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs text-muted-foreground">Timeline</span>
                        <p className="text-sm font-medium">
                          {new Date(project.startDate).toLocaleDateString()} - {new Date(project.dueDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">Milestones</span>
                        <p className="text-sm font-medium">
                          {project.completedMilestones}/{project.totalMilestones} Completed
                        </p>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="milestones" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Milestone className="h-5 w-5" />
                Milestone Status Overview
              </CardTitle>
              <CardDescription>
                Status of key implementation milestones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <div className="text-2xl font-bold text-green-700">14</div>
                  <p className="text-sm text-green-700">Completed</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                  <div className="text-2xl font-bold text-blue-700">8</div>
                  <p className="text-sm text-blue-700">In Progress</p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                  <div className="text-2xl font-bold text-amber-700">3</div>
                  <p className="text-sm text-amber-700">At Risk</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-md p-4">
                  <div className="text-2xl font-bold text-red-700">2</div>
                  <p className="text-sm text-red-700">Overdue</p>
                </div>
              </div>

              <div className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Project</TableHead>
                      <TableHead>Milestone</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Progress</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Financial Education Platform</TableCell>
                      <TableCell className="font-medium">Platform Design</TableCell>
                      <TableCell>Apr 20, 2025</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
                      </TableCell>
                      <TableCell>
                        <Progress value={65} className="w-24" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mobile Banking Enhancement</TableCell>
                      <TableCell className="font-medium">User Testing</TableCell>
                      <TableCell>Apr 30, 2025</TableCell>
                      <TableCell>
                        <Badge className="bg-red-100 text-red-800">Overdue</Badge>
                      </TableCell>
                      <TableCell>
                        <Progress value={60} className="w-24" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Financial Education Platform</TableCell>
                      <TableCell className="font-medium">Content Development</TableCell>
                      <TableCell>May 30, 2025</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
                      </TableCell>
                      <TableCell>
                        <Progress value={30} className="w-24" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mobile Banking Enhancement</TableCell>
                      <TableCell className="font-medium">Feature Development</TableCell>
                      <TableCell>May 10, 2025</TableCell>
                      <TableCell>
                        <Badge className="bg-amber-100 text-amber-800">At Risk</Badge>
                      </TableCell>
                      <TableCell>
                        <Progress value={45} className="w-24" />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Implementation Trends</CardTitle>
              <CardDescription>
                Progress trends over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={MONTHLY_DATA}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="completed" 
                      name="Completed" 
                      stroke="#3b82f6" 
                      activeDot={{ r: 8 }} 
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="planned" 
                      name="Planned" 
                      stroke="#d1d5db" 
                      strokeDasharray="5 5" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Milestone Completion Rate</CardTitle>
                <CardDescription>
                  Monthly milestone completion rate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={MONTHLY_DATA}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar 
                        dataKey="completed" 
                        name="Completed" 
                        fill="#3b82f6" 
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Status Changes</CardTitle>
                <CardDescription>
                  Status changes over last 3 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart 
                      data={[
                        { month: 'Mar', onTrack: 3, atRisk: 1, behind: 1 },
                        { month: 'Apr', onTrack: 2, atRisk: 2, behind: 1 },
                        { month: 'May', onTrack: 2, atRisk: 1, behind: 1 }
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="onTrack" name="On Track" stackId="a" fill="#10b981" />
                      <Bar dataKey="atRisk" name="At Risk" stackId="a" fill="#f59e0b" />
                      <Bar dataKey="behind" name="Behind" stackId="a" fill="#ef4444" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StatusDashboard;
