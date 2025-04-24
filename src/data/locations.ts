
import { Location } from '../types/inventory';

export const sampleLocations: Location[] = [
  {
    id: '1',
    name: 'Warehouse A',
    description: 'Main storage facility for high-turnover parts',
    partCount: 120,
  },
  {
    id: '2',
    name: 'Warehouse B',
    description: 'Secondary storage for less frequently used components',
    partCount: 85,
  },
  {
    id: '3',
    name: 'Warehouse C',
    description: 'Climate-controlled storage for sensitive components',
    partCount: 45,
  },
  {
    id: '4',
    name: 'Offsite Storage',
    description: 'Backup storage location for overflow inventory',
    partCount: 35,
  },
];
