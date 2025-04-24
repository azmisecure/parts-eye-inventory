
export interface MaintenanceDetails {
  maintenanceType: 'preventive' | 'corrective' | 'predictive';
  workOrderNumber: string;
  description: string;
  cost: number;
}

export interface MaintenanceRecord {
  id: string;
  partId: string;
  partName: string;
  status: string;
  startDate: string;
  completionDate?: string;
  technician: string;
  maintenanceType: 'preventive' | 'corrective' | 'predictive';
  details: string;
  cost: number;
  workOrderNumber: string;
}
