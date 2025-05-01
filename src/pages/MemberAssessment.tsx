
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, Cell, PieChart, Pie, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ArrowUpRight, Search, Download } from 'lucide-react';

const assessmentData = {
  overview: {
    totalSent: 25000,
    completed: 18632,
    completionRate: 74.5,
    averageScore: 72,
    scoreTrend: 5.2
  },
  demographics: [
    { age: '18-24', count: 1245, avgScore: 62 },
    { age: '25-34', count: 4320, avgScore: 68 },
    { age: '35-44', count: 5630, avgScore: 73 },
    { age: '45-54', count: 4105, avgScore: 76 },
    { age: '55-64', count: 2130, avgScore: 81 },
    { age: '65+', count: 1202, avgScore: 79 },
  ],
  components: [
    { name: 'Spend', score: 74, benchmark: 68 },
    { name: 'Save', score: 65, benchmark: 62 },
    { name: 'Borrow', score: 79, benchmark: 71 },
    { name: 'Plan', score: 68, benchmark: 64 }
  ],
  trends: [
    { month: 'Jan', score: 65, benchmark: 62 },
    { month: 'Feb', score: 67, benchmark: 62 },
    { month: 'Mar', score: 68, benchmark: 63 },
    { month: 'Apr', score: 71, benchmark: 63 },
    { month: 'May', score: 73, benchmark: 63 },
    { month: 'Jun', score: 76, benchmark: 64 },
    { month: 'Jul', score: 78, benchmark: 64 },
    { month: 'Aug', score: 79, benchmark: 64 },
    { month: 'Sep', score: 82, benchmark: 65 },
    { month: 'Oct', score: 83, benchmark: 65 },
    { month: 'Nov', score: 85, benchmark: 65 },
    { month: 'Dec', score: 87, benchmark: 66 },
  ],
  recentResponses: [
    { id: 'M-7814', date: '2025-04-30', score: 82, segment: 'Healthy', products: 4 },
    { id: 'M-7813', date: '2025-04-30', score: 63, segment: 'Coping', products: 2 },
    { id: 'M-7812', date: '2025-04-29', score: 45, segment: 'Vulnerable', products: 1 },
    { id: 'M-7811', date: '2025-04-29', score: 78, segment: 'Healthy', products: 3 },
    { id: 'M-7810', date: '2025-04-29', score: 71, segment: 'Coping', products: 2 },
    { id: 'M-7809', date: '2025-04-28', score: 59, segment: 'Coping', products: 2 },
    { id: 'M-7808', date: '2025-04-28', score: 88, segment: 'Healthy', products: 5 },
    { id: 'M-7807', date: '2025-04-28', score: 42, segment: 'Vulnerable', products: 1 },
    { id: 'M-7806', date: '2025-04-27', score: 76, segment: 'Healthy', products: 3 },
    { id: 'M-7805', date: '2025-04-27', score: 68, segment: 'Coping', products: 2 },
  ]
};

// Helper function to determine segment color
const getSegmentColor = (segment: string) => {
  switch(segment) {
    case 'Healthy': return '#2B7C7E';
    case 'Coping': return '#FDC963';
    case 'Vulnerable': return '#F39C50';
    default: return '#8E9196';
  }
};

// Helper function to determine score color
const getScoreColor = (score: number) => {
  if (score >= 80) return 'text-attune-teal';
  if (score >= 60) return 'text-attune-yellow-dark';
  return 'text-attune-orange';
};

