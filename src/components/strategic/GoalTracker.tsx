
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
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
  DialogTrigger,
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { Target, Trash2, PenLine, Goal } from 'lucide-react';

// Define goal schema
const goalSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, { message: "Goal name must be at least 3 characters." }),
  category: z.string().min(1, { message: "Please select a category." }),
  target: z.string().min(1, { message: "Please enter a target value." }),
  deadline: z.string().min(1, { message: "Please select a deadline." }),
  owner: z.string().min(3, { message: "Owner name must be at least 3 characters." }),
  progress: z.coerce.number().min(0).max(100, { message: "Progress must be between 0 and 100." }),
  priority: z.enum(["high", "medium", "low"]),
  description: z.string().optional(),
});

type Goal = z.infer<typeof goalSchema>;

// Mock data
const initialGoals: Goal[] = [
  {
    id: '1',
    name: 'Increase Financial Health Score',
    category: 'mission',
    target: '85/100 average score',
    deadline: '2024-12-31',
    owner: 'Sarah Johnson',
    progress: 68,
    priority: 'high',
    description: 'Increase the average financial health score of our membership to 85/100.'
  },
  {
    id: '2',
    name: 'Emergency Savings Adoption',
    category: 'mission',
    target: '50% of members',
    deadline: '2024-09-30',
    owner: 'Michael Chen',
    progress: 42,
    priority: 'high',
    description: 'Get 50% of members to establish an emergency savings fund with at least $400.'
  },
  {
    id: '3',
    name: 'Digital Financial Tools Usage',
    category: 'margin',
    target: '75% active users',
    deadline: '2024-10-15',
    owner: 'Emily Rodriguez',
    progress: 56,
    priority: 'medium',
    description: 'Increase active usage of digital financial wellness tools to 75% of membership.'
  },
  {
    id: '4',
    name: 'Branch Staff Training',
    category: 'motion',
    target: '100% completion',
    deadline: '2024-07-01',
    owner: 'James Wilson',
    progress: 90,
    priority: 'medium',
    description: 'Complete financial health conversation training for all branch staff.'
  },
  {
    id: '5',
    name: 'Board Reporting Framework',
    category: 'motion',
    target: 'Monthly updates',
    deadline: '2024-06-15',
    owner: 'Lisa Garcia',
    progress: 75,
    priority: 'low',
    description: 'Implement standardized board reporting on financial health initiatives.'
  },
];

