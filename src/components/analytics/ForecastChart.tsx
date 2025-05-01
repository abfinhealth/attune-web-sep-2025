
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceDot,
  ReferenceLine,
} from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

type ForecastData = {
  date: string;
  actual: number;
  forecast?: number;
  upperBound?: number;
  lowerBound?: number;
};

type ForecastChartProps = {
  title: string;
  description?: string;
  data: ForecastData[];
  metric: string;
  formatValue?: (value: number) => string;
};

const ForecastChart = ({
  title,
  description,
  data,
  metric,
  formatValue = (value) => value.toString(),
}: ForecastChartProps) => {
  const [forecastRange, setForecastRange] = useState<'1M' | '3M' | '6M' | '1Y'>('3M');
  const [showConfidenceInterval, setShowConfidenceInterval] = useState<boolean>(true);

  // Format date for x-axis
  const formatXAxis = (tickItem: string) => {
    const date = new Date(tickItem);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Find the cutoff date where actual data ends and forecast begins
  const findForecastStartIndex = () => {
    return data.findIndex(item => item.forecast && item.actual === undefined);
  };

  const forecastStartIndex = findForecastStartIndex();
  const forecastStartDate = forecastStartIndex > -1 ? data[forecastStartIndex].date : null;

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col space-y-1.5 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          <div className="flex items-center gap-2">
            <Select 
              value={forecastRange} 
              onValueChange={(value) => setForecastRange(value as '1M' | '3M' | '6M' | '1Y')}
            >
              <SelectTrigger className="h-8 w-[150px]">
                <SelectValue placeholder="Forecast Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1M">1 Month</SelectItem>
                <SelectItem value="3M">3 Months</SelectItem>
                <SelectItem value="6M">6 Months</SelectItem>
                <SelectItem value="1Y">1 Year</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              variant={showConfidenceInterval ? "default" : "outline"}
              size="sm"
              onClick={() => setShowConfidenceInterval(!showConfidenceInterval)}
            >
              {showConfidenceInterval ? "Hide" : "Show"} Confidence
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Alert className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Forecast Information</AlertTitle>
          <AlertDescription>
            This forecast is based on historical trends and seasonality. Actual results may vary.
            The forecast uses a simple time series model with seasonal decomposition.
          </AlertDescription>
        </Alert>
        
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              tickFormatter={formatXAxis}
            />
            <YAxis tickFormatter={formatValue} />
            <Tooltip 
              formatter={(value) => [formatValue(Number(value)), metric]}
              labelFormatter={(label) => new Date(label).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            />
            <Legend />
            
            {/* Actual values line */}
            <Line
              type="monotone"
              dataKey="actual"
              stroke="#8884d8"
              name="Actual"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 6 }}
            />
            
            {/* Forecast line */}
            <Line
              type="monotone"
              dataKey="forecast"
              stroke="#82ca9d"
              name="Forecast"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ r: 3 }}
            />
            
            {/* Confidence interval - upper bound */}
            {showConfidenceInterval && (
              <Line
                type="monotone"
                dataKey="upperBound"
                stroke="#d3d3d3"
                name="Upper Bound"
                strokeWidth={1}
                dot={false}
              />
            )}
            
            {/* Confidence interval - lower bound */}
            {showConfidenceInterval && (
              <Line
                type="monotone"
                dataKey="lowerBound"
                stroke="#d3d3d3"
                name="Lower Bound"
                strokeWidth={1}
                dot={false}
              />
            )}
            
            {/* Divider between actual and forecast */}
            {forecastStartDate && (
              <ReferenceLine
                x={forecastStartDate}
                stroke="red"
                strokeDasharray="3 3"
                label={{ value: "Forecast Start", position: "insideTopRight" }}
              />
            )}
            
            {/* Today's date marker */}
            <ReferenceLine
              x={new Date().toISOString().split('T')[0]}
              stroke="#666"
              strokeDasharray="3 3"
              label={{ value: "Today", position: "insideTopLeft" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        Forecast updated: {new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </CardFooter>
    </Card>
  );
};

export default ForecastChart;
