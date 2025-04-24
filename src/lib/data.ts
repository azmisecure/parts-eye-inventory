
// Interfaces
export interface LeasingAgreement {
  id: string;
  partId: string;
  partName: string;
  asset_type: string;
  lessor: string;
  lessee: string;
  startDate: string;
  endDate: string;
  cost: number;
  status: 'active' | 'pending' | 'completed' | 'terminated';
  terms: string;
  contractHash: string;
}

export interface Part {
  id: string;
  name: string;
  sku: string;
  category: string;
  location: string;
  quantity: number;
  minQuantity: number;
  price: number;
  lastUpdated: string;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  partCount: number;
}

export interface Location {
  id: string;
  name: string;
  description: string;
  partCount: number;
}

export interface Activity {
  id: string;
  type: 'add' | 'remove' | 'update' | 'move' | 'maintenance';
  partName: string;
  quantity?: number;
  user: string;
  date: string;
}

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

// Sample Data
export const sampleParts: Part[] = [
  {
    id: '1',
    name: 'Hydraulic Actuator',
    sku: 'HA-001',
    category: 'Hydraulics',
    location: 'Warehouse A',
    quantity: 15,
    minQuantity: 5,
    price: 299.99,
    lastUpdated: '2025-04-10',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&q=80',
  },
  {
    id: '2',
    name: 'Fuel Pump',
    sku: 'FP-002',
    category: 'Fuel System',
    location: 'Warehouse B',
    quantity: 3,
    minQuantity: 5,
    price: 159.99,
    lastUpdated: '2025-04-15',
    image: 'https://images.unsplash.com/photo-1602338681424-9c586472a1d2?w=800&q=80',
  },
  {
    id: '3',
    name: 'Navigation Light',
    sku: 'NL-003',
    category: 'Electrical',
    location: 'Warehouse A',
    quantity: 25,
    minQuantity: 10,
    price: 79.99,
    lastUpdated: '2025-04-20',
    image: 'https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?w=800&q=80',
  },
  {
    id: '4',
    name: 'Oxygen Mask',
    sku: 'OM-004',
    category: 'Safety',
    location: 'Warehouse C',
    quantity: 50,
    minQuantity: 20,
    price: 45.99,
    lastUpdated: '2025-04-18',
    image: 'https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?w=800&q=80',
  },
];

export const sampleCategories: Category[] = [
  {
    id: '1',
    name: 'Hydraulics',
    description: 'Parts related to the aircraft hydraulic systems',
    partCount: 15,
  },
  {
    id: '2',
    name: 'Fuel System',
    description: 'Components for fuel storage and delivery',
    partCount: 8,
  },
  {
    id: '3',
    name: 'Electrical',
    description: 'Electrical components and wiring',
    partCount: 32,
  },
  {
    id: '4',
    name: 'Safety',
    description: 'Safety and emergency equipment',
    partCount: 24,
  },
];

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

// Leasing Agreements data
export const sampleLeasingAgreements: LeasingAgreement[] = [
  {
    id: '1',
    partId: '2',
    partName: 'Fuel Pump',
    asset_type: 'aircraft',
    lessor: 'AeroParts Inc',
    lessee: 'Sky Airlines',
    startDate: '2025-04-01',
    endDate: '2025-07-01',
    cost: 2500.00,
    status: 'active',
    terms: 'Quarterly maintenance required, insurance included',
    contractHash: '0x7f8e9d5a3b1c6f4e2d9a8b7c6f5e4d3a2b1c0f9e',
  },
  {
    id: '2',
    partId: '15',
    partName: 'Turbine Blade',
    asset_type: 'helicopter',
    lessor: 'RotorTech Solutions',
    lessee: 'Coast Guard Rescue',
    startDate: '2025-05-15',
    endDate: '2026-05-15',
    cost: 45000.00,
    status: 'pending',
    terms: 'Annual inspection mandatory, performance guarantee',
    contractHash: '0x9c3a2b1d5e6f4a7b8c0d1e2f3a4b5c6d7e8f9g',
  },
  {
    id: '3',
    partId: '7',
    partName: 'Landing Gear',
    asset_type: 'drone',
    lessor: 'AeroTech Innovations',
    lessee: 'Delivery Solutions Inc',
    startDate: '2025-06-01',
    endDate: '2025-12-01',
    cost: 15000.00,
    status: 'completed',
    terms: 'Maintenance included, replacement parts warranty',
    contractHash: '0x2d4f6a8c1b3e5d7f9h0j2l4n6p8r0t',
  },
  {
    id: '4',
    partId: '22',
    partName: 'Propulsion System',
    asset_type: 'spacecraft',
    lessor: 'SpaceParts United',
    lessee: 'Orbital Dynamics',
    startDate: '2025-07-01',
    endDate: '2026-07-01',
    cost: 250000.00,
    status: 'terminated',
    terms: 'Strict performance criteria, early termination clause',
    contractHash: '0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p',
  }
];
