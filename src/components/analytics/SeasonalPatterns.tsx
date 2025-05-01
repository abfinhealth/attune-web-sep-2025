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
  ReferenceLine,
} from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

type SeasonData = {
  month: string;
  year1: number;
  year2: number;
  year3: number;
  average: number;
};

type SeasonalPatternsProps = {
  title: string;
  description?: string;
  data: SeasonData[];
  metric: string;
  formatValue?: (value: number) => string;
  years: string[];
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const COLORS = ['#8884d8', '#82ca9d', '#ff7300', '#daa520'];

const SEASONS = [
  { start: 0, end: 2, name: 'Winter' }, // Jan to Mar
  { start: 3, end: 5, name: 'Spring' }, // Apr to Jun
  { start: 6, end: 8, name: 'Summer' }, // Jul to Sep
  { start: 9, end: 11, name: 'Fall' }   // Oct to Dec
];

const SeasonalPatterns = ({
  title,
  description,
  data,
  metric,
  formatValue = (value) => value.toString(),
  years,
}: SeasonalPatternsProps) => {
  const [selectedYears, setSelectedYears] = useState<string[]>(['average']);
  const [showSeasonHighlights, setShowSeasonHighlights] = useState<boolean>(true);

  // Handle toggling a year in the selection
  const toggleYear = (year: string) => {
    if (year === 'average') {
      // Always include average
      setSelectedYears(['average']);
    } else {
      const newSelectedYears = [...selectedYears];
      
      if (newSelectedYears.includes(year)) {
        // Remove if already selected
        setSelectedYears(newSelectedYears.filter(y => y !== year));
      } else {
        // Add if not selected
        if (newSelectedYears.includes('average')) {
          // If average is selected, add the new year and keep average
          setSelectedYears([...newSelectedYears, year]);
        } else {
          // If average is not selected, just add the new year
          setSelectedYears([year]);
        }
      }
    }
  };

  // Get the active lines to display based on selection
  const getActiveLines = () => {
    const lines = [];
    
    if (selectedYears.includes('average')) {
      lines.push({
        dataKey: 'average',
        name: 'Average',
        color: '#ff6384',
        strokeWidth: 2,
      });
    }
    
    years.forEach((year, index) => {
      if (selectedYears.includes(year)) {
        lines.push({
          dataKey: `year${index + 1}`,
          name: year,
          color: COLORS[index % COLORS.length],
          strokeWidth: 1.5,
        });
      }
    });
    
    return lines;
  };

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
              value={showSeasonHighlights ? 'show' : 'hide'} 
              onValueChange={(value) => setShowSeasonHighlights(value === 'show')}
            >
              <SelectTrigger className="h-8 w-[160px]">
                <SelectValue placeholder="Season Highlights" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="show">Show Seasons</SelectItem>
                <SelectItem value="hide">Hide Seasons</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <button
            onClick={() => toggleYear('average')}
            className={`px-2 py-1 text-xs rounded-full ${selectedYears.includes('average') 
              ? 'bg-[#ff6384] text-white' 
              : 'bg-gray-200 text-gray-700'}`}
          >
            Average
          </button>
          {years.map((year, index) => (
            <button
              key={year}
              onClick={() => toggleYear(year)}
              className={`px-2 py-1 text-xs rounded-full ${selectedYears.includes(year) 
                ? `bg-[${COLORS[index % COLORS.length]}] text-white` 
                : 'bg-gray-200 text-gray-700'}`}
              style={{ backgroundColor: selectedYears.includes(year) ? COLORS[index % COLORS.length] : undefined }}
            >
              {year}
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
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
            <XAxis dataKey="month" />
            <YAxis tickFormatter={formatValue} />
            <Tooltip 
              formatter={(value) => [formatValue(Number(value)), metric]} 
            />
            <Legend />
            
            {/* Season reference areas */}
            {showSeasonHighlights && SEASONS.map((season, index) => {
              const startMonth = MONTHS[season.start];
              const endMonth = MONTHS[season.end];
              return (
                <ReferenceLine
                  key={season.name}
                  x={MONTHS[Math.floor((season.start + season.end) / 2)]}
                  stroke="#666"
                  label={{ value: season.name, position: 'insideBottom', fill: '#666', fontSize: 12 }}
                  strokeDasharray="3 3"
                />
              );
            })}
            
            {/* Data lines */}
            {getActiveLines().map((line) => (
              <Line
                key={line.dataKey}
                type="monotone"
                dataKey={line.dataKey}
                stroke={line.color}
                name={line.name}
                strokeWidth={line.strokeWidth}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SeasonalPatterns;
