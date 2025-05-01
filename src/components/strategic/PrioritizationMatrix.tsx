
import { useState } from 'react';
import { Scatter } from 'recharts';
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
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Flag, Target } from 'lucide-react';
import {
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
  ReferenceLine
} from 'recharts';

// Define initiative schema
const initiativeSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, { message: "Initiative name must be at least 3 characters." }),
  impact: z.coerce.number().min(1).max(10, { message: "Impact must be between 1 and 10." }),
  effort: z.coerce.number().min(1).max(10, { message: "Effort must be between 1 and 10." }),
  category: z.string().min(1, { message: "Please select a category." }),
  description: z.string().optional(),
});

type Initiative = z.infer<typeof initiativeSchema>;

// Sample initiatives
const initialInitiatives: Initiative[] = [
  {
    id: '1',
    name: 'Financial Education Workshop Series',
    impact: 8,
    effort: 6,
    category: 'education',
    description: 'A comprehensive workshop series covering budgeting, saving, and credit management.'
  },
  {
    id: '2',
    name: 'Mobile App Financial Health Features',
    impact: 9,
    effort: 8,
    category: 'digital',
    description: 'Adding spending tracking, savings goals, and financial health score to mobile app.'
  },
  {
    id: '3',
    name: 'First-Time Homebuyer Program',
    impact: 9,
    effort: 7,
    category: 'products',
    description: 'Special mortgage options and educational resources for first-time homebuyers.'
  },
  {
    id: '4',
    name: 'Staff Financial Health Training',
    impact: 7,
    effort: 5,
    category: 'training',
    description: 'Training frontline staff to have financial health conversations with members.'
  },
  {
    id: '5',
    name: 'Emergency Savings Promotion',
    impact: 8,
    effort: 4,
    category: 'products',
    description: 'Marketing campaign and product enhancements to promote emergency savings accounts.'
  },
  {
    id: '6',
    name: 'Credit Builder Program',
    impact: 10,
    effort: 6,
    category: 'products',
    description: 'Program to help members establish or improve their credit scores.'
  },
  {
    id: '7',
    name: 'Branch Financial Health Kiosks',
    impact: 5,
    effort: 8,
    category: 'digital',
    description: 'Interactive kiosks in branches for members to assess their financial health.'
  },
  {
    id: '8',
    name: 'Financial Health Newsletter',
    impact: 3,
    effort: 2,
    category: 'education',
    description: 'Monthly email newsletter with financial tips and resources.'
  },
  {
    id: '9',
    name: 'Community Financial Workshops',
    impact: 7,
    effort: 7,
    category: 'education',
    description: 'Free workshops open to the community on various financial topics.'
  },
  {
    id: '10',
    name: 'Debt Management Consultation',
    impact: 8,
    effort: 5,
    category: 'services',
    description: 'One-on-one consultations to help members manage and reduce debt.'
  }
];

// Category colors for the matrix
const categoryColors = {
  education: "#2B7C7E", // teal
  digital: "#9b87f5", // purple
  products: "#F39C50", // orange
  training: "#FDC963", // yellow
  services: "#E2F5F5", // light teal
  default: "#8E9196" // gray
};

// Get quadrant based on impact and effort
const getQuadrant = (impact: number, effort: number) => {
  if (impact >= 5.5 && effort < 5.5) return "Quick Wins";
  if (impact >= 5.5 && effort >= 5.5) return "Major Projects";
  if (impact < 5.5 && effort < 5.5) return "Fill-Ins";
  return "Thankless Tasks";
};

