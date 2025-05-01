
import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ReportBuilder from '@/components/reporting/ReportBuilder';
import SavedReports from '@/components/reporting/SavedReports';
import ScheduledReports from '@/components/reporting/ScheduledReports';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CustomReporting = () => {
  const [activeTab, setActiveTab] = useState<string>("builder");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Custom Reporting</h1>
          <p className="text-muted-foreground mt-2">
            Build, save, schedule, and export custom reports.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 md:w-[400px]">
            <TabsTrigger value="builder">Report Builder</TabsTrigger>
            <TabsTrigger value="saved">Saved Templates</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="builder" className="mt-6">
            <ReportBuilder />
          </TabsContent>
          <TabsContent value="saved" className="mt-6">
            <SavedReports />
          </TabsContent>
          <TabsContent value="scheduled" className="mt-6">
            <ScheduledReports />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default CustomReporting;