const GoalTracker = () => {
  const [goals, setGoals] = useState<Goal[]>(initialGoals);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterPriority, setFilterPriority] = useState<string>("all");

  // Setup form
  const form = useForm<Goal>({
    resolver: zodResolver(goalSchema),
    defaultValues: {
      name: '',
      category: '',
      target: '',
      deadline: '',
      owner: '',
      progress: 0,
      priority: 'medium',
      description: ''
    }
  });

  // Set up edited goal in the form
  const setupEditForm = (goal: Goal) => {
    setEditingGoal(goal);
    form.reset(goal);
    setIsDialogOpen(true);
  };

  // Create new goal
  const handleAddNewGoal = () => {
    setEditingGoal(null);
    form.reset({
      name: '',
      category: '',
      target: '',
      deadline: '',
      owner: '',
      progress: 0,
      priority: 'medium',
      description: ''
    });
    setIsDialogOpen(true);
  };

  // Delete a goal
  const handleDeleteGoal = (id: string) => {
    setGoals(goals.filter(goal => goal.id !== id));
    toast({
      title: "Goal Deleted",
      description: "The goal has been removed from the tracker.",
      duration: 3000
    });
  };

  // Save goal (add or update)
  const onSubmit = (data: Goal) => {
    if (editingGoal) {
      // Update existing goal
      setGoals(goals.map(goal => goal.id === editingGoal.id ? { ...data, id: editingGoal.id } : goal));
      toast({
        title: "Goal Updated",
        description: "Changes have been saved to the goal.",
        duration: 3000
      });
    } else {
      // Add new goal
      const newGoal = { ...data, id: `${goals.length + 1}` };
      setGoals([...goals, newGoal]);
      toast({
        title: "Goal Added",
        description: "A new goal has been added to the tracker.",
        duration: 3000
      });
    }
    setIsDialogOpen(false);
  };

  // Filter goals based on category and priority
  const filteredGoals = goals.filter(goal => {
    const matchesCategory = filterCategory === "all" || goal.category === filterCategory;
    const matchesPriority = filterPriority === "all" || goal.priority === filterPriority;
    return matchesCategory && matchesPriority;
  });

  // Get category label with proper capitalization
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'mission': return 'Mission';
      case 'margin': return 'Margin';
      case 'motion': return 'Motion';
      default: return category;
    }
  };

  // Get priority badge color
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high': return <Badge variant="destructive">High</Badge>;
      case 'medium': return <Badge variant="outline" className="bg-amber-100 border-amber-600 text-amber-800">Medium</Badge>;
      case 'low': return <Badge variant="outline" className="bg-green-100 border-green-600 text-green-800">Low</Badge>;
      default: return <Badge>{priority}</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <Goal className="h-5 w-5" />
            Financial Health Goal Tracker
          </CardTitle>
          <CardDescription>
            Set, track, and manage strategic financial health goals
          </CardDescription>
        </div>
        <Button onClick={handleAddNewGoal}>Add New Goal</Button>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-6">
          <div className="flex gap-4">
            <div>
              <label className="text-sm font-medium">Filter by Category</label>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="mission">Mission</SelectItem>
                  <SelectItem value="margin">Margin</SelectItem>
                  <SelectItem value="motion">Motion</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Filter by Priority</label>
              <Select value={filterPriority} onValueChange={setFilterPriority}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-sm bg-attune-teal mr-1"></div>
              <span className="text-sm">Mission</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-sm bg-[#9b87f5] mr-1"></div>
              <span className="text-sm">Margin</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-sm bg-[#F39C50] mr-1"></div>
              <span className="text-sm">Motion</span>
            </div>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Goal</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Target</TableHead>
              <TableHead>Deadline</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredGoals.map((goal) => (
              <TableRow key={goal.id}>
                <TableCell className="font-medium">{goal.name}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={`
                      ${goal.category === 'mission' ? 'bg-attune-teal-light text-attune-teal' : 
                        goal.category === 'margin' ? 'bg-purple-100 text-purple-800' : 
                        'bg-orange-100 text-orange-800'} 
                      border-0
                    `}
                  >
                    {getCategoryLabel(goal.category)}
                  </Badge>
                </TableCell>
                <TableCell>{goal.target}</TableCell>
                <TableCell>{new Date(goal.deadline).toLocaleDateString()}</TableCell>
                <TableCell>{goal.owner}</TableCell>
                <TableCell>{getPriorityBadge(goal.priority)}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          goal.progress < 40 ? 'bg-red-500' :
                          goal.progress < 70 ? 'bg-amber-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 min-w-8">{goal.progress}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" onClick={() => setupEditForm(goal)}>
                      <PenLine className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteGoal(goal.id!)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Goal Form Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>{editingGoal ? 'Edit Goal' : 'Add New Goal'}</DialogTitle>
              <DialogDescription>
                {editingGoal ? 'Update the details of this goal.' : 'Create a new strategic financial health goal.'}
              </DialogDescription>
            </DialogHeader>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Goal Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter goal name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="mission">Mission</SelectItem>
                            <SelectItem value="margin">Margin</SelectItem>
                            <SelectItem value="motion">Motion</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          The strategic category of this goal
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="priority"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Priority</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="target"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g., 85% adoption rate" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="deadline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Deadline</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="progress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Progress (%)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min={0} 
                            max={100} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="owner"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Goal Owner</FormLabel>
                      <FormControl>
                        <Input placeholder="Name of responsible person" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input placeholder="Brief description of the goal" {...field} />
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
                    {editingGoal ? 'Update Goal' : 'Add Goal'}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default GoalTracker;
