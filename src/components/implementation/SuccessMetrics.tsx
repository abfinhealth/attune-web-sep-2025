import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend,
  Cell
} from 'recharts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { ChartLine, Flag, ListTodo, BarChart as BarChartIcon, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Metric {
  id: string;
  name: string;
  description: string;
  project: string;
  category: 'financial' | 'engagement' | 'adoption' | 'satisfaction';
  target: number;
  current: number;
  unit: string;
  frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly';
  trend: 'up' | 'down' | 'flat';
  startDate: string;
  status: 'on-target' | 'below-target' | 'above-target';
  data: { date: string; value: number }[];
}

const MOCK_METRICS: Metric[] = [
  {
    id: '1',
    name: 'Financial Health Score Improvement',
    description: 'Average improvement in member financial health scores',
    project: 'Financial Education Platform',
    category: 'financial',
    target: 15,
    current: 12,
    unit: 'percentage',
    frequency: 'quarterly',
    trend: 'up',
    startDate: '2025-02-15',
    status: 'below-target',
    data: [
      { date: '2025-02', value: 5 },
      { date: '2025-03', value: 8 },
      { date: '2025-04', value: 10 },
      { date: '2025-05', value: 12 }
    ]
  },
  {
    id: '2',
    name: 'Educational Module Completion',
    description: 'Percentage of users completing financial education modules',
    project: 'Financial Education Platform',
    category: 'engagement',
    target: 60,
    current: 65,
    unit: 'percentage',
    frequency: 'monthly',
    trend: 'up',
    startDate: '2025-02-15',
    status: 'above-target',
    data: [
      { date: '2025-02', value: 35 },
      { date: '2025-03', value: 48 },
      { date: '2025-04', value: 57 },
      { date: '2025-05', value: 65 }
    ]
  },
  {
    id: '3',
    name: 'Mobile App Feature Usage',
    description: 'Usage rate of new financial health features in mobile app',
    project: 'Mobile Banking Enhancement',
    category: 'adoption',
    target: 40,
    current: 38,
    unit: 'percentage',
    frequency: 'weekly',
    trend: 'up',
    startDate: '2025-03-15',
    status: 'below-target',
    data: [
      { date: '2025-03', value: 12 },
      { date: '2025-04', value: 25 },
      { date: '2025-05', value: 38 }
    ]
  },
  {
    id: '4',
    name: 'Member Satisfaction Rating',
    description: 'Average satisfaction rating for financial health initiatives',
    project: 'Staff Financial Health Training',
    category: 'satisfaction',
    target: 4.2,
    current: 4.5,
    unit: 'rating',
    frequency: 'monthly',
    trend: 'up',
    startDate: '2025-01-30',
    status: 'above-target',
    data: [
      { date: '2025-02', value: 3.8 },
      { date: '2025-03', value: 4.0 },
      { date: '2025-04', value: 4.3 },
      { date: '2025-05', value: 4.5 }
    ]
  },
  {
    id: '5',
    name: 'Emergency Savings Increase',
    description: 'Average increase in emergency savings account balances',
    project: 'Emergency Savings Program',
    category: 'financial',
    target: 30,
    current: 22,
    unit: 'percentage',
    frequency: 'quarterly',
    trend: 'up',
    startDate: '2025-04-10',
    status: 'below-target',
    data: [
      { date: '2025-04', value: 8 },
      { date: '2025-05', value: 22 }
    ]
  }
];

const getCategoryBadge = (category: Metric['category']) => {
  switch (category) {
    case 'financial':
      return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Financial</Badge>;
    case 'engagement':
      return <Badge className="bg-purple-100 text-purple-800 border-purple-200">Engagement</Badge>;
    case 'adoption':
      return <Badge className="bg-green-100 text-green-800 border-green-200">Adoption</Badge>;
    case 'satisfaction':
      return <Badge className="bg-amber-100 text-amber-800 border-amber-200">Satisfaction</Badge>;
  }
};

const getStatusBadge = (status: Metric['status']) => {
  switch (status) {
    case 'on-target':
      return <Badge className="bg-green-100 text-green-800 border-green-200">On Target</Badge>;
    case 'below-target':
      return <Badge className="bg-red-100 text-red-800 border-red-200">Below Target</Badge>;
    case 'above-target':
      return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Above Target</Badge>;
  }
};

