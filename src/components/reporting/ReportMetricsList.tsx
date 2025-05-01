
import { Draggable } from 'react-beautiful-dnd';
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart4, Table, Database } from 'lucide-react';

type MetricItem = {
  id: string;
  type: 'chart' | 'table' | 'stat';
  title: string;
  description: string;
  category: string;
};

type ReportMetricsListProps = {
  metrics: MetricItem[];
};

const ReportMetricsList = ({ metrics }: ReportMetricsListProps) => {
  // Group metrics by category
  const metricsByCategory = metrics.reduce((acc, metric) => {
    if (!acc[metric.category]) {
      acc[metric.category] = [];
    }
    acc[metric.category].push(metric);
    return acc;
  }, {} as Record<string, MetricItem[]>);

  const getMetricIcon = (type: string) => {
    switch (type) {
      case 'chart':
        return <BarChart4 className="h-4 w-4" />;
      case 'table':
        return <Table className="h-4 w-4" />;
      case 'stat':
        return <Database className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {Object.entries(metricsByCategory).map(([category, categoryMetrics]) => (
        <div key={category} className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">{category}</h4>
          <div className="space-y-2">
            {categoryMetrics.map((metric, index) => (
              <Draggable key={metric.id} draggableId={metric.id} index={index}>
                {(provided, snapshot) => (
                  <Card
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`cursor-grab ${snapshot.isDragging ? 'shadow-lg' : ''}`}
                  >
                    <CardHeader className="py-2 px-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm">{metric.title}</CardTitle>
                        <Badge variant="outline" className="flex items-center gap-1">
                          {getMetricIcon(metric.type)}
                          {metric.type}
                        </Badge>
                      </div>
                      <CardDescription className="text-xs">
                        {metric.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                )}
              </Draggable>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportMetricsList;
