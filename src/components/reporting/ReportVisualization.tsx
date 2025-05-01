
import { Draggable, Droppable } from 'react-beautiful-dnd';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { BarChart, LineChart, PieChart, Bar, Line, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type MetricItem = {
  id: string;
  type: 'chart' | 'table' | 'stat';
  title: string;
  description: string;
  category: string;
};

type ReportVisualizationProps = {
  metrics: MetricItem[];
  layout: 'grid' | 'list';
};

// Sample data for charts and tables
const sampleChartData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4800 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
];

const samplePieData = [
  { name: '18-25', value: 400 },
  { name: '26-35', value: 300 },
  { name: '36-45', value: 300 },
  { name: '46-55', value: 200 },
  { name: '56+', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const sampleTableData = [
  { product: 'Auto Loans', adoption: '45%', growth: '+2.5%', satisfaction: 4.2 },
  { product: 'Mortgage', adoption: '32%', growth: '+1.8%', satisfaction: 4.0 },
  { product: 'Credit Cards', adoption: '67%', growth: '+3.2%', satisfaction: 3.9 },
  { product: 'Checking', adoption: '85%', growth: '+0.5%', satisfaction: 4.5 },
  { product: 'Savings', adoption: '74%', growth: '+1.2%', satisfaction: 4.3 },
];

const ReportVisualization = ({ metrics, layout }: ReportVisualizationProps) => {
  if (metrics.length === 0) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        Drag metrics here to build your report
      </div>
    );
  }

  // Create a class for the layout
  const layoutClass = layout === 'grid' 
    ? "grid grid-cols-1 md:grid-cols-2 gap-4" 
    : "flex flex-col space-y-4";

  const renderChart = (metric: MetricItem) => {
    // For demo purposes, we'll render different chart types based on the metric id
    if (metric.id.includes('financial-health')) {
      return (
        <LineChart width={500} height={300} data={sampleChartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} name="Score" />
        </LineChart>
      );
    } else if (metric.id.includes('engagement')) {
      return (
        <BarChart width={500} height={300} data={sampleChartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#82ca9d" name="Engagement" />
        </BarChart>
      );
    } else if (metric.id.includes('demographics')) {
      return (
        <PieChart width={500} height={300}>
          <Pie
            data={samplePieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {samplePieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      );
    } else {
      // Default chart
      return (
        <BarChart width={500} height={300} data={sampleChartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#0088FE" name="Value" />
        </BarChart>
      );
    }
  };

  const renderTable = (metric: MetricItem) => {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Adoption</TableHead>
            <TableHead>Growth</TableHead>
            <TableHead>Satisfaction</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleTableData.map((row) => (
            <TableRow key={row.product}>
              <TableCell className="font-medium">{row.product}</TableCell>
              <TableCell>{row.adoption}</TableCell>
              <TableCell>{row.growth}</TableCell>
              <TableCell>{row.satisfaction}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  const renderMetricContent = (metric: MetricItem) => {
    switch (metric.type) {
      case 'chart':
        return (
          <CardContent className="p-2 overflow-hidden">
            <div className="flex justify-center items-center w-full overflow-hidden">
              <ResponsiveContainer width="100%" height={300}>
                {renderChart(metric)}
              </ResponsiveContainer>
            </div>
          </CardContent>
        );
      case 'table':
        return (
          <CardContent className="p-2 overflow-auto">
            <div className="overflow-x-auto">
              {renderTable(metric)}
            </div>
          </CardContent>
        );
      case 'stat':
        return (
          <CardContent className="p-6 flex justify-center items-center">
            <div className="text-center">
              <p className="text-5xl font-bold">75%</p>
              <p className="text-sm text-muted-foreground mt-2">Sample Statistic</p>
            </div>
          </CardContent>
        );
      default:
        return null;
    }
  };

  return (
    <div className={layoutClass}>
      {metrics.map((metric, index) => (
        <Draggable key={metric.id} draggableId={metric.id} index={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="h-full"
            >
              <Card className={`h-full ${snapshot.isDragging ? 'shadow-lg' : ''}`}>
                <CardHeader className="py-3">
                  <CardTitle className="text-lg">{metric.title}</CardTitle>
                </CardHeader>
                {renderMetricContent(metric)}
              </Card>
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default ReportVisualization;
