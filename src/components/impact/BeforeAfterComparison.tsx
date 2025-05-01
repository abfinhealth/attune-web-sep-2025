
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
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
import { ArrowRight } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

// Types for our data
interface MetricData {
  metric: string;
  before: number;
  after: number;
  change: number;
}

// Mock data for different metrics
const financialWellnessData: MetricData[] = [
  { metric: 'Overall Score', before: 62, after: 71, change: 14.5 },
  { metric: 'Savings Rate', before: 5.2, after: 7.8, change: 50.0 },
  { metric: 'Debt-to-Income', before: 43, after: 38, change: -11.6 },
  { metric: 'Emergency Fund', before: 1.2, after: 2.3, change: 91.7 }
];

const engagementData: MetricData[] = [
  { metric: 'App Sessions', before: 4.3, after: 7.2, change: 67.4 },
  { metric: 'Feature Usage', before: 2.8, after: 5.1, change: 82.1 },
  { metric: 'Session Duration', before: 3.6, after: 4.9, change: 36.1 },
  { metric: 'Transaction Volume', before: 12.5, after: 18.3, change: 46.4 }
];

const satisfactionData: MetricData[] = [
  { metric: 'NPS Score', before: 32, after: 48, change: 50.0 },
  { metric: 'Satisfaction Rating', before: 3.7, after: 4.5, change: 21.6 },
  { metric: 'Support Tickets', before: 34, after: 21, change: -38.2 },
  { metric: 'Feature Requests', before: 15, after: 28, change: 86.7 }
];

const metricGroups = [
  { id: 'financial', name: 'Financial Wellness', data: financialWellnessData },
  { id: 'engagement', name: 'Engagement Metrics', data: engagementData },
  { id: 'satisfaction', name: 'Member Satisfaction', data: satisfactionData }
];

const BeforeAfterComparison = () => {
  const [selectedMetricGroup, setSelectedMetricGroup] = useState('financial');
  
  // Get the data for the selected metric group
  const displayData = metricGroups.find(group => group.id === selectedMetricGroup)?.data || [];

  // Format the percentage change
  const formatChange = (value: number) => {
    return `${value >= 0 ? '+' : ''}${value.toFixed(1)}%`;
  };

  // Determine color based on whether increase is good for this metric
  const getChangeColor = (metric: string, change: number) => {
    // For most metrics, positive change is good
    let positiveIsGood = true;
    
    // Exception for metrics where decrease is better
    if (metric === 'Debt-to-Income' || metric === 'Support Tickets') {
      positiveIsGood = false;
    }
    
    if ((change > 0 && positiveIsGood) || (change < 0 && !positiveIsGood)) {
      return 'text-green-600';
    } else if ((change < 0 && positiveIsGood) || (change > 0 && !positiveIsGood)) {
      return 'text-red-600';
    }
    return 'text-gray-600';
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl font-bold">
            <div className="flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              Before/After Comparison
            </div>
          </CardTitle>
          <CardDescription>
            Compare key metrics before and after initiative implementation
          </CardDescription>
        </div>
        
        <Select
          value={selectedMetricGroup}
          onValueChange={setSelectedMetricGroup}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select metrics" />
          </SelectTrigger>
          <SelectContent>
            {metricGroups.map(group => (
              <SelectItem key={group.id} value={group.id}>{group.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={displayData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 60,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="metric" 
                  angle={-45} 
                  textAnchor="end"
                  height={80}
                />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [value, 'Value']}
                />
                <Legend />
                <Bar dataKey="before" name="Before" fill="#94a3b8" />
                <Bar dataKey="after" name="After" fill="#8884d8" />
                <ReferenceLine y={0} stroke="#000" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Detailed Metrics</h3>
            <div className="space-y-4">
              {displayData.map((item) => (
                <div key={item.metric} className="border-b pb-3">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{item.metric}</span>
                    <span className={getChangeColor(item.metric, item.change)}>
                      {formatChange(item.change)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Before: {item.before}</span>
                    <span>→</span>
                    <span>After: {item.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BeforeAfterComparison;
