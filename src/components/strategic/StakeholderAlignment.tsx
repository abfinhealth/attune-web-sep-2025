import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Target, Users, Flag } from 'lucide-react';

// Define stakeholder schema
const stakeholderSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  role: z.string().min(2, { message: "Role must be at least 2 characters." }),
  group: z.string().min(2, { message: "Please select a stakeholder group." }),
  influence: z.number().min(1).max(10, { message: "Influence must be between 1 and 10." }),
  support: z.number().min(1).max(10, { message: "Support level must be between 1 and 10." }),
  interests: z.string().optional(),
  concerns: z.string().optional(),
  alignmentActions: z.string().optional(),
});

type Stakeholder = z.infer<typeof stakeholderSchema>;

// Sample stakeholders
const initialStakeholders: Stakeholder[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    group: 'executive',
    influence: 10,
    support: 8,
    interests: 'Long-term sustainability, mission alignment with business growth',
    concerns: 'Resource allocation, ROI on financial health initiatives',
    alignmentActions: 'Monthly briefings with clear metrics on both financial health impact and business outcomes'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CFO',
    group: 'executive',
    influence: 9,
    support: 6,
    interests: 'Cost management, revenue growth through increased engagement',
    concerns: 'Budget implications, staffing resources',
    alignmentActions: 'Provide detailed financial projections and ROI analysis for each initiative'
  },
  {
    id: '3',
    name: 'Board of Directors',
    role: 'Governance',
    group: 'board',
    influence: 10,
    support: 7,
    interests: 'Mission fulfillment, regulatory compliance, reputation',
    concerns: 'Balancing mission and margin, competitive positioning',
    alignmentActions: 'Quarterly strategic presentations with industry benchmarks and impact metrics'
  },
  {
    id: '4',
    name: 'Branch Managers',
    role: 'Operations',
    group: 'staff',
    influence: 6,
    support: 5,
    interests: 'Member satisfaction, operational efficiency',
    concerns: 'Implementation workload, training requirements',
    alignmentActions: 'Early involvement in planning, adequate training and support resources'
  },
  {
    id: '5',
    name: 'Marketing Team',
    role: 'Marketing',
    group: 'staff',
    influence: 5,
    support: 8,
    interests: 'Brand differentiation, member engagement opportunities',
    concerns: 'Messaging clarity, campaign coordination',
    alignmentActions: 'Collaborative workshops to develop messaging that resonates'
  },
  {
    id: '6',
    name: 'Member Advisory Group',
    role: 'Member Representatives',
    group: 'member',
    influence: 7,
    support: 9,
    interests: 'Relevant financial guidance, easy-to-use tools',
    concerns: 'Privacy, accessibility of services',
    alignmentActions: 'Regular feedback sessions and early testing of new initiatives'
  }
];

