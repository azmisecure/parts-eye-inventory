
import { MaintenanceDetails } from './maintenance';

export interface Activity {
  id: string;
  type: 'add' | 'remove' | 'update' | 'move' | 'maintenance';
  partName: string;
  quantity?: number;
  user: string;
  date: string;
  maintenanceDetails?: MaintenanceDetails;
}
