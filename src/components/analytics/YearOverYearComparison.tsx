
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
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
  Cell,
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type ComparisonData = {
  category: string;
  currentYear: number;
  previousYear: number;
  percentChange: number;
};

type YearOverYearComparisonProps = {
  title: string;
  description?: string;
  data: ComparisonData[];
  metric: string;
  formatValue?: (value: number) => string;
};

const YearOverYearComparison = ({
  title,
  description,
  data,
  metric,
  formatValue = (value) => value.toString(),
}: YearOverYearComparisonProps) => {
  // Helper to get growth color based on percent change
  const getGrowthColor = (percentChange: number) => {
    if (percentChange > 0) return '#4ade80'; // Green for positive
    if (percentChange < 0) return '#f87171'; // Red for negative
    return '#94a3b8'; // Gray for neutral
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="bar">
          <TabsList className="mb-4">
            <TabsTrigger value="bar">Bar Chart</TabsTrigger>
            <TabsTrigger value="growth">Growth %</TabsTrigger>
          </TabsList>
          
          <TabsContent value="bar">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 70,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="category" 
                  angle={-45} 
                  textAnchor="end" 
                  height={80} 
                />
                <YAxis tickFormatter={formatValue} />
                <Tooltip 
                  formatter={(value) => [formatValue(Number(value)), metric]}
                />
                <Legend />
                <Bar 
                  dataKey="currentYear" 
                  fill="#8884d8" 
                  name="Current Year" 
                  barSize={30}
                />
                <Bar 
                  dataKey="previousYear" 
                  fill="#82ca9d" 
                  name="Previous Year" 
                  barSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="growth">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 70,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="category" 
                  angle={-45} 
                  textAnchor="end" 
                  height={80} 
                />
                <YAxis
                  tickFormatter={(value) => `${value}%`}
                  domain={[-100, 100]}
                />
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Change']}
                />
                <Legend />
                <Bar 
                  dataKey="percentChange" 
                  name="YoY Change %" 
                  barSize={40}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getGrowthColor(entry.percentChange)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default YearOverYearComparison;
