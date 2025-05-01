
import {
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProductUsageCorrelationProps {
  segmentId: string;
}

const ProductUsageCorrelation = ({ segmentId }: ProductUsageCorrelationProps) => {
  // Generate product usage data based on segment
  const generateUsageData = (segmentId: string) => {
    // Base product usage for all members
    const baseUsage = [
      { name: 'Checking Account', usage: 96 },
      { name: 'Savings Account', usage: 82 },
      { name: 'Credit Card', usage: 68 },
      { name: 'Personal Loan', usage: 32 },
      { name: 'Auto Loan', usage: 28 },
      { name: 'Mortgage', usage: 24 },
      { name: 'Investment Account', usage: 18 },
      { name: 'CD/Money Market', usage: 12 },
    ];

    // Adjust based on segment
    if (segmentId === 'high-score') {
      return [
        { name: 'Checking Account', usage: 99 },
        { name: 'Savings Account', usage: 96 },
        { name: 'Credit Card', usage: 84 },
        { name: 'Personal Loan', usage: 26 },
        { name: 'Auto Loan', usage: 32 },
        { name: 'Mortgage', usage: 48 },
        { name: 'Investment Account', usage: 56 },
        { name: 'CD/Money Market', usage: 38 },
      ];
    } else if (segmentId === 'mid-score') {
      return [
        { name: 'Checking Account', usage: 98 },
        { name: 'Savings Account', usage: 86 },
        { name: 'Credit Card', usage: 72 },
        { name: 'Personal Loan', usage: 36 },
        { name: 'Auto Loan', usage: 34 },
        { name: 'Mortgage', usage: 26 },
        { name: 'Investment Account', usage: 14 },
        { name: 'CD/Money Market', usage: 8 },
      ];
    } else if (segmentId === 'low-score') {
      return [
        { name: 'Checking Account', usage: 92 },
        { name: 'Savings Account', usage: 64 },
        { name: 'Credit Card', usage: 48 },
        { name: 'Personal Loan', usage: 42 },
        { name: 'Auto Loan', usage: 24 },
        { name: 'Mortgage', usage: 12 },
        { name: 'Investment Account', usage: 4 },
        { name: 'CD/Money Market', usage: 2 },
      ];
    } else if (segmentId === 'new-members') {
      return [
        { name: 'Checking Account', usage: 98 },
        { name: 'Savings Account', usage: 76 },
        { name: 'Credit Card', usage: 54 },
        { name: 'Personal Loan', usage: 18 },
        { name: 'Auto Loan', usage: 12 },
        { name: 'Mortgage', usage: 6 },
        { name: 'Investment Account', usage: 8 },
        { name: 'CD/Money Market', usage: 4 },
      ];
    }
    
    return baseUsage;
  };

  // Generate correlation data between financial health score and products
  const generateCorrelationData = () => {
    return [
      { product: 'Investment Account', correlation: 0.76 },
      { product: 'CD/Money Market', correlation: 0.68 },
      { product: 'Mortgage', correlation: 0.56 },
      { product: 'Savings Account', correlation: 0.52 },
      { product: 'Auto Loan', correlation: 0.34 },
      { product: 'Credit Card', correlation: 0.28 },
      { product: 'Checking Account', correlation: 0.12 },
      { product: 'Personal Loan', correlation: -0.22 },
    ];
  };

  // Generate scatter plot data for product relationships
  const generateScatterData = () => {
    return [
      { x: 96, y: 82, name: 'Checking vs. Savings', size: 28000 },
      { x: 82, y: 68, name: 'Savings vs. Credit Card', size: 19600 },
      { x: 68, y: 32, name: 'Credit Card vs. Personal Loan', size: 6300 },
      { x: 32, y: 28, name: 'Personal Loan vs. Auto Loan', size: 2800 },
      { x: 28, y: 24, name: 'Auto Loan vs. Mortgage', size: 2400 },
      { x: 24, y: 18, name: 'Mortgage vs. Investment', size: 1800 },
      { x: 18, y: 12, name: 'Investment vs. CD/MM', size: 1200 },
    ];
  };

  const usageData = generateUsageData(segmentId);
  const correlationData = generateCorrelationData();
  const scatterData = generateScatterData();

  // Helper to get color based on correlation strength
  const getCorrelationColor = (correlation: number) => {
    const value = Math.abs(correlation);
    if (value > 0.7) return '#22c55e'; // Strong positive
    if (value > 0.5) return '#84cc16'; // Moderate positive
    if (value > 0.3) return '#eab308'; // Weak positive
    if (value > 0.1) return '#94a3b8'; // Very weak
    return '#f87171'; // Negative or no correlation
  };

  return (
    <Tabs defaultValue="usage">
      <TabsList className="mb-6 grid w-full grid-cols-3">
        <TabsTrigger value="usage">Product Usage</TabsTrigger>
        <TabsTrigger value="correlation">Score Correlation</TabsTrigger>
        <TabsTrigger value="relationships">Product Relationships</TabsTrigger>
      </TabsList>

      <TabsContent value="usage" className="space-y-6">
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={usageData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" unit="%" domain={[0, 100]} />
              <YAxis type="category" dataKey="name" width={100} />
              <Tooltip formatter={(value) => [`${value}%`, 'Usage']} />
              <Bar 
                dataKey="usage" 
                fill="#8884d8" 
                name="Product Usage" 
                label={{ position: 'right', formatter: (value) => `${value}%` }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Most Used Product</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{usageData[0].name}</div>
              <p className="text-sm text-muted-foreground">{usageData[0].usage}% adoption</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Least Used Product</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{usageData[usageData.length - 1].name}</div>
              <p className="text-sm text-muted-foreground">{usageData[usageData.length - 1].usage}% adoption</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Average Products Per Member</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(usageData.reduce((acc, item) => acc + item.usage, 0) / 100).toFixed(1)}
              </div>
              <p className="text-sm text-muted-foreground">Out of 8 products</p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="correlation">
        <div className="space-y-6">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={correlationData}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis 
                  type="number" 
                  domain={[-0.3, 0.8]} 
                  tickFormatter={(value) => `${value > 0 ? '+' : ''}${value.toFixed(2)}`}
                />
                <YAxis type="category" dataKey="product" width={100} />
                <Tooltip 
                  formatter={(value) => [
                    `${Number(value) > 0 ? '+' : ''}${Number(value).toFixed(2)}`, 
                    'Correlation with Financial Score'
                  ]} 
                />
                <Bar dataKey="correlation" name="Correlation Coefficient">
                  {correlationData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={getCorrelationColor(entry.correlation)} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-slate-50 p-4 rounded-md">
            <h3 className="text-sm font-semibold mb-2">Understanding Product Correlations</h3>
            <p className="text-sm text-muted-foreground">
              This analysis shows the correlation between financial health scores and product usage. 
              A positive correlation (e.g., +0.76) suggests that members with higher financial health scores 
              are more likely to use that product. A negative correlation suggests the opposite relationship.
              Correlation values range from -1.0 to +1.0, with higher absolute values indicating stronger relationships.
            </p>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="relationships">
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid />
              <XAxis 
                type="number" 
                dataKey="x" 
                name="First Product" 
                unit="%" 
                domain={[0, 100]}
              />
              <YAxis 
                type="number" 
                dataKey="y" 
                name="Second Product" 
                unit="%" 
                domain={[0, 100]}
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                formatter={(value) => [`${value}%`, '']}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-2 border border-gray-200 shadow-sm text-xs">
                        <p className="font-medium">{data.name}</p>
                        <p>First Product: {data.x}%</p>
                        <p>Second Product: {data.y}%</p>
                        <p>Co-adoption: ~{(data.size / 280).toFixed(0)}%</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Scatter 
                name="Product Relationships" 
                data={scatterData} 
                fill="#8884d8"
              >
                {scatterData.map((entry, index) => {
                  const size = Math.sqrt(entry.size) / 10;
                  return <Cell key={`cell-${index}`} fill="#8884d8" opacity={0.7} />;
                })}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-50 p-4 rounded-md mt-6">
          <h3 className="text-sm font-semibold mb-2">About Product Relationships</h3>
          <p className="text-sm text-muted-foreground">
            This scatter plot shows the relationship between product pairs. Each point represents a pair of products,
            with the position indicating the adoption rate of each product and the size representing how many members
            have both products. Larger circles indicate stronger product relationships.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProductUsageCorrelation;
