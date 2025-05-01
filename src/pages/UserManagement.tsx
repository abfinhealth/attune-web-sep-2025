
import { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../components/ui/table';
import { 
  Form, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from '../components/ui/form';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Define user roles
const UserRoles = {
  ADMIN: "admin",
  EXECUTIVE: "executive",
  DEPARTMENT: "department",
  ANALYST: "analyst"
} as const;

// Sample mock data for users
const mockUsers = [
  { id: 1, name: 'John Smith', email: 'john@example.com', role: UserRoles.ADMIN, department: 'Technology' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: UserRoles.EXECUTIVE, department: 'Executive' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: UserRoles.DEPARTMENT, department: 'Marketing' },
  { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: UserRoles.ANALYST, department: 'Data' },
  { id: 5, name: 'Alex Chen', email: 'alex@example.com', role: UserRoles.DEPARTMENT, department: 'Product' },
  { id: 6, name: 'Emily Davis', email: 'emily@example.com', role: UserRoles.DEPARTMENT, department: 'HR' },
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
});

type UserFormValues = z.infer<typeof userFormSchema>;

const UserManagement = () => {
  const [users, setUsers] = useState(mockUsers);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  
  // Initialize form
  const form = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: '',
      email: '',
      role: UserRoles.DEPARTMENT,
      department: '',
    },
  });

  // Handle adding new user
  const onSubmit = (values: UserFormValues) => {
    if (editingUserId) {
      // Update existing user
      setUsers(users.map(user => 
        user.id === editingUserId ? { ...user, ...values } : user
      ));
    } else {
      // Add new user
      const newUser = {
        id: Math.max(...users.map(u => u.id)) + 1,
        ...values
      };
      setUsers([...users, newUser]);
    }
    setDialogOpen(false);
    form.reset();
    setEditingUserId(null);
  };

  // Handle edit user button click
  const handleEditUser = (user: typeof users[0]) => {
    form.reset({
      name: user.name,
      email: user.email,
      role: user.role,
      department: user.department,
    });
    setEditingUserId(user.id);
    setDialogOpen(true);
  };

  // Handle delete user
  const handleDeleteUser = (userId: number) => {
    if (confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  // Open empty form for new user
  const handleAddUser = () => {
    form.reset({
      name: '',
      email: '',
      role: UserRoles.DEPARTMENT,
      department: '',
    });
    setEditingUserId(null);
    setDialogOpen(true);
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">User Management</h1>
        <p className="text-gray-500">Manage user access and permissions with role-based controls</p>
      </div>
      
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
      
      {/* User list section */}
      <div className="mb-8">
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
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
                    control={form.control}
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
                    control={form.control}
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
                    control={form.control}
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
    </DashboardLayout>
  );
};

export default UserManagement;
