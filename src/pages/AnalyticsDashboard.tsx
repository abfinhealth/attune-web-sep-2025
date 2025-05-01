
import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import TimeSeriesChart from '@/components/analytics/TimeSeriesChart';
import YearOverYearComparison from '@/components/analytics/YearOverYearComparison';
import SeasonalPatterns from '@/components/analytics/SeasonalPatterns';
import ForecastChart from '@/components/analytics/ForecastChart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Sample time series data
const generateTimeSeriesData = () => {
  const startDate = new Date(2022, 0, 1);
  const endDate = new Date(2024, 5, 1);
  const forecastEndDate = new Date(2024, 11, 31);
  
  const data = [];
  let currentDate = new Date(startDate);
  let value = 1000;
  
  // Generate historical data
  while (currentDate <= endDate) {
    // Add some seasonal variation
    const month = currentDate.getMonth();
    const seasonalFactor = 1 + 0.2 * Math.sin(month / 12 * 2 * Math.PI);
    
    // Add some random noise
    const noise = (Math.random() - 0.5) * 100;
    
    // Add trend
    const trend = currentDate.getFullYear() >= 2023 ? 50 : 20;
    
    const dateValue = value * seasonalFactor + noise;
    value += trend / 12;
    
    // Previous year's value
    const previousDate = new Date(currentDate);
    previousDate.setFullYear(previousDate.getFullYear() - 1);
    const previousValue = dateValue * 0.8;
    
    data.push({
      date: currentDate.toISOString().split('T')[0],
      value: Math.round(dateValue),
      previousValue: Math.round(previousValue),
    });
    
    currentDate.setMonth(currentDate.getMonth() + 1);
  }
  
  // Generate forecast data
  currentDate = new Date(endDate);
  currentDate.setMonth(currentDate.getMonth() + 1);
  
  const lastActualValue = data[data.length - 1].value;
  
  while (currentDate <= forecastEndDate) {
    const month = currentDate.getMonth();
    const seasonalFactor = 1 + 0.2 * Math.sin(month / 12 * 2 * Math.PI);
    
    // Add some random variation to forecast
    const uncertainty = Math.random() * 0.1; 
    const trend = 60 / 12;  // Annual growth divided by 12 months
    
    const forecastValue = lastActualValue * seasonalFactor + trend * data.length;
    
    data.push({
      date: currentDate.toISOString().split('T')[0],
      forecast: Math.round(forecastValue),
      // Previous year should be actual data if available
      previousValue: data[data.length - 12]?.value,
    });
    
    currentDate.setMonth(currentDate.getMonth() + 1);
  }
  
  return data;
};

// Sample year over year data
const yearOverYearData = [
  { category: 'Total Deposits', currentYear: 250000000, previousYear: 220000000, percentChange: 13.64 },
  { category: 'Loans Issued', currentYear: 180000000, previousYear: 165000000, percentChange: 9.09 },
  { category: 'New Members', currentYear: 12500, previousYear: 10800, percentChange: 15.74 },
  { category: 'Mobile App Usage', currentYear: 78, previousYear: 65, percentChange: 20.00 },
  { category: 'Retention Rate', currentYear: 94, previousYear: 91, percentChange: 3.30 },
  { category: 'Net Promoter Score', currentYear: 72, previousYear: 68, percentChange: 5.88 },
];

// Sample seasonal data
const generateSeasonalData = () => {
  const years = ['2022', '2023', '2024'];
  
  return MONTHS.map((month, index) => {
    // Base value for this month
    const baseValue = 1000 + 200 * Math.sin((index / 12) * Math.PI * 2);
    
    // Create data for each year with a growth trend
    const year1 = baseValue;
    const year2 = baseValue * 1.1 + Math.random() * 50;
    const year3 = baseValue * 1.2 + Math.random() * 100;
    
    return {
      month,
      year1: Math.round(year1),
      year2: Math.round(year2),
      year3: Math.round(year3),
      average: Math.round((year1 + year2 + year3) / 3),
    };
  });
};

