
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MaintenanceRecord } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, FileClock } from "lucide-react";

interface MaintenanceCardProps {
  record: MaintenanceRecord;
  onEdit: (record: MaintenanceRecord) => void;
  onDelete: (id: string) => void;
}

const MaintenanceCard = ({ record, onEdit, onDelete }: MaintenanceCardProps) => {
  // Helper function to determine badge color based on status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500">Completed</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-500">In Progress</Badge>;
      case 'scheduled':
        return <Badge className="bg-amber-500">Scheduled</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-500">Cancelled</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  // Helper function to determine badge color based on maintenance type
  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'preventive':
        return <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">Preventive</Badge>;
      case 'corrective':
        return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Corrective</Badge>;
      case 'predictive':
        return <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">Predictive</Badge>;
      default:
        return <Badge variant="outline">{type}</Badge>;
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{record.partName}</CardTitle>
            <p className="text-sm text-muted-foreground">WO #{record.workOrderNumber}</p>
          </div>
          <div className="flex space-x-2">
            {getStatusBadge(record.status)}
            {getTypeBadge(record.maintenanceType)}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="space-y-2 text-sm">
          <div className="grid grid-cols-2 gap-1">
            <span className="text-muted-foreground">Technician:</span>
            <span>{record.technician}</span>
            
            <span className="text-muted-foreground">Start Date:</span>
            <span>{new Date(record.startDate).toLocaleDateString()}</span>
            
            {record.completionDate && (
              <>
                <span className="text-muted-foreground">Completed:</span>
                <span>{new Date(record.completionDate).toLocaleDateString()}</span>
              </>
            )}
            
            <span className="text-muted-foreground">Cost:</span>
            <span>${record.cost.toFixed(2)}</span>
          </div>
          
          <div>
            <span className="text-muted-foreground block">Details:</span>
            <p className="line-clamp-2">{record.details}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 pt-3 flex justify-between">
        <div className="flex items-center">
          <FileClock className="h-4 w-4 mr-1" />
          <span className="text-xs text-muted-foreground">
            {record.status === 'completed' 
              ? 'Completed on ' + new Date(record.completionDate!).toLocaleDateString() 
              : 'Started on ' + new Date(record.startDate).toLocaleDateString()}
          </span>
        </div>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" onClick={() => onEdit(record)}>
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-destructive" onClick={() => onDelete(record.id)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MaintenanceCard;
