
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
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Activity } from 'lucide-react';

interface Initiative {
  id: string;
  name: string;
  owner: string;
  startDate: string;
  targetDate: string;
  status: 'planning' | 'active' | 'completed' | 'on-hold';
  kpis: string[];
  progress: number;
}

const MOCK_INITIATIVES: Initiative[] = [
  {
    id: '1',
    name: 'Financial Education Program',
    owner: 'Sarah Johnson',
    startDate: '2024-01-15',
    targetDate: '2024-06-30',
    status: 'active',
    kpis: ['Workshop Attendance', 'Knowledge Score Improvement'],
    progress: 65,
  },
  {
    id: '2',
    name: 'Mobile Banking Enhancement',
    owner: 'Michael Chen',
    startDate: '2024-02-10',
    targetDate: '2024-05-20',
    status: 'active',
    kpis: ['App Usage Rate', 'Transaction Volume'],
    progress: 80,
  },
  {
    id: '3',
    name: 'First-Time Homebuyer Program',
    owner: 'Emily Rodriguez',
    startDate: '2023-11-05',
    targetDate: '2024-04-15',
    status: 'completed',
    kpis: ['Mortgage Applications', 'Customer Satisfaction'],
    progress: 100,
  },
  {
    id: '4',
    name: 'Financial Health Score Integration',
    owner: 'James Wilson',
    startDate: '2024-04-01',
    targetDate: '2024-08-15',
    status: 'planning',
    kpis: ['Assessment Completion Rate', 'Score Improvement'],
    progress: 25,
  },
  {
    id: '5',
    name: 'Branch Digital Transformation',
    owner: 'Lisa Garcia',
    startDate: '2023-10-12',
    targetDate: '2024-03-31',
    status: 'on-hold',
    kpis: ['In-Person to Digital Ratio', 'Branch Efficiency'],
    progress: 40,
  }
];

const getStatusColor = (status: Initiative['status']) => {
  switch (status) {
    case 'planning': return 'bg-blue-100 text-blue-800';
    case 'active': return 'bg-green-100 text-green-800';
    case 'completed': return 'bg-purple-100 text-purple-800';
    case 'on-hold': return 'bg-amber-100 text-amber-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const InitiativeTracking = () => {
  const [initiatives] = useState<Initiative[]>(MOCK_INITIATIVES);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl font-bold">
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Initiative Tracking
            </div>
          </CardTitle>
          <CardDescription>
            Track the progress and impact of key financial health initiatives
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Initiative</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Timeline</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>KPIs</TableHead>
              <TableHead>Progress</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initiatives.map((initiative) => (
              <TableRow key={initiative.id}>
                <TableCell className="font-medium">{initiative.name}</TableCell>
                <TableCell>{initiative.owner}</TableCell>
                <TableCell>
                  {new Date(initiative.startDate).toLocaleDateString()} - 
                  {new Date(initiative.targetDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={`${getStatusColor(initiative.status)} border-0`}
                  >
                    {initiative.status.charAt(0).toUpperCase() + initiative.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    {initiative.kpis.map((kpi, index) => (
                      <span key={index} className="text-sm">{kpi}</span>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${initiative.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">{initiative.progress}%</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default InitiativeTracking;
