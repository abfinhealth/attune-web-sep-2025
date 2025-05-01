
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import { Calendar, ChevronDown, Milestone, CalendarClock, Flag } from 'lucide-react';

interface Milestone {
  id: string;
  projectId: string;
  projectName: string;
  name: string;
  dueDate: string;
  completedDate?: string;
  status: 'upcoming' | 'in-progress' | 'completed' | 'overdue';
  owner: {
    name: string;
    avatar?: string;
    initials: string;
  };
  description: string;
  dependencies?: string[];
  completionPercentage: number;
}

const MOCK_MILESTONES: Milestone[] = [
  {
    id: '1',
    projectId: '1',
    projectName: 'Financial Education Platform',
    name: 'Requirements Gathering',
    dueDate: '2025-03-15',
    completedDate: '2025-03-10',
    status: 'completed',
    owner: {
      name: 'Sarah Johnson',
      initials: 'SJ'
    },
    description: 'Gather all requirements from stakeholders and create detailed specifications.',
    completionPercentage: 100
  },
  {
    id: '2',
    projectId: '1',
    projectName: 'Financial Education Platform',
    name: 'Platform Design',
    dueDate: '2025-04-20',
    status: 'in-progress',
    owner: {
      name: 'Alex Kim',
      initials: 'AK'
    },
    description: 'UI/UX design for education platform including user flows and interactive prototypes.',
    completionPercentage: 65
  },
  {
    id: '3',
    projectId: '1',
    projectName: 'Financial Education Platform',
    name: 'Content Development',
    dueDate: '2025-05-30',
    status: 'in-progress',
    owner: {
      name: 'Lisa Chen',
      initials: 'LC'
    },
    description: 'Develop educational content modules and assessment materials.',
    dependencies: ['Requirements Gathering'],
    completionPercentage: 30
  },
  {
    id: '4',
    projectId: '1',
    projectName: 'Financial Education Platform',
    name: 'Platform Launch',
    dueDate: '2025-07-15',
    status: 'upcoming',
    owner: {
      name: 'David Park',
      initials: 'DP'
    },
    description: 'Official public launch of the education platform.',
    dependencies: ['Platform Design', 'Content Development'],
    completionPercentage: 0
  },
  {
    id: '5',
    projectId: '2',
    projectName: 'Mobile Banking Enhancement',
    name: 'User Research',
    dueDate: '2025-03-25',
    completedDate: '2025-04-02',
    status: 'completed',
    owner: {
      name: 'Rachel Torres',
      initials: 'RT'
    },
    description: 'Conduct user research to understand needs and pain points.',
    completionPercentage: 100
  },
  {
    id: '6',
    projectId: '2',
    projectName: 'Mobile Banking Enhancement',
    name: 'Feature Development',
    dueDate: '2025-05-10',
    status: 'in-progress',
    owner: {
      name: 'Michael Chen',
      initials: 'MC'
    },
    description: 'Develop core financial health features for mobile app.',
    dependencies: ['User Research'],
    completionPercentage: 45
  },
  {
    id: '7',
    projectId: '2',
    projectName: 'Mobile Banking Enhancement',
    name: 'User Testing',
    dueDate: '2025-04-30',
    status: 'overdue',
    owner: {
      name: 'James Wilson',
      initials: 'JW'
    },
    description: 'Conduct beta testing with selected users.',
    completionPercentage: 60
  }
];

const getStatusBadge = (status: Milestone['status']) => {
  switch (status) {
    case 'upcoming':
      return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Upcoming</Badge>;
    case 'in-progress':
      return <Badge className="bg-amber-100 text-amber-800 border-amber-200">In Progress</Badge>;
    case 'completed':
      return <Badge className="bg-green-100 text-green-800 border-green-200">Completed</Badge>;
    case 'overdue':
      return <Badge className="bg-red-100 text-red-800 border-red-200">Overdue</Badge>;
  }
};

