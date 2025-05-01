import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface DemographicFilteringProps {
  segmentId: string;
}

const DemographicFiltering = ({ segmentId }: DemographicFilteringProps) => {
  // Age distribution data
  const generateAgeData = (segmentId: string) => {
    // Base distribution for all members
    const baseDistribution = [
      { name: '18-24', value: 3210 },
      { name: '25-34', value: 6430 },
      { name: '35-44', value: 7150 },
      { name: '45-54', value: 5270 },
      { name: '55-64', value: 4350 },
      { name: '65+', value: 2340 }
    ];

    // Adjust based on segment
    if (segmentId === 'high-score') {
      return [
        { name: '18-24', value: 420 },
        { name: '25-34', value: 1240 },
        { name: '35-44', value: 2150 },
        { name: '45-54', value: 1870 },
        { name: '55-64', value: 1780 },
        { name: '65+', value: 960 }
      ];
    } else if (segmentId === 'mid-score') {
      return [
        { name: '18-24', value: 1430 },
        { name: '25-34', value: 3120 },
        { name: '35-44', value: 3240 },
        { name: '45-54', value: 2130 },
        { name: '55-64', value: 1540 },
        { name: '65+', value: 690 }
      ];
    } else if (segmentId === 'low-score') {
      return [
        { name: '18-24', value: 1360 },
        { name: '25-34', value: 2070 },
        { name: '35-44', value: 1760 },
        { name: '45-54', value: 1270 },
        { name: '55-64', value: 1030 },
        { name: '65+', value: 690 }
      ];
    } else if (segmentId === 'new-members') {
      return [
        { name: '18-24', value: 980 },
        { name: '25-34', value: 1320 },
        { name: '35-44', value: 860 },
        { name: '45-54', value: 520 },
        { name: '55-64', value: 340 },
        { name: '65+', value: 210 }
      ];
    } else if (segmentId.includes('gen-') || segmentId === 'millennials' || segmentId === 'boomers') {
      // For generation-specific segments, we'll have a different distribution
      // but we'll keep the structure for visualization consistency
      return baseDistribution;
    }
    
    return baseDistribution;
  };

  // Income distribution data
  const generateIncomeData = (segmentId: string) => {
    // Base income distribution for all members
    const baseDistribution = [
      { name: '<$30k', value: 4120 },
      { name: '$30k-$50k', value: 7230 },
      { name: '$50k-$75k', value: 6910 },
      { name: '$75k-$100k', value: 4830 },
      { name: '$100k-$150k', value: 3640 },
      { name: '>$150k', value: 2020 }
    ];

    if (segmentId === 'high-score') {
      return [
        { name: '<$30k', value: 320 },
        { name: '$30k-$50k', value: 980 },
        { name: '$50k-$75k', value: 1760 },
        { name: '$75k-$100k', value: 1930 },
        { name: '$100k-$150k', value: 2140 },
        { name: '>$150k', value: 1290 }
      ];
    } else if (segmentId === 'mid-score') {
      return [
        { name: '<$30k', value: 1520 },
        { name: '$30k-$50k', value: 3430 },
        { name: '$50k-$75k', value: 3200 },
        { name: '$75k-$100k', value: 2130 },
        { name: '$100k-$150k', value: 1290 },
        { name: '>$150k', value: 580 }
      ];
    } else if (segmentId === 'low-score') {
      return [
        { name: '<$30k', value: 2280 },
        { name: '$30k-$50k', value: 2820 },
        { name: '$50k-$75k', value: 1950 },
        { name: '$75k-$100k', value: 770 },
        { name: '$100k-$150k', value: 210 },
        { name: '>$150k', value: 150 }
      ];
    }
    
    return baseDistribution;
  };

  // Location data
  const generateLocationData = (segmentId: string) => {
    // Example location distribution
    return [
      { name: 'Urban', value: 12450 },
      { name: 'Suburban', value: 10950 },
      { name: 'Rural', value: 5350 }
    ];
  };

  // Household composition
  const generateHouseholdData = (segmentId: string) => {
    return [
      { name: 'Single', value: 9780 },
      { name: 'Married/Partnered', value: 12450 },
      { name: 'Family with Children', value: 6520 }
    ];
  };

  // Comparison table data
  const generateComparisonData = (segmentId: string) => {
    const baseData = [
      { metric: 'Average Age', all: '42', high: '48', mid: '40', low: '37' },
      { metric: 'Average Income', all: '$68,250', high: '$98,720', mid: '$63,450', low: '$42,830' },
      { metric: 'Homeownership %', all: '64%', high: '82%', mid: '61%', low: '49%' },
      { metric: 'Avg. Household Size', all: '2.4', high: '2.6', mid: '2.3', low: '2.2' },
      { metric: 'Urban/Suburban %', all: '81%', high: '84%', mid: '83%', low: '76%' },
      { metric: 'College Degree %', all: '58%', high: '76%', mid: '54%', low: '43%' },
    ];
    
    return baseData;
  };

  // Generate data based on segment
  const ageData = generateAgeData(segmentId);
  const incomeData = generateIncomeData(segmentId);
  const locationData = generateLocationData(segmentId);
  const householdData = generateHouseholdData(segmentId);
  const comparisonData = generateComparisonData(segmentId);

  // Colors for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  return (
    <Tabs defaultValue="distribution">
      <TabsList className="mb-6 grid w-full grid-cols-3">
        <TabsTrigger value="distribution">Distribution</TabsTrigger>
        <TabsTrigger value="comparison">Segment Comparison</TabsTrigger>
        <TabsTrigger value="data">Data Tables</TabsTrigger>
      </TabsList>

      <TabsContent value="distribution" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Age Distribution</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={ageData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value.toLocaleString()} members`, 'Count']} />
                  <Bar dataKey="value" fill="#8884d8" name="Members">
                    {ageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Income Distribution</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={incomeData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value.toLocaleString()} members`, 'Count']} />
                  <Bar dataKey="value" fill="#82ca9d" name="Members">
                    {incomeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Location Type</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={locationData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {locationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value.toLocaleString()} members`, 'Count']} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Household Composition</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={householdData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {householdData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value.toLocaleString()} members`, 'Count']} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="comparison">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Demographic Metric</TableHead>
                <TableHead>All Members</TableHead>
                <TableHead>High Score</TableHead>
                <TableHead>Mid Score</TableHead>
                <TableHead>Low Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{row.metric}</TableCell>
                  <TableCell>{row.all}</TableCell>
                  <TableCell>{row.high}</TableCell>
                  <TableCell>{row.mid}</TableCell>
                  <TableCell>{row.low}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TabsContent>

      <TabsContent value="data">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Age Distribution</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Age Group</TableHead>
                    <TableHead className="text-right">Count</TableHead>
                    <TableHead className="text-right">Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ageData.map((row, i) => {
                    const total = ageData.reduce((sum, item) => sum + item.value, 0);
                    const percentage = ((row.value / total) * 100).toFixed(1);
                    return (
                      <TableRow key={i}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell className="text-right">{row.value.toLocaleString()}</TableCell>
                        <TableCell className="text-right">{percentage}%</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Income Distribution</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Income Range</TableHead>
                    <TableHead className="text-right">Count</TableHead>
                    <TableHead className="text-right">Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {incomeData.map((row, i) => {
                    const total = incomeData.reduce((sum, item) => sum + item.value, 0);
                    const percentage = ((row.value / total) * 100).toFixed(1);
                    return (
                      <TableRow key={i}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell className="text-right">{row.value.toLocaleString()}</TableCell>
                        <TableCell className="text-right">{percentage}%</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default DemographicFiltering;
