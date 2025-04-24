
import { Activity } from '../types/activity';

export const sampleActivities: Activity[] = [
  {
    id: '1',
    type: 'add',
    partName: 'Hydraulic Actuator',
    quantity: 5,
    user: 'John Doe',
    date: 'April 20, 2025',
  },
  {
    id: '2',
    type: 'remove',
    partName: 'Fuel Pump',
    quantity: 2,
    user: 'Jane Smith',
    date: 'April 19, 2025',
  },
  {
    id: '3',
    type: 'update',
    partName: 'Navigation Light',
    user: 'Mike Johnson',
    date: 'April 18, 2025',
  },
  {
    id: '4',
    type: 'move',
    partName: 'Oxygen Mask',
    user: 'Sarah Williams',
    date: 'April 17, 2025',
  },
];
