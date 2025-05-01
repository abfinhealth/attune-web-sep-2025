
import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectManagement from '@/components/implementation/ProjectManagement';
import MilestoneTracking from '@/components/implementation/MilestoneTracking';
import StatusDashboard from '@/components/implementation/StatusDashboard';
import SuccessMetrics from '@/components/implementation/SuccessMetrics';
import KnowledgeResources from '@/components/implementation/KnowledgeResources';

const ImplementationTracking = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Implementation Tracking</h1>
          <p className="text-muted-foreground">
            Track implementation progress, milestones, and success metrics for financial health initiatives
          </p>
        </div>
        
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger value="projects">Project Management</TabsTrigger>
            <TabsTrigger value="milestones">Milestone Tracking</TabsTrigger>
            <TabsTrigger value="status">Status Dashboards</TabsTrigger>
            <TabsTrigger value="metrics">Success Metrics</TabsTrigger>
            <TabsTrigger value="knowledge">Knowledge Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects" className="space-y-4">
            <ProjectManagement />
          </TabsContent>
          
          <TabsContent value="milestones" className="space-y-4">
            <MilestoneTracking />
          </TabsContent>
          
          <TabsContent value="status" className="space-y-4">
            <StatusDashboard />
          </TabsContent>
          
          <TabsContent value="metrics" className="space-y-4">
            <SuccessMetrics />
          </TabsContent>
          
          <TabsContent value="knowledge" className="space-y-4">
            <KnowledgeResources />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ImplementationTracking;
