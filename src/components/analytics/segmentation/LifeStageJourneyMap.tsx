
import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface LifeStageJourneyMapProps {
  segmentId: string;
}

const LifeStageJourneyMap = ({ segmentId }: LifeStageJourneyMapProps) => {
  const [selectedJourney, setSelectedJourney] = useState('financial');
  
  // Define life stages
  const lifeStages = [
    'Young Adult',
    'Career Growth',
    'Family Formation',
    'Peak Earning',
    'Pre-Retirement',
    'Retirement'
  ];

  // Generate financial journey data
  const generateFinancialJourneyData = (segmentId: string) => {
    // Base financial journey
    const baseJourney = [
      { 
        stage: 'Young Adult', 
        score: 42,
        savings: 5200,
        debt: 18600,
        netWorth: -13400,
        income: 38000
      },
      { 
        stage: 'Career Growth', 
        score: 58,
        savings: 24000,
        debt: 42000,
        netWorth: -18000,
        income: 62000
      },
      { 
        stage: 'Family Formation', 
        score: 64,
        savings: 58000,
        debt: 185000,
        netWorth: 85000,
        income: 86000
      },
      { 
        stage: 'Peak Earning', 
        score: 72,
        savings: 210000,
        debt: 165000,
        netWorth: 385000,
        income: 110000
      },
      { 
        stage: 'Pre-Retirement', 
        score: 78,
        savings: 540000,
        debt: 120000,
        netWorth: 680000,
        income: 96000
      },
      { 
        stage: 'Retirement', 
        score: 82,
        savings: 720000,
        debt: 65000,
        netWorth: 875000,
        income: 68000
      },
    ];

    // Modify data based on segment
    if (segmentId === 'high-score') {
      return baseJourney.map(stage => ({
        ...stage,
        score: Math.min(100, stage.score * 1.2),
        savings: stage.savings * 1.6,
        debt: stage.debt * 0.9,
        netWorth: stage.netWorth < 0 ? stage.netWorth * 0.7 : stage.netWorth * 1.8,
        income: stage.income * 1.3
      }));
    } else if (segmentId === 'low-score') {
      return baseJourney.map(stage => ({
        ...stage,
        score: stage.score * 0.7,
        savings: stage.savings * 0.5,
        debt: stage.debt * 1.4,
        netWorth: stage.netWorth < 0 ? stage.netWorth * 1.6 : stage.netWorth * 0.6,
        income: stage.income * 0.8
      }));
    }
    
    return baseJourney;
  };

  // Generate product journey data
  const generateProductJourneyData = (segmentId: string) => {
    return [
      { 
        stage: 'Young Adult',
        checking: 95,
        savings: 68,
        creditCard: 45,
        personalLoan: 24,
        autoLoan: 32,
        mortgage: 2,
        investment: 8,
        retirement: 12
      },
      { 
        stage: 'Career Growth',
        checking: 98,
        savings: 86,
        creditCard: 78,
        personalLoan: 32,
        autoLoan: 48,
        mortgage: 14,
        investment: 24,
        retirement: 42
      },
      { 
        stage: 'Family Formation',
        checking: 99,
        savings: 94,
        creditCard: 84,
        personalLoan: 28,
        autoLoan: 64,
        mortgage: 52,
        investment: 36,
        retirement: 58
      },
      { 
        stage: 'Peak Earning',
        checking: 99,
        savings: 96,
        creditCard: 88,
        personalLoan: 24,
        autoLoan: 58,
        mortgage: 68,
        investment: 56,
        retirement: 76
      },
      { 
        stage: 'Pre-Retirement',
        checking: 99,
        savings: 94,
        creditCard: 84,
        personalLoan: 18,
        autoLoan: 42,
        mortgage: 54,
        investment: 68,
        retirement: 88
      },
      { 
        stage: 'Retirement',
        checking: 98,
        savings: 92,
        creditCard: 76,
        personalLoan: 12,
        autoLoan: 24,
        mortgage: 32,
        investment: 72,
        retirement: 84
      },
    ];
  };

  // Generate key life events data
  const generateLifeEventsData = () => {
    return [
      { 
        stage: 'Young Adult',
        events: [
          'College graduation',
          'First full-time job',
          'First apartment rental',
          'Student loan repayment begins'
        ]
      },
      { 
        stage: 'Career Growth',
        events: [
          'Job promotions',
          'Relocation for work',
          'First major purchase',
          'Marriage'
        ]
      },
      { 
        stage: 'Family Formation',
        events: [
          'Home purchase',
          'Children',
          'School expenses',
          'Life insurance needs'
        ]
      },
      { 
        stage: 'Peak Earning',
        events: [
          'Career peak',
          'Children college expenses',
          'Caring for aging parents',
          'Maximum retirement contributions'
        ]
      },
      { 
        stage: 'Pre-Retirement',
        events: [
          'Empty nest',
          'Mortgage payoff',
          'Healthcare planning',
          'Retirement strategy finalization'
        ]
      },
      { 
        stage: 'Retirement',
        events: [
          'Retirement income begins',
          'Social Security benefits',
          'Estate planning',
          'Healthcare needs increase'
        ]
      },
    ];
  };

  const financialJourneyData = generateFinancialJourneyData(segmentId);
  const productJourneyData = generateProductJourneyData(segmentId);
  const lifeEventsData = generateLifeEventsData();

  // Define tabs for different journey views
  const journeyTabs = [
    { id: 'financial', name: 'Financial Journey' },
    { id: 'product', name: 'Product Journey' },
    { id: 'events', name: 'Life Events' },
  ];

  // Generate data for selected financial metric
  const [selectedMetric, setSelectedMetric] = useState('score');
  
  const metricOptions = [
    { id: 'score', name: 'Financial Health Score' },
    { id: 'savings', name: 'Savings ($)' },
    { id: 'debt', name: 'Debt ($)' },
    { id: 'netWorth', name: 'Net Worth ($)' },
    { id: 'income', name: 'Income ($)' },
  ];

  // Generate data for selected product metric
  const [selectedProduct, setSelectedProduct] = useState('checking');
  
  const productOptions = [
    { id: 'checking', name: 'Checking Account' },
    { id: 'savings', name: 'Savings Account' },
    { id: 'creditCard', name: 'Credit Card' },
    { id: 'personalLoan', name: 'Personal Loan' },
    { id: 'autoLoan', name: 'Auto Loan' },
    { id: 'mortgage', name: 'Mortgage' },
    { id: 'investment', name: 'Investment Account' },
    { id: 'retirement', name: 'Retirement Account' },
  ];

  // Format number with appropriate suffix
  const formatNumber = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`;
    }
    return `$${value}`;
  };

  return (
    <Tabs value={selectedJourney} onValueChange={setSelectedJourney}>
      <TabsList className="grid w-full grid-cols-3">
        {journeyTabs.map(tab => (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>
      
      <TabsContent value="financial" className="space-y-6 pt-4">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <h3 className="text-lg font-medium">Financial Journey Across Life Stages</h3>
          <Select value={selectedMetric} onValueChange={setSelectedMetric}>
            <SelectTrigger className="w-full md:w-[240px]">
              <SelectValue placeholder="Select metric" />
            </SelectTrigger>
            <SelectContent>
              {metricOptions.map(option => (
                <SelectItem key={option.id} value={option.id}>
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={financialJourneyData}
              margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="stage" />
              <YAxis 
                tickFormatter={(value) => 
                  selectedMetric === 'score' 
                    ? value 
                    : formatNumber(value)
                }
              />
              <Tooltip 
                formatter={(value) => [
                  selectedMetric === 'score' 
                    ? value 
                    : formatNumber(Number(value)), 
                  metricOptions.find(m => m.id === selectedMetric)?.name
                ]} 
              />
              <Legend />
              <Line
                type="monotone"
                dataKey={selectedMetric}
                stroke="#8884d8"
                strokeWidth={3}
                dot={{ r: 6 }}
                activeDot={{ r: 8 }}
                name={metricOptions.find(m => m.id === selectedMetric)?.name}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Average Financial Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(financialJourneyData.reduce((acc, item) => acc + item.score, 0) / financialJourneyData.length)}
              </div>
              <p className="text-sm text-muted-foreground">Across all life stages</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Peak Net Worth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(Math.max(...financialJourneyData.map(item => item.netWorth)))}
              </div>
              <p className="text-sm text-muted-foreground">
                {financialJourneyData.find(item => 
                  item.netWorth === Math.max(...financialJourneyData.map(i => i.netWorth))
                )?.stage} stage
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Peak Income</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(Math.max(...financialJourneyData.map(item => item.income)))}
              </div>
              <p className="text-sm text-muted-foreground">
                {financialJourneyData.find(item => 
                  item.income === Math.max(...financialJourneyData.map(i => i.income))
                )?.stage} stage
              </p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      
      <TabsContent value="product" className="space-y-6 pt-4">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <h3 className="text-lg font-medium">Product Usage Across Life Stages</h3>
          <Select value={selectedProduct} onValueChange={setSelectedProduct}>
            <SelectTrigger className="w-full md:w-[240px]">
              <SelectValue placeholder="Select product" />
            </SelectTrigger>
            <SelectContent>
              {productOptions.map(option => (
                <SelectItem key={option.id} value={option.id}>
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={productJourneyData}
              margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="stage" />
              <YAxis unit="%" domain={[0, 100]} />
              <Tooltip formatter={(value) => [`${value}%`, 'Usage']} />
              <Legend />
              <Line
                type="monotone"
                dataKey={selectedProduct}
                stroke="#82ca9d"
                strokeWidth={3}
                dot={{ r: 6 }}
                activeDot={{ r: 8 }}
                name={productOptions.find(p => p.id === selectedProduct)?.name}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Life Stage</TableHead>
                {productOptions.map(product => (
                  <TableHead key={product.id}>{product.name}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {productJourneyData.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{row.stage}</TableCell>
                  {productOptions.map(product => (
                    <TableCell key={product.id}>{row[product.id as keyof typeof row]}%</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TabsContent>
      
      <TabsContent value="events" className="space-y-6 pt-4">
        <h3 className="text-lg font-medium mb-4">Key Life Events By Stage</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lifeEventsData.map((stage, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{stage.stage}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  {stage.events.map((event, idx) => (
                    <li key={idx} className="text-sm">{event}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-slate-50 p-4 rounded-md mt-4">
          <h3 className="text-sm font-semibold mb-2">Understanding Life Stage Journey</h3>
          <p className="text-sm text-muted-foreground">
            The life stage journey maps out how members' needs, behaviors, and financial situations 
            evolve over time. Understanding these patterns helps in creating targeted offerings 
            and communications that align with members' current life circumstances and anticipate 
            their future needs.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default LifeStageJourneyMap;
