import { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ShieldCheckIcon, ActivityIcon, FileDigitIcon, ClockIcon } from 'lucide-react';
import UserProvisioning from '../components/user/UserProvisioning';
import PasswordAndSessionPolicy from '../components/user/PasswordAndSessionPolicy';
import AccessRequestWorkflow from '../components/user/AccessRequestWorkflow';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../components/ui/table';
import { 
  Form, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage,
  FormDescription
} from '../components/ui/form';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../components/ui/select';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Switch } from '../components/ui/switch';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../components/ui/input-otp';
import { toast } from '@/hooks/use-toast';
import { Separator } from '../components/ui/separator';
import { LockKeyholeIcon, KeyIcon, AlertOctagonIcon } from 'lucide-react';

// Define user roles
const UserRoles = {
  ADMIN: "admin",
  EXECUTIVE: "executive",
  DEPARTMENT: "department",
  ANALYST: "analyst"
} as const;

// Define User interface to ensure type safety
interface User {
  id: number;
  name: string;
  email: string;
  role: typeof UserRoles[keyof typeof UserRoles];
  department: string;
  mfaEnabled?: boolean;
  lastLogin?: string;
}

// Define AuditLog interface
interface AuditLog {
  id: number;
  timestamp: string;
  userId: number;
  userName: string;
  action: string;
  details: string;
}

// Sample mock data for users
const mockUsers: User[] = [
  { id: 1, name: 'John Smith', email: 'john@example.com', role: UserRoles.ADMIN, department: 'Technology', mfaEnabled: true, lastLogin: '2025-04-30 14:22:15' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: UserRoles.EXECUTIVE, department: 'Executive', mfaEnabled: true, lastLogin: '2025-05-01 08:45:30' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: UserRoles.DEPARTMENT, department: 'Marketing', mfaEnabled: false, lastLogin: '2025-04-28 11:15:22' },
  { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: UserRoles.ANALYST, department: 'Data', mfaEnabled: false, lastLogin: '2025-04-29 16:30:45' },
  { id: 5, name: 'Alex Chen', email: 'alex@example.com', role: UserRoles.DEPARTMENT, department: 'Product', mfaEnabled: false, lastLogin: '2025-04-25 09:12:18' },
  { id: 6, name: 'Emily Davis', email: 'emily@example.com', role: UserRoles.DEPARTMENT, department: 'HR', mfaEnabled: true, lastLogin: '2025-04-30 13:40:10' },
];

// Sample mock data for audit logs
const mockAuditLogs: AuditLog[] = [
  { id: 1, timestamp: '2025-05-01 08:45:30', userId: 2, userName: 'Jane Doe', action: 'Login', details: 'Successful login from 192.168.1.105' },
  { id: 2, timestamp: '2025-05-01 08:50:12', userId: 2, userName: 'Jane Doe', action: 'View Report', details: 'Accessed Q1 Financial Report' },
  { id: 3, timestamp: '2025-04-30 14:22:15', userId: 1, userName: 'John Smith', action: 'User Update', details: 'Modified user permissions for Emily Davis' },
  { id: 4, timestamp: '2025-04-30 14:25:30', userId: 1, userName: 'John Smith', action: 'Security Setting', details: 'Enabled MFA requirement for all admin users' },
  { id: 5, timestamp: '2025-04-30 13:40:10', userId: 6, userName: 'Emily Davis', action: 'Login', details: 'Successful login from 192.168.1.210' },
  { id: 6, timestamp: '2025-04-30 13:45:22', userId: 6, userName: 'Emily Davis', action: 'Data Access', details: 'Accessed HR employee records' },
  { id: 7, timestamp: '2025-04-29 16:30:45', userId: 4, userName: 'Sarah Williams', action: 'Login', details: 'Successful login from 192.168.1.124' },
  { id: 8, timestamp: '2025-04-29 16:35:30', userId: 4, userName: 'Sarah Williams', action: 'Report Generation', details: 'Generated Customer Segmentation Report' },
];

