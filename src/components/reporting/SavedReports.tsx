
import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { 
  MoreHorizontal, 
  Copy, 
  Trash, 
  Edit, 
  Calendar, 
  Download,
  FolderOpen 
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Sample saved reports data
const sampleSavedReports = [
  {
    id: '1',
    title: 'Monthly Financial Health Overview',
    description: 'Overview of key financial health metrics across member segments',
    createdAt: '2025-04-12T10:30:00Z',
    metrics: 8,
    lastEdited: '2025-04-28T15:45:00Z',
  },
  {
    id: '2',
    title: 'Product Performance Report',
    description: 'Detailed analysis of product usage and performance',
    createdAt: '2025-04-05T14:20:00Z',
    metrics: 6,
    lastEdited: '2025-04-22T09:15:00Z',
  },
  {
    id: '3',
    title: 'Member Demographics Analysis',
    description: 'Breakdown of member demographics and engagement',
    createdAt: '2025-03-28T09:10:00Z',
    metrics: 5,
    lastEdited: '2025-04-18T11:30:00Z',
  },
  {
    id: '4',
    title: 'Loan Performance Dashboard',
    description: 'Analysis of loan performance across different categories',
    createdAt: '2025-03-15T16:45:00Z',
    metrics: 7,
    lastEdited: '2025-04-10T13:20:00Z',
  },
];

const SavedReports = () => {
  const [reports, setReports] = useState(sampleSavedReports);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleDeleteReport = (id: string) => {
    setReports(reports.filter(report => report.id !== id));
    toast({
      title: "Report Deleted",
      description: "The report has been removed from your saved templates."
    });
  };

  const handleDuplicateReport = (id: string) => {
    const reportToDuplicate = reports.find(report => report.id === id);
    if (reportToDuplicate) {
      const newReport = {
        ...reportToDuplicate,
        id: `${Date.now()}`,
        title: `${reportToDuplicate.title} (Copy)`,
        createdAt: new Date().toISOString(),
        lastEdited: new Date().toISOString(),
      };
      setReports([...reports, newReport]);
      toast({
        title: "Report Duplicated",
        description: "A copy of the report has been created."
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Saved Report Templates</CardTitle>
              <CardDescription>
                Manage your saved report templates. Edit, duplicate, or delete as needed.
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <FolderOpen className="h-4 w-4 mr-2" />
              Import Template
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>A list of your saved report templates.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Report Name</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Edited</TableHead>
                <TableHead>Metrics</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">
                    <div>
                      <div>{report.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">{report.description}</div>
                    </div>
                  </TableCell>
                  <TableCell>{formatDate(report.createdAt)}</TableCell>
                  <TableCell>{formatDate(report.lastEdited)}</TableCell>
                  <TableCell>{report.metrics}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => {
                          toast({
                            title: "Report Loaded",
                            description: "The report has been loaded in the editor."
                          });
                        }}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDuplicateReport(report.id)}>
                          <Copy className="mr-2 h-4 w-4" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => {
                          toast({
                            title: "Schedule Report",
                            description: "Opening scheduling options for this report."
                          });
                        }}>
                          <Calendar className="mr-2 h-4 w-4" />
                          Schedule
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {
                          toast({
                            title: "Export Report",
                            description: "Preparing your report for download."
                          });
                        }}>
                          <Download className="mr-2 h-4 w-4" />
                          Export
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                          onClick={() => handleDeleteReport(report.id)}
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default SavedReports;
