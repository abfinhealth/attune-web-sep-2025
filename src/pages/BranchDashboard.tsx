
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
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Area, AreaChart } from 'recharts';
import { Button } from '@/components/ui/button';
import { FileText, Download, MapPin } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

// Branch location performance data
const locationPerformanceData = [
  { name: 'Downtown', accounts: 387, assessments: 245, health: 78 },
  { name: 'Westside', accounts: 324, assessments: 186, health: 72 },
  { name: 'Eastgate', accounts: 265, assessments: 142, health: 68 },
  { name: 'Northpark', accounts: 312, assessments: 203, health: 75 },
  { name: 'Southlake', accounts: 278, assessments: 156, health: 70 },
  { name: 'University', accounts: 356, assessments: 228, health: 76 },
];

// In-person interaction outcome data
const interactionOutcomeData = [
  { month: 'Jan', fha: 142, education: 87, products: 65 },
  { month: 'Feb', fha: 158, education: 92, products: 72 },
  { month: 'Mar', fha: 165, education: 105, products: 78 },
  { month: 'Apr', fha: 172, education: 112, products: 84 },
  { month: 'May', fha: 185, education: 118, products: 92 },
  { month: 'Jun', fha: 192, education: 125, products: 97 },
  { month: 'Jul', fha: 205, education: 132, products: 104 },
  { month: 'Aug', fha: 218, education: 145, products: 112 },
  { month: 'Sep', fha: 225, education: 152, products: 118 },
  { month: 'Oct', fha: 236, education: 162, products: 125 },
  { month: 'Nov', fha: 248, education: 172, products: 132 },
  { month: 'Dec', fha: 259, education: 184, products: 145 },
];

// Referral tracking data
const referralData = [
  { source: 'Member Referral', count: 248, rate: 28 },
  { source: 'Staff Referral', count: 186, rate: 42 },
  { source: 'Community Event', count: 142, rate: 24 },
  { source: 'Business Partner', count: 98, rate: 36 },
  { source: 'Financial Education', count: 76, rate: 32 },
];

const chartConfig = {
  accounts: {
    label: 'New Accounts',
    color: '#2B7C7E', // attune-teal
  },
  assessments: {
    label: 'FH Assessments',
    color: '#FDC963', // attune-yellow
  },
  health: {
    label: 'Health Score',
    color: '#F39C50', // attune-orange
  },
  fha: {
    label: 'FH Assessments',
    color: '#2B7C7E', // attune-teal
  },
  education: {
    label: 'Education Sessions',
    color: '#9b87f5', // attune-purple
  },
  products: {
    label: 'Product Enrollments',
    color: '#F39C50', // attune-orange
  },
  count: {
    label: 'Referral Count',
    color: '#2B7C7E', // attune-teal
  },
  rate: {
    label: 'Conversion Rate (%)',
    color: '#F39C50', // attune-orange
  },
};

const BranchDashboard = () => {
  const [period, setPeriod] = useState('quarterly');

  const generateReport = () => {
    toast({
      title: "Branch Report Generated",
      description: "Your branch performance report is ready for download.",
      duration: 3000,
    });
  };

  return (
    <DashboardLayout>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Branch Dashboard</h1>
          <p className="text-gray-600 mt-1">Location performance, interactions and referrals</p>
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
        {/* Location Performance */}
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle>Branch Location Performance</CardTitle>
            <CardDescription>New accounts, assessments completed, and average health score</CardDescription>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="h-[28rem]">
              <ChartContainer config={chartConfig}>
                <BarChart 
                  data={locationPerformanceData} 
                  margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar yAxisId="left" dataKey="accounts" fill="#2B7C7E" />
                  <Bar yAxisId="left" dataKey="assessments" fill="#FDC963" />
                  <Line yAxisId="right" type="monotone" dataKey="health" stroke="#F39C50" strokeWidth={2} />
                  <ChartLegend content={<ChartLegendContent />} />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* In-person Interaction Outcomes */}
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle>In-person Interaction Outcomes</CardTitle>
            <CardDescription>Results from branch staff interactions with members</CardDescription>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="h-[28rem]">
              <ChartContainer config={chartConfig}>
                <AreaChart 
                  data={interactionOutcomeData} 
                  margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="fha" stackId="1" stroke="#2B7C7E" fill="#E2F5F5" />
                  <Area type="monotone" dataKey="education" stackId="1" stroke="#9b87f5" fill="#F2F0FF" />
                  <Area type="monotone" dataKey="products" stackId="1" stroke="#F39C50" fill="#FDF3E9" />
                  <ChartLegend content={<ChartLegendContent />} />
                </AreaChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Referral Tracking */}
      <Card className="p-6 mb-8">
        <CardHeader className="px-0 pt-0">
          <CardTitle>Referral Tracking</CardTitle>
          <CardDescription>Source of member referrals and conversion rates</CardDescription>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <div className="h-[28rem]">
            <ChartContainer config={chartConfig}>
              <BarChart 
                data={referralData} 
                layout="vertical"
                margin={{ top: 20, right: 30, left: 180, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" />
                <YAxis dataKey="source" type="category" width={180} tick={{ fontSize: 12 }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="#2B7C7E" />
                <Bar dataKey="rate" fill="#F39C50" />
                <ChartLegend content={<ChartLegendContent />} />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      {/* Branch Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-l-4 border-attune-teal">
          <h3 className="font-medium text-attune-teal mb-2">Insight</h3>
          <p className="mb-4">Downtown branch financial health assessments increased 22% after staff training refresher.</p>
          <button className="text-attune-teal text-sm font-medium hover:underline">View details →</button>
        </Card>
        
        <Card className="p-6 border-l-4 border-attune-orange">
          <h3 className="font-medium text-attune-orange mb-2">Opportunity</h3>
          <p className="mb-4">Westside branch has lowest FH assessment completion rate despite high foot traffic.</p>
          <button className="text-attune-orange text-sm font-medium hover:underline">Explore solutions →</button>
        </Card>
        
        <Card className="p-6 border-l-4 border-attune-yellow">
          <h3 className="font-medium text-attune-yellow-dark mb-2">Recommendation</h3>
          <p className="mb-4">Implement staff referral incentive program based on successful University branch model.</p>
          <button className="text-attune-yellow-dark text-sm font-medium hover:underline">View implementation plan →</button>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default BranchDashboard;