// Role descriptions and permissions
const roleDescriptions = {
  [UserRoles.ADMIN]: {
    title: 'Admin',
    description: 'Full system access',
    color: 'bg-red-100 text-red-800',
    permissions: ['View all data', 'Edit all data', 'Manage users', 'Configure system settings', 'Access all modules']
  },
  [UserRoles.EXECUTIVE]: {
    title: 'Executive',
    description: 'Dashboard and reporting access',
    color: 'bg-blue-100 text-blue-800',
    permissions: ['View dashboards', 'Access reports', 'View analytics', 'Limited data editing']
  },
  [UserRoles.DEPARTMENT]: {
    title: 'Department',
    description: 'Specific view access',
    color: 'bg-green-100 text-green-800',
    permissions: ['View department data', 'Edit department records', 'Limited reporting']
  },
  [UserRoles.ANALYST]: {
    title: 'Analyst',
    description: 'Data and reporting access',
    color: 'bg-purple-100 text-purple-800',
    permissions: ['View all data', 'Create reports', 'Run analysis', 'No editing permissions']
  }
};

// Form schema for adding/editing users
const userFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  role: z.enum([UserRoles.ADMIN, UserRoles.EXECUTIVE, UserRoles.DEPARTMENT, UserRoles.ANALYST]),
  department: z.string().min(1, { message: 'Department is required' }),
  mfaEnabled: z.boolean().default(false),
});

type UserFormValues = z.infer<typeof userFormSchema>;

// Form schema for security settings
const securitySettingsSchema = z.object({
  requireMfaForAdmins: z.boolean().default(true),
  passwordRotationDays: z.number().min(30).max(180).default(90),
  sessionTimeoutMinutes: z.number().min(5).max(120).default(30),
  ipWhitelistingEnabled: z.boolean().default(false),
  dataEncryptionEnabled: z.boolean().default(true),
  auditLoggingEnabled: z.boolean().default(true),
});

