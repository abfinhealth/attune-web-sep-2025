
import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
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
  Pause,
  Play, 
  Edit,
  Trash,
  Calendar,
  Users,
  Mail,
  FileCheck
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

// Sample scheduled reports data
const sampleScheduledReports = [
  {
    id: '1',
    reportName: 'Monthly Financial Health Overview',
    schedule: 'Monthly (1st day)',
    recipients: 'Executive Team (5)',
    format: 'PDF',
    status: 'active',
    nextDelivery: '2025-05-01T09:00:00Z',
    lastDelivered: '2025-04-01T09:00:00Z',
  },
  {
    id: '2',
    reportName: 'Weekly Product Performance',
    schedule: 'Weekly (Monday)',
    recipients: 'Product Team (8)',
    format: 'Excel',
    status: 'active',
    nextDelivery: '2025-05-06T08:00:00Z',
    lastDelivered: '2025-04-29T08:00:00Z',
  },
  {
    id: '3',
    reportName: 'Quarterly Member Demographics',
    schedule: 'Quarterly',
    recipients: 'Marketing Team (6)',
    format: 'PowerPoint',
    status: 'paused',
    nextDelivery: '2025-07-01T10:00:00Z',
    lastDelivered: '2025-04-01T10:00:00Z',
  },
  {
    id: '4',
    reportName: 'Daily Loan Application Summary',
    schedule: 'Daily (5PM)',
    recipients: 'Loans Team (4)',
    format: 'PDF',
    status: 'active',
    nextDelivery: '2025-05-02T17:00:00Z',
    lastDelivered: '2025-05-01T17:00:00Z',
  },
];

const ScheduledReports = () => {
  const [reports, setReports] = useState(sampleScheduledReports);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  const handleToggleStatus = (id: string) => {
    setReports(reports.map(report => {
      if (report.id === id) {
        const newStatus = report.status === 'active' ? 'paused' : 'active';
        toast({
          title: `Report ${newStatus === 'active' ? 'Activated' : 'Paused'}`,
          description: `Delivery for "${report.reportName}" has been ${newStatus}.`
        });
        return { ...report, status: newStatus };
      }
      return report;
    }));
  };

  const handleDeleteSchedule = (id: string) => {
    const reportToDelete = reports.find(report => report.id === id);
    setReports(reports.filter(report => report.id !== id));
    toast({
      title: "Schedule Deleted",
      description: `Schedule for "${reportToDelete?.reportName}" has been deleted.`
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Scheduled Report Delivery</CardTitle>
              <CardDescription>
                Manage your automated report delivery schedules.
              </CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Calendar className="mr-2 h-4 w-4" />
                  New Schedule
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Report Schedule</DialogTitle>
                  <DialogDescription>
                    Set up automated delivery of a report to specific recipients.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-muted-foreground">
                    This would contain a form to set up a new scheduled report with options
                    for frequency, recipients, format, etc.
                  </p>
                </div>
                <DialogFooter>
                  <Button onClick={() => {
                    toast({
                      title: "Schedule Created",
                      description: "Your new report schedule has been created."
                    });
                  }}>
                    Create Schedule
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>A list of your scheduled report deliveries.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Report</TableHead>
                <TableHead>Schedule</TableHead>
                <TableHead>Next Delivery</TableHead>
                <TableHead>Recipients</TableHead>
                <TableHead>Format</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">{report.reportName}</TableCell>
                  <TableCell>{report.schedule}</TableCell>
                  <TableCell>{formatDate(report.nextDelivery)}</TableCell>
                  <TableCell>{report.recipients}</TableCell>
                  <TableCell>{report.format}</TableCell>
                  <TableCell>
                    <Badge variant={report.status === 'active' ? 'default' : 'outline'}>
                      {report.status === 'active' ? 'Active' : 'Paused'}
                    </Badge>
                  </TableCell>
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
                        <DropdownMenuItem onClick={() => handleToggleStatus(report.id)}>
                          {report.status === 'active' ? (
                            <>
                              <Pause className="mr-2 h-4 w-4" />
                              Pause Schedule
                            </>
                          ) : (
                            <>
                              <Play className="mr-2 h-4 w-4" />
                              Resume Schedule
                            </>
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {
                          toast({
                            title: "Edit Schedule",
                            description: "Opening schedule editor."
                          });
                        }}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Schedule
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => {
                          toast({
                            title: "Edit Recipients",
                            description: "Opening recipient editor."
                          });
                        }}>
                          <Users className="mr-2 h-4 w-4" />
                          Edit Recipients
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {
                          toast({
                            title: "Send Now",
                            description: "Sending report immediately to all recipients."
                          });
                        }}>
                          <Mail className="mr-2 h-4 w-4" />
                          Send Now
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {
                          toast({
                            title: "View History",
                            description: "Showing delivery history."
                          });
                        }}>
                          <FileCheck className="mr-2 h-4 w-4" />
                          View History
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                          onClick={() => handleDeleteSchedule(report.id)}
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash className="mr-2 h-4 w-4" />
                          Delete Schedule
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

export default ScheduledReports;
