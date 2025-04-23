
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, ArrowRight, ArrowDown, ArrowUp } from 'lucide-react';
import { Activity } from '@/lib/data';

interface RecentActivityProps {
  activities: Activity[];
}

const RecentActivity = ({ activities }: RecentActivityProps) => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'add':
        return <ArrowUp className="h-5 w-5 text-green-500" />;
      case 'remove':
        return <ArrowDown className="h-5 w-5 text-red-500" />;
      case 'update':
        return <Package className="h-5 w-5 text-blue-500" />;
      case 'move':
        return <ArrowRight className="h-5 w-5 text-purple-500" />;
      default:
        return <Package className="h-5 w-5" />;
    }
  };

  const getActivityText = (activity: Activity) => {
    switch (activity.type) {
      case 'add':
        return `Added ${activity.quantity} ${activity.partName}`;
      case 'remove':
        return `Removed ${activity.quantity} ${activity.partName}`;
      case 'update':
        return `Updated ${activity.partName} details`;
      case 'move':
        return `Moved ${activity.partName} to new location`;
      default:
        return `Activity on ${activity.partName}`;
    }
  };

  return (
    <Card className="col-span-1 lg:col-span-1">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4">
            <div className="mt-1 rounded-full bg-muted p-2">
              {getActivityIcon(activity.type)}
            </div>
            <div>
              <p className="font-medium">{getActivityText(activity)}</p>
              <p className="text-sm text-muted-foreground">
                {activity.user} • {activity.date}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
