
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { PieChart, Pie, Cell, Legend, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ChartPie, Calculator, FileText } from 'lucide-react';

// Define resource schema for form validation
const resourceSchema = z.object({
  id: z.string().optional(),
  initiative: z.string().min(2, { message: "Please enter an initiative name." }),
  budget: z.coerce.number().min(0, { message: "Budget must be a positive number." }),
  staffHours: z.coerce.number().min(0, { message: "Staff hours must be a positive number." }),
  timelineMonths: z.coerce.number().min(1, { message: "Timeline must be at least 1 month." }),
  priority: z.enum(["high", "medium", "low"]),
  status: z.enum(["planning", "active", "paused", "completed"]),
  notes: z.string().optional(),
});

type Resource = z.infer<typeof resourceSchema>;

// Mock data
const initialResources: Resource[] = [
  {
    id: '1',
    initiative: 'Financial Education Workshop Series',
    budget: 25000,
    staffHours: 480,
    timelineMonths: 6,
    priority: 'high',
    status: 'active',
    notes: 'Includes materials, venue costs, and facilitator training'
  },
  {
    id: '2',
    initiative: 'Mobile App Financial Health Features',
    budget: 75000,
    staffHours: 960,
    timelineMonths: 8,
    priority: 'high',
    status: 'planning',
    notes: 'Development, testing, and marketing of new app features'
  },
  {
    id: '3',
    initiative: 'Staff Financial Health Training',
    budget: 15000,
    staffHours: 320,
    timelineMonths: 3,
    priority: 'medium',
    status: 'active',
    notes: 'Training for all member-facing staff on financial health concepts'
  },
  {
    id: '4',
    initiative: 'Emergency Savings Promotion',
    budget: 30000,
    staffHours: 240,
    timelineMonths: 4,
    priority: 'high',
    status: 'planning',
    notes: 'Marketing campaign focused on building emergency savings'
  },
  {
    id: '5',
    initiative: 'Financial Health Newsletter',
    budget: 5000,
    staffHours: 120,
    timelineMonths: 12,
    priority: 'low',
    status: 'active',
    notes: 'Monthly digital newsletter with financial health tips'
  },
  {
    id: '6',
    initiative: 'Community Financial Workshops',
    budget: 20000,
    staffHours: 360,
    timelineMonths: 9,
    priority: 'medium',
    status: 'paused',
    notes: 'Quarterly workshops in community centers and libraries'
  },
];

