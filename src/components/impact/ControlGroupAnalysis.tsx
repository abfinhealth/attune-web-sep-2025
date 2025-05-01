
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { ChartBar } from 'lucide-react';

// Types for our data
interface TimeSeriesDataPoint {
  month: string;
  control: number;
  test: number;
}

interface DistributionDataPoint {
  range: string;
  control: number;
  test: number;
}

interface MetricDataPoint {
  metric: string;
  control: number;
  test: number;
  difference: number;
  significant: boolean;
}

// Mock time series data
const timeSeriesData: TimeSeriesDataPoint[] = [
  { month: 'Jan', control: 65, test: 65 },
  { month: 'Feb', control: 66, test: 68 },
  { month: 'Mar', control: 67, test: 72 },
  { month: 'Apr', control: 69, test: 78 },
  { month: 'May', control: 70, test: 83 },
  { month: 'Jun', control: 72, test: 89 }
];

// Mock distribution data
const distributionData: DistributionDataPoint[] = [
  { range: '0-20', control: 5, test: 2 },
  { range: '21-40', control: 12, test: 8 },
  { range: '41-60', control: 25, test: 15 },
  { range: '61-80', control: 38, test: 42 },
  { range: '81-100', control: 20, test: 33 }
];

// Mock metrics data
const metricsData: MetricDataPoint[] = [
  { 
    metric: 'Financial Health Score', 
    control: 68, 
    test: 79, 
    difference: 16.2, 
    significant: true 
  },
  { 
    metric: 'Savings Rate %', 
    control: 5.8, 
    test: 7.9, 
    difference: 36.2, 
    significant: true 
  },
  { 
    metric: 'Digital Engagement', 
    control: 35, 
    test: 58, 
    difference: 65.7, 
    significant: true 
  },
  { 
    metric: 'Avg. Transaction Value', 
    control: 125, 
    test: 132, 
    difference: 5.6, 
    significant: false 
  },
  { 
    metric: 'Product Adoption', 
    control: 2.3, 
    test: 3.1, 
    difference: 34.8, 
    significant: true 
  }
];

const ControlGroupAnalysis = () => {
  const [activeTab, setActiveTab] = useState('trends');

  const formatDifference = (value: number) => {
    return `${value >= 0 ? '+' : ''}${value.toFixed(1)}%`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          <div className="flex items-center gap-2">
            <ChartBar className="h-5 w-5" />
            Control Group Analysis
          </div>
        </CardTitle>
        <CardDescription>
          Compare test group results against a control group to validate impact
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="trends">Trends Over Time</TabsTrigger>
            <TabsTrigger value="distribution">Score Distribution</TabsTrigger>
            <TabsTrigger value="metrics">Key Metrics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="trends" className="pt-2">
            <div className="mb-4">
              <h3 className="font-medium text-lg">Financial Health Score Trends</h3>
              <p className="text-sm text-muted-foreground">
                Average financial health score over 6 months for test vs. control
              </p>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart
                data={timeSeriesData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 10,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[50, 100]} />
                <Tooltip formatter={(value) => [value, 'Score']} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="control" 
                  name="Control Group" 
                  stroke="#94a3b8" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="test" 
                  name="Test Group" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
              <h4 className="font-medium text-blue-800">Analysis Insight</h4>
              <p className="text-sm text-blue-700 mt-1">
                The test group shows a 31% improvement in financial health scores over 6 months compared to only 11% in the control group, indicating the initiative's significant positive impact.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="distribution" className="pt-2">
            <div className="mb-4">
              <h3 className="font-medium text-lg">Financial Health Score Distribution</h3>
              <p className="text-sm text-muted-foreground">
                Distribution of scores across ranges for test vs. control groups
              </p>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart
                data={distributionData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 10,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis label={{ value: 'Percentage of Members', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [`${value}%`, 'Members']} />
                <Legend />
                <Bar dataKey="control" name="Control Group" fill="#94a3b8" />
                <Bar dataKey="test" name="Test Group" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
              <h4 className="font-medium text-blue-800">Analysis Insight</h4>
              <p className="text-sm text-blue-700 mt-1">
                The test group shows a significant shift toward higher score ranges (61-100), with 75% of members in these brackets compared to 58% in the control group.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="metrics" className="pt-2">
            <div className="mb-4">
              <h3 className="font-medium text-lg">Key Performance Indicators</h3>
              <p className="text-sm text-muted-foreground">
                Comparison of critical metrics between test and control groups
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Control Group</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Group</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difference</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statistical Significance</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {metricsData.map((metric, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{metric.metric}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{metric.control}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{metric.test}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                        {formatDifference(metric.difference)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {metric.significant ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Significant
                          </span>
                        ) : (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                            Not significant
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
              <h4 className="font-medium text-blue-800">Analysis Insight</h4>
              <p className="text-sm text-blue-700 mt-1">
                4 out of 5 key metrics show statistically significant improvements in the test group, with digital engagement showing the largest improvement at +65.7%.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ControlGroupAnalysis;
