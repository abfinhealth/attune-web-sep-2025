
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { Card, CardContent } from '@/components/ui/card';

interface MemberScoreDistributionProps {
  segmentId: string;
}

const MemberScoreDistribution = ({ segmentId }: MemberScoreDistributionProps) => {
  // Generate distribution data based on segment
  const generateDistributionData = (segmentId: string) => {
    // Base distribution for all members
    const baseDistribution = [
      { score: '0-20', count: 1120, label: 'Poor' },
      { score: '21-40', count: 4200, label: 'Fair' },
      { score: '41-60', count: 9300, label: 'Moderate' },
      { score: '61-80', count: 10200, label: 'Good' },
      { score: '81-100', count: 3930, label: 'Excellent' }
    ];

    // Adjust distribution based on segment
    switch (segmentId) {
      case 'high-score':
        return [
          { score: '0-20', count: 0, label: 'Poor' },
          { score: '21-40', count: 0, label: 'Fair' },
          { score: '41-60', count: 0, label: 'Moderate' },
          { score: '61-80', count: 4490, label: 'Good' },
          { score: '81-100', count: 3930, label: 'Excellent' }
        ];
      case 'mid-score':
        return [
          { score: '0-20', count: 0, label: 'Poor' },
          { score: '21-40', count: 0, label: 'Fair' },
          { score: '41-60', count: 9300, label: 'Moderate' },
          { score: '61-80', count: 2850, label: 'Good' },
          { score: '81-100', count: 0, label: 'Excellent' }
        ];
      case 'low-score':
        return [
          { score: '0-20', count: 1120, label: 'Poor' },
          { score: '21-40', count: 4200, label: 'Fair' },
          { score: '41-60', count: 2860, label: 'Moderate' },
          { score: '61-80', count: 0, label: 'Good' },
          { score: '81-100', count: 0, label: 'Excellent' }
        ];
      case 'new-members':
        return [
          { score: '0-20', count: 220, label: 'Poor' },
          { score: '21-40', count: 780, label: 'Fair' },
          { score: '41-60', count: 1430, label: 'Moderate' },
          { score: '61-80', count: 1350, label: 'Good' },
          { score: '81-100', count: 450, label: 'Excellent' }
        ];
      // Demographic segments have varying distributions
      case 'millennials':
        return [
          { score: '0-20', count: 380, label: 'Poor' },
          { score: '21-40', count: 1520, label: 'Fair' },
          { score: '41-60', count: 3640, label: 'Moderate' },
          { score: '61-80', count: 3120, label: 'Good' },
          { score: '81-100', count: 1200, label: 'Excellent' }
        ];
      case 'gen-x':
        return [
          { score: '0-20', count: 260, label: 'Poor' },
          { score: '21-40', count: 980, label: 'Fair' },
          { score: '41-60', count: 2350, label: 'Moderate' },
          { score: '61-80', count: 2710, label: 'Good' },
          { score: '81-100', count: 1240, label: 'Excellent' }
        ];
      case 'boomers':
        return [
          { score: '0-20', count: 210, label: 'Poor' },
          { score: '21-40', count: 850, label: 'Fair' },
          { score: '41-60', count: 1980, label: 'Moderate' },
          { score: '61-80', count: 2750, label: 'Good' },
          { score: '81-100', count: 1420, label: 'Excellent' }
        ];
      case 'gen-z':
        return [
          { score: '0-20', count: 270, label: 'Poor' },
          { score: '21-40', count: 850, label: 'Fair' },
          { score: '41-60', count: 1330, label: 'Moderate' },
          { score: '61-80', count: 1420, label: 'Good' },
          { score: '81-100', count: 270, label: 'Excellent' }
        ];
      default:
        return baseDistribution;
    }
  };

  const data = generateDistributionData(segmentId);

  // Helper to get color based on score category
  const getScoreColor = (score: string) => {
    switch (score) {
      case '0-20': return '#ef4444'; // Red for Poor
      case '21-40': return '#f97316'; // Orange for Fair
      case '41-60': return '#eab308'; // Yellow for Moderate
      case '61-80': return '#84cc16'; // Light Green for Good
      case '81-100': return '#22c55e'; // Green for Excellent
      default: return '#94a3b8'; // Default gray
    }
  };

  // Calculate basic statistics
  const totalMembers = data.reduce((sum, item) => sum + item.count, 0);
  const avgScore = data.reduce((sum, item, _, arr) => {
    // Estimate the midpoint of each score range
    const midScore = parseInt(item.score.split('-')[0]) + 10;
    return sum + (midScore * item.count / totalMembers);
  }, 0).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-sm text-muted-foreground mb-1">Average Score</div>
            <div className="text-3xl font-bold">{avgScore}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-sm text-muted-foreground mb-1">Low Scores (0-40)</div>
            <div className="text-3xl font-bold">
              {((data[0].count + data[1].count) / totalMembers * 100).toFixed(1)}%
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-sm text-muted-foreground mb-1">High Scores (61-100)</div>
            <div className="text-3xl font-bold">
              {((data[3].count + data[4].count) / totalMembers * 100).toFixed(1)}%
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="score" 
              tickFormatter={(value) => `${value} (${data.find(d => d.score === value)?.label})`}
              angle={-30} 
              textAnchor="end" 
              height={70}
            />
            <YAxis />
            <Tooltip 
              formatter={(value) => [`${value.toLocaleString()} members`, 'Count']}
              labelFormatter={(label) => {
                const item = data.find(d => d.score === label);
                return `${label} (${item?.label})`;
              }}
            />
            <Bar 
              dataKey="count" 
              name="Members" 
              barSize={60}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getScoreColor(entry.score)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-slate-50 p-4 rounded-md">
        <h3 className="text-sm font-semibold mb-2">About Financial Health Scores</h3>
        <p className="text-sm text-muted-foreground">
          Financial health scores are calculated based on a combination of factors including savings ratio, debt-to-income ratio, 
          emergency fund availability, credit score, and consistent income. Scores range from 0-100 with higher scores indicating 
          better financial health.
        </p>
      </div>
    </div>
  );
};

export default MemberScoreDistribution;
