
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Package, Tag, MapPin, AlertCircle } from 'lucide-react';

interface QuickStatsProps {
  totalParts: number;
  totalCategories: number;
  totalLocations: number;
  lowStockItems: number;
}

const QuickStats = ({ 
  totalParts, 
  totalCategories, 
  totalLocations, 
  lowStockItems 
}: QuickStatsProps) => {
  const stats = [
    {
      title: 'Total Parts',
      value: totalParts,
      icon: Package,
      description: 'Total parts in inventory',
      color: 'text-blue-500',
    },
    {
      title: 'Categories',
      value: totalCategories,
      icon: Tag,
      description: 'Part categories',
      color: 'text-green-500',
    },
    {
      title: 'Locations',
      value: totalLocations,
      icon: MapPin,
      description: 'Storage locations',
      color: 'text-purple-500',
    },
    {
      title: 'Low Stock',
      value: lowStockItems,
      icon: AlertCircle,
      description: 'Items below minimum',
      color: 'text-red-500',
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuickStats;