const PrioritizationMatrix = () => {
  const [initiatives, setInitiatives] = useState<Initiative[]>(initialInitiatives);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingInitiative, setEditingInitiative] = useState<Initiative | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<Initiative | null>(null);

  // Setup form
  const form = useForm<Initiative>({
    resolver: zodResolver(initiativeSchema),
    defaultValues: {
      name: '',
      impact: 5,
      effort: 5,
      category: 'education',
      description: ''
    }
  });

  // Add a new initiative
  const handleAddNewInitiative = () => {
    setEditingInitiative(null);
    form.reset({
      name: '',
      impact: 5,
      effort: 5,
      category: 'education',
      description: ''
    });
    setIsDialogOpen(true);
  };

  // Edit existing initiative
  const handleEditInitiative = (initiative: Initiative) => {
    setEditingInitiative(initiative);
    form.reset(initiative);
    setIsDialogOpen(true);
  };

  // Delete an initiative
  const handleDeleteInitiative = (id: string) => {
    setInitiatives(initiatives.filter(initiative => initiative.id !== id));
    setSelectedPoint(null);
    toast({
      title: "Initiative Removed",
      description: "The initiative has been removed from the matrix.",
      duration: 3000
    });
  };

  // Submit form
  const onSubmit = (data: Initiative) => {
    if (editingInitiative) {
      // Update existing initiative
      setInitiatives(initiatives.map(initiative => 
        initiative.id === editingInitiative.id ? { ...data, id: editingInitiative.id } : initiative
      ));
      toast({
        title: "Initiative Updated",
        description: "Changes to the initiative have been saved.",
        duration: 3000
      });
    } else {
      // Add new initiative
      const newInitiative = { ...data, id: `${initiatives.length + 1}` };
      setInitiatives([...initiatives, newInitiative]);
      toast({
        title: "Initiative Added",
        description: "A new initiative has been added to the prioritization matrix.",
        duration: 3000
      });
    }
    setIsDialogOpen(false);
  };

  // Format data for the scatter chart
  const chartData = initiatives.map(initiative => ({
    ...initiative,
    x: initiative.effort,
    y: initiative.impact,
    z: 100, // Size of the dot
    quadrant: getQuadrant(initiative.impact, initiative.effort)
  }));

  // Custom tooltip for the chart
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border rounded-md shadow-md">
          <p className="font-bold text-sm">{data.name}</p>
          <p className="text-sm">Impact: {data.impact}/10</p>
          <p className="text-sm">Effort: {data.effort}/10</p>
          <p className="text-sm font-medium mt-1">{data.quadrant}</p>
        </div>
      );
    }
    return null;
  };

  // Format category label
  const formatCategory = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  // Get category colors for chart
  const getCategoryColor = (category: string): string => {
    return categoryColors[category as keyof typeof categoryColors] || categoryColors.default;
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <Flag className="h-5 w-5" />
            Initiative Prioritization Matrix
          </CardTitle>
          <CardDescription>
            Visualize and prioritize initiatives based on impact and effort
          </CardDescription>
        </div>
        <Button onClick={handleAddNewInitiative}>Add Initiative</Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Area */}
          <div className="lg:col-span-2">
            <div className="h-[500px] border rounded-lg p-4">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    type="number" 
                    dataKey="x" 
                    name="Effort" 
                    domain={[0, 10]}
                    label={{ value: 'Effort', position: 'bottom', offset: 0 }}
                    ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  />
                  <YAxis 
                    type="number" 
                    dataKey="y" 
                    name="Impact" 
                    domain={[0, 10]}
                    label={{ value: 'Impact', angle: -90, position: 'left' }}
                    ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  />
                  <ZAxis type="number" dataKey="z" range={[100, 100]} />
                  <Tooltip content={<CustomTooltip />} />
                  <ReferenceLine x={5.5} stroke="#666" strokeDasharray="3 3" />
                  <ReferenceLine y={5.5} stroke="#666" strokeDasharray="3 3" />
                  <Scatter name="Initiatives" data={chartData} onClick={(data) => setSelectedPoint(data)}>
                    {chartData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={getCategoryColor(entry.category)}
                        stroke={selectedPoint?.id === entry.id ? "#000" : "none"}
                        strokeWidth={selectedPoint?.id === entry.id ? 2 : 0}
                      />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>
            
            {/* Quadrant Labels */}
            <div className="grid grid-cols-2 gap-2 mt-4 text-center">
              <div className="bg-green-50 border border-green-200 p-3 rounded-md">
                <h4 className="font-medium">Quick Wins</h4>
                <p className="text-sm text-gray-600">High Impact, Low Effort</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-md">
                <h4 className="font-medium">Major Projects</h4>
                <p className="text-sm text-gray-600">High Impact, High Effort</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-md">
                <h4 className="font-medium">Fill-Ins</h4>
                <p className="text-sm text-gray-600">Low Impact, Low Effort</p>
              </div>
              <div className="bg-red-50 border border-red-200 p-3 rounded-md">
                <h4 className="font-medium">Thankless Tasks</h4>
                <p className="text-sm text-gray-600">Low Impact, High Effort</p>
              </div>
            </div>
          </div>
          
          {/* Initiative Details */}
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-4 h-full">
              <h3 className="font-medium text-lg mb-4">Initiative Details</h3>
              
              {selectedPoint ? (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold">{selectedPoint.name}</h4>
                    <Badge className="mt-1" style={{backgroundColor: getCategoryColor(selectedPoint.category)}}>
                      {formatCategory(selectedPoint.category)}
                    </Badge>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Description</p>
                    <p>{selectedPoint.description || "No description provided."}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Impact Score</p>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-attune-teal h-2 rounded-full" 
                          style={{ width: `${selectedPoint.impact * 10}%` }}
                        ></div>
                      </div>
                      <span className="font-medium">{selectedPoint.impact}/10</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Effort Required</p>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-amber-500 h-2 rounded-full" 
                          style={{ width: `${selectedPoint.effort * 10}%` }}
                        ></div>
                      </div>
                      <span className="font-medium">{selectedPoint.effort}/10</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Priority Quadrant</p>
                    <p className="font-medium">{getQuadrant(selectedPoint.impact, selectedPoint.effort)}</p>
                  </div>
                  
                  <div className="pt-4 flex gap-2">
                    <Button size="sm" onClick={() => handleEditInitiative(selectedPoint)}>
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDeleteInitiative(selectedPoint.id!)}>
                      Delete
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-center text-gray-500">
                  <Target className="h-10 w-10 mb-2" />
                  <p>Select an initiative on the chart to view details</p>
                  <Button variant="outline" className="mt-4" onClick={handleAddNewInitiative}>
                    Add New Initiative
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Initiative Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>{editingInitiative ? 'Edit Initiative' : 'Add New Initiative'}</DialogTitle>
              <DialogDescription>
                {editingInitiative ? 'Update the details of this initiative.' : 'Add a new initiative to the prioritization matrix.'}
              </DialogDescription>
            </DialogHeader>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
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
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <div className="grid grid-cols-3 gap-2">
                          <div>
                            <input 
                              type="radio" 
                              id="education" 
                              className="sr-only" 
                              checked={field.value === 'education'} 
                              onChange={() => field.onChange('education')}
                            />
                            <label 
                              htmlFor="education" 
                              className={`block text-center p-2 rounded-md cursor-pointer ${field.value === 'education' ? 'bg-attune-teal text-white' : 'bg-gray-100'}`}
                              onClick={() => field.onChange('education')}
                            >
                              Education
                            </label>
                          </div>
                          <div>
                            <input 
                              type="radio" 
                              id="digital" 
                              className="sr-only" 
                              checked={field.value === 'digital'} 
                              onChange={() => field.onChange('digital')}
                            />
                            <label 
                              htmlFor="digital" 
                              className={`block text-center p-2 rounded-md cursor-pointer ${field.value === 'digital' ? 'bg-[#9b87f5] text-white' : 'bg-gray-100'}`}
                              onClick={() => field.onChange('digital')}
                            >
                              Digital
                            </label>
                          </div>
                          <div>
                            <input 
                              type="radio" 
                              id="products" 
                              className="sr-only" 
                              checked={field.value === 'products'} 
                              onChange={() => field.onChange('products')}
                            />
                            <label 
                              htmlFor="products" 
                              className={`block text-center p-2 rounded-md cursor-pointer ${field.value === 'products' ? 'bg-[#F39C50] text-white' : 'bg-gray-100'}`}
                              onClick={() => field.onChange('products')}
                            >
                              Products
                            </label>
                          </div>
                          <div>
                            <input 
                              type="radio" 
                              id="training" 
                              className="sr-only" 
                              checked={field.value === 'training'} 
                              onChange={() => field.onChange('training')}
                            />
                            <label 
                              htmlFor="training" 
                              className={`block text-center p-2 rounded-md cursor-pointer ${field.value === 'training' ? 'bg-[#FDC963] text-white' : 'bg-gray-100'}`}
                              onClick={() => field.onChange('training')}
                            >
                              Training
                            </label>
                          </div>
                          <div>
                            <input 
                              type="radio" 
                              id="services" 
                              className="sr-only" 
                              checked={field.value === 'services'} 
                              onChange={() => field.onChange('services')}
                            />
                            <label 
                              htmlFor="services" 
                              className={`block text-center p-2 rounded-md cursor-pointer ${field.value === 'services' ? 'bg-[#E2F5F5] text-gray-800' : 'bg-gray-100'}`}
                              onClick={() => field.onChange('services')}
                            >
                              Services
                            </label>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="impact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Impact (1-10)</FormLabel>
                      <div className="flex items-center gap-4">
                        <FormControl>
                          <Slider
                            defaultValue={[field.value]}
                            min={1}
                            max={10}
                            step={1}
                            onValueChange={(value) => field.onChange(value[0])}
                            className="flex-grow"
                          />
                        </FormControl>
                        <span className="font-medium w-8 text-center">{field.value}</span>
                      </div>
                      <FormDescription>
                        How much positive impact will this initiative have on financial health?
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="effort"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Effort Required (1-10)</FormLabel>
                      <div className="flex items-center gap-4">
                        <FormControl>
                          <Slider
                            defaultValue={[field.value]}
                            min={1}
                            max={10}
                            step={1}
                            onValueChange={(value) => field.onChange(value[0])}
                            className="flex-grow"
                          />
                        </FormControl>
                        <span className="font-medium w-8 text-center">{field.value}</span>
                      </div>
                      <FormDescription>
                        How much effort (time, resources, complexity) is required?
                      </FormDescription>
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
                        <Textarea 
                          placeholder="Brief description of the initiative" 
                          rows={3} 
                          {...field} 
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
                    {editingInitiative ? 'Update Initiative' : 'Add Initiative'}
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

export default PrioritizationMatrix;