// Sample forecast data
const generateForecastData = () => {
  const startDate = new Date(2023, 0, 1);
  const currentDate = new Date();
  const forecastEndDate = new Date();
  forecastEndDate.setFullYear(forecastEndDate.getFullYear() + 1);
  
  const data = [];
  let date = new Date(startDate);
  let value = 1000;
  
  // Generate historical data up to current date
  while (date <= currentDate) {
    const month = date.getMonth();
    const seasonalFactor = 1 + 0.15 * Math.sin(month / 12 * 2 * Math.PI);
    
    // Add some random noise
    const noise = (Math.random() - 0.5) * 50;
    
    // Add trend
    const trend = date.getFullYear() >= 2024 ? 30 : 20;
    
    value = value * seasonalFactor + noise + trend / 12;
    
    data.push({
      date: date.toISOString().split('T')[0],
      actual: Math.round(value),
    });
    
    // Move to next month
    date.setMonth(date.getMonth() + 1);
  }
  
  // Generate forecast data
  const lastActualValue = data[data.length - 1].actual;
  
  // Start from the month after the last actual data
  date = new Date(currentDate);
  date.setMonth(date.getMonth() + 1);
  
  while (date <= forecastEndDate) {
    const month = date.getMonth();
    const seasonalFactor = 1 + 0.15 * Math.sin(month / 12 * 2 * Math.PI);
    
    // Base forecast - continues the trend
    const monthsFromNow = (date.getFullYear() - currentDate.getFullYear()) * 12 +
                           date.getMonth() - currentDate.getMonth();
    
    const trend = 30;  // Annual growth
    const forecastValue = lastActualValue * seasonalFactor + (trend / 12) * monthsFromNow;
    
    // Add confidence bounds
    const uncertainty = 0.05 + 0.01 * monthsFromNow; // Uncertainty increases with time
    const upperBound = forecastValue * (1 + uncertainty);
    const lowerBound = forecastValue * (1 - uncertainty);
    
    data.push({
      date: date.toISOString().split('T')[0],
      forecast: Math.round(forecastValue),
      upperBound: Math.round(upperBound),
      lowerBound: Math.round(lowerBound),
    });
    
    // Move to next month
    date.setMonth(date.getMonth() + 1);
  }
  
  return data;
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const METRICS = [
  { id: 'deposits', name: 'Total Deposits', format: (value: number) => `$${(value / 1000000).toFixed(1)}M` },
  { id: 'loans', name: 'Loans Issued', format: (value: number) => `$${(value / 1000000).toFixed(1)}M` },
  { id: 'members', name: 'Member Growth', format: (value: number) => `${value.toLocaleString()}` },
  { id: 'engagement', name: 'Engagement Score', format: (value: number) => value.toFixed(1) },
  { id: 'satisfaction', name: 'Satisfaction Score', format: (value: number) => value.toFixed(1) },
];

const AnalyticsDashboard = () => {
  const [selectedMetric, setSelectedMetric] = useState(METRICS[0]);
  
  const timeSeriesData = generateTimeSeriesData();
  const seasonalData = generateSeasonalData();
  const forecastData = generateForecastData();
  
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold">Analytics & Insights</h1>
            <p className="text-muted-foreground">
              Analyze trends, patterns and forecast future performance
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Select
              value={selectedMetric.id}
              onValueChange={(value) => setSelectedMetric(METRICS.find(m => m.id === value) || METRICS[0])}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select Metric" />
              </SelectTrigger>
              <SelectContent>
                {METRICS.map((metric) => (
                  <SelectItem key={metric.id} value={metric.id}>{metric.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Tabs defaultValue="time-series">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="time-series">Time Series</TabsTrigger>
            <TabsTrigger value="year-over-year">Year over Year</TabsTrigger>
            <TabsTrigger value="seasonal">Seasonal Patterns</TabsTrigger>
            <TabsTrigger value="forecast">Forecasting</TabsTrigger>
          </TabsList>
          
          <TabsContent value="time-series" className="space-y-4">
            <TimeSeriesChart
              title={`${selectedMetric.name} Trends`}
              description="Time-series visualization with comparison capabilities"
              data={timeSeriesData}
              formatValue={selectedMetric.format}
              metric={selectedMetric.name}
              allowComparison={true}
              allowForecasting={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Current Value</CardTitle>
                  <CardDescription>Most recent data point</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    {selectedMetric.format(timeSeriesData[timeSeriesData.length - 1].value || 0)}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>YoY Growth</CardTitle>
                  <CardDescription>Change from previous year</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className={`text-3xl font-bold ${10 > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    +10.2%
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Average</CardTitle>
                  <CardDescription>Last 12 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    {selectedMetric.format(1250)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="year-over-year" className="space-y-4">
            <YearOverYearComparison
              title={`${selectedMetric.name} Year-over-Year Comparison`}
              description="Compare current year performance to previous year"
              data={yearOverYearData}
              metric={selectedMetric.name}
              formatValue={selectedMetric.format}
            />
          </TabsContent>
          
          <TabsContent value="seasonal" className="space-y-4">
            <SeasonalPatterns
              title={`${selectedMetric.name} Seasonal Patterns`}
              description="Identify recurring patterns across different seasons"
              data={seasonalData}
              metric={selectedMetric.name}
              formatValue={selectedMetric.format}
              years={['2022', '2023', '2024']}
            />
            
            <Card>
              <CardHeader>
                <CardTitle>Seasonal Insights</CardTitle>
                <CardDescription>Key observations from the seasonal patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Peak season occurs consistently in Q3 (July-September)</li>
                  <li>Lowest activity observed in January and February</li>
                  <li>Spring months show moderate but steady growth</li>
                  <li>December shows a characteristic spike before year-end</li>
                  <li>Year-over-year growth is maintaining with seasonal patterns</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="forecast" className="space-y-4">
            <ForecastChart
              title={`${selectedMetric.name} Forecast`}
              description="Projections for future performance based on historical data"
              data={forecastData}
              metric={selectedMetric.name}
              formatValue={selectedMetric.format}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>3-Month Projection</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {selectedMetric.format(1380)}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Projected growth: +8.2%
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>6-Month Projection</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {selectedMetric.format(1480)}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Projected growth: +16.5%
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>12-Month Projection</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {selectedMetric.format(1680)}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Projected growth: +32.3%
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsDashboard;
