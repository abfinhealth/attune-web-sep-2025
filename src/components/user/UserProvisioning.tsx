
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
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
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Separator } from '@/components/ui/separator';
import { UserIcon, UsersIcon, CheckIcon, XIcon, LockIcon } from 'lucide-react';

// Define User Provisioning Status
type ProvisioningStatus = 'pending' | 'active' | 'deprovisioning' | 'deprovisioned';

// Define User Provisioning Request
interface UserProvisioningRequest {
  id: number;
  name: string;
  email: string;
  department: string;
  requestedRole: string;
  startDate?: string;
  endDate?: string;
  status: ProvisioningStatus;
  requestedBy: string;
  requestDate: string;
  approvedBy?: string;
  approvedDate?: string;
  systems: {
    name: string;
    status: 'pending' | 'provisioned' | 'error';
  }[];
}

// Sample mock data for provisioning requests
const mockProvisioningRequests: UserProvisioningRequest[] = [
  {
    id: 101,
    name: 'Robert Taylor',
    email: 'robert.taylor@example.com',
    department: 'Marketing',
    requestedRole: 'Department',
    startDate: '2025-05-15',
    status: 'pending',
    requestedBy: 'Jane Doe',
    requestDate: '2025-05-01 08:15:30',
    systems: [
      { name: 'Email', status: 'pending' },
      { name: 'CRM', status: 'pending' },
      { name: 'Analytics Dashboard', status: 'pending' }
    ]
  },
  {
    id: 102,
    name: 'Amanda Johnson',
    email: 'amanda.johnson@example.com',
    department: 'Finance',
    requestedRole: 'Analyst',
    startDate: '2025-05-10',
    status: 'active',
    requestedBy: 'John Smith',
    requestDate: '2025-04-28 14:22:10',
    approvedBy: 'Jane Doe',
    approvedDate: '2025-04-29 09:15:45',
    systems: [
      { name: 'Email', status: 'provisioned' },
      { name: 'Finance System', status: 'provisioned' },
      { name: 'Analytics Dashboard', status: 'provisioned' }
    ]
  },
  {
    id: 103,
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    department: 'Sales',
    requestedRole: 'Department',
    startDate: '2025-05-01',
    endDate: '2025-08-31',
    status: 'active',
    requestedBy: 'Mike Johnson',
    requestDate: '2025-04-20 11:30:22',
    approvedBy: 'John Smith',
    approvedDate: '2025-04-22 10:45:15',
    systems: [
      { name: 'Email', status: 'provisioned' },
      { name: 'CRM', status: 'provisioned' },
      { name: 'Sales Dashboard', status: 'error' }
    ]
  },
  {
    id: 104,
    name: 'Michelle Lewis',
    email: 'michelle.lewis@example.com',
    department: 'Product',
    requestedRole: 'Department',
    status: 'deprovisioning',
    requestedBy: 'Sarah Williams',
    requestDate: '2025-01-15 09:30:00',
    approvedBy: 'John Smith',
    approvedDate: '2025-01-17 13:45:30',
    systems: [
      { name: 'Email', status: 'pending' },
      { name: 'Product System', status: 'provisioned' },
      { name: 'Analytics Dashboard', status: 'pending' }
    ]
  }
];

// Define available systems for provisioning
const availableSystems = [
  { id: 'email', name: 'Email' },
  { id: 'crm', name: 'CRM System' },
  { id: 'finance', name: 'Finance System' },
  { id: 'analytics', name: 'Analytics Dashboard' },
  { id: 'product', name: 'Product System' },
  { id: 'hr', name: 'HR System' },
  { id: 'sales', name: 'Sales Dashboard' },
  { id: 'marketing', name: 'Marketing Platform' }
];

// Form schema for new user provisioning
const provisioningSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  department: z.string().min(1, { message: 'Department is required' }),
  requestedRole: z.string().min(1, { message: 'Role is required' }),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  temporaryAccess: z.boolean().default(false),
  systems: z.array(z.string()).min(1, { message: 'At least one system must be selected' }),
  notes: z.string().optional(),
});

