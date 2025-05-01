import { useState } from 'react';
import { Cell } from 'recharts';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from '@/components/ui/chart';
import { AreaChart, Area, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, TrendingUp, User, Users, FileText, Download, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const financialHealthData = [
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
];

const segmentData = [
  { name: 'Financially Healthy', value: 32 },
  { name: 'Financially Coping', value: 45 },
  { name: 'Financially Vulnerable', value: 23 },
];

const productAdoptionData = [
  { name: 'Checking', healthy: 92, coping: 78, vulnerable: 62 },
  { name: 'Savings', healthy: 87, coping: 65, vulnerable: 34 },
  { name: 'Credit Card', healthy: 74, coping: 58, vulnerable: 32 },
  { name: 'Auto Loan', healthy: 65, coping: 42, vulnerable: 28 },
  { name: 'Mortgage', healthy: 48, coping: 30, vulnerable: 12 },
  { name: 'Investment', healthy: 42, coping: 18, vulnerable: 5 },
];

// New data for goal tracking
const strategicGoalsData = [
  { name: 'Member Financial Health Score', current: 87, target: 90, category: 'Mission' },
  { name: 'Product Adoption Rate', current: 68, target: 75, category: 'Margin' },
  { name: 'Member Retention', current: 94, target: 96, category: 'Margin' },
  { name: 'Financial Education', current: 62, target: 80, category: 'Mission' },
  { name: 'Emergency Savings Rate', current: 56, target: 70, category: 'Mission' },
  { name: 'Cross-Sell Ratio', current: 2.8, target: 3.5, category: 'Margin' },
];

const chartConfig = {
  score: {
    label: 'Financial Health Score',
    color: '#2B7C7E', // attune-teal
  },
  benchmark: {
    label: 'Industry Benchmark',
    color: '#8E9196', // neutral gray
  },
  healthy: {
    label: 'Financially Healthy',
    color: '#2B7C7E', // attune-teal
  },
  coping: {
    label: 'Financially Coping',
    color: '#FDC963', // attune-yellow
  },
  vulnerable: {
    label: 'Financially Vulnerable',
    color: '#F39C50', // attune-orange
  },
  target: {
    label: 'Target',
    color: '#9b87f5', // attune-purple
  },
  current: {
    label: 'Current',
    color: '#2B7C7E', // attune-teal
  },
};

const Dashboard = () => {
  const [period, setPeriod] = useState('annual');
  const [reportType, setReportType] = useState('executive');
  const [showGoals, setShowGoals] = useState(true);

  const totalMembers = 24875;
  const completedAssessments = 18632;
  const averageScore = financialHealthData[financialHealthData.length - 1].score;
  const scoreTrend = averageScore - financialHealthData[0].score;

  const generateReport = (type: string) => {
    // In a real implementation, this would generate and download a report
    toast({
      title: "Report Generated",
      description: `Your ${type} report is ready for download.`,
      duration: 3000,
    });
  };
  
  return (
    <DashboardLayout>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Executive Dashboard</h1>
          <p className="text-gray-600 mt-1">Overview of your credit union's financial health metrics</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => generateReport(reportType)}
          >
            <FileText size={16} />
            <span className="hidden sm:inline">Generate Report</span>
          </Button>
          <Button 
            variant="default" 
            className="flex items-center gap-2 bg-attune-teal hover:bg-attune-teal/90"
            onClick={() => generateReport(reportType)}
          >
            <Download size={16} />
            <span className="hidden sm:inline">Export Board Deck</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Key metric cards */}
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Average Financial Health Score</p>
              <p className="text-2xl font-bold mt-1">{averageScore}/100</p>
            </div>
            <div className={`flex items-center ${scoreTrend >= 0 ? 'text-green-500' : 'text-red-500'} mt-1`}>
              {scoreTrend >= 0 ? (
                <ArrowUpRight size={20} className="mr-1" />
              ) : (
                <ArrowDownRight size={20} className="mr-1" />  
              )}
              <span className="text-sm font-medium">{Math.abs(scoreTrend)}%</span>
            </div>
          </div>
          <div className="mt-4 h-12">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={financialHealthData.slice(-6)} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                <Line type="monotone" dataKey="score" stroke="#2B7C7E" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Members</p>
              <p className="text-2xl font-bold mt-1">{totalMembers.toLocaleString()}</p>
            </div>
            <div className="bg-attune-teal-light p-2 rounded-full">
              <Users size={20} className="text-attune-teal" />
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600">Active across all channels</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Completed Assessments</p>
              <p className="text-2xl font-bold mt-1">{completedAssessments.toLocaleString()}</p>
            </div>
            <div className="bg-attune-orange-light p-2 rounded-full">
              <User size={20} className="text-attune-orange" />
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600">{((completedAssessments/totalMembers)*100).toFixed(1)}% of membership</p>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Financially Healthy</p>
              <p className="text-2xl font-bold mt-1">{segmentData[0].value}%</p>
            </div>
            <div className="bg-attune-teal-light p-2 rounded-full">
              <TrendingUp size={20} className="text-attune-teal" />
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600">+3% from last quarter</p>
        </Card>
      </div>

      {/* Time period selector */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Button 
            variant={showGoals ? "default" : "outline"}
            size="sm"
            className={showGoals ? "bg-attune-teal text-white" : ""}
            onClick={() => setShowGoals(true)}
          >
            <Target size={16} className="mr-2" />
            Strategic Goals
          </Button>
          <Button 
            variant={!showGoals ? "default" : "outline"}
            size="sm"
            className={!showGoals ? "bg-attune-teal text-white" : "ml-2"}
            onClick={() => setShowGoals(false)}
          >
            <TrendingUp size={16} className="mr-2" />
            Trend Analysis
          </Button>
        </div>
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

      {/* Strategic Goal Tracking */}
      {showGoals ? (
        <Card className="mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Strategic Goal Tracking</CardTitle>
            <p className="text-sm text-gray-500">Progress towards 2025 Financial Health Objectives</p>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <ChartContainer config={chartConfig}>
                <BarChart
                  layout="vertical"
                  data={strategicGoalsData}
                  margin={{ top: 20, right: 30, left: 120, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis 
                    type="category" 
                    dataKey="name" 
                    width={120} 
                    tick={{ fontSize: 12 }} 
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="current" name="Current" barSize={20} fill="#2B7C7E">
                    {strategicGoalsData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.category === 'Mission' ? '#2B7C7E' : '#9b87f5'} 
                      />
                    ))}
                  </Bar>
                  <Bar dataKey="target" name="Target" barSize={20} fill="#8E9196" strokeDasharray="3 3" stroke="#8E9196" fillOpacity={0.2} />
                  <ChartLegend content={<ChartLegendContent />} />
                </BarChart>
              </ChartContainer>
            </div>
            <div className="flex items-center justify-center mt-4 gap-6">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-sm bg-attune-teal mr-2"></div>
                <span className="text-sm font-medium">Mission Metrics</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-sm bg-[#9b87f5] mr-2"></div>
                <span className="text-sm font-medium">Margin Metrics</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 border-2 border-dashed border-gray-400 rounded-sm bg-transparent mr-2"></div>
                <span className="text-sm font-medium">Target</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Financial Health Trend */}
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Financial Health Trend</h3>
            <div className="h-80">
              <ChartContainer config={chartConfig}>
                <AreaChart data={financialHealthData} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis domain={[50, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="score" stackId="1" stroke="#2B7C7E" fill="#E2F5F5" />
                  <Area type="monotone" dataKey="benchmark" stackId="2" stroke="#8E9196" fill="#F9F9F9" strokeDasharray="3 3" />
                  <ChartLegend content={<ChartLegendContent />} />
                </AreaChart>
              </ChartContainer>
            </div>
          </Card>

          {/* Segment Breakdown */}
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Financial Health Segments</h3>
            <div className="h-80">
              <ChartContainer config={chartConfig}>
                <BarChart data={segmentData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis type="category" dataKey="name" width={150} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="value" barSize={30}>
                    {segmentData.map((entry, index) => {
                      const colors = ['#2B7C7E', '#FDC963', '#F39C50'];
                      return <Cell key={`cell-${index}`} fill={colors[index]} />;
                    })}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </div>
          </Card>
        </div>
      )}

      {/* Product adoption by segment */}
      <Card className="p-6 mb-8">
        {/* Product adoption by segment */}
        <h3 className="text-lg font-medium mb-4">Product Adoption by Segment (%)</h3>
        <div className="h-96">
          <ChartContainer config={chartConfig}>
            <BarChart
              data={productAdoptionData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="healthy" stackId="a" fill="#2B7C7E" />
              <Bar dataKey="coping" stackId="a" fill="#FDC963" />
              <Bar dataKey="vulnerable" stackId="a" fill="#F39C50" />
              <ChartLegend content={<ChartLegendContent />} />
            </BarChart>
          </ChartContainer>
        </div>
      </Card>

      {/* Board Report Templates */}
      <Card className="p-6 mb-8">
        <h3 className="text-lg font-medium mb-4">Board-Ready Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer" onClick={() => generateReport('executive')}>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium">Executive Summary</h4>
              <FileText size={20} className="text-attune-teal" />
            </div>
            <p className="text-sm text-gray-600 mb-6">High-level overview of key performance metrics and financial health trends.</p>
            <Button variant="outline" size="sm" className="w-full" onClick={() => generateReport('executive')}>
              Generate Report
            </Button>
          </div>
          
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer" onClick={() => generateReport('strategic')}>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium">Strategic Goals</h4>
              <Target size={20} className="text-attune-purple" />
            </div>
            <p className="text-sm text-gray-600 mb-6">Detailed progress against strategic financial health objectives and targets.</p>
            <Button variant="outline" size="sm" className="w-full" onClick={() => generateReport('strategic')}>
              Generate Report
            </Button>
          </div>
          
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer" onClick={() => generateReport('segment')}>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium">Segment Analysis</h4>
              <Users size={20} className="text-attune-orange" />
            </div>
            <p className="text-sm text-gray-600 mb-6">Detailed breakdown of member segments and their financial health patterns.</p>
            <Button variant="outline" size="sm" className="w-full" onClick={() => generateReport('segment')}>
              Generate Report
            </Button>
          </div>
        </div>
      </Card>

      {/* Recommendations and insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 border-l-4 border-attune-teal">
          <h3 className="font-medium text-attune-teal mb-2">Insight</h3>
          <p className="mb-4">Members with high financial health scores are 2.8x more likely to adopt multiple products.</p>
          <button className="text-attune-teal text-sm font-medium hover:underline">View detailed analysis →</button>
        </Card>
        
        <Card className="p-6 border-l-4 border-attune-orange">
          <h3 className="font-medium text-attune-orange mb-2">Opportunity</h3>
          <p className="mb-4">Financially coping members show interest in budgeting tools but have low adoption rates.</p>
          <button className="text-attune-orange text-sm font-medium hover:underline">Explore solutions →</button>
        </Card>
        
        <Card className="p-6 border-l-4 border-attune-yellow">
          <h3 className="font-medium text-attune-yellow-dark mb-2">Recommendation</h3>
          <p className="mb-4">Target emergency savings products to vulnerable members to improve resilience scores.</p>
          <button className="text-attune-yellow-dark text-sm font-medium hover:underline">View playbook →</button>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
