
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
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
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { KeyIcon, LockIcon, ClockIcon, UserIcon } from 'lucide-react';

// Define session interface
interface ActiveSession {
  id: string;
  userId: number;
  userName: string;
  userAgent: string;
  ipAddress: string;
  loginTime: string;
  lastActivity: string;
  isCurrentSession: boolean;
}

// Mock active sessions
const mockActiveSessions: ActiveSession[] = [
  {
    id: 'sess_123456',
    userId: 1,
    userName: 'John Smith',
    userAgent: 'Chrome 123, Windows 11',
    ipAddress: '192.168.1.105',
    loginTime: '2025-05-01 08:30:45',
    lastActivity: '2025-05-01 09:15:22',
    isCurrentSession: true
  },
  {
    id: 'sess_789012',
    userId: 1,
    userName: 'John Smith',
    userAgent: 'Safari 16, macOS',
    ipAddress: '198.51.100.234',
    loginTime: '2025-04-30 14:22:10',
    lastActivity: '2025-04-30 15:45:33',
    isCurrentSession: false
  },
  {
    id: 'sess_345678',
    userId: 2,
    userName: 'Jane Doe',
    userAgent: 'Firefox 98, Ubuntu Linux',
    ipAddress: '203.0.113.42',
    loginTime: '2025-05-01 07:15:30',
    lastActivity: '2025-05-01 08:22:15',
    isCurrentSession: false
  }
];

// Define schema for password policy form
const passwordPolicySchema = z.object({
  minimumLength: z.number().min(8).max(30).default(12),
  requireUppercase: z.boolean().default(true),
  requireLowercase: z.boolean().default(true),
  requireNumbers: z.boolean().default(true),
  requireSpecialChars: z.boolean().default(true),
  passwordHistoryCount: z.number().min(0).max(24).default(5),
  passwordExpiryDays: z.number().min(0).max(365).default(90),
  lockoutAfterFailedAttempts: z.number().min(0).max(10).default(5),
  lockoutDurationMinutes: z.number().min(0).max(1440).default(30),
});

type PasswordPolicyFormValues = z.infer<typeof passwordPolicySchema>;

// Define schema for session policy form
const sessionPolicySchema = z.object({
  sessionTimeoutMinutes: z.number().min(1).max(1440).default(30),
  enforceSingleSession: z.boolean().default(false),
  rememberMeDuration: z.number().min(0).max(30).default(14),
  idleWarningBeforeTimeoutSecs: z.number().min(0).max(300).default(60),
});

type SessionPolicyFormValues = z.infer<typeof sessionPolicySchema>;

