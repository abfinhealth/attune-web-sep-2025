
import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from '@/components/ui/chart';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Scatter, ScatterChart, Cell } from 'recharts';
import { Button } from '@/components/ui/button';
import { FileText, Download, Users } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

// Employee financial health trend data
const employeeHealthTrendData = [
  { month: 'Jan', score: 68, benchmark: 62 },
  { month: 'Feb', score: 69, benchmark: 62 },
  { month: 'Mar', score: 71, benchmark: 63 },
  { month: 'Apr', score: 74, benchmark: 63 },
  { month: 'May', score: 76, benchmark: 63 },
  { month: 'Jun', score: 78, benchmark: 64 },
  { month: 'Jul', score: 80, benchmark: 64 },
  { month: 'Aug', score: 81, benchmark: 64 },
  { month: 'Sep', score: 83, benchmark: 65 },
  { month: 'Oct', score: 85, benchmark: 65 },
  { month: 'Nov', score: 86, benchmark: 65 },
  { month: 'Dec', score: 88, benchmark: 66 },
];

// Department comparison data
const departmentComparisonData = [
  { department: 'Executive', score: 92, participation: 100 },
  { department: 'Finance', score: 86, participation: 95 },
  { department: 'Marketing', score: 82, participation: 88 },
  { department: 'IT', score: 80, participation: 78 },
  { department: 'Operations', score: 78, participation: 82 },
  { department: 'Branch Staff', score: 75, participation: 76 },
  { department: 'Member Services', score: 72, participation: 90 },
  { department: 'Lending', score: 74, participation: 85 },
];

// Engagement correlation data
const engagementCorrelationData = [
  { department: 'Executive', engagement: 92, health: 92, staff: 6 },
  { department: 'Finance', engagement: 86, health: 86, staff: 12 },
  { department: 'Marketing', engagement: 84, health: 82, staff: 18 },
  { department: 'IT', engagement: 76, health: 80, staff: 24 },
  { department: 'Operations', engagement: 74, health: 78, staff: 32 },
  { department: 'Branch Staff', engagement: 72, health: 75, staff: 85 },
  { department: 'Member Services', engagement: 82, health: 72, staff: 46 },
  { department: 'Lending', engagement: 78, health: 74, staff: 28 },
];

const chartConfig = {
  score: {
    label: 'Employee FH Score',
    color: '#2B7C7E', // attune-teal
  },
  benchmark: {
    label: 'Member Benchmark',
    color: '#8E9196', // neutral gray
  },
  participation: {
    label: 'Participation Rate (%)',
    color: '#F39C50', // attune-orange
  },
  engagement: {
    label: 'Engagement Score',
    color: '#FDC963', // attune-yellow
  },
  health: {
    label: 'Financial Health',
    color: '#2B7C7E', // attune-teal
  },
};

