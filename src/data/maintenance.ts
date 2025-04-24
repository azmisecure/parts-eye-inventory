
import { MaintenanceRecord } from '../types/maintenance';

export const sampleMaintenanceRecords: MaintenanceRecord[] = [
  {
    id: '1',
    partId: '1',
    partName: 'Hydraulic Actuator',
    status: 'completed',
    startDate: '2025-03-15',
    completionDate: '2025-03-20',
    technician: 'John Mechanic',
    maintenanceType: 'preventive',
    details: 'Regular inspection and fluid replacement',
    cost: 350,
    workOrderNumber: 'WO-2025-001',
  },
  {
    id: '2',
    partId: '2',
    partName: 'Fuel Pump',
    status: 'in-progress',
    startDate: '2025-04-10',
    technician: 'Sarah Engineer',
    maintenanceType: 'corrective',
    details: 'Pressure regulation issue, replacing valve assembly',
    cost: 780,
    workOrderNumber: 'WO-2025-002',
  },
  {
    id: '3',
    partId: '3',
    partName: 'Navigation Light',
    status: 'scheduled',
    startDate: '2025-05-01',
    technician: 'Mike Electrician',
    maintenanceType: 'preventive',
    details: 'Regular inspection and bulb replacement',
    cost: 150,
    workOrderNumber: 'WO-2025-003',
  }
];