const formatValue = (value: number, unit: string) => {
  if (unit === 'percentage') return `${value}%`;
  if (unit === 'rating') return value.toFixed(1);
  return value;
};

const SuccessMetrics = () => {
  const [metrics] = useState<Metric[]>(MOCK_METRICS);
  const [selectedMetric, setSelectedMetric] = useState<Metric>(metrics[0]);
  const [filterProject, setFilterProject] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  
  // Get unique projects for filter dropdown
  const projects = Array.from(new Set(metrics.map(m => m.project)));
  
  // Filter metrics based on selected filters
  const filteredMetrics = metrics.filter(metric => 
    (filterProject === 'all' || metric.project === filterProject) &&
    (filterCategory === 'all' || metric.category === filterCategory)
  );

  const handleExportReport = () => {
    toast({
      title: "Report Exported",
      description: "Success metrics report has been exported.",
      duration: 3000
    });
  };
  
  // Create months array for the X-axis
  const months = ['2025-02', '2025-03', '2025-04', '2025-05'];
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <ChartLine className="h-5 w-5" />
              Success Metrics
            </CardTitle>
            <CardDescription>
              Track and analyze key success metrics for financial health initiatives
            </CardDescription>
          </div>
          <Button onClick={handleExportReport}>Export Report</Button>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Project:</span>
              <Select 
                value={filterProject} 
                onValueChange={setFilterProject}
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select Project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Projects</SelectItem>
                  {projects.map((project, idx) => (
                    <SelectItem key={idx} value={project}>{project}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Category:</span>
              <Select 
                value={filterCategory} 
                onValueChange={setFilterCategory}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="financial">Financial</SelectItem>
                  <SelectItem value="engagement">Engagement</SelectItem>
                  <SelectItem value="adoption">Adoption</SelectItem>
                  <SelectItem value="satisfaction">Satisfaction</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="detail">Detailed Metrics</TabsTrigger>
              <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              {/* Metrics Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-xs text-muted-foreground mb-1">Financial Metrics</div>
                    <div className="text-2xl font-bold">
                      {metrics.filter(m => m.category === 'financial').length}
                    </div>
                    <div className="flex items-center text-sm mt-1">
                      <span className={metrics.filter(m => m.category === 'financial' && m.status === 'above-target').length > 0 ? 'text-green-600' : 'text-gray-500'}>
                        {metrics.filter(m => m.category === 'financial' && m.status === 'above-target').length} above target
                      </span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-xs text-muted-foreground mb-1">Engagement Metrics</div>
                    <div className="text-2xl font-bold">
                      {metrics.filter(m => m.category === 'engagement').length}
                    </div>
                    <div className="flex items-center text-sm mt-1">
                      <span className={metrics.filter(m => m.category === 'engagement' && m.status === 'above-target').length > 0 ? 'text-green-600' : 'text-gray-500'}>
                        {metrics.filter(m => m.category === 'engagement' && m.status === 'above-target').length} above target
                      </span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-xs text-muted-foreground mb-1">Adoption Metrics</div>
                    <div className="text-2xl font-bold">
                      {metrics.filter(m => m.category === 'adoption').length}
                    </div>
                    <div className="flex items-center text-sm mt-1">
                      <span className={metrics.filter(m => m.category === 'adoption' && m.status === 'above-target').length > 0 ? 'text-green-600' : 'text-gray-500'}>
                        {metrics.filter(m => m.category === 'adoption' && m.status === 'above-target').length} above target
                      </span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-xs text-muted-foreground mb-1">Satisfaction Metrics</div>
                    <div className="text-2xl font-bold">
                      {metrics.filter(m => m.category === 'satisfaction').length}
                    </div>
                    <div className="flex items-center text-sm mt-1">
                      <span className={metrics.filter(m => m.category === 'satisfaction' && m.status === 'above-target').length > 0 ? 'text-green-600' : 'text-gray-500'}>
                        {metrics.filter(m => m.category === 'satisfaction' && m.status === 'above-target').length} above target
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Metrics Overview Table */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Metrics Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Metric</TableHead>
                        <TableHead>Project</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Target</TableHead>
                        <TableHead>Current</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Trend</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredMetrics.map(metric => (
                        <TableRow key={metric.id}>
                          <TableCell className="font-medium">{metric.name}</TableCell>
                          <TableCell className="text-sm">{metric.project}</TableCell>
                          <TableCell>{getCategoryBadge(metric.category)}</TableCell>
                          <TableCell>{formatValue(metric.target, metric.unit)}</TableCell>
                          <TableCell>{formatValue(metric.current, metric.unit)}</TableCell>
                          <TableCell>{getStatusBadge(metric.status)}</TableCell>
                          <TableCell>
                            <div className={`flex items-center ${
                              metric.trend === 'up' 
                                ? 'text-green-600' 
                                : metric.trend === 'down' 
                                  ? 'text-red-600' 
                                  : 'text-gray-600'
                            }`}>
                              {metric.trend === 'up' && <span>↑</span>}
                              {metric.trend === 'down' && <span>↓</span>}
                              {metric.trend === 'flat' && <span>→</span>}
                              <span className="ml-1">
                                {metric.trend.charAt(0).toUpperCase() + metric.trend.slice(1)}
                              </span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="detail" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 space-y-4">
                  {/* List of metrics to select */}
                  <Card className="h-[500px] overflow-y-auto">
                    <CardHeader>
                      <CardTitle className="text-lg">Metrics</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y">
                        {filteredMetrics.map(metric => (
                          <div 
                            key={metric.id}
                            className={`p-4 cursor-pointer hover:bg-gray-50 ${
                              selectedMetric?.id === metric.id ? 'bg-attune-teal-light' : ''
                            }`}
                            onClick={() => setSelectedMetric(metric)}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{metric.name}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">{metric.description}</p>
                              </div>
                              {getCategoryBadge(metric.category)}
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <div className="text-sm">
                                Current: <span className="font-medium">{formatValue(metric.current, metric.unit)}</span>
                              </div>
                              <div className="text-sm">
                                Target: <span className="font-medium">{formatValue(metric.target, metric.unit)}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="md:col-span-2">
                  {selectedMetric && (
                    <Card>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{selectedMetric.name}</CardTitle>
                            <CardDescription>{selectedMetric.description}</CardDescription>
                          </div>
                          {getStatusBadge(selectedMetric.status)}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="bg-gray-50 p-4 rounded-md">
                            <div className="text-sm text-muted-foreground">Current</div>
                            <div className="text-2xl font-bold">{formatValue(selectedMetric.current, selectedMetric.unit)}</div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-md">
                            <div className="text-sm text-muted-foreground">Target</div>
                            <div className="text-2xl font-bold">{formatValue(selectedMetric.target, selectedMetric.unit)}</div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-md">
                            <div className="text-sm text-muted-foreground">Progress</div>
                            <div className="text-2xl font-bold">
                              {Math.round((selectedMetric.current / selectedMetric.target) * 100)}%
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium mb-2">Performance Over Time</h4>
                          <div className="h-[250px]">
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart
                                data={selectedMetric.data}
                                margin={{
                                  top: 5,
                                  right: 30,
                                  left: 20,
                                  bottom: 5,
                                }}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip 
                                  formatter={(value) => [
                                    formatValue(Number(value), selectedMetric.unit),
                                    selectedMetric.name
                                  ]} 
                                />
                                <Line
                                  type="monotone"
                                  dataKey="value"
                                  name={selectedMetric.name}
                                  stroke="#3b82f6"
                                  activeDot={{ r: 8 }}
                                  strokeWidth={2}
                                />
                                {/* Target line */}
                                <Line
                                  type="monotone"
                                  dataKey={() => selectedMetric.target}
                                  name="Target"
                                  stroke="#d1d5db"
                                  strokeDasharray="5 5"
                                  strokeWidth={2}
                                />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium mb-1">Project</h4>
                            <p>{selectedMetric.project}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium mb-1">Measurement Frequency</h4>
                            <p className="capitalize">{selectedMetric.frequency}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium mb-1">Start Date</h4>
                            <p>{new Date(selectedMetric.startDate).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium mb-1">Last Updated</h4>
                            <p>{new Date().toLocaleDateString()}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="trends" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Metric Trends by Category</CardTitle>
                  <CardDescription>
                    Performance trends across different metric categories
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="date"
                          type="category"
                          allowDuplicatedCategory={false}
                          tickFormatter={(tick) => tick}
                        >
                          {/* Fix: Remove the XAxis.Item usage and let XAxis handle the data */}
                        </XAxis>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        
                        {(['financial', 'engagement', 'adoption', 'satisfaction'] as const).map((category, index) => {
                          const metricsInCategory = metrics.filter(m => m.category === category);
                          if (metricsInCategory.length === 0) return null;
                          
                          // Get aggregated data for each month
                          const data = months.map(month => ({
                            date: month,
                            value: 0
                          }));
                          
                          // Calculate average progress percentage for each month
                          data.forEach((month, i) => {
                            let totalProgress = 0;
                            let metricCount = 0;
                            
                            metricsInCategory.forEach(metric => {
                              const monthData = metric.data.find(d => d.date === month.date);
                              if (monthData) {
                                totalProgress += (monthData.value / metric.target) * 100;
                                metricCount++;
                              }
                            });
                            
                            if (metricCount > 0) {
                              data[i].value = Math.round(totalProgress / metricCount);
                            }
                          });
                          
                          const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];
                          
                          return (
                            <Line
                              key={category}
                              data={data}
                              type="monotone"
                              dataKey="value"
                              name={category.charAt(0).toUpperCase() + category.slice(1)}
                              stroke={colors[index % colors.length]}
                              strokeWidth={2}
                              activeDot={{ r: 8 }}
                              connectNulls
                            />
                          );
                        })}
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-xs text-center mt-2 text-muted-foreground">
                    Values shown as percentage of target achievement
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Target Achievement by Project</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={projects.map(project => {
                            const projectMetrics = metrics.filter(m => m.project === project);
                            const targetAchievement = projectMetrics.reduce((acc, metric) => {
                              return acc + ((metric.current / metric.target) * 100);
                            }, 0) / projectMetrics.length;
                            
                            return {
                              name: project.split(' ').slice(-1)[0], // Shortened name
                              fullName: project,
                              progress: Math.round(targetAchievement)
                            };
                          })}
                          margin={{ top: 5, right: 30, left: 20, bottom: 30 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis 
                            dataKey="name"
                            tick={{ fontSize: 12 }}
                            height={60}
                          />
                          <YAxis 
                            domain={[0, 100]}
                            label={{ value: '% of Target', angle: -90, position: 'insideLeft' }}
                          />
                          <Tooltip 
                            formatter={(value: any) => {
                              return [`${value}%`, 'Target Achievement'];
                            }}
                            labelFormatter={(label: any, items: any) => {
                              return items[0]?.payload?.fullName || label;
                            }}
                          />
                          <Bar dataKey="progress" name="Target Achievement" fill="#3b82f6">
                            {projects.map((project, index) => (
                              <Cell key={`cell-${index}`} fill="#3b82f6" />
                            ))}
                          </Bar>
                          {/* Target line at 100% */}
                          <line x1="0%" y1="100%" x2="100%" y2="100%" stroke="red" strokeDasharray="3 3" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Metrics Status Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={[
                            { name: 'Above Target', value: metrics.filter(m => m.status === 'above-target').length, color: '#3b82f6' },
                            { name: 'On Target', value: metrics.filter(m => m.status === 'on-target').length, color: '#10b981' },
                            { name: 'Below Target', value: metrics.filter(m => m.status === 'below-target').length, color: '#ef4444' }
                          ]}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          layout="vertical"
                        >
                          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                          <XAxis type="number" />
                          <YAxis dataKey="name" type="category" />
                          <Tooltip />
                          <Bar dataKey="value" name="Metrics Count">
                            {[
                              { name: 'Above Target', value: metrics.filter(m => m.status === 'above-target').length, color: '#3b82f6' },
                              { name: 'On Target', value: metrics.filter(m => m.status === 'on-target').length, color: '#10b981' },
                              { name: 'Below Target', value: metrics.filter(m => m.status === 'below-target').length, color: '#ef4444' }
                            ].map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuccessMetrics;
