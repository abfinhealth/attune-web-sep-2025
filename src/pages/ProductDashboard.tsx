
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
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Cell, PieChart, Pie } from 'recharts';
import { Button } from '@/components/ui/button';
import { FileText, Download, TrendingUp } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

// Product adoption rate data
const adoptionRateData = [
  { name: 'Checking', current: 92, target: 95 },
  { name: 'Savings', current: 68, target: 75 },
  { name: 'Credit Card', current: 47, target: 55 },
  { name: 'Auto Loan', current: 28, target: 35 },
  { name: 'Mortgage', current: 22, target: 30 },
  { name: 'Investment', current: 18, target: 25 },
  { name: 'Insurance', current: 15, target: 20 },
  { name: 'Financial Planning', current: 12, target: 20 },
];

// Usage patterns data
const usagePatternData = [
  { category: 'Digital Banking', daily: 68, weekly: 24, monthly: 8 },
  { category: 'Mobile App', daily: 54, weekly: 32, monthly: 14 },
  { category: 'Bill Pay', daily: 12, weekly: 45, monthly: 43 },
  { category: 'P2P Transfer', daily: 28, weekly: 42, monthly: 30 },
  { category: 'Budget Tools', daily: 22, weekly: 38, monthly: 40 },
  { category: 'Alerts', daily: 65, weekly: 25, monthly: 10 },
];

// Financial health improvements by product
const healthImprovementData = [
  { product: 'Emergency Savings', score: 22 },
  { product: 'Debt Management', score: 18 },
  { product: 'Retirement Planning', score: 15 },
  { product: 'Credit Builder', score: 12 },
  { product: 'Auto-Save', score: 10 },
  { product: 'Financial Education', score: 8 },
];

const COLORS = ['#2B7C7E', '#3D9CA0', '#5FBEC1', '#8DD3D5', '#B8E4E6', '#E2F5F5'];

const chartConfig = {
  current: {
    label: 'Current',
    color: '#2B7C7E', // attune-teal
  },
  target: {
    label: 'Target',
    color: '#8E9196', // neutral gray
  },
  daily: {
    label: 'Daily',
    color: '#2B7C7E', // attune-teal
  },
  weekly: {
    label: 'Weekly',
    color: '#FDC963', // attune-yellow
  },
  monthly: {
    label: 'Monthly',
    color: '#F39C50', // attune-orange
  },
};

const ProductDashboard = () => {
  const [period, setPeriod] = useState('quarterly');

  const generateReport = () => {
    toast({
      title: "Product Report Generated",
      description: "Your product performance report is ready for download.",
      duration: 3000,
    });
  };

  return (
    <DashboardLayout>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Product Dashboard</h1>
          <p className="text-gray-600 mt-1">Adoption, usage patterns and financial health impact</p>
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
        {/* Product Adoption Rates */}
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle>Product Adoption Rates</CardTitle>
            <CardDescription>Current adoption compared to targets</CardDescription>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="h-[28rem]">
              <ChartContainer config={chartConfig}>
                <BarChart 
                  data={adoptionRateData} 
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 120, bottom: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 12 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="current" fill="#2B7C7E" />
                  <Bar dataKey="target" fill="#8E9196" fillOpacity={0.3} strokeDasharray="3 3" />
                  <ChartLegend content={<ChartLegendContent />} />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Usage Patterns */}
        <Card className="p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle>Usage Patterns</CardTitle>
            <CardDescription>Frequency of product feature usage</CardDescription>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="h-[28rem]">
              <ChartContainer config={chartConfig}>
                <BarChart 
                  data={usagePatternData} 
                  margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="category" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={80} />
                  <YAxis domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="daily" stackId="a" fill="#2B7C7E" />
                  <Bar dataKey="weekly" stackId="a" fill="#FDC963" />
                  <Bar dataKey="monthly" stackId="a" fill="#F39C50" />
                  <ChartLegend content={<ChartLegendContent />} />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Financial Health Impact */}
      <Card className="p-6 mb-8">
        <CardHeader className="px-0 pt-0">
          <CardTitle>Financial Health Impact by Product</CardTitle>
          <CardDescription>Average improvement in financial health score</CardDescription>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <div className="h-[28rem] flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 h-full">
              <ChartContainer config={chartConfig}>
                <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                  <Pie
                    data={healthImprovementData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={130}
                    fill="#8884d8"
                    dataKey="score"
                    nameKey="product"
                  >
                    {healthImprovementData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent nameKey="product" />} />
                </PieChart>
              </ChartContainer>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 p-4">
              {healthImprovementData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-4 h-4 mr-2 rounded-sm"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <div>
                    <div className="text-sm font-medium">{item.product}</div>
                    <div className="text-xs text-gray-500">+{item.score} points</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Product Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-l-4 border-attune-teal">
          <h3 className="font-medium text-attune-teal mb-2">Insight</h3>
          <p className="mb-4">Members using the budget tools at least weekly show a 32% increase in savings balances.</p>
          <button className="text-attune-teal text-sm font-medium hover:underline">View details →</button>
        </Card>
        
        <Card className="p-6 border-l-4 border-attune-orange">
          <h3 className="font-medium text-attune-orange mb-2">Opportunity</h3>
          <p className="mb-4">Only 15% of financially vulnerable members use our debt management tools.</p>
          <button className="text-attune-orange text-sm font-medium hover:underline">Explore solutions →</button>
        </Card>
        
        <Card className="p-6 border-l-4 border-attune-yellow">
          <h3 className="font-medium text-attune-yellow-dark mb-2">Recommendation</h3>
          <p className="mb-4">Integrate auto-save features into the mobile app to improve emergency savings adoption.</p>
          <button className="text-attune-yellow-dark text-sm font-medium hover:underline">View implementation plan →</button>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ProductDashboard;
