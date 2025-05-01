
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardLayout from '@/components/layout/DashboardLayout';
import GoalTracker from '@/components/strategic/GoalTracker';
import PrioritizationMatrix from '@/components/strategic/PrioritizationMatrix';
import ResourceAllocation from '@/components/strategic/ResourceAllocation';
import StakeholderAlignment from '@/components/strategic/StakeholderAlignment';

const StrategicPlanning = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Strategic Planning Tools</h1>
          <p className="text-muted-foreground">
            Tools to help plan, prioritize, and implement financial health initiatives
          </p>
        </div>
        
        <Tabs defaultValue="goals" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="goals">Goal Tracking</TabsTrigger>
            <TabsTrigger value="prioritization">Prioritization</TabsTrigger>
            <TabsTrigger value="resources">Resource Allocation</TabsTrigger>
            <TabsTrigger value="stakeholders">Stakeholder Alignment</TabsTrigger>
          </TabsList>
          
          <TabsContent value="goals" className="space-y-4">
            <GoalTracker />
          </TabsContent>
          
          <TabsContent value="prioritization" className="space-y-4">
            <PrioritizationMatrix />
          </TabsContent>
          
          <TabsContent value="resources" className="space-y-4">
            <ResourceAllocation />
          </TabsContent>
          
          <TabsContent value="stakeholders" className="space-y-4">
            <StakeholderAlignment />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default StrategicPlanning;
