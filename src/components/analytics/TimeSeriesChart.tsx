
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
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
  ReferenceArea,
  ReferenceLine,
} from 'recharts';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type TimeRange = '7D' | '1M' | '3M' | '6M' | '1Y' | '2Y' | 'MAX';

type MetricData = {
  date: string;
  value: number;
  previousValue?: number;
  forecast?: number;
};

type TimeSeriesChartProps = {
  title: string;
  description?: string;
  data: MetricData[];
  formatValue?: (value: number) => string;
  allowComparison?: boolean;
  allowForecasting?: boolean;
  metric: string;
  yAxisLabel?: string;
};

const COMPARISON_OPTIONS = ['Previous Year', 'Previous Month', 'Previous Quarter'] as const;
type ComparisonOption = typeof COMPARISON_OPTIONS[number];

const TimeSeriesChart = ({
  title,
  description,
  data,
  formatValue = (value) => value.toString(),
  allowComparison = true,
  allowForecasting = true,
  metric,
  yAxisLabel,
}: TimeSeriesChartProps) => {
  const [timeRange, setTimeRange] = useState<TimeRange>('3M');
  const [showComparison, setShowComparison] = useState<boolean>(false);
  const [comparisonOption, setComparisonOption] = useState<ComparisonOption>('Previous Year');
  const [showForecast, setShowForecast] = useState<boolean>(false);
  const [highlightSeason, setHighlightSeason] = useState<boolean>(false);
  
  // Get domain for the y-axis
  const getYDomain = () => {
    const allValues = data.flatMap(d => [
      d.value,
      d.previousValue || 0,
      d.forecast || 0
    ]).filter(Boolean);
    
    const min = Math.min(...allValues) * 0.9;
    const max = Math.max(...allValues) * 1.1;
    
    return [min, max];
  };

  // Filter data based on the selected time range
  const getFilteredData = () => {
    // In a real application, we would filter the data based on the timeRange
    // For this demo, we'll just return the full dataset
    return data;
  };

  // Custom tick formatter for the x-axis
  const formatXAxis = (tickItem: string) => {
    const date = new Date(tickItem);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Handle showing seasonal patterns
  const seasons = [
    { start: '2024-01-01', end: '2024-03-31', name: 'Winter' },
    { start: '2024-04-01', end: '2024-06-30', name: 'Spring' },
    { start: '2024-07-01', end: '2024-09-30', name: 'Summer' },
    { start: '2024-10-01', end: '2024-12-31', name: 'Fall' },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col space-y-1.5 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {/* Time Range Selector */}
            <Select value={timeRange} onValueChange={(value) => setTimeRange(value as TimeRange)}>
              <SelectTrigger className="h-8 w-[100px]">
                <SelectValue placeholder="Time Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7D">7 Days</SelectItem>
                <SelectItem value="1M">1 Month</SelectItem>
                <SelectItem value="3M">3 Months</SelectItem>
                <SelectItem value="6M">6 Months</SelectItem>
                <SelectItem value="1Y">1 Year</SelectItem>
                <SelectItem value="2Y">2 Years</SelectItem>
                <SelectItem value="MAX">All Time</SelectItem>
              </SelectContent>
            </Select>

            {/* Comparison Toggle */}
            {allowComparison && (
              <Select 
                value={showComparison ? comparisonOption : 'none'} 
                onValueChange={(value) => {
                  if (value === 'none') {
                    setShowComparison(false);
                  } else {
                    setShowComparison(true);
                    setComparisonOption(value as ComparisonOption);
                  }
                }}
              >
                <SelectTrigger className="h-8 w-[150px]">
                  <SelectValue placeholder="Compare" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No Comparison</SelectItem>
                  {COMPARISON_OPTIONS.map(option => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {/* Forecast Toggle */}
            {allowForecasting && (
              <Select 
                value={showForecast ? 'show' : 'hide'} 
                onValueChange={(value) => setShowForecast(value === 'show')}
              >
                <SelectTrigger className="h-8 w-[120px]">
                  <SelectValue placeholder="Forecast" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hide">Hide Forecast</SelectItem>
                  <SelectItem value="show">Show Forecast</SelectItem>
                </SelectContent>
              </Select>
            )}

            {/* Seasonal Pattern Toggle */}
            <Select 
              value={highlightSeason ? 'show' : 'hide'} 
              onValueChange={(value) => setHighlightSeason(value === 'show')}
            >
              <SelectTrigger className="h-8 w-[120px]">
                <SelectValue placeholder="Seasons" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hide">Hide Seasons</SelectItem>
                <SelectItem value="show">Show Seasons</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={getFilteredData()}
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
              padding={{ left: 30, right: 30 }}
            />
            <YAxis 
              domain={getYDomain()} 
              tickFormatter={formatValue} 
              label={{ value: yAxisLabel || metric, angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              formatter={(value) => [formatValue(Number(value)), metric]} 
              labelFormatter={(label) => new Date(label).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            />
            <Legend />
            
            {/* Current Value Line */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              name="Current"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
            
            {/* Comparison Line (if enabled) */}
            {showComparison && (
              <Line
                type="monotone"
                dataKey="previousValue"
                stroke="#82ca9d"
                name={comparisonOption}
                strokeWidth={2}
                dot={{ r: 3 }}
                strokeDasharray="5 5"
              />
            )}
            
            {/* Forecast Line (if enabled) */}
            {showForecast && (
              <Line
                type="monotone"
                dataKey="forecast"
                stroke="#ffc658"
                name="Forecast"
                strokeWidth={2}
                strokeDasharray="3 3"
              />
            )}
            
            {/* Seasonal Patterns (if enabled) */}
            {highlightSeason && seasons.map((season, index) => (
              <ReferenceArea
                key={season.name}
                x1={season.start}
                x2={season.end}
                fill={['#e2f2ff', '#e2fff2', '#fff2e2', '#ffe2f2'][index % 4]}
                fillOpacity={0.3}
                label={{ position: 'insideTop', value: season.name, fill: '#666' }}
              />
            ))}
            
            {/* Current Date Line */}
            <ReferenceLine
              x={new Date().toISOString().split('T')[0]}
              stroke="red"
              label={{ position: 'insideTopRight', value: 'Today', fill: 'red' }}
              strokeDasharray="3 3"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TimeSeriesChart;