type ProvisioningFormValues = z.infer<typeof provisioningSchema>;

// Form schema for deprovisioning
const deprovisioningSchema = z.object({
  reason: z.string().min(5, { message: 'Please provide a reason for deprovisioning' }),
  effectiveDate: z.string().min(1, { message: 'Effective date is required' }),
  preserveData: z.boolean().default(true),
  preserveDuration: z.number().min(0).default(90),
});

type DeprovisioningFormValues = z.infer<typeof deprovisioningSchema>;

const UserProvisioning = () => {
  const { toast } = useToast();
  const [requests, setRequests] = useState<UserProvisioningRequest[]>(mockProvisioningRequests);
  const [newDialogOpen, setNewDialogOpen] = useState(false);
  const [deprovisionDialogOpen, setDeprovisionDialogOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [showDeprovisioned, setShowDeprovisioned] = useState(false);

  // Initialize provisioning form
  const provisioningForm = useForm<ProvisioningFormValues>({
    resolver: zodResolver(provisioningSchema),
    defaultValues: {
      name: '',
      email: '',
      department: '',
      requestedRole: '',
      temporaryAccess: false,
      systems: [],
      notes: '',
    }
  });

  // Initialize deprovisioning form
  const deprovisioningForm = useForm<DeprovisioningFormValues>({
    resolver: zodResolver(deprovisioningSchema),
    defaultValues: {
      reason: '',
      effectiveDate: new Date().toISOString().split('T')[0],
      preserveData: true,
      preserveDuration: 90,
    }
  });

  // Watch for temporary access checkbox changes
  const isTemporary = provisioningForm.watch('temporaryAccess');

  // Handle submitting new user provisioning
  const onSubmitProvisioning = (values: ProvisioningFormValues) => {
    const systemsToProvision = values.systems.map(sysId => {
      const system = availableSystems.find(s => s.id === sysId);
      return { 
        name: system?.name || sysId, 
        status: 'pending' as const 
      };
    });

    const newRequest: UserProvisioningRequest = {
      id: Math.max(0, ...requests.map(r => r.id)) + 1,
      name: values.name,
      email: values.email,
      department: values.department,
      requestedRole: values.requestedRole,
      startDate: values.startDate,
      endDate: values.endDate,
      status: 'pending',
      requestedBy: 'John Smith', // Current user
      requestDate: new Date().toISOString().replace('T', ' ').substring(0, 19),
      systems: systemsToProvision,
    };

    setRequests([newRequest, ...requests]);
    setNewDialogOpen(false);
    provisioningForm.reset();

    toast({
      title: "Provisioning request submitted",
      description: `Provisioning request for ${values.name} has been submitted.`,
    });
  };

  // Handle submitting deprovisioning
  const onSubmitDeprovisioning = (values: DeprovisioningFormValues) => {
    if (selectedUserId) {
      setRequests(requests.map(req => 
        req.id === selectedUserId ? {
          ...req,
          status: 'deprovisioning',
          endDate: values.effectiveDate,
        } : req
      ));

      setDeprovisionDialogOpen(false);
      setSelectedUserId(null);
      deprovisioningForm.reset();

      toast({
        title: "Deprovisioning initiated",
        description: "User deprovisioning process has been started.",
      });
    }
  };

  // Handle opening deprovisioning dialog
  const handleDeprovisionUser = (userId: number) => {
    setSelectedUserId(userId);
    setDeprovisionDialogOpen(true);

    // Reset form with fresh default values
    deprovisioningForm.reset({
      reason: '',
      effectiveDate: new Date().toISOString().split('T')[0],
      preserveData: true,
      preserveDuration: 90,
    });
  };

  // Handle approving a provisioning request
  const handleApproveRequest = (requestId: number) => {
    setRequests(requests.map(req => 
      req.id === requestId ? {
        ...req,
        status: 'active',
        approvedBy: 'John Smith', // Current admin user
        approvedDate: new Date().toISOString().replace('T', ' ').substring(0, 19),
        systems: req.systems.map(sys => ({ ...sys, status: 'provisioned' }))
      } : req
    ));

    toast({
      title: "Request approved",
      description: "Provisioning request has been approved and systems are being configured.",
    });
  };

  // Handle rejecting a provisioning request
  const handleRejectRequest = (requestId: number) => {
    if (confirm('Are you sure you want to reject this provisioning request?')) {
      // In a real app, you might not want to delete it but mark it as rejected
      setRequests(requests.filter(req => req.id !== requestId));

      toast({
        title: "Request rejected",
        description: "Provisioning request has been rejected.",
      });
    }
  };

  // Complete deprovisioning (mark as fully deprovisioned)
  const handleCompleteDeprovisioning = (requestId: number) => {
    setRequests(requests.map(req => 
      req.id === requestId ? {
        ...req,
        status: 'deprovisioned',
      } : req
    ));

    toast({
      title: "Deprovisioning completed",
      description: "User has been fully deprovisioned from all systems.",
    });
  };

  // Filter requests based on show deprovisioned option
  const filteredRequests = showDeprovisioned 
    ? requests 
    : requests.filter(req => req.status !== 'deprovisioned');

  // Get status badge color
  const getStatusBadge = (status: ProvisioningStatus) => {
    switch(status) {
      case 'pending':
        return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Pending</Badge>;
      case 'active':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Active</Badge>;
      case 'deprovisioning':
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Deprovisioning</Badge>;
      case 'deprovisioned':
        return <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">Deprovisioned</Badge>;
    }
  };

  // Get system status badge
  const getSystemStatusBadge = (status: 'pending' | 'provisioned' | 'error') => {
    switch(status) {
      case 'pending':
        return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Pending</Badge>;
      case 'provisioned':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Provisioned</Badge>;
      case 'error':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Error</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold flex items-center">
          <UsersIcon className="mr-2 h-5 w-5" />
          User Provisioning & Deprovisioning
        </h2>
        <Dialog open={newDialogOpen} onOpenChange={setNewDialogOpen}>
          <DialogTrigger asChild>
            <Button>New Provisioning Request</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>New User Provisioning Request</DialogTitle>
            </DialogHeader>
            <Form {...provisioningForm}>
              <form onSubmit={provisioningForm.handleSubmit(onSubmitProvisioning)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={provisioningForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter user name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={provisioningForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="user@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={provisioningForm.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Department</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select department" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Technology">Technology</SelectItem>
                            <SelectItem value="Marketing">Marketing</SelectItem>
                            <SelectItem value="Finance">Finance</SelectItem>
                            <SelectItem value="HR">Human Resources</SelectItem>
                            <SelectItem value="Product">Product</SelectItem>
                            <SelectItem value="Sales">Sales</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={provisioningForm.control}
                    name="requestedRole"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Admin">Admin</SelectItem>
                            <SelectItem value="Executive">Executive</SelectItem>
                            <SelectItem value="Department">Department</SelectItem>
                            <SelectItem value="Analyst">Analyst</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={provisioningForm.control}
                  name="temporaryAccess"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Temporary Access
                        </FormLabel>
                        <FormDescription>
                          This user will only need access for a limited time
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                
                {isTemporary && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={provisioningForm.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Start Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={provisioningForm.control}
                      name="endDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>End Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                <FormField
                  control={provisioningForm.control}
                  name="systems"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">Systems Access</FormLabel>
                        <FormDescription>
                          Select the systems this user needs access to
                        </FormDescription>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {availableSystems.map((system) => (
                          <FormField
                            key={system.id}
                            control={provisioningForm.control}
                            name="systems"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={system.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(system.id)}
                                      onCheckedChange={(checked) => {
                                        const updatedSystems = checked
                                          ? [...field.value, system.id]
                                          : field.value?.filter(
                                              (value) => value !== system.id
                                            );
                                        field.onChange(updatedSystems);
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {system.name}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={provisioningForm.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Notes</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any additional information for the request..."
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end gap-2 pt-2">
                  <Button variant="outline" type="button" onClick={() => setNewDialogOpen(false)}>
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
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <UserIcon className="mr-2 h-4 w-4" />
            Provisioning Requests
          </CardTitle>
          <CardDescription>
            Manage user access provisioning and deprovisioning workflows
          </CardDescription>
          <div className="flex items-center mt-2">
            <Checkbox 
              id="showDeprovisioned" 
              checked={showDeprovisioned} 
              onCheckedChange={() => setShowDeprovisioned(!showDeprovisioned)}
            />
            <label htmlFor="showDeprovisioned" className="ml-2 text-sm">
              Show deprovisioned users
            </label>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-white rounded-lg border shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Systems</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">{request.name}</TableCell>
                    <TableCell>{request.email}</TableCell>
                    <TableCell>{request.department}</TableCell>
                    <TableCell>{request.requestedRole}</TableCell>
                    <TableCell className="text-xs">
                      {request.startDate && (
                        <>
                          Start: {request.startDate}
                          {request.endDate && <><br />End: {request.endDate}</>}
                        </>
                      )}
                      {!request.startDate && 'Permanent'}
                    </TableCell>
                    <TableCell>{getStatusBadge(request.status)}</TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        {request.systems.map((sys, idx) => (
                          <div key={idx} className="flex justify-between text-xs">
                            <span>{sys.name}:</span>
                            {getSystemStatusBadge(sys.status)}
                          </div>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      {request.status === 'pending' && (
                        <div className="flex space-x-1">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleApproveRequest(request.id)}
                            className="h-8 text-green-500 hover:bg-green-50"
                          >
                            <CheckIcon className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleRejectRequest(request.id)}
                            className="h-8 text-red-500 hover:bg-red-50"
                          >
                            <XIcon className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      )}
                      
                      {request.status === 'active' && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleDeprovisionUser(request.id)}
                          className="h-8"
                        >
                          <LockIcon className="h-4 w-4 mr-1" />
                          Deprovision
                        </Button>
                      )}
                      
                      {request.status === 'deprovisioning' && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleCompleteDeprovisioning(request.id)}
                          className="h-8"
                        >
                          Complete
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
                {filteredRequests.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-6 text-gray-500">
                      No provisioning requests found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      {/* Deprovisioning Dialog */}
      <Dialog open={deprovisionDialogOpen} onOpenChange={setDeprovisionDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-red-600">User Deprovisioning</DialogTitle>
          </DialogHeader>
          <Form {...deprovisioningForm}>
            <form onSubmit={deprovisioningForm.handleSubmit(onSubmitDeprovisioning)} className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                <p className="text-sm text-red-800">
                  Deprovisioning a user will revoke access to all systems and remove all permissions.
                  This action initiates the deprovisioning workflow but can be reversed if needed.
                </p>
              </div>
              
              <FormField
                control={deprovisioningForm.control}
                name="reason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reason for Deprovisioning</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please provide the reason for deprovisioning this user..."
                        className="min-h-[80px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={deprovisioningForm.control}
                name="effectiveDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Effective Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormDescription>
                      When should the deprovisioning take effect?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={deprovisioningForm.control}
                name="preserveData"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Preserve User Data
                      </FormLabel>
                      <FormDescription>
                        Keep user data in systems for compliance or future reference
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              
              {deprovisioningForm.watch('preserveData') && (
                <FormField
                  control={deprovisioningForm.control}
                  name="preserveDuration"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                      <div className="space-y-0.5">
                        <FormLabel>Data Preservation Period (days)</FormLabel>
                        <FormDescription>
                          How long to keep user data before permanent deletion
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                          className="w-20 text-right"
                          min={0}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}

              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" type="button" onClick={() => setDeprovisionDialogOpen(false)}>
                  Cancel
                </Button>
                <Button variant="destructive" type="submit">
                  Start Deprovisioning
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserProvisioning;
