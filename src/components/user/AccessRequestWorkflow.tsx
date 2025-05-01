
import { useState } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Form, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage,
  FormDescription
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from '@/hooks/use-toast';
import { AccessRequestIcon, CheckCircleIcon, XCircleIcon, ClockIcon } from 'lucide-react';

// Define access request status
type RequestStatus = 'pending' | 'approved' | 'rejected';

// Define access request interface
interface AccessRequest {
  id: number;
  requesterId: number;
  requesterName: string;
  requestType: 'new_access' | 'role_change' | 'temporary_access';
  resourceRequested: string;
  justification: string;
  status: RequestStatus;
  dateRequested: string;
  reviewedBy?: string;
  reviewDate?: string;
  expirationDate?: string;
}

// Sample mock data for access requests
const mockAccessRequests: AccessRequest[] = [
  {
    id: 1,
    requesterId: 4,
    requesterName: 'Sarah Williams',
    requestType: 'role_change',
    resourceRequested: 'Executive Dashboard Access',
    justification: 'Need to present quarterly metrics to the board.',
    status: 'pending',
    dateRequested: '2025-04-30 09:15:22',
  },
  {
    id: 2,
    requesterId: 3,
    requesterName: 'Mike Johnson',
    requestType: 'temporary_access',
    resourceRequested: 'Product Development Database',
    justification: 'Temporary access needed for marketing campaign analysis.',
    status: 'approved',
    dateRequested: '2025-04-28 14:22:45',
    reviewedBy: 'John Smith',
    reviewDate: '2025-04-29 11:05:18',
    expirationDate: '2025-05-15 23:59:59',
  },
  {
    id: 3,
    requesterId: 5,
    requesterName: 'Alex Chen',
    requestType: 'new_access',
    resourceRequested: 'HR Personnel Records',
    justification: 'Need to update department employee information.',
    status: 'rejected',
    dateRequested: '2025-04-27 16:45:30',
    reviewedBy: 'John Smith',
    reviewDate: '2025-04-28 09:30:12',
  }
];

// Form schema for access requests
const accessRequestSchema = z.object({
  requestType: z.enum(['new_access', 'role_change', 'temporary_access']),
  resourceRequested: z.string().min(3, { message: 'Resource name is required' }),
  justification: z.string().min(10, { message: 'Please provide detailed justification' }),
  expirationDate: z.string().optional(),
});

type AccessRequestFormValues = z.infer<typeof accessRequestSchema>;

// Form schema for reviewing requests
const reviewRequestSchema = z.object({
  status: z.enum(['approved', 'rejected']),
  reviewNotes: z.string().optional(),
  expirationDate: z.string().optional(),
});

type ReviewRequestFormValues = z.infer<typeof reviewRequestSchema>;

