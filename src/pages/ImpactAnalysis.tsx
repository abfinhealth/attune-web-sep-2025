
import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import InitiativeTracking from '@/components/impact/InitiativeTracking';
import BeforeAfterComparison from '@/components/impact/BeforeAfterComparison';
import ControlGroupAnalysis from '@/components/impact/ControlGroupAnalysis';
import ROICalculation from '@/components/impact/ROICalculation';

const ImpactAnalysis = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Impact Analysis</h1>
          <p className="text-muted-foreground">
            Measure and analyze the impact of financial health initiatives
          </p>
        </div>
        
        <Tabs defaultValue="initiatives" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="initiatives">Initiative Tracking</TabsTrigger>
            <TabsTrigger value="comparison">Before/After</TabsTrigger>
            <TabsTrigger value="control">Control Group</TabsTrigger>
            <TabsTrigger value="roi">ROI Calculation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="initiatives" className="space-y-4">
            <InitiativeTracking />
          </TabsContent>
          
          <TabsContent value="comparison" className="space-y-4">
            <BeforeAfterComparison />
          </TabsContent>
          
          <TabsContent value="control" className="space-y-4">
            <ControlGroupAnalysis />
          </TabsContent>
          
          <TabsContent value="roi" className="space-y-4">
            <ROICalculation />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ImpactAnalysis;