type SecuritySettingsValues = z.infer<typeof securitySettingsSchema>;

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>(mockAuditLogs);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [mfaSetupDialogOpen, setMfaSetupDialogOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [setupUserId, setSetupUserId] = useState<number | null>(null);
  
  // Initialize user form
  const userForm = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: '',
      email: '',
      role: UserRoles.DEPARTMENT,
      department: '',
      mfaEnabled: false,
    },
  });

  // Initialize security settings form
  const securityForm = useForm<SecuritySettingsValues>({
    resolver: zodResolver(securitySettingsSchema),
    defaultValues: {
      requireMfaForAdmins: true,
      passwordRotationDays: 90,
      sessionTimeoutMinutes: 30,
      ipWhitelistingEnabled: false, 
      dataEncryptionEnabled: true,
      auditLoggingEnabled: true,
    },
  });
  
  // Handle adding new user
  const onSubmit = (values: UserFormValues) => {
    if (editingUserId) {
      // Update existing user - ensure all properties are present
      setUsers(users.map(user => 
        user.id === editingUserId ? { 
          ...user, 
          name: values.name,
          email: values.email,
          role: values.role,
          department: values.department,
          mfaEnabled: values.mfaEnabled,
        } : user
      ));
      
      // Add audit log entry
      addAuditLog(1, 'John Smith', 'User Update', `Modified user: ${values.name}`);
    } else {
      // Add new user - create a complete User object
      const newUser: User = {
        id: Math.max(0, ...users.map(u => u.id)) + 1,
        name: values.name,
        email: values.email,
        role: values.role,
        department: values.department,
        mfaEnabled: values.mfaEnabled,
        lastLogin: '—',
      };
      setUsers([...users, newUser]);
      
      // Add audit log entry
      addAuditLog(1, 'John Smith', 'User Create', `Created new user: ${values.name}`);
    }
    
    setDialogOpen(false);
    userForm.reset();
    setEditingUserId(null);
    
    toast({
      title: editingUserId ? "User updated" : "User created",
      description: editingUserId ? "User has been updated successfully." : "New user has been created successfully.",
    });
  };

  // Handle security settings submission
  const onSecuritySettingsSave = (values: SecuritySettingsValues) => {
    // In a real app, this would save settings to the server
    console.log('Security settings saved:', values);
    
    // Add audit log entry
    addAuditLog(1, 'John Smith', 'Security Setting', 'Updated security configuration settings');
    
    toast({
      title: "Security settings updated",
      description: "Your security configuration has been updated successfully.",
    });
  };

  // Add audit log entry
  const addAuditLog = (userId: number, userName: string, action: string, details: string) => {
    const newLog: AuditLog = {
      id: Math.max(0, ...auditLogs.map(log => log.id)) + 1,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      userId,
      userName,
      action,
      details
    };
    setAuditLogs([newLog, ...auditLogs]);
  };

  // Handle MFA setup
  const handleMfaSetup = (userId: number) => {
    const user = users.find(u => u.id === userId);
    if (user) {
      setSetupUserId(userId);
      setMfaSetupDialogOpen(true);
    }
  };

  // Complete MFA setup
  const completeMfaSetup = () => {
    if (setupUserId) {
      setUsers(users.map(user => 
        user.id === setupUserId ? { ...user, mfaEnabled: true } : user
      ));
      
      // Add audit log entry
      const user = users.find(u => u.id === setupUserId);
      if (user) {
        addAuditLog(user.id, user.name, 'Security Update', 'Multi-factor authentication enabled');
      }
      
      setMfaSetupDialogOpen(false);
      setSetupUserId(null);
      
      toast({
        title: "MFA enabled",
        description: "Multi-factor authentication has been successfully set up.",
      });
    }
  };

  // Handle edit user button click
  const handleEditUser = (user: User) => {
    userForm.reset({
      name: user.name,
      email: user.email,
      role: user.role,
      department: user.department,
      mfaEnabled: user.mfaEnabled || false,
    });
    setEditingUserId(user.id);
    setDialogOpen(true);
  };

  // Handle delete user
  const handleDeleteUser = (userId: number) => {
    if (confirm('Are you sure you want to delete this user?')) {
      const userToDelete = users.find(u => u.id === userId);
      setUsers(users.filter(user => user.id !== userId));
      
      // Add audit log entry
      if (userToDelete) {
        addAuditLog(1, 'John Smith', 'User Delete', `Deleted user: ${userToDelete.name}`);
      }
      
      toast({
        title: "User deleted",
        description: "User has been successfully deleted.",
      });
    }
  };

  // Open empty form for new user
  const handleAddUser = () => {
    userForm.reset({
      name: '',
      email: '',
      role: UserRoles.DEPARTMENT,
      department: '',
      mfaEnabled: false,
    });
    setEditingUserId(null);
    setDialogOpen(true);
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">User Management & Security</h1>
        <p className="text-gray-500">Manage user access and security settings with comprehensive controls</p>
      </div>
      
      <Tabs defaultValue="users" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="provisioning">User Provisioning</TabsTrigger>
          <TabsTrigger value="password">Password & Session</TabsTrigger>
          <TabsTrigger value="access">Access Requests</TabsTrigger>
          <TabsTrigger value="security">Security Settings</TabsTrigger>
          <TabsTrigger value="audit">Audit Logs</TabsTrigger>
        </TabsList>
        
        {/* Role overview section - Appears at top of User Management tab */}
        <TabsContent value="users">
          {/* Role overview section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Role Permissions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(roleDescriptions).map(([role, details]) => (
                <div key={role} className="border rounded-lg p-4 bg-white shadow-sm">
                  <div className="flex items-center mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${details.color}`}>
                      {details.title}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{details.description}</p>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Permissions:</h4>
                  <ul className="text-sm">
                    {details.permissions.map((permission, i) => (
                      <li key={i} className="flex items-center mb-1">
                        <svg className="w-3 h-3 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {permission}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* User list would go here */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">User Management</h2>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={handleAddUser}>Add User</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{editingUserId ? 'Edit User' : 'Add New User'}</DialogTitle>
                  </DialogHeader>
                  <Form {...userForm}>
                    <form onSubmit={userForm.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={userForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter user name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={userForm.control}
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
                        control={userForm.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Role</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a role" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value={UserRoles.ADMIN}>Admin</SelectItem>
                                <SelectItem value={UserRoles.EXECUTIVE}>Executive</SelectItem>
                                <SelectItem value={UserRoles.DEPARTMENT}>Department</SelectItem>
                                <SelectItem value={UserRoles.ANALYST}>Analyst</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={userForm.control}
                        name="department"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Department</FormLabel>
                            <FormControl>
                              <Input placeholder="Department name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={userForm.control}
                        name="mfaEnabled"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Enable Multi-Factor Authentication</FormLabel>
                              <FormDescription>
                                Require an additional verification step at login
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex justify-end gap-2 pt-2">
                        <Button variant="outline" type="button" onClick={() => setDialogOpen(false)}>
                          Cancel
                        </Button>
                        <Button type="submit">
                          {editingUserId ? 'Update User' : 'Add User'}
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
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>MFA Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge className={roleDescriptions[user.role].color}>
                          {roleDescriptions[user.role].title}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.department}</TableCell>
                      <TableCell>
                        {user.mfaEnabled ? (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Enabled
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 cursor-pointer"
                            onClick={() => handleMfaSetup(user.id)}>
                            Not Enabled
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>{user.lastLogin}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleEditUser(user)}
                          >
                            Edit
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleDeleteUser(user.id)} 
                            className="text-red-500 hover:bg-red-50"
                          >
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>
        
        {/* User Provisioning Tab */}
        <TabsContent value="provisioning">
          <UserProvisioning />
        </TabsContent>
        
        {/* Password Policy & Session Management Tab */}
        <TabsContent value="password">
          <PasswordAndSessionPolicy />
        </TabsContent>
        
        {/* Access Request Workflow Tab */}
        <TabsContent value="access">
          <AccessRequestWorkflow />
        </TabsContent>
        
        {/* Security Settings Tab */}
        <TabsContent value="security">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShieldCheckIcon className="mr-2 h-5 w-5" />
                  Security Configuration
                </CardTitle>
                <CardDescription>Configure system-wide security settings to meet compliance requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...securityForm}>
                  <form onSubmit={securityForm.handleSubmit(onSecuritySettingsSave)} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium flex items-center">
                        <LockKeyholeIcon className="mr-2 h-4 w-4" />
                        Authentication Settings
                      </h3>
                      
                      <FormField
                        control={securityForm.control}
                        name="requireMfaForAdmins"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Require MFA for Admin Users</FormLabel>
                              <FormDescription>
                                All administrator accounts must use multi-factor authentication
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={securityForm.control}
                        name="passwordRotationDays"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Password Rotation Policy</FormLabel>
                              <FormDescription>
                                Days before password change is required
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Input
                                type="number"
                                {...field}
                                onChange={(e) => field.onChange(Number(e.target.value))}
                                className="w-20 text-right"
                                min={30}
                                max={180}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={securityForm.control}
                        name="sessionTimeoutMinutes"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Session Timeout</FormLabel>
                              <FormDescription>
                                Minutes of inactivity before automatic logout
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Input
                                type="number"
                                {...field}
                                onChange={(e) => field.onChange(Number(e.target.value))}
                                className="w-20 text-right"
                                min={5}
                                max={120}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <Separator className="my-6" />
                      
                      <h3 className="text-sm font-medium flex items-center">
                        <KeyIcon className="mr-2 h-4 w-4" />
                        Data Protection
                      </h3>
                      
                      <FormField
                        control={securityForm.control}
                        name="dataEncryptionEnabled"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Data Encryption</FormLabel>
                              <FormDescription>
                                Enable encryption for sensitive data at rest and in transit
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={securityForm.control}
                        name="ipWhitelistingEnabled"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>IP Whitelisting</FormLabel>
                              <FormDescription>
                                Restrict access to specific IP addresses
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <Separator className="my-6" />
                      
                      <h3 className="text-sm font-medium flex items-center">
                        <ActivityIcon className="mr-2 h-4 w-4" />
                        Monitoring
                      </h3>
                      
                      <FormField
                        control={securityForm.control}
                        name="auditLoggingEnabled"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Audit Logging</FormLabel>
                              <FormDescription>
                                Track user activities and system events
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="submit">Save Security Settings</Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertOctagonIcon className="mr-2 h-5 w-5" />
                  SOC 2 Compliance
                </CardTitle>
                <CardDescription>Track your compliance with SOC 2 controls</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Security</h4>
                      <Badge className="bg-green-100 text-green-800">Compliant</Badge>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Availability</h4>
                      <Badge className="bg-amber-100 text-amber-800">In Progress</Badge>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Processing Integrity</h4>
                      <Badge className="bg-green-100 text-green-800">Compliant</Badge>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Confidentiality</h4>
                      <Badge className="bg-green-100 text-green-800">Compliant</Badge>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Privacy</h4>
                      <Badge className="bg-amber-100 text-amber-800">In Progress</Badge>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    <FileDigitIcon className="h-4 w-4 mr-1" />
                    <span>Last audit: March 15, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>Next review: June 15, 2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Audit Logs Tab */}
        <TabsContent value="audit">
          <Card
