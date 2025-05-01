
import { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription 
} from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import MemberScoreDistribution from './segmentation/MemberScoreDistribution';
import DemographicFiltering from './segmentation/DemographicFiltering';
import ProductUsageCorrelation from './segmentation/ProductUsageCorrelation';
import LifeStageJourneyMap from './segmentation/LifeStageJourneyMap';

const SegmentationAnalysis = () => {
  const [activeSegment, setActiveSegment] = useState('all');
  const [activeView, setActiveView] = useState('score-distribution');

  // Segment definitions
  const segments = [
    { id: 'all', name: 'All Members', count: 28750 },
    { id: 'high-score', name: 'High Financial Health', count: 8420 },
    { id: 'mid-score', name: 'Average Financial Health', count: 12150 },
    { id: 'low-score', name: 'Needs Improvement', count: 8180 },
    { id: 'new-members', name: 'New Members (<6mo)', count: 4230 },
    { id: 'millennials', name: 'Millennials', count: 9860 },
    { id: 'gen-x', name: 'Gen X', count: 7540 },
    { id: 'boomers', name: 'Baby Boomers', count: 7210 },
    { id: 'gen-z', name: 'Gen Z', count: 4140 }
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <CardTitle>Member Segmentation Analysis</CardTitle>
            <CardDescription>Analyze member segments by various metrics and demographics</CardDescription>
          </div>
          <div className="w-full md:w-auto">
            <Select value={activeSegment} onValueChange={setActiveSegment}>
              <SelectTrigger className="w-full md:w-[260px]">
                <SelectValue placeholder="Select Segment" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Financial Health</SelectLabel>
                  <SelectItem value="all">All Members ({segments[0].count.toLocaleString()})</SelectItem>
                  <SelectItem value="high-score">High Financial Health ({segments[1].count.toLocaleString()})</SelectItem>
                  <SelectItem value="mid-score">Average Financial Health ({segments[2].count.toLocaleString()})</SelectItem>
                  <SelectItem value="low-score">Needs Improvement ({segments[3].count.toLocaleString()})</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Demographics</SelectLabel>
                  <SelectItem value="new-members">New Members &lt;6mo ({segments[4].count.toLocaleString()})</SelectItem>
                  <SelectItem value="millennials">Millennials ({segments[5].count.toLocaleString()})</SelectItem>
                  <SelectItem value="gen-x">Gen X ({segments[6].count.toLocaleString()})</SelectItem>
                  <SelectItem value="boomers">Baby Boomers ({segments[7].count.toLocaleString()})</SelectItem>
                  <SelectItem value="gen-z">Gen Z ({segments[8].count.toLocaleString()})</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="outline" className="bg-slate-50">
            Total: {segments.find(s => s.id === activeSegment)?.count.toLocaleString() || segments[0].count.toLocaleString()}
          </Badge>
          {activeSegment !== 'all' && (
            <Badge variant="outline" className="bg-slate-50">
              {(segments.find(s => s.id === activeSegment)?.count / segments[0].count * 100).toFixed(1)}% of membership
            </Badge>
          )}
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="pt-6">
        <Tabs value={activeView} onValueChange={setActiveView} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
            <TabsTrigger value="score-distribution">Score Distribution</TabsTrigger>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="product-usage">Product Usage</TabsTrigger>
            <TabsTrigger value="life-stages">Life Stages</TabsTrigger>
          </TabsList>

          <TabsContent value="score-distribution">
            <MemberScoreDistribution segmentId={activeSegment} />
          </TabsContent>

          <TabsContent value="demographics">
            <DemographicFiltering segmentId={activeSegment} />
          </TabsContent>

          <TabsContent value="product-usage">
            <ProductUsageCorrelation segmentId={activeSegment} />
          </TabsContent>

          <TabsContent value="life-stages">
            <LifeStageJourneyMap segmentId={activeSegment} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SegmentationAnalysis;
