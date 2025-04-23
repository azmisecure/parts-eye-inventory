import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MaintenanceRecord, Part, sampleParts } from "@/lib/data";
import { useState, useEffect } from "react";

interface MaintenanceFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (record: Partial<MaintenanceRecord>) => void;
  initialData?: MaintenanceRecord;
}

const MaintenanceForm = ({ open, onClose, onSubmit, initialData }: MaintenanceFormProps) => {
  const [maintenanceRecord, setMaintenanceRecord] = useState<Partial<MaintenanceRecord>>(
    initialData || {
      maintenanceType: 'preventive',
      status: 'scheduled',
      startDate: new Date().toISOString().split('T')[0],
      cost: 0,
      workOrderNumber: `WO-${new Date().toISOString().split('T')[0]}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`
    }
  );

  const [availableParts, setAvailableParts] = useState<Part[]>([]);

  useEffect(() => {
    // If editing, use the existing data
    if (initialData) {
      setMaintenanceRecord(initialData);
    } else {
      // Otherwise use default values for a new record
      setMaintenanceRecord({
        maintenanceType: 'preventive',
        status: 'scheduled',
        startDate: new Date().toISOString().split('T')[0],
        cost: 0,
        workOrderNumber: `WO-${new Date().toISOString().split('T')[0]}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`
      });
    }
    
    // Load available parts
    setAvailableParts(sampleParts);
  }, [initialData, open]);

  const handleChange = (key: keyof MaintenanceRecord, value: any) => {
    setMaintenanceRecord((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handlePartChange = (partId: string) => {
    const selectedPart = sampleParts.find(part => part.id === partId);
    if (selectedPart) {
      setMaintenanceRecord(prev => ({
        ...prev,
        partId: selectedPart.id,
        partName: selectedPart.name
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(maintenanceRecord);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>
              {initialData ? "Edit Maintenance Record" : "Create Maintenance Record"}
            </DialogTitle>
            <DialogDescription>
              {initialData
                ? "Update the maintenance record details below."
                : "Enter the details for the new maintenance record."}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="partId" className="text-right">
                Part
              </Label>
              <Select
                value={maintenanceRecord.partId}
                onValueChange={handlePartChange}
                disabled={!!initialData}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select part" />
                </SelectTrigger>
                <SelectContent>
                  {availableParts.map((part) => (
                    <SelectItem key={part.id} value={part.id}>
                      {part.name} ({part.sku})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="maintenanceType" className="text-right">
                Type
              </Label>
              <Select
                value={maintenanceRecord.maintenanceType}
                onValueChange={(value) => handleChange("maintenanceType", value)}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="preventive">Preventive</SelectItem>
                  <SelectItem value="corrective">Corrective</SelectItem>
                  <SelectItem value="predictive">Predictive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <Select 
                value={maintenanceRecord.status}
                onValueChange={(value) => handleChange("status", value)}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="technician" className="text-right">
                Technician
              </Label>
              <Input
                id="technician"
                value={maintenanceRecord.technician || ''}
                onChange={(e) => handleChange("technician", e.target.value)}
                className="col-span-3"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="startDate" className="text-right">
                Start Date
              </Label>
              <Input
                id="startDate"
                type="date"
                value={maintenanceRecord.startDate || ''}
                onChange={(e) => handleChange("startDate", e.target.value)}
                className="col-span-3"
              />
            </div>
            
            {(maintenanceRecord.status === 'completed') && (
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="completionDate" className="text-right">
                  Completion Date
                </Label>
                <Input
                  id="completionDate"
                  type="date"
                  value={maintenanceRecord.completionDate || ''}
                  onChange={(e) => handleChange("completionDate", e.target.value)}
                  className="col-span-3"
                />
              </div>
            )}
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cost" className="text-right">
                Cost ($)
              </Label>
              <Input
                id="cost"
                type="number"
                value={maintenanceRecord.cost || 0}
                onChange={(e) => handleChange("cost", parseFloat(e.target.value))}
                className="col-span-3"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="workOrderNumber" className="text-right">
                Work Order #
              </Label>
              <Input
                id="workOrderNumber"
                value={maintenanceRecord.workOrderNumber || ''}
                onChange={(e) => handleChange("workOrderNumber", e.target.value)}
                className="col-span-3"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="details" className="text-right">
                Details
              </Label>
              <Textarea
                id="details"
                rows={3}
                value={maintenanceRecord.details || ''}
                onChange={(e) => handleChange("details", e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button type="submit">
              {initialData ? "Update Record" : "Create Record"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default MaintenanceForm;