// Format number as currency
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const ResourceAllocation = () => {
  const [resources, setResources] = useState<Resource[]>(initialResources);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingResource, setEditingResource] = useState<Resource | null>(null);
  const [activeTab, setActiveTab] = useState('table');
  const [activeBudgetTab, setActiveBudgetTab] = useState('chart');

  // Setup form
  const form = useForm<Resource>({
    resolver: zodResolver(resourceSchema),
    defaultValues: {
      initiative: '',
      budget: 0,
      staffHours: 0,
      timelineMonths: 3,
      priority: 'medium',
      status: 'planning',
      notes: ''
    }
  });

  // Add a new resource allocation
  const handleAddResource = () => {
    setEditingResource(null);
    form.reset({
      initiative: '',
      budget: 0,
      staffHours: 0,
      timelineMonths: 3,
      priority: 'medium',
      status: 'planning',
      notes: ''
    });
    setIsDialogOpen(true);
  };

  // Edit existing resource
  const handleEditResource = (resource: Resource) => {
    setEditingResource(resource);
    form.reset(resource);
    setIsDialogOpen(true);
  };

  // Delete a resource allocation
  const handleDeleteResource = (id: string) => {
    setResources(resources.filter(resource => resource.id !== id));
    toast({
      title: "Resource Allocation Removed",
      description: "The resource allocation has been deleted.",
      duration: 3000
    });
  };

  // Submit form
  const onSubmit = (data: Resource) => {
    if (editingResource) {
      // Update existing resource
      setResources(resources.map(resource => 
        resource.id === editingResource.id ? { ...data, id: editingResource.id } : resource
      ));
      toast({
        title: "Resource Allocation Updated",
        description: "Changes to the resource allocation have been saved.",
        duration: 3000
      });
    } else {
      // Add new resource
      const newResource = { ...data, id: `${resources.length + 1}` };
      setResources([...resources, newResource]);
      toast({
        title: "Resource Allocation Added",
        description: "A new resource allocation has been added.",
        duration: 3000
      });
    }
    setIsDialogOpen(false);
  };

  // Calculate total budget
  const totalBudget = resources.reduce((sum, resource) => sum + resource.budget, 0);
  
  // Calculate total staff hours
  const totalStaffHours = resources.reduce((sum, resource) => sum + resource.staffHours, 0);

  // Prepare data for pie chart
  const budgetChartData = resources.map(resource => ({
    name: resource.initiative,
    value: resource.budget,
    priority: resource.priority,
    status: resource.status
  }));

  // Prepare data for staff hours bar chart
  const staffHoursData = resources.map(resource => ({
    name: resource.initiative,
    hours: resource.staffHours,
    priority: resource.priority
  }));

  // Get color based on priority
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return "#ef4444";
      case 'medium': return "#f59e0b";
      case 'low': return "#10b981";
      default: return "#6b7280";
    }
  };

  // Get color based on status
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planning': return "#3b82f6";
      case 'active': return "#10b981";
      case 'paused': return "#f59e0b";
      case 'completed': return "#8b5cf6";
      default: return "#6b7280";
    }
  };

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'planning':
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Planning</Badge>;
      case 'active':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>;
      case 'paused':
        return <Badge className="bg-amber-100 text-amber-800 border-amber-200">Paused</Badge>;
      case 'completed':
        return <Badge className="bg-purple-100 text-purple-800 border-purple-200">Completed</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  // Get priority badge
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-red-100 text-red-800 border-red-200">High</Badge>;
      case 'medium':
        return <Badge className="bg-amber-100 text-amber-800 border-amber-200">Medium</Badge>;
      case 'low':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Low</Badge>;
      default:
        return <Badge>{priority}</Badge>;
    }
  };

  // Colors for the pie chart
  const COLORS = ['#2B7C7E', '#FDC963', '#F39C50', '#9b87f5', '#E2F5F5', '#8E9196'];

  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded shadow-md">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-sm">{formatCurrency(payload[0].value)}</p>
          <div className="mt-1 text-xs text-gray-600">
            {payload[0].payload.priority && <span className="capitalize">{payload[0].payload.priority} Priority</span>}
            {payload[0].payload.status && <span className="capitalize ml-2">{payload[0].payload.status}</span>}
          </div>
        </div>
      );
    }
    return null;
  };

  // Generate resource allocation guidance
  const generateGuidance = () => {
    toast({
      title: "Resource Allocation Guidance",
      description: "Analysis complete - recommendations have been generated.",
      duration: 3000
    });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Resource Allocation
          </CardTitle>
          <CardDescription>
            Plan and track resource investments across financial health initiatives
          </CardDescription>
        </div>
        <Button onClick={handleAddResource}>Add Resource Allocation</Button>
      </CardHeader>
      <CardContent>
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{formatCurrency(totalBudget)}</div>
              <p className="text-sm text-muted-foreground">Total Allocated Budget</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{totalStaffHours.toLocaleString()}</div>
              <p className="text-sm text-muted-foreground">Total Staff Hours</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{resources.length}</div>
              <p className="text-sm text-muted-foreground">Active Initiatives</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for different views */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList>
            <TabsTrigger value="table">Table View</TabsTrigger>
            <TabsTrigger value="budget">Budget Analysis</TabsTrigger>
            <TabsTrigger value="staff">Staff Allocation</TabsTrigger>
            <TabsTrigger value="guidance">Allocation Guidance</TabsTrigger>
          </TabsList>
          
          {/* Table View */}
          <TabsContent value="table" className="mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Initiative</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Staff Hours</TableHead>
                  <TableHead>Timeline</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {resources.map((resource) => (
                  <TableRow key={resource.id}>
                    <TableCell className="font-medium">{resource.initiative}</TableCell>
                    <TableCell>{formatCurrency(resource.budget)}</TableCell>
                    <TableCell>{resource.staffHours}</TableCell>
                    <TableCell>{resource.timelineMonths} months</TableCell>
                    <TableCell>{getPriorityBadge(resource.priority)}</TableCell>
                    <TableCell>{getStatusBadge(resource.status)}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" onClick={() => handleEditResource(resource)}>
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600" onClick={() => handleDeleteResource(resource.id!)}>
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          
          {/* Budget Analysis */}
          <TabsContent value="budget" className="mt-4">
            <Tabs value={activeBudgetTab} onValueChange={setActiveBudgetTab} className="mb-4">
              <TabsList>
                <TabsTrigger value="chart">Chart View</TabsTrigger>
                <TabsTrigger value="details">Budget Details</TabsTrigger>
              </TabsList>
              
              <TabsContent value="chart" className="mt-4">
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={budgetChartData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={140}
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {budgetChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <RechartsTooltip content={<CustomTooltip />} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold mb-3">Budget Distribution by Priority</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['high', 'medium', 'low'].map(priority => {
                      const priorityTotal = resources
                        .filter(r => r.priority === priority)
                        .reduce((sum, r) => sum + r.budget, 0);
                      const percentOfTotal = totalBudget > 0 ? (priorityTotal / totalBudget * 100).toFixed(1) : '0';
                      
                      return (
                        <Card key={priority}>
                          <CardContent className="pt-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="capitalize">{priority} Priority</span>
                              <span className="text-sm text-gray-500">{percentOfTotal}%</span>
                            </div>
                            <div className="text-xl font-bold">{formatCurrency(priorityTotal)}</div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                              <div 
                                className="h-2 rounded-full" 
                                style={{
                                  width: `${percentOfTotal}%`,
                                  backgroundColor: getPriorityColor(priority)
                                }}
                              ></div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="details" className="mt-4">
                <div className="space-y-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Initiative</TableHead>
                        <TableHead>Budget</TableHead>
                        <TableHead>% of Total</TableHead>
                        <TableHead>Monthly Rate</TableHead>
                        <TableHead>Cost per Hour</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {resources.map((resource) => {
                        const percentOfTotal = totalBudget > 0 ? ((resource.budget / totalBudget) * 100).toFixed(1) : '0';
                        const monthlyRate = (resource.budget / resource.timelineMonths).toFixed(0);
                        const hourlyRate = resource.staffHours > 0 ? (resource.budget / resource.staffHours).toFixed(0) : '0';
                        
                        return (
                          <TableRow key={resource.id}>
                            <TableCell className="font-medium">{resource.initiative}</TableCell>
                            <TableCell>{formatCurrency(resource.budget)}</TableCell>
                            <TableCell>{percentOfTotal}%</TableCell>
                            <TableCell>{formatCurrency(Number(monthlyRate))}/month</TableCell>
                            <TableCell>${hourlyRate}/hour</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                  
                  <div>
                    <h3 className="font-semibold mb-4">Budget by Status</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {['planning', 'active', 'paused', 'completed'].map(status => {
                        const statusResources = resources.filter(r => r.status === status);
                        const statusTotal = statusResources.reduce((sum, r) => sum + r.budget, 0);
                        const percentOfTotal = totalBudget > 0 ? (statusTotal / totalBudget * 100).toFixed(1) : '0';
                        
                        return (
                          <Card key={status}>
                            <CardContent className="pt-4">
                              <div className="flex justify-between items-center">
                                <span className="capitalize">{status}</span>
                                <Badge
                                  variant="outline"
                                  style={{
                                    borderColor: getStatusColor(status),
                                    color: getStatusColor(status)
                                  }}
                                >
                                  {statusResources.length}
                                </Badge>
                              </div>
                              <div className="text-xl font-bold mt-2">{formatCurrency(statusTotal)}</div>
                              <div className="text-sm text-gray-500">{percentOfTotal}% of budget</div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
          
          {/* Staff Allocation */}
          <TabsContent value="staff" className="mt-4">
            <div className="h-[400px] mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={staffHoursData} margin={{ top: 20, right: 20, bottom: 80, left: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ transform: "rotate(-45)", textAnchor: "end" }} 
                    height={80} 
                  />
                  <YAxis label={{ value: 'Staff Hours', angle: -90, position: 'insideLeft' }} />
                  <RechartsTooltip />
                  <Bar dataKey="hours" name="Staff Hours">
                    {staffHoursData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={getPriorityColor(entry.priority)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Staff Allocation by Priority</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Priority</TableHead>
                        <TableHead>Hours</TableHead>
                        <TableHead>% of Total</TableHead>
                        <TableHead>FTE Equivalent</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {['high', 'medium', 'low'].map(priority => {
                        const priorityHours = resources
                          .filter(r => r.priority === priority)
                          .reduce((sum, r) => sum + r.staffHours, 0);
                        const percentOfTotal = totalStaffHours > 0 ? (priorityHours / totalStaffHours * 100).toFixed(1) : '0';
                        const fteEquivalent = (priorityHours / 2080).toFixed(1); // 2080 = annual full-time hours
                        
                        return (
                          <TableRow key={priority}>
                            <TableCell className="font-medium capitalize">{priority}</TableCell>
                            <TableCell>{priorityHours.toLocaleString()}</TableCell>
                            <TableCell>{percentOfTotal}%</TableCell>
                            <TableCell>{fteEquivalent}</TableCell>
                          </TableRow>
                        );
                      })}
                      <TableRow className="font-medium">
                        <TableCell>Total</TableCell>
                        <TableCell>{totalStaffHours.toLocaleString()}</TableCell>
                        <TableCell>100%</TableCell>
                        <TableCell>{(totalStaffHours / 2080).toFixed(1)}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Monthly Staff Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Initiative</TableHead>
                        <TableHead>Monthly Hours</TableHead>
                        <TableHead>Weekly Hours</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {resources.map(resource => {
                        const monthlyHours = Math.round(resource.staffHours / resource.timelineMonths);
                        const weeklyHours = Math.round(monthlyHours / 4.33); // 4.33 weeks per month
                        
                        return (
                          <TableRow key={resource.id}>
                            <TableCell className="font-medium">{resource.initiative}</TableCell>
                            <TableCell>{monthlyHours}</TableCell>
                            <TableCell>{weeklyHours}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Resource Allocation Guidance */}
          <TabsContent value="guidance" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChartPie className="h-5 w-5" />
                  Resource Allocation Guidance
                </CardTitle>
                <CardDescription>
                  Recommendations to optimize your resource allocation strategy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border rounded-lg p-4 bg-attune-teal-light">
                  <h3 className="font-semibold text-attune-teal mb-3">Current Allocation Analysis</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-attune-teal mt-2"></div>
                      <span>{formatCurrency(totalBudget)} total budget across {resources.length} initiatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-attune-teal mt-2"></div>
                      <span>{((resources.filter(r => r.priority === 'high').reduce((sum, r) => sum + r.budget, 0) / totalBudget) * 100).toFixed(1)}% allocated to high-priority initiatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-attune-teal mt-2"></div>
                      <span>Average budget per initiative: {formatCurrency(totalBudget / resources.length)}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-attune-teal mt-2"></div>
                      <span>FTE equivalent: {(totalStaffHours / 2080).toFixed(1)} full-time employees</span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Resource Optimization Recommendations</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-amber-500 pl-4 py-1">
                      <h4 className="font-medium">Re-evaluate Low-Priority Initiatives</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Consider reallocating resources from low-priority initiatives to higher-impact opportunities.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4 py-1">
                      <h4 className="font-medium">Consolidate Similar Efforts</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Look for potential overlaps in staff allocations between related initiatives to improve efficiency.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4 py-1">
                      <h4 className="font-medium">Phase Implementation</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Consider phasing high-cost initiatives to distribute budget impact across multiple quarters.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="h-3 w-3 rounded-sm bg-attune-teal"></span>
                      Mission Impact
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Allocate 40-50% of resources to initiatives that directly improve member financial health outcomes.
                    </p>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Currently:</span>
                        <span className="font-medium">45% of budget</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-attune-teal h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="h-3 w-3 rounded-sm bg-[#9b87f5]"></span>
                      Margin Alignment
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Reserve 30-40% of resources for initiatives that balance financial health with business growth.
                    </p>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Currently:</span>
                        <span className="font-medium">35% of budget</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-[#9b87f5] h-2 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full" 
                  onClick={generateGuidance}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Detailed Allocation Report
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Resource Form Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>{editingResource ? 'Edit Resource Allocation' : 'Add Resource Allocation'}</DialogTitle>
              <DialogDescription>
                {editingResource ? 'Update the resource allocation details.' : 'Add resources to a financial health initiative.'}
              </DialogDescription>
            </DialogHeader>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="initiative"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Initiative Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter initiative name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget ($)</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min={0} 
                          placeholder="Enter budget amount" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="staffHours"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Staff Hours</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min={0} 
                            placeholder="Total hours" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="timelineMonths"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Timeline (Months)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min={1} 
                            placeholder="Duration" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="priority"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Priority</FormLabel>
                        <div className="grid grid-cols-3 gap-2">
                          {['high', 'medium', 'low'].map((priority) => (
                            <div key={priority}>
                              <FormControl>
                                <div
                                  className={`
                                    flex items-center justify-center p-2 rounded-md cursor-pointer border
                                    ${field.value === priority ? 
                                      `bg-${priority === 'high' ? 'red' : priority === 'medium' ? 'amber' : 'green'}-100 border-${priority === 'high' ? 'red' : priority === 'medium' ? 'amber' : 'green'}-500` : 
                                      'bg-gray-100 border-gray-300'}
                                  `}
                                  onClick={() => field.onChange(priority)}
                                >
                                  <span className="capitalize">{priority}</span>
                                </div>
                              </FormControl>
                            </div>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <div className="grid grid-cols-2 gap-2">
                          {['planning', 'active', 'paused', 'completed'].map((status) => (
                            <div key={status}>
                              <FormControl>
                                <div
                                  className={`
                                    flex items-center justify-center p-2 rounded-md cursor-pointer border text-xs
                                    ${field.value === status ? 
                                      `bg-${status === 'planning' ? 'blue' : status === 'active' ? 'green' : status === 'paused' ? 'amber' : 'purple'}-100 
                                       border-${status === 'planning' ? 'blue' : status === 'active' ? 'green' : status === 'paused' ? 'amber' : 'purple'}-500` : 
                                      'bg-gray-100 border-gray-300'}
                                  `}
                                  onClick={() => field.onChange(status)}
                                >
                                  <span className="capitalize">{status}</span>
                                </div>
                              </FormControl>
                            </div>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notes</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Add any additional information" 
                          className="min-h-[100px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <DialogFooter className="mt-6">
                  <Button type="submit">
                    {editingResource ? 'Save Changes' : 'Add Resource'}
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

export default ResourceAllocation;