const HRDashboard = () => {
  const [period, setPeriod] = useState('quarterly');

  const generateReport = () => {
    toast({
      title: "HR Report Generated",
      description: "Your employee financial health report is ready for download.",
      duration: 3000,
    });
  };

  return (
    <DashboardLayout>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">HR Dashboard</h1>
          <p className="text-gray-600 mt-1">Employee financial health and engagement metrics</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={generateReport}
          >
            <FileText size={16} />
            <span className="hidden sm:inline">Generate Report</span>
          </Button>
          <Button 
            variant="default" 
            className="flex items-center gap-2 bg-attune-teal hover:bg-attune-teal/90"
            onClick={generateReport}
          >
            <Download size={16} />
            <span className="hidden sm:inline">Export Data</span>
          </Button>
        </div>
      </div>

      {/* Time period selector */}
      <div className="flex justify-end items-center mb-4">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => setPeriod('quarterly')}
            className={`px-4 py-2 text-sm font-medium rounded-l-md ${
              period === 'quarterly'
                ? 'bg-attune-teal text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } border border-gray-300`}
          >
            Quarterly
          </button>
          <button
            onClick={() => setPeriod('annual')}
            className={`px-4 py-2 text-sm font-medium rounded-r-md ${
              period === 'annual'
                ? 'bg-attune-teal text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } border border-t border-r border-b border-gray-300`}
          >
            Annual
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Employee Financial Health Trends */}
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle>Employee Financial Health Trend</CardTitle>
            <CardDescription>Average employee score compared to member benchmark</CardDescription>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="h-[28rem]">
              <ChartContainer config={chartConfig}>
                <LineChart 
                  data={employeeHealthTrendData} 
                  margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis domain={[50, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="score" stroke="#2B7C7E" strokeWidth={2} />
                  <Line type="monotone" dataKey="benchmark" stroke="#8E9196" strokeDasharray="3 3" />
                  <ChartLegend content={<ChartLegendContent />} />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Department Comparison */}
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle>Department Comparison</CardTitle>
            <CardDescription>Financial health scores and program participation by department</CardDescription>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="h-[28rem]">
              <ChartContainer config={chartConfig}>
                <BarChart 
                  data={departmentComparisonData.slice().sort((a, b) => a.score - b.score)} 
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 150, bottom: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="department" type="category" width={150} tick={{ fontSize: 12 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="score" fill="#2B7C7E" />
                  <Bar dataKey="participation" fill="#F39C50" />
                  <ChartLegend content={<ChartLegendContent />} />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Engagement Correlation */}
      <Card className="p-6 mb-8">
        <CardHeader className="px-0 pt-0">
          <CardTitle>Engagement & Financial Health Correlation</CardTitle>
          <CardDescription>Relationship between employee engagement and financial health scores</CardDescription>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <div className="h-[28rem]">
            <ChartContainer config={chartConfig}>
              <ScatterChart
                margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="engagement" name="Engagement Score" domain={[70, 95]} />
                <YAxis type="number" dataKey="health" name="Financial Health" domain={[70, 95]} />
                <ChartTooltip cursor={{ strokeDasharray: '3 3' }} content={<ChartTooltipContent />} />
                <Scatter name="Departments" data={engagementCorrelationData}>
                  {engagementCorrelationData.map((entry, index) => {
                    // Size is proportional to staff count
                    const size = Math.max(40, Math.min(100, entry.staff * 2));
                    return (
                      <Cell 
                        key={`cell-${index}`} 
                        fill="#2B7C7E" 
                        opacity={0.7} 
                        r={Math.sqrt(size / Math.PI)}
                      />
                    );
                  })}
                </Scatter>
              </ScatterChart>
            </ChartContainer>
          </div>
          <div className="flex items-center justify-center mt-2">
            <div className="text-xs text-gray-500">Circle size represents department headcount</div>
          </div>
        </CardContent>
      </Card>

      {/* HR Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-l-4 border-attune-teal">
          <h3 className="font-medium text-attune-teal mb-2">Insight</h3>
          <p className="mb-4">Departments with 85%+ program participation show 18% higher financial health scores.</p>
          <button className="text-attune-teal text-sm font-medium hover:underline">View details →</button>
        </Card>
        
        <Card className="p-6 border-l-4 border-attune-orange">
          <h3 className="font-medium text-attune-orange mb-2">Opportunity</h3>
          <p className="mb-4">Branch staff have lowest financial health scores but high potential for improvement.</p>
          <button className="text-attune-orange text-sm font-medium hover:underline">Explore solutions →</button>
        </Card>
        
        <Card className="p-6 border-l-4 border-attune-yellow">
          <h3 className="font-medium text-attune-yellow-dark mb-2">Recommendation</h3>
          <p className="mb-4">Implement targeted emergency savings program for operations and member services teams.</p>
          <button className="text-attune-yellow-dark text-sm font-medium hover:underline">View implementation plan →</button>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default HRDashboard;