const MilestoneTracking = () => {
  const [milestones, setMilestones] = useState<Milestone[]>(MOCK_MILESTONES);
  const [viewMode, setViewMode] = useState<'list' | 'timeline'>('list');
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  
  const handleViewMilestone = (milestone: Milestone) => {
    setSelectedMilestone(milestone);
    setIsDetailsOpen(true);
  };
  
  const handleCompleteMilestone = (id: string) => {
    setMilestones(milestones.map(milestone => 
      milestone.id === id ? {
        ...milestone,
        status: 'completed',
        completedDate: new Date().toISOString().split('T')[0],
        completionPercentage: 100
      } : milestone
    ));
    
    toast({
      title: "Milestone Completed",
      description: "The milestone has been marked as completed.",
      duration: 3000
    });
  };
  
  const sortedMilestones = [...milestones].sort((a, b) => {
    // Sort by date (overdue first, then upcoming, then completed)
    if (a.status === 'overdue' && b.status !== 'overdue') return -1;
    if (a.status !== 'overdue' && b.status === 'overdue') return 1;
    
    if (a.status !== 'completed' && b.status === 'completed') return -1;
    if (a.status === 'completed' && b.status !== 'completed') return 1;
    
    // Then sort by due date
    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
  });
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Milestone className="h-5 w-5" />
              Milestone Tracking
            </CardTitle>
            <CardDescription>
              Track key milestones, dependencies, and progress across projects
            </CardDescription>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant={viewMode === 'list' ? 'default' : 'outline'} 
              onClick={() => setViewMode('list')}
            >
              List View
            </Button>
            <Button 
              variant={viewMode === 'timeline' ? 'default' : 'outline'} 
              onClick={() => setViewMode('timeline')}
            >
              Timeline View
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {viewMode === 'list' ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>Milestone</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedMilestones.map((milestone) => (
                  <TableRow key={milestone.id}>
                    <TableCell className="text-sm text-muted-foreground">{milestone.projectName}</TableCell>
                    <TableCell className="font-medium">{milestone.name}</TableCell>
                    <TableCell className="whitespace-nowrap">
                      {new Date(milestone.dueDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Avatar className="h-7 w-7 mr-2">
                          {milestone.owner.avatar ? (
                            <AvatarImage src={milestone.owner.avatar} alt={milestone.owner.name} />
                          ) : (
                            <AvatarFallback>{milestone.owner.initials}</AvatarFallback>
                          )}
                        </Avatar>
                        <span className="text-sm">{milestone.owner.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(milestone.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-full max-w-[100px] bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full" 
                            style={{ 
                              width: `${milestone.completionPercentage}%`,
                              backgroundColor: milestone.status === 'overdue' ? '#ef4444' : '#3b82f6'
                            }}
                          />
                        </div>
                        <span className="text-xs">{milestone.completionPercentage}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleViewMilestone(milestone)}
                        >
                          View
                        </Button>
                        {milestone.status !== 'completed' && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-green-600"
                            onClick={() => handleCompleteMilestone(milestone.id)}
                          >
                            Complete
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="space-y-8 py-4">
              {/* Group milestones by project for timeline view */}
              {Array.from(new Set(milestones.map(m => m.projectId))).map(projectId => {
                const projectMilestones = milestones.filter(m => m.projectId === projectId);
                const projectName = projectMilestones[0]?.projectName || 'Unknown Project';
                
                return (
                  <div key={projectId} className="space-y-4">
                    <h3 className="text-lg font-semibold">{projectName}</h3>
                    <div className="relative">
                      {/* Timeline track */}
                      <div className="absolute h-full w-0.5 bg-gray-200 left-3 top-0" />
                      
                      {/* Milestone items */}
                      <div className="space-y-8 ml-8">
                        {projectMilestones
                          .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
                          .map((milestone) => (
                            <div key={milestone.id} className="relative">
                              {/* Milestone dot */}
                              <div 
                                className={`absolute -left-8 h-6 w-6 rounded-full border-4 flex items-center justify-center ${
                                  milestone.status === 'completed' 
                                    ? 'bg-green-500 border-green-100' 
                                    : milestone.status === 'overdue'
                                      ? 'bg-red-500 border-red-100'
                                      : milestone.status === 'in-progress'
                                        ? 'bg-amber-500 border-amber-100'
                                        : 'bg-blue-500 border-blue-100'
                                }`}
                              />
                              
                              <div className="bg-white border rounded-md p-4 shadow-sm">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h4 className="font-semibold">{milestone.name}</h4>
                                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                                  </div>
                                  {getStatusBadge(milestone.status)}
                                </div>
                                
                                <div className="mt-4 flex justify-between items-center">
                                  <div className="flex items-center gap-4">
                                    <div className="flex items-center text-sm text-muted-foreground">
                                      <Calendar className="h-4 w-4 mr-1" />
                                      <span>Due: {new Date(milestone.dueDate).toLocaleDateString()}</span>
                                    </div>
                                    
                                    <div className="flex items-center">
                                      <Avatar className="h-6 w-6">
                                        <AvatarFallback>{milestone.owner.initials}</AvatarFallback>
                                      </Avatar>
                                      <span className="text-sm ml-2">{milestone.owner.name}</span>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-center gap-2">
                                    <div className="w-24 bg-gray-200 rounded-full h-2">
                                      <div 
                                        className="h-2 rounded-full" 
                                        style={{ 
                                          width: `${milestone.completionPercentage}%`,
                                          backgroundColor: milestone.status === 'overdue' ? '#ef4444' : '#3b82f6'
                                        }}
                                      />
                                    </div>
                                    <span className="text-xs">{milestone.completionPercentage}%</span>
                                  </div>
                                </div>
                                
                                {milestone.dependencies && milestone.dependencies.length > 0 && (
                                  <div className="mt-2 text-sm">
                                    <span className="text-muted-foreground">Dependencies: </span>
                                    {milestone.dependencies.join(', ')}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Milestone details dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-lg">
          {selectedMilestone && (
            <>
              <DialogHeader>
                <DialogTitle>Milestone Details</DialogTitle>
                <DialogDescription>
                  View detailed information about this milestone
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{selectedMilestone.name}</h3>
                  {getStatusBadge(selectedMilestone.status)}
                </div>
                
                <p className="text-sm text-muted-foreground">{selectedMilestone.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Project</p>
                    <p className="font-medium">{selectedMilestone.projectName}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground">Owner</p>
                    <div className="flex items-center">
                      <Avatar className="h-6 w-6 mr-2">
                        <AvatarFallback>{selectedMilestone.owner.initials}</AvatarFallback>
                      </Avatar>
                      <p className="font-medium">{selectedMilestone.owner.name}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground">Due Date</p>
                    <p className="font-medium">{new Date(selectedMilestone.dueDate).toLocaleDateString()}</p>
                  </div>
                  
                  {selectedMilestone.completedDate && (
                    <div>
                      <p className="text-sm text-muted-foreground">Completed Date</p>
                      <p className="font-medium">{new Date(selectedMilestone.completedDate).toLocaleDateString()}</p>
                    </div>
                  )}
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Progress</p>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full" 
                        style={{ 
                          width: `${selectedMilestone.completionPercentage}%`,
                          backgroundColor: selectedMilestone.status === 'overdue' ? '#ef4444' : '#3b82f6'
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium">{selectedMilestone.completionPercentage}%</span>
                  </div>
                </div>
                
                {selectedMilestone.dependencies && selectedMilestone.dependencies.length > 0 && (
                  <div>
                    <p className="text-sm text-muted-foreground">Dependencies</p>
                    <ul className="list-disc list-inside text-sm pl-2">
                      {selectedMilestone.dependencies.map((dep, index) => (
                        <li key={index}>{dep}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <DialogFooter>
                {selectedMilestone.status !== 'completed' && (
                  <Button onClick={() => handleCompleteMilestone(selectedMilestone.id)}>
                    Mark as Complete
                  </Button>
                )}
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MilestoneTracking;
