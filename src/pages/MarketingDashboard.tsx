
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
import { FileText, Download, TrendingUp } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const campaignData = [
  { name: 'Email', awareness: 82, engagement: 43, conversion: 28 },
  { name: 'Social', awareness: 68, engagement: 52, conversion: 34 },
  { name: 'Branch', awareness: 53, engagement: 42, conversion: 38 },
  { name: 'Direct Mail', awareness: 47, engagement: 35, conversion: 22 },
  { name: 'Community', awareness: 42, engagement: 32, conversion: 18 },
  { name: 'Digital Ads', awareness: 58, engagement: 48, conversion: 31 },
];

const acquisitionTrendData = [
  { month: 'Jan', organic: 156, paid: 124, referral: 78 },
  { month: 'Feb', organic: 168, paid: 132, referral: 83 },
  { month: 'Mar', organic: 175, paid: 145, referral: 87 },
  { month: 'Apr', organic: 184, paid: 157, referral: 95 },
  { month: 'May', organic: 196, paid: 163, referral: 104 },
  { month: 'Jun', organic: 208, paid: 175, referral: 112 },
  { month: 'Jul', organic: 223, paid: 188, referral: 125 },
  { month: 'Aug', organic: 231, paid: 195, referral: 138 },
  { month: 'Sep', organic: 248, paid: 207, referral: 152 },
  { month: 'Oct', organic: 267, paid: 218, referral: 163 },
  { month: 'Nov', organic: 285, paid: 225, referral: 172 },
  { month: 'Dec', organic: 296, paid: 235, referral: 185 },
];

const valuePropositionData = [
  { proposition: 'Financial Security', resonance: 87, engagement: 65, conv: 48 },
  { proposition: 'Build Wealth', resonance: 76, engagement: 58, conv: 42 },
  { proposition: 'Peace of Mind', resonance: 92, engagement: 72, conv: 53 },
  { proposition: 'Family Support', resonance: 85, engagement: 68, conv: 49 },
  { proposition: 'Community Impact', resonance: 71, engagement: 54, conv: 38 },
];

const chartConfig = {
  awareness: {
    label: 'Awareness',
    color: '#2B7C7E', // attune-teal
  },
  engagement: {
    label: 'Engagement',
    color: '#FDC963', // attune-yellow
  },
  conversion: {
    label: 'Conversion',
    color: '#F39C50', // attune-orange
  },
  organic: {
    label: 'Organic',
    color: '#2B7C7E', // attune-teal
  },
  paid: {
    label: 'Paid',
    color: '#F39C50', // attune-orange
  },
  referral: {
    label: 'Referral',
    color: '#9b87f5', // attune-purple
  },
  resonance: {
    label: 'Message Resonance',
    color: '#2B7C7E', // attune-teal
  },
  conv: {
    label: 'Conversion Rate',
    color: '#F39C50', // attune-orange
  }
};

const MarketingDashboard = () => {
  const [period, setPeriod] = useState('quarterly');

  const generateReport = () => {
    toast({
      title: "Marketing Report Generated",
      description: "Your marketing performance report is ready for download.",
      duration: 3000,
    });
  };

  return (
    <DashboardLayout>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Marketing Dashboard</h1>
          <p className="text-gray-600 mt-1">Campaign performance and member acquisition metrics</p>
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
        {/* Campaign Performance */}
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle>Campaign Performance</CardTitle>
            <CardDescription>Performance metrics across marketing channels</CardDescription>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="h-[28rem]">
              <ChartContainer config={chartConfig}>
                <BarChart 
                  data={campaignData} 
                  margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} angle={0} textAnchor="middle" height={40} />
                  <YAxis domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="awareness" fill="#2B7C7E" />
                  <Bar dataKey="engagement" fill="#FDC963" />
                  <Bar dataKey="conversion" fill="#F39C50" />
                  <ChartLegend content={<ChartLegendContent />} />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Acquisition Trends */}
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle>Acquisition Trends</CardTitle>
            <CardDescription>Member acquisition by source over time</CardDescription>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="h-[28rem]">
              <ChartContainer config={chartConfig}>
                <AreaChart 
                  data={acquisitionTrendData} 
                  margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="organic" stackId="1" stroke="#2B7C7E" fill="#E2F5F5" />
                  <Area type="monotone" dataKey="paid" stackId="1" stroke="#F39C50" fill="#FDF3E9" />
                  <Area type="monotone" dataKey="referral" stackId="1" stroke="#9b87f5" fill="#F2F0FF" />
                  <ChartLegend content={<ChartLegendContent />} />
                </AreaChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Value Proposition Effectiveness */}
      <Card className="p-6 mb-8">
        <CardHeader className="px-0 pt-0">
          <CardTitle>Value Proposition Effectiveness</CardTitle>
          <CardDescription>How different value propositions resonate with members</CardDescription>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <div className="h-[28rem]">
            <ChartContainer config={chartConfig}>
              <BarChart 
                data={valuePropositionData} 
                layout="vertical"
                margin={{ top: 20, right: 30, left: 180, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="proposition" type="category" width={180} tick={{ fontSize: 12 }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="resonance" fill="#2B7C7E" />
                <Bar dataKey="engagement" fill="#FDC963" />
                <Bar dataKey="conv" fill="#F39C50" />
                <ChartLegend content={<ChartLegendContent />} />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      {/* Marketing Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-l-4 border-attune-teal">
          <h3 className="font-medium text-attune-teal mb-2">Insight</h3>
          <p className="mb-4">Community events lead to 28% higher financial health assessment completion rates.</p>
          <button className="text-attune-teal text-sm font-medium hover:underline">View details →</button>
        </Card>
        
        <Card className="p-6 border-l-4 border-attune-orange">
          <h3 className="font-medium text-attune-orange mb-2">Opportunity</h3>
          <p className="mb-4">"Peace of Mind" messaging resonates strongly but conversion is below benchmark.</p>
          <button className="text-attune-orange text-sm font-medium hover:underline">Explore optimizations →</button>
        </Card>
        
        <Card className="p-6 border-l-4 border-attune-yellow">
          <h3 className="font-medium text-attune-yellow-dark mb-2">Recommendation</h3>
          <p className="mb-4">Increase social media spend by 15% based on superior engagement to conversion ratio.</p>
          <button className="text-attune-yellow-dark text-sm font-medium hover:underline">View analysis →</button>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MarketingDashboard;