const MemberAssessment = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Member Financial Health Assessment</h1>
        <p className="text-gray-600 mt-1">Analysis and insights from member financial health assessments</p>
      </div>

      <Tabs defaultValue="overview" className="mb-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="responses">Responses</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="segments">Segments</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6">
          {/* Overview Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <Card className="p-6">
              <p className="text-sm font-medium text-gray-500">Total Assessments Sent</p>
              <p className="text-2xl font-bold mt-1">{assessmentData.overview.totalSent.toLocaleString()}</p>
            </Card>
            
            <Card className="p-6">
              <p className="text-sm font-medium text-gray-500">Completed Assessments</p>
              <p className="text-2xl font-bold mt-1">{assessmentData.overview.completed.toLocaleString()}</p>
              <p className="mt-2 text-sm text-gray-600">{assessmentData.overview.completionRate}% completion rate</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Average Score</p>
                  <p className="text-2xl font-bold mt-1">{assessmentData.overview.averageScore}/100</p>
                </div>
                <div className="flex items-center text-green-500">
                  <ArrowUpRight size={16} className="mr-1" />
                  <span className="text-sm font-medium">{assessmentData.overview.scoreTrend}%</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <p className="text-sm font-medium text-gray-500">Highest Component</p>
              <p className="text-2xl font-bold mt-1">Borrow</p>
              <p className="mt-2 text-sm text-gray-600">Score: 79/100</p>
            </Card>
            
            <Card className="p-6">
              <p className="text-sm font-medium text-gray-500">Lowest Component</p>
              <p className="text-2xl font-bold mt-1">Save</p>
              <p className="mt-2 text-sm text-gray-600">Score: 65/100</p>
            </Card>
          </div>

          {/* Component Scores Chart */}
          <Card className="p-6 mb-8">
            <h3 className="text-lg font-medium mb-4">Financial Health Components</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={assessmentData.components}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar name="Score" dataKey="score" fill="#2B7C7E" />
                  <Bar name="Benchmark" dataKey="benchmark" fill="#8E9196" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Demographics and Recent Responses */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Demographics</h3>
                <button className="text-attune-teal text-sm font-medium hover:underline">View all</button>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Age Group</TableHead>
                      <TableHead>Count</TableHead>
                      <TableHead>Avg Score</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {assessmentData.demographics.map((item) => (
                      <TableRow key={item.age}>
                        <TableCell className="font-medium">{item.age}</TableCell>
                        <TableCell>{item.count.toLocaleString()}</TableCell>
                        <TableCell className={getScoreColor(item.avgScore)}>{item.avgScore}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Recent Responses</h3>
                <button className="text-attune-teal text-sm font-medium hover:underline">View all</button>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Segment</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {assessmentData.recentResponses.slice(0, 5).map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell className={getScoreColor(item.score)}>{item.score}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <div className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: getSegmentColor(item.segment) }}></div>
                            {item.segment}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="responses" className="mt-6">
          <Card className="p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium">All Responses</h3>
              
              <div className="flex space-x-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search responses..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-attune-teal focus:border-attune-teal"
                  />
                </div>
                
                <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  <Download size={16} className="mr-2" />
                  Export
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Segment</TableHead>
                    <TableHead>Products</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assessmentData.recentResponses.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.id}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell className={getScoreColor(item.score)}>{item.score}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <div className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: getSegmentColor(item.segment) }}></div>
                          {item.segment}
                        </div>
                      </TableCell>
                      <TableCell>{item.products}</TableCell>
                      <TableCell>
                        <button className="text-attune-teal hover:underline">View details</button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-gray-500">Showing 1-10 of 18,632 responses</p>
              <div className="flex space-x-1">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm" disabled>Previous</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-attune-teal text-white">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">2</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">3</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">...</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">1864</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">Next</button>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="trends" className="mt-6">
          <Card className="p-6 mb-6">
            <h3 className="text-lg font-medium mb-4">Score Trends Over Time</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={assessmentData.trends}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis domain={[50, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar name="Score" dataKey="score" fill="#2B7C7E" />
                  <Bar name="Benchmark" dataKey="benchmark" fill="#8E9196" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Component Trends</h3>
              <p className="mb-6 text-sm text-gray-500">How individual financial health components have changed over time.</p>
              <button className="w-full py-2 bg-attune-teal text-white rounded-md hover:bg-attune-teal-dark">View Component Analysis</button>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4">Segment Migration</h3>
              <p className="mb-6 text-sm text-gray-500">Track how members move between financial health segments over time.</p>
              <button className="w-full py-2 bg-attune-teal text-white rounded-md hover:bg-attune-teal-dark">View Segment Migration</button>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="segments" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 border-l-4 border-attune-teal">
              <h3 className="text-lg font-medium mb-2">Financially Healthy</h3>
              <p className="text-3xl font-bold">32%</p>
              <p className="mt-4 text-sm text-gray-600">Members who are spending, saving, borrowing, and planning in a way that will enable them to be resilient and pursue opportunities over time.</p>
              <button className="mt-4 text-attune-teal text-sm font-medium hover:underline">View segment details →</button>
            </Card>
            
            <Card className="p-6 border-l-4 border-attune-yellow">
              <h3 className="text-lg font-medium mb-2">Financially Coping</h3>
              <p className="text-3xl font-bold">45%</p>
              <p className="mt-4 text-sm text-gray-600">Members who are struggling with some, but not necessarily all, aspects of their financial lives.</p>
              <button className="mt-4 text-attune-yellow-dark text-sm font-medium hover:underline">View segment details →</button>
            </Card>
            
            <Card className="p-6 border-l-4 border-attune-orange">
              <h3 className="text-lg font-medium mb-2">Financially Vulnerable</h3>
              <p className="text-3xl font-bold">23%</p>
              <p className="mt-4 text-sm text-gray-600">Members who are struggling with most or all aspects of their financial lives.</p>
              <button className="mt-4 text-attune-orange text-sm font-medium hover:underline">View segment details →</button>
            </Card>
          </div>
          
          <Card className="p-6 mb-8">
            <h3 className="text-lg font-medium mb-4">Segment Distribution</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Healthy', value: 32, color: '#2B7C7E' },
                      { name: 'Coping', value: 45, color: '#FDC963' },
                      { name: 'Vulnerable', value: 23, color: '#F39C50' },
                    ]}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {([
                      { name: 'Healthy', value: 32, color: '#2B7C7E' },
                      { name: 'Coping', value: 45, color: '#FDC963' },
                      { name: 'Vulnerable', value: 23, color: '#F39C50' },
                    ]).map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Segment Profiles</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Metric</TableHead>
                    <TableHead>Healthy (32%)</TableHead>
                    <TableHead>Coping (45%)</TableHead>
                    <TableHead>Vulnerable (23%)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Avg. Products</TableCell>
                    <TableCell>4.2</TableCell>
                    <TableCell>2.8</TableCell>
                    <TableCell>1.5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Avg. Balance</TableCell>
                    <TableCell>$28,450</TableCell>
                    <TableCell>$9,820</TableCell>
                    <TableCell>$1,250</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Spend Score</TableCell>
                    <TableCell className="text-attune-teal">84</TableCell>
                    <TableCell className="text-attune-yellow-dark">72</TableCell>
                    <TableCell className="text-attune-orange">56</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Save Score</TableCell>
                    <TableCell className="text-attune-teal">82</TableCell>
                    <TableCell className="text-attune-yellow-dark">61</TableCell>
                    <TableCell className="text-attune-orange">42</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Borrow Score</TableCell>
                    <TableCell className="text-attune-teal">86</TableCell>
                    <TableCell className="text-attune-yellow-dark">74</TableCell>
                    <TableCell className="text-attune-orange">58</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Plan Score</TableCell>
                    <TableCell className="text-attune-teal">80</TableCell>
                    <TableCell className="text-attune-yellow-dark">65</TableCell>
                    <TableCell className="text-attune-orange">48</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default MemberAssessment;