const PasswordAndSessionPolicy = () => {
  const { toast } = useToast();
  const [activeSessions, setActiveSessions] = useState<ActiveSession[]>(mockActiveSessions);
  
  // Initialize password policy form
  const passwordPolicyForm = useForm<PasswordPolicyFormValues>({
    resolver: zodResolver(passwordPolicySchema),
    defaultValues: {
      minimumLength: 12,
      requireUppercase: true,
      requireLowercase: true,
      requireNumbers: true,
      requireSpecialChars: true,
      passwordHistoryCount: 5,
      passwordExpiryDays: 90,
      lockoutAfterFailedAttempts: 5,
      lockoutDurationMinutes: 30,
    }
  });

  // Initialize session policy form
  const sessionPolicyForm = useForm<SessionPolicyFormValues>({
    resolver: zodResolver(sessionPolicySchema),
    defaultValues: {
      sessionTimeoutMinutes: 30,
      enforceSingleSession: false,
      rememberMeDuration: 14,
      idleWarningBeforeTimeoutSecs: 60,
    }
  });

  // Calculate password strength based on policy
  const calculatePasswordStrength = () => {
    const { 
      minimumLength,
      requireUppercase, 
      requireLowercase, 
      requireNumbers, 
      requireSpecialChars 
    } = passwordPolicyForm.getValues();
    
    let strength = 0;
    
    // Length contribution (up to 40%)
    strength += Math.min(40, (minimumLength / 20) * 40);
    
    // Character types contribution (up to 60%)
    if (requireUppercase) strength += 15;
    if (requireLowercase) strength += 15;
    if (requireNumbers) strength += 15;
    if (requireSpecialChars) strength += 15;
    
    return Math.min(100, strength);
  };
  
  // Get strength indicator
  const getStrengthIndicator = () => {
    const strength = calculatePasswordStrength();
    
    if (strength >= 80) {
      return {
        text: 'Strong',
        color: 'bg-green-500',
        textColor: 'text-green-700',
        bgColor: 'bg-green-100',
        width: `${strength}%`
      };
    } else if (strength >= 60) {
      return {
        text: 'Good',
        color: 'bg-blue-500',
        textColor: 'text-blue-700',
        bgColor: 'bg-blue-100',
        width: `${strength}%`
      };
    } else if (strength >= 40) {
      return {
        text: 'Fair',
        color: 'bg-amber-500',
        textColor: 'text-amber-700',
        bgColor: 'bg-amber-100',
        width: `${strength}%`
      };
    } else {
      return {
        text: 'Weak',
        color: 'bg-red-500',
        textColor: 'text-red-700',
        bgColor: 'bg-red-100',
        width: `${strength}%`
      };
    }
  };

  // Handle saving password policy
  const onPasswordPolicySave = (values: PasswordPolicyFormValues) => {
    console.log('Saving password policy:', values);
    
    toast({
      title: "Password policy updated",
      description: "Password policy settings have been updated successfully.",
    });
  };

  // Handle saving session policy
  const onSessionPolicySave = (values: SessionPolicyFormValues) => {
    console.log('Saving session policy:', values);
    
    toast({
      title: "Session policy updated",
      description: "Session management settings have been updated successfully.",
    });
  };

  // Handle terminating a session
  const handleTerminateSession = (sessionId: string) => {
    setActiveSessions(activeSessions.filter(session => session.id !== sessionId));
    
    toast({
      title: "Session terminated",
      description: "The user session has been terminated successfully.",
    });
  };

  // Handle terminating all other sessions
  const handleTerminateAllOtherSessions = () => {
    setActiveSessions(activeSessions.filter(session => session.isCurrentSession));
    
    toast({
      title: "Sessions terminated",
      description: "All other user sessions have been terminated.",
    });
  };
  
  // Get strength indicator
  const strengthIndicator = getStrengthIndicator();
  
  // Watch form fields for strength calculation
  useEffect(() => {
    const subscription = passwordPolicyForm.watch(() => {
      // This will update when any password policy field changes
      getStrengthIndicator();
    });
    return () => subscription.unsubscribe();
  }, [passwordPolicyForm.watch]);
  
  return (
    <div className="space-y-8">
      {/* Password Policy */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl flex items-center">
            <KeyIcon className="mr-2 h-5 w-5" />
            Password Policy
          </CardTitle>
          <CardDescription>
            Configure organization-wide password requirements and security controls
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...passwordPolicyForm}>
            <form onSubmit={passwordPolicyForm.handleSubmit(onPasswordPolicySave)} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Password Requirements</h3>
                
                <div className="space-y-2">
                  <FormField
                    control={passwordPolicyForm.control}
                    name="minimumLength"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between">
                          <FormLabel>Minimum Length: {field.value} characters</FormLabel>
                        </div>
                        <FormControl>
                          <Slider
                            min={8}
                            max={30}
                            step={1}
                            value={[field.value]}
                            onValueChange={(vals) => field.onChange(vals[0])}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="mt-3">
                    <h4 className="text-sm font-medium mb-2">Character Requirements</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <FormField
                        control={passwordPolicyForm.control}
                        name="requireUppercase"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Uppercase Letters (A-Z)</FormLabel>
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
                        control={passwordPolicyForm.control}
                        name="requireLowercase"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Lowercase Letters (a-z)</FormLabel>
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
                        control={passwordPolicyForm.control}
                        name="requireNumbers"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Numbers (0-9)</FormLabel>
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
                        control={passwordPolicyForm.control}
                        name="requireSpecialChars"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Special Characters (!@#$...)</FormLabel>
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
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between mb-2">
                      <h4 className="text-sm font-medium">Password Strength</h4>
                      <Badge className={`${strengthIndicator.bgColor} ${strengthIndicator.textColor}`}>
                        {strengthIndicator.text}
                      </Badge>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-2 rounded-full ${strengthIndicator.color}`} 
                        style={{ width: strengthIndicator.width }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Password Lifecycle</h3>
                  
                  <FormField
                    control={passwordPolicyForm.control}
                    name="passwordHistoryCount"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Password History</FormLabel>
                          <FormDescription>
                            Remember previous passwords (0 = disabled)
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                            className="w-20 text-right"
                            min={0}
                            max={24}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={passwordPolicyForm.control}
                    name="passwordExpiryDays"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Password Expiry</FormLabel>
                          <FormDescription>
                            Days before password change required (0 = never)
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                            className="w-20 text-right"
                            min={0}
                            max={365}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Account Lockout</h3>
                  
                  <FormField
                    control={passwordPolicyForm.control}
                    name="lockoutAfterFailedAttempts"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Failed Login Attempts</FormLabel>
                          <FormDescription>
                            Lock account after this many failed login attempts (0 = never)
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                            className="w-20 text-right"
                            min={0}
                            max={10}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={passwordPolicyForm.control}
                    name="lockoutDurationMinutes"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Lockout Duration (minutes)</FormLabel>
                          <FormDescription>
                            How long account remains locked after failed attempts
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                            className="w-20 text-right"
                            min={1}
                            max={1440}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex justify-end pt-4">
                  <Button type="submit">Save Password Policy</Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Session Management */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl flex items-center">
            <ClockIcon className="mr-2 h-5 w-5" />
            Session Management
          </CardTitle>
          <CardDescription>
            Configure session timeouts and active session monitoring
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <Form {...sessionPolicyForm}>
              <form onSubmit={sessionPolicyForm.handleSubmit(onSessionPolicySave)} className="space-y-6">
                <div className="space-y-4">
                  <FormField
                    control={sessionPolicyForm.control}
                    name="sessionTimeoutMinutes"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between">
                          <FormLabel>Session Timeout: {field.value} minutes</FormLabel>
                        </div>
                        <FormControl>
                          <Slider
                            min={5}
                            max={240}
                            step={5}
                            value={[field.value]}
                            onValueChange={(vals) => field.onChange(vals[0])}
                          />
                        </FormControl>
                        <FormDescription>
                          Time of inactivity before automatic logout
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={sessionPolicyForm.control}
                    name="idleWarningBeforeTimeoutSecs"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Idle Warning Before Timeout</FormLabel>
                          <FormDescription>
                            Seconds before timeout to show warning (0 = no warning)
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                            className="w-20 text-right"
                            min={0}
                            max={300}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={sessionPolicyForm.control}
                    name="enforceSingleSession"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Enforce Single Session Per User</FormLabel>
                          <FormDescription>
                            Logging in from a new device will terminate previous sessions
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
                    control={sessionPolicyForm.control}
                    name="rememberMeDuration"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>"Remember Me" Duration (days)</FormLabel>
                          <FormDescription>
                            How long "Remember Me" sessions last (0 = disabled)
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                            className="w-20 text-right"
                            min={0}
                            max={30}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-end pt-4">
                    <Button type="submit">Save Session Policy</Button>
                  </div>
                </div>
              </form>
            </Form>

            <Separator className="my-6" />

            {/* Active Sessions */}
            <div>
              <h3 className="text-sm font-medium mb-4 flex items-center">
                <UserIcon className="mr-2 h-4 w-4" />
                Active User Sessions
              </h3>
              
              <div className="bg-white rounded-lg border shadow-sm">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Device / Browser</TableHead>
                      <TableHead>IP Address</TableHead>
                      <TableHead>Login Time</TableHead>
                      <TableHead>Last Activity</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activeSessions.map((session) => (
                      <TableRow key={session.id} className={session.isCurrentSession ? "bg-blue-50" : ""}>
                        <TableCell>
                          {session.userName}
                          {session.isCurrentSession && (
                            <Badge variant="outline" className="ml-2 bg-blue-100 text-blue-800">
                              Current
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>{session.userAgent}</TableCell>
                        <TableCell className="font-mono text-xs">{session.ipAddress}</TableCell>
                        <TableCell className="text-xs">{session.loginTime}</TableCell>
                        <TableCell className="text-xs">{session.lastActivity}</TableCell>
                        <TableCell>
                          {!session.isCurrentSession && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleTerminateSession(session.id)}
                              className="text-red-500 hover:bg-red-50"
                            >
                              Terminate
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              {activeSessions.filter(s => !s.isCurrentSession).length > 0 && (
                <div className="mt-4 flex justify-end">
                  <Button 
                    variant="outline" 
                    onClick={handleTerminateAllOtherSessions}
                    className="text-red-500 hover:bg-red-50"
                  >
                    Terminate All Other Sessions
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordAndSessionPolicy;
