
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle
} from '@/components/ui/resizable';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { 
  LayoutGrid, 
  LayoutList, 
  Save, 
  CalendarDays, 
  Download,
  FileText,
  FileExport
} from 'lucide-react';
import ReportVisualization from './ReportVisualization';
import ReportMetricsList from './ReportMetricsList';
import ExportOptions from './ExportOptions';

// Types for our report builder
type MetricItem = {
  id: string;
  type: 'chart' | 'table' | 'stat';
  title: string;
  description: string;
  category: string;
};

type ReportConfig = {
  title: string;
  description: string;
  metrics: MetricItem[];
  layout: 'grid' | 'list';
};

// Initial empty report configuration
const initialReportConfig: ReportConfig = {
  title: 'New Report',
  description: 'Report description',
  metrics: [],
  layout: 'grid'
};

const ReportBuilder = () => {
  const [reportConfig, setReportConfig] = useState<ReportConfig>(initialReportConfig);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [reportName, setReportName] = useState('');
  const [reportDesc, setReportDesc] = useState('');
  
  // Handle drag and drop of metrics
  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const { source, destination } = result;
    
    // If we're dragging from the available metrics to the report
    if (source.droppableId === 'availableMetrics' && destination.droppableId === 'reportMetrics') {
      const draggedMetric = availableMetrics[source.index];
      
      setReportConfig(prev => ({
        ...prev,
        metrics: [...prev.metrics, { ...draggedMetric, id: `${draggedMetric.id}-${Date.now()}` }]
      }));
    }
    
    // If we're reordering within the report
    if (source.droppableId === 'reportMetrics' && destination.droppableId === 'reportMetrics') {
      const newMetrics = Array.from(reportConfig.metrics);
      const [movedMetric] = newMetrics.splice(source.index, 1);
      newMetrics.splice(destination.index, 0, movedMetric);
      
      setReportConfig(prev => ({
        ...prev,
        metrics: newMetrics
      }));
    }
    
    // If we're removing a metric from the report
    if (source.droppableId === 'reportMetrics' && destination.droppableId === 'availableMetrics') {
      const newMetrics = Array.from(reportConfig.metrics);
      newMetrics.splice(source.index, 1);
      
      setReportConfig(prev => ({
        ...prev,
        metrics: newMetrics
      }));
    }
  };

  const toggleLayout = () => {
    setReportConfig(prev => ({
      ...prev,
      layout: prev.layout === 'grid' ? 'list' : 'grid'
    }));
  };
  
  const handleSaveReport = () => {
    // In a real app, this would save to a database
    const savedReport = {
      ...reportConfig,
      title: reportName || 'Untitled Report',
      description: reportDesc || 'No description provided'
    };
    
    console.log('Saved report:', savedReport);
    toast({
      title: "Report Saved",
      description: `${savedReport.title} has been saved as a template.`
    });
    
    setSaveDialogOpen(false);
  };
  
  const handleExportReport = (format: 'pdf' | 'excel' | 'powerpoint') => {
    // In a real app, this would generate and download the report
    console.log(`Exporting as ${format}:`, reportConfig);
    toast({
      title: `Export as ${format.toUpperCase()}`,
      description: `Your report is being prepared for download.`
    });
  };

  // Sample metrics that can be added to the report
  const availableMetrics: MetricItem[] = [
    { id: 'financial-health', type: 'chart', title: 'Financial Health Score', description: 'Average financial health score over time', category: 'Financial Health' },
    { id: 'engagement', type: 'chart', title: 'Engagement Metrics', description: 'User engagement with financial tools', category: 'Engagement' },
    { id: 'deposits', type: 'chart', title: 'Deposit Growth', description: 'Deposit growth over time', category: 'Growth' },
    { id: 'loans', type: 'table', title: 'Loan Performance', description: 'Performance metrics for various loan products', category: 'Loans' },
    { id: 'demographics', type: 'chart', title: 'Member Demographics', description: 'Age, income, and other member demographics', category: 'Demographics' },
    { id: 'products', type: 'table', title: 'Product Adoption', description: 'Adoption rates for various products', category: 'Products' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Report Builder</CardTitle>
          <CardDescription>
            Drag and drop metrics to build your custom report. Click and drag to reorder.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DragDropContext onDragEnd={onDragEnd}>
            <ResizablePanelGroup direction="horizontal" className="min-h-[600px] rounded-lg border">
              <ResizablePanel defaultSize={25} minSize={20}>
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b px-4 py-3">
                    <h3 className="font-medium">Available Metrics</h3>
                  </div>
                  <Droppable droppableId="availableMetrics">
                    {(provided) => (
                      <div 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="flex-1 overflow-auto p-4"
                      >
                        <ReportMetricsList metrics={availableMetrics} />
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              </ResizablePanel>
              
              <ResizableHandle withHandle />
              
              <ResizablePanel>
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b px-4 py-3">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{reportConfig.title}</h3>
                      <span className="text-sm text-muted-foreground">
                        {reportConfig.metrics.length} metrics
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={toggleLayout}
                        title={`Switch to ${reportConfig.layout === 'grid' ? 'list' : 'grid'} layout`}
                      >
                        {reportConfig.layout === 'grid' ? <LayoutList className="h-4 w-4" /> : <LayoutGrid className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  
                  <Droppable droppableId="reportMetrics">
                    {(provided) => (
                      <div 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="flex-1 overflow-auto p-4"
                      >
                        <ReportVisualization 
                          metrics={reportConfig.metrics} 
                          layout={reportConfig.layout} 
                        />
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </DragDropContext>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <div className="flex flex-wrap justify-between w-full gap-2">
            <div className="flex gap-2">
              <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <Save className="mr-2 h-4 w-4" />
                    Save Template
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Save Report Template</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="report-name">Report Name</Label>
                      <Input 
                        id="report-name" 
                        value={reportName} 
                        onChange={(e) => setReportName(e.target.value)} 
                        placeholder="Enter report name" 
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="report-desc">Description</Label>
                      <Input 
                        id="report-desc" 
                        value={reportDesc} 
                        onChange={(e) => setReportDesc(e.target.value)} 
                        placeholder="Enter report description" 
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleSaveReport}>Save Report</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    Schedule
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Schedule Report</DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="text-muted-foreground mb-4">
                      Set up automated delivery of this report.
                    </p>
                    <p>Scheduling functionality would go here.</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <div>
              <ExportOptions onExport={handleExportReport} />
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ReportBuilder;