const AccessRequestWorkflow = () => {
  const [accessRequests, setAccessRequests] = useState<AccessRequest[]>(mockAccessRequests);
  const [newRequestDialogOpen, setNewRequestDialogOpen] = useState(false);
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState<number | null>(null);

  // Initialize access request form
  const accessRequestForm = useForm<AccessRequestFormValues>({
    resolver: zodResolver(accessRequestSchema),
    defaultValues: {
      requestType: 'new_access',
      resourceRequested: '',
      justification: '',
    },
  });

  // Initialize review form
  const reviewForm = useForm<ReviewRequestFormValues>({
    resolver: zodResolver(reviewRequestSchema),
    defaultValues: {
      status: 'approved',
      reviewNotes: '',
    },
  });

  // Handle submitting new access request
  const onSubmitAccessRequest = (values: AccessRequestFormValues) => {
    const newRequest: AccessRequest = {
      id: Math.max(0, ...accessRequests.map(req => req.id)) + 1,
      requesterId: 4, // Current user ID - in a real app this would be dynamic
      requesterName: 'Sarah Williams', // Current user name
      requestType: values.requestType,
      resourceRequested: values.resourceRequested,
      justification: values.justification,
      status: 'pending',
      dateRequested: new Date().toISOString().replace('T', ' ').substring(0, 19),
      expirationDate: values.expirationDate,
    };

    setAccessRequests([newRequest, ...accessRequests]);
    setNewRequestDialogOpen(false);
    accessRequestForm.reset();

    toast({
      title: "Access request submitted",
      description: "Your request has been submitted for review.",
    });
  };

  // Handle submitting access request review
  const onSubmitReview = (values: ReviewRequestFormValues) => {
    if (selectedRequestId) {
      setAccessRequests(accessRequests.map(req => 
        req.id === selectedRequestId ? {
          ...req,
          status: values.status,
          reviewedBy: 'John Smith', // Current admin user
          reviewDate: new Date().toISOString().replace('T', ' ').substring(0, 19),
          expirationDate: values.expirationDate,
        } : req
      ));

      setReviewDialogOpen(false);
      setSelectedRequestId(null);
      reviewForm.reset();

      toast({
        title: "Request reviewed",
        description: `Access request has been ${values.status}.`,
      });
    }
  };

  // Handle opening the review dialog
  const handleReviewRequest = (requestId: number) => {
    setSelectedRequestId(requestId);
    setReviewDialogOpen(true);

    // Optionally, pre-fill form fields based on the selected request
    const selectedRequest = accessRequests.find(req => req.id === requestId);
    if (selectedRequest) {
      reviewForm.reset({
        status: 'approved',
        reviewNotes: '',
        expirationDate: selectedRequest.expirationDate,
      });
    }
  };

  // Get status badge color
  const getStatusBadge = (status: RequestStatus) => {
    switch(status) {
      case 'pending':
        return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Pending</Badge>;
      case 'approved':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Approved</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Rejected</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  // Get request type display text
  const getRequestTypeDisplay = (type: 'new_access' | 'role_change' | 'temporary_access') => {
    switch(type) {
      case 'new_access':
        return 'New Access';
      case 'role_change':
        return 'Role Change';
      case 'temporary_access':
        return 'Temporary Access';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold flex items-center">
          <AccessRequestIcon className="mr-2 h-5 w-5" />
          Access Request Workflow
        </h2>
        <Dialog open={newRequestDialogOpen} onOpenChange={setNewRequestDialogOpen}>
          <DialogTrigger asChild>
            <Button>Request Access</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>New Access Request</DialogTitle>
            </DialogHeader>
            <Form {...accessRequestForm}>
              <form onSubmit={accessRequestForm.handleSubmit(onSubmitAccessRequest)} className="space-y-4">
                <FormField
                  control={accessRequestForm.control}
                  name="requestType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Request Type</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a request type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="new_access">New Access</SelectItem>
                          <SelectItem value="role_change">Role Change</SelectItem>
                          <SelectItem value="temporary_access">Temporary Access</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={accessRequestForm.control}
                  name="resourceRequested"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Resource/Access Needed</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g. HR Module, Executive Dashboard" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={accessRequestForm.control}
                  name="justification"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Justification</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please explain why you need this access..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {accessRequestForm.watch('requestType') === 'temporary_access' && (
                  <FormField
                    control={accessRequestForm.control}
                    name="expirationDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expiration Date</FormLabel>
                        <FormControl>
                          <Input type="datetime-local" {...field} />
                        </FormControl>
                        <FormDescription>
                          When should this access automatically expire?
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <div className="flex justify-end gap-2 pt-2">
                  <Button variant="outline" type="button" onClick={() => setNewRequestDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    Submit Request
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-white rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Requester</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Resource</TableHead>
              <TableHead>Submitted</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Expires</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {accessRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">{request.requesterName}</TableCell>
                <TableCell>{getRequestTypeDisplay(request.requestType)}</TableCell>
                <TableCell>{request.resourceRequested}</TableCell>
                <TableCell className="text-xs">{request.dateRequested}</TableCell>
                <TableCell>{getStatusBadge(request.status)}</TableCell>
                <TableCell className="text-xs">
                  {request.expirationDate || '-'}
                </TableCell>
                <TableCell>
                  {request.status === 'pending' && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleReviewRequest(request.id)}
                    >
                      Review
                    </Button>
                  )}
                  {request.status !== 'pending' && (
                    <span className="text-xs text-gray-500">
                      {request.reviewedBy ? `Reviewed by ${request.reviewedBy}` : ''}
                    </span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Review Dialog */}
      <Dialog open={reviewDialogOpen} onOpenChange={setReviewDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Review Access Request</DialogTitle>
          </DialogHeader>
          <Form {...reviewForm}>
            <form onSubmit={reviewForm.handleSubmit(onSubmitReview)} className="space-y-4">
              <FormField
                control={reviewForm.control}
                name="status"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Decision</FormLabel>
                    <div className="flex gap-4">
                      <div 
                        className={`flex flex-col items-center p-3 rounded-lg border-2 cursor-pointer ${field.value === 'approved' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                        onClick={() => field.onChange('approved')}
                      >
                        <CheckCircleIcon className="h-6 w-6 text-green-500 mb-1" />
                        <span>Approve</span>
                      </div>
                      <div 
                        className={`flex flex-col items-center p-3 rounded-lg border-2 cursor-pointer ${field.value === 'rejected' ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                        onClick={() => field.onChange('rejected')}
                      >
                        <XCircleIcon className="h-6 w-6 text-red-500 mb-1" />
                        <span>Reject</span>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={reviewForm.control}
                name="reviewNotes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Review Notes</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Add any notes about this decision..."
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {reviewForm.watch('status') === 'approved' && (
                <FormField
                  control={reviewForm.control}
                  name="expirationDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Set Expiration Date</FormLabel>
                      <div className="flex items-center gap-2">
                        <ClockIcon className="h-4 w-4 text-gray-500" />
                        <FormControl>
                          <Input type="datetime-local" {...field} />
                        </FormControl>
                      </div>
                      <FormDescription>
                        Leave blank for indefinite access
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <div className="flex justify-end gap-2 pt-2">
                <Button variant="outline" type="button" onClick={() => setReviewDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  Submit Review
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AccessRequestWorkflow;