const StakeholderAlignment = () => {
  const [stakeholders, setStakeholders] = useState<Stakeholder[]>(initialStakeholders);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingStakeholder, setEditingStakeholder] = useState<Stakeholder | null>(null);
  const [filterGroup, setFilterGroup] = useState<string>("all");

  // Setup form
  const form = useForm<Stakeholder>({
    resolver: zodResolver(stakeholderSchema),
    defaultValues: {
      name: '',
      role: '',
      group: 'executive',
      influence: 5,
      support: 5,
      interests: '',
      concerns: '',
      alignmentActions: ''
    }
  });

  // Add new stakeholder
  const handleAddStakeholder = () => {
    setEditingStakeholder(null);
    form.reset({
      name: '',
      role: '',
      group: 'executive',
      influence: 5,
      support: 5,
      interests: '',
      concerns: '',
      alignmentActions: ''
    });
    setIsDialogOpen(true);
  };

  // Edit existing stakeholder
  const handleEditStakeholder = (stakeholder: Stakeholder) => {
    setEditingStakeholder(stakeholder);
    form.reset(stakeholder);
    setIsDialogOpen(true);
  };

  // Delete a stakeholder
  const handleDeleteStakeholder = (id: string) => {
    setStakeholders(stakeholders.filter(stakeholder => stakeholder.id !== id));
    toast({
      title: "Stakeholder Removed",
      description: "The stakeholder has been removed from the alignment map.",
      duration: 3000
    });
  };

  // Submit form
  const onSubmit = (data: Stakeholder) => {
    if (editingStakeholder) {
      // Update existing stakeholder
      setStakeholders(stakeholders.map(stakeholder => 
        stakeholder.id === editingStakeholder.id ? { ...data, id: editingStakeholder.id } : stakeholder
      ));
      toast({
        title: "Stakeholder Updated",
        description: "Changes to the stakeholder have been saved.",
        duration: 3000
      });
    } else {
      // Add new stakeholder
      const newStakeholder = { ...data, id: `${stakeholders.length + 1}` };
      setStakeholders([...stakeholders, newStakeholder]);
      toast({
        title: "Stakeholder Added",
        description: "A new stakeholder has been added to the alignment map.",
        duration: 3000
      });
    }
    setIsDialogOpen(false);
  };

  // Filter stakeholders by group
  const filteredStakeholders = filterGroup === "all" 
    ? stakeholders 
    : stakeholders.filter(stakeholder => stakeholder.group === filterGroup);

  // Get group label with proper capitalization
  const getGroupLabel = (group: string) => {
    switch (group) {
      case 'executive': return 'Executive Team';
      case 'board': return 'Board Members';
      case 'staff': return 'Staff';
      case 'member': return 'Members';
      case 'partner': return 'Community Partners';
      case 'regulator': return 'Regulators';
      default: return group;
    }
  };

  // Get group badge color
  const getGroupBadge = (group: string) => {
    switch (group) {
      case 'executive': 
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Executive</Badge>;
      case 'board': 
        return <Badge className="bg-purple-100 text-purple-800 border-purple-200">Board</Badge>;
      case 'staff': 
        return <Badge className="bg-green-100 text-green-800 border-green-200">Staff</Badge>;
      case 'member': 
        return <Badge className="bg-teal-100 text-teal-800 border-teal-200">Member</Badge>;
      case 'partner': 
        return <Badge className="bg-amber-100 text-amber-800 border-amber-200">Partner</Badge>;
      case 'regulator': 
        return <Badge className="bg-red-100 text-red-800 border-red-200">Regulator</Badge>;
      default: 
        return <Badge>{group}</Badge>;
    }
  };

  // Get color based on influence and support levels
  const getInfluenceColor = (level: number) => {
    if (level >= 8) return "bg-red-500";
    if (level >= 5) return "bg-amber-500";
    return "bg-green-500";
  };

  const getSupportColor = (level: number) => {
    if (level >= 8) return "bg-green-500";
    if (level >= 5) return "bg-amber-500";
    return "bg-red-500";
  };

  // Get alignment priority based on influence and support
  const getAlignmentPriority = (influence: number, support: number) => {
    // High influence, low support = Critical
    if (influence >= 7 && support <= 5) return { label: "Critical", color: "bg-red-100 text-red-800 border-red-200" };
    
    // High influence, medium support = Important
    if (influence >= 7 && support <= 7) return { label: "Important", color: "bg-amber-100 text-amber-800 border-amber-200" };
    
    // High influence, high support = Maintain
    if (influence >= 7) return { label: "Maintain", color: "bg-green-100 text-green-800 border-green-200" };
    
    // Medium influence, low support = Monitor
    if (influence >= 4 && support <= 5) return { label: "Monitor", color: "bg-blue-100 text-blue-800 border-blue-200" };
    
    // Others = Inform
    return { label: "Inform", color: "bg-gray-100 text-gray-800 border-gray-200" };
  };

  // Format data for stakeholder matrix
  const stakeholderMatrix = stakeholders.map(stakeholder => ({
    id: stakeholder.id,
    name: stakeholder.name,
    role: stakeholder.role,
    group: stakeholder.group,
    influence: stakeholder.influence,
    support: stakeholder.support,
    x: stakeholder.support, // Support as X-axis
    y: stakeholder.influence, // Influence as Y-axis
    priority: getAlignmentPriority(stakeholder.influence, stakeholder.support).label
  }));

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Users className="h-5 w-5" />
              Stakeholder Alignment Map
            </CardTitle>
            <CardDescription>
              Identify key stakeholders and develop strategies to maintain alignment
            </CardDescription>
          </div>
          <Button onClick={handleAddStakeholder}>Add Stakeholder</Button>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <label className="text-sm font-medium mb-2 block">Filter by Stakeholder Group</label>
            <div className="flex flex-wrap gap-2">
              <button 
                className={`px-3 py-1 rounded-full text-sm ${filterGroup === 'all' ? 'bg-attune-teal text-white' : 'bg-gray-100'}`}
                onClick={() => setFilterGroup('all')}
              >
                All Groups
              </button>
              {['executive', 'board', 'staff', 'member', 'partner', 'regulator'].map(group => (
                <button 
                  key={group}
                  className={`px-3 py-1 rounded-full text-sm ${filterGroup === group ? 'bg-attune-teal text-white' : 'bg-gray-100'}`}
                  onClick={() => setFilterGroup(group)}
                >
                  {getGroupLabel(group)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Matrix Visualization */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-3">Stakeholder Influence/Support Matrix</h3>
            <div className="border rounded-lg p-6 bg-gray-50 relative">
              <div className="absolute top-6 left-8 text-sm font-medium">High Influence</div>
              <div className="absolute bottom-6 left-8 text-sm font-medium">Low Influence</div>
              <div className="absolute top-1/2 left-4 -translate-y-1/2 text-sm font-medium [writing-mode:vertical-lr] rotate-180">Influence</div>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium">Support Level</div>
              <div className="absolute bottom-8 left-20 text-sm font-medium">Low Support</div>
              <div className="absolute bottom-8 right-20 text-sm font-medium">High Support</div>
              
              {/* Quadrant labels */}
              <div className="absolute top-16 left-20 text-xs p-1 bg-red-100 rounded opacity-70">
                Manage Closely
              </div>
              <div className="absolute top-16 right-20 text-xs p-1 bg-green-100 rounded opacity-70">
                Keep Satisfied
              </div>
              <div className="absolute bottom-16 left-20 text-xs p-1 bg-amber-100 rounded opacity-70">
                Monitor
              </div>
              <div className="absolute bottom-16 right-20 text-xs p-1 bg-blue-100 rounded opacity-70">
                Keep Informed
              </div>
              
              {/* Grid lines */}
              <div className="h-[400px] w-full border border-dashed border-gray-300">
                <div className="relative w-full h-full">
                  {/* Horizontal divide */}
                  <div className="absolute top-1/2 left-0 w-full border-t border-dashed border-gray-300"></div>
                  
                  {/* Vertical divide */}
                  <div className="absolute top-0 left-1/2 h-full border-l border-dashed border-gray-300"></div>
                  
                  {/* Stakeholder dots */}
                  {stakeholderMatrix.filter(s => filterGroup === "all" || s.group === filterGroup).map(stakeholder => (
                    <div 
                      key={stakeholder.id}
                      className="absolute w-8 h-8 rounded-full bg-white border-2 border-attune-teal flex items-center justify-center cursor-pointer"
                      style={{ 
                        bottom: `${(stakeholder.y - 1) * 9}%`, 
                        left: `${(stakeholder.x - 1) * 9}%`,
                      }}
                      onClick={() => handleEditStakeholder(stakeholders.find(s => s.id === stakeholder.id)!)}
                      title={`${stakeholder.name} (${stakeholder.role})`}
                    >
                      {stakeholder.name.charAt(0)}
                      <div className="absolute -top-10 left-0 bg-white shadow-md p-2 rounded hidden group-hover:block whitespace-nowrap z-10">
                        <p className="font-medium">{stakeholder.name}</p>
                        <p className="text-xs">{stakeholder.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Group</TableHead>
                <TableHead>Influence</TableHead>
                <TableHead>Support</TableHead>
                <TableHead>Alignment Priority</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStakeholders.map((stakeholder) => {
                const priority = getAlignmentPriority(stakeholder.influence, stakeholder.support);
                
                return (
                  <TableRow key={stakeholder.id}>
                    <TableCell className="font-medium">{stakeholder.name}</TableCell>
                    <TableCell>{stakeholder.role}</TableCell>
                    <TableCell>{getGroupBadge(stakeholder.group)}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div className="w-full bg-gray-200 rounded-full h-1.5 max-w-24">
                          <div 
                            className={`h-1.5 rounded-full ${getInfluenceColor(stakeholder.influence)}`}
                            style={{ width: `${stakeholder.influence * 10}%` }}
                          ></div>
                        </div>
                        <span className="text-xs">{stakeholder.influence}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div className="w-full bg-gray-200 rounded-full h-1.5 max-w-24">
                          <div 
                            className={`h-1.5 rounded-full ${getSupportColor(stakeholder.support)}`}
                            style={{ width: `${stakeholder.support * 10}%` }}
                          ></div>
                        </div>
                        <span className="text-xs">{stakeholder.support}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={priority.color}>{priority.label}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" onClick={() => handleEditStakeholder(stakeholder)}>
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600" onClick={() => handleDeleteStakeholder(stakeholder.id!)}>
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Stakeholder Action Plans */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Stakeholder Alignment Action Plans
          </CardTitle>
          <CardDescription>
            Detailed strategies for maintaining alignment with key stakeholders
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {stakeholders
            .filter(stakeholder => 
              (filterGroup === "all" || stakeholder.group === filterGroup) && 
              stakeholder.influence >= 7
            )
            .sort((a, b) => b.influence - a.influence)
            .map(stakeholder => {
              const priority = getAlignmentPriority(stakeholder.influence, stakeholder.support);
              
              return (
                <div key={stakeholder.id} className="border rounded-md p-4">
                  <div className="flex justify-between mb-3">
                    <div>
                      <h3 className="font-medium text-lg">{stakeholder.name}</h3>
                      <div className="flex gap-2 mt-1">
                        <Badge className={priority.color}>{priority.label}</Badge>
                        {getGroupBadge(stakeholder.group)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Role: {stakeholder.role}</div>
                      <div className="flex gap-4 mt-1">
                        <div className="flex flex-col items-center">
                          <span className="text-xs text-gray-500">Influence</span>
                          <span className="font-medium">{stakeholder.influence}/10</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-xs text-gray-500">Support</span>
                          <span className="font-medium">{stakeholder.support}/10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-attune-teal text-sm">Key Interests</h4>
                      <p className="text-sm">{stakeholder.interests || "No interests specified"}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-red-600 text-sm">Potential Concerns</h4>
                      <p className="text-sm">{stakeholder.concerns || "No concerns specified"}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-purple-600 text-sm">Alignment Actions</h4>
                      <p className="text-sm">{stakeholder.alignmentActions || "No actions specified"}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-4">
                    <Button variant="outline" size="sm" onClick={() => handleEditStakeholder(stakeholder)}>
                      Edit Action Plan
                    </Button>
                  </div>
                </div>
              );
            })}
          
          {stakeholders.filter(s => 
            (filterGroup === "all" || s.group === filterGroup) && 
            s.influence >= 7
          ).length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Flag className="mx-auto h-10 w-10 mb-2" />
              <p>No high-influence stakeholders in the selected filter.</p>
              <Button variant="outline" className="mt-4" onClick={handleAddStakeholder}>
                Add Stakeholder
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="border-t bg-gray-50">
          <div className="w-full">
            <h3 className="font-medium mb-2">Alignment Strategies Legend</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
              <div className="flex items-center gap-1">
                <Badge className="bg-red-100 text-red-800">Critical</Badge>
                <span className="text-xs">- High priority</span>
              </div>
              <div className="flex items-center gap-1">
                <Badge className="bg-amber-100 text-amber-800">Important</Badge>
                <span className="text-xs">- Active engagement</span>
              </div>
              <div className="flex items-center gap-1">
                <Badge className="bg-green-100 text-green-800">Maintain</Badge>
                <span className="text-xs">- Regular updates</span>
              </div>
              <div className="flex items-center gap-1">
                <Badge className="bg-blue-100 text-blue-800">Monitor</Badge>
                <span className="text-xs">- Periodic check-ins</span>
              </div>
              <div className="flex items-center gap-1">
                <Badge className="bg-gray-100 text-gray-800">Inform</Badge>
                <span className="text-xs">- Keep informed</span>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
      
      {/* Stakeholder Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{editingStakeholder ? 'Edit Stakeholder' : 'Add Stakeholder'}</DialogTitle>
            <DialogDescription>
              {editingStakeholder ? 'Update stakeholder details and alignment strategy.' : 'Add a new stakeholder to the alignment map.'}
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name/Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Person or group name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <Input placeholder="Position or responsibility" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="group"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stakeholder Group</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select group" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="executive">Executive Team</SelectItem>
                        <SelectItem value="board">Board Members</SelectItem>
                        <SelectItem value="staff">Staff</SelectItem>
                        <SelectItem value="member">Members</SelectItem>
                        <SelectItem value="partner">Community Partners</SelectItem>
                        <SelectItem value="regulator">Regulators</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="influence"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Influence Level (1-10)</FormLabel>
                      <FormControl>
                        <Select 
                          onValueChange={(value) => field.onChange(parseInt(value))} 
                          defaultValue={field.value.toString()}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                              <SelectItem key={value} value={value.toString()}>
                                {value} - {value < 4 ? 'Low' : value < 7 ? 'Medium' : 'High'}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription>
                        How much power do they have over decisions?
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="support"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Support Level (1-10)</FormLabel>
                      <FormControl>
                        <Select 
                          onValueChange={(value) => field.onChange(parseInt(value))} 
                          defaultValue={field.value.toString()}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                              <SelectItem key={value} value={value.toString()}>
                                {value} - {value < 4 ? 'Resistant' : value < 7 ? 'Neutral' : 'Supportive'}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription>
                        How supportive are they of financial health initiatives?
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Key Interests</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="What motivates this stakeholder?" 
                        {...field} 
                        rows={2}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="concerns"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Potential Concerns</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="What objections might they have?" 
                        {...field} 
                        rows={2}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="alignmentActions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alignment Actions</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Specific actions to maintain alignment" 
                        {...field} 
                        rows={2}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingStakeholder ? 'Update' : 'Add'} Stakeholder
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StakeholderAlignment;
