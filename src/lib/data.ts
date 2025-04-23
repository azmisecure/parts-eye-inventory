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
  image: string;
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
  maintenanceDetails?: MaintenanceDetails;
}

export interface MaintenanceRecord {
  id: string;
  partId: string;
  partName: string;
  maintenanceType: 'preventive' | 'corrective' | 'predictive';
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  technician: string;
  startDate: string;
  completionDate?: string;
  details: string;
  cost: number;
  workOrderNumber: string;
}

export interface MaintenanceDetails {
  maintenanceType: 'preventive' | 'corrective' | 'predictive';
  workOrderNumber: string;
  description: string;
  cost: number;
}

export const sampleParts: Part[] = [
  {
    id: '1',
    name: 'Aircraft Oil Filter',
    sku: 'AC-OF-001',
    category: 'Engine Components',
    location: 'Hangar A',
    quantity: 15,
    minQuantity: 5,
    price: 34.95,
    lastUpdated: '2025-04-21',
    image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&q=80',
  },
  {
    id: '2',
    name: 'Fuel Pump',
    sku: 'AC-FP-002',
    category: 'Fuel System',
    location: 'Hangar B',
    quantity: 8,
    minQuantity: 2,
    price: 550.0,
    lastUpdated: '2025-04-21',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  },
  {
    id: '3',
    name: 'Landing Gear Tire',
    sku: 'AC-LGT-003',
    category: 'Landing Gear',
    location: 'Parts Depot',
    quantity: 20,
    minQuantity: 10,
    price: 289.0,
    lastUpdated: '2025-04-20',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
  },
  {
    id: '4',
    name: 'Hydraulic Fluid',
    sku: 'AC-HF-004',
    category: 'Hydraulics',
    location: 'Hangar A',
    quantity: 50,
    minQuantity: 20,
    price: 120.5,
    lastUpdated: '2025-04-18',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
  },
  {
    id: '5',
    name: 'Pitot Tube',
    sku: 'AC-PT-005',
    category: 'Instruments',
    location: 'Hangar C',
    quantity: 10,
    minQuantity: 4,
    price: 147.0,
    lastUpdated: '2025-04-17',
    image: 'https://images.unsplash.com/photo-1447078806655-40579c2520d6?w=800&q=80',
  },
  {
    id: '6',
    name: 'Spark Plug - Aviation',
    sku: 'AC-SP-006',
    category: 'Engine Components',
    location: 'Hangar A',
    quantity: 60,
    minQuantity: 15,
    price: 44.0,
    lastUpdated: '2025-04-15',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&q=80',
  },
  {
    id: '7',
    name: 'Brake Pad Set - Aircraft',
    sku: 'AC-BPS-007',
    category: 'Brakes',
    location: 'Hangar B',
    quantity: 14,
    minQuantity: 6,
    price: 395.5,
    lastUpdated: '2025-04-12',
    image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?w=800&q=80',
  },
  {
    id: '8',
    name: 'Windshield Wiper Motor',
    sku: 'AC-WWM-008',
    category: 'Electrical',
    location: 'Hangar C',
    quantity: 12,
    minQuantity: 3,
    price: 120.0,
    lastUpdated: '2025-04-16',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&q=80',
  },
  {
    id: '9',
    name: 'Navigation Light LED',
    sku: 'AC-NLL-009',
    category: 'Lighting',
    location: 'Parts Depot',
    quantity: 27,
    minQuantity: 8,
    price: 89.99,
    lastUpdated: '2025-04-19',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&q=80',
  },
  {
    id: '10',
    name: 'Avionics Cooling Fan',
    sku: 'AC-ACF-010',
    category: 'Avionics',
    location: 'Hangar A',
    quantity: 6,
    minQuantity: 2,
    price: 234.75,
    lastUpdated: '2025-04-13',
    image: 'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?w=800&q=80',
  },
  {
    id: '11',
    name: 'Gyroscope',
    sku: 'AC-GYR-011',
    category: 'Instruments',
    location: 'Hangar C',
    quantity: 5,
    minQuantity: 2,
    price: 770.0,
    lastUpdated: '2025-04-10',
    image: 'https://images.unsplash.com/photo-1465101099481-0af3ac1a8f51?w=800&q=80',
  },
  {
    id: '12',
    name: 'Oxygen Cylinder',
    sku: 'AC-OC-012',
    category: 'Cabin Supplies',
    location: 'Parts Depot',
    quantity: 13,
    minQuantity: 3,
    price: 520.0,
    lastUpdated: '2025-04-14',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80',
  },
  {
    id: '13',
    name: 'Flap Actuator',
    sku: 'AC-FA-013',
    category: 'Flight Controls',
    location: 'Hangar B',
    quantity: 7,
    minQuantity: 2,
    price: 1850.0,
    lastUpdated: '2025-04-21',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80',
  },
  {
    id: '14',
    name: 'Altimeter',
    sku: 'AC-ALT-014',
    category: 'Instruments',
    location: 'Hangar C',
    quantity: 9,
    minQuantity: 2,
    price: 995.0,
    lastUpdated: '2025-04-21',
    image: 'https://images.unsplash.com/photo-1483107977081-1600499cedd9?w=800&q=80',
  },
  {
    id: '15',
    name: 'Throttle Cable',
    sku: 'AC-TC-015',
    category: 'Flight Controls',
    location: 'Hangar B',
    quantity: 16,
    minQuantity: 5,
    price: 65.0,
    lastUpdated: '2025-04-20',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
  },
  {
    id: '16',
    name: 'Cabin Air Filter',
    sku: 'AC-CAF-016',
    category: 'Cabin Supplies',
    location: 'Hangar A',
    quantity: 24,
    minQuantity: 8,
    price: 48.99,
    lastUpdated: '2025-04-19',
    image: 'https://images.unsplash.com/photo-1473187983305-f615310e7daa?w=800&q=80',
  },
  {
    id: '17',
    name: 'Fuel Quantity Transmitter',
    sku: 'AC-FQT-017',
    category: 'Fuel System',
    location: 'Hangar B',
    quantity: 10,
    minQuantity: 3,
    price: 399.95,
    lastUpdated: '2025-04-17',
    image: 'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?w=800&q=80',
  },
  {
    id: '18',
    name: 'Starter Generator',
    sku: 'AC-SG-018',
    category: 'Electrical',
    location: 'Hangar C',
    quantity: 3,
    minQuantity: 1,
    price: 2345.45,
    lastUpdated: '2025-04-18',
    image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?w=800&q=80',
  },
  {
    id: '19',
    name: 'Rudder Trim Motor',
    sku: 'AC-RTM-019',
    category: 'Flight Controls',
    location: 'Hangar B',
    quantity: 2,
    minQuantity: 1,
    price: 754.0,
    lastUpdated: '2025-04-15',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80',
  },
  {
    id: '20',
    name: 'Runway Turnoff Light',
    sku: 'AC-RTL-020',
    category: 'Lighting',
    location: 'Parts Depot',
    quantity: 11,
    minQuantity: 5,
    price: 129.99,
    lastUpdated: '2025-04-16',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&q=80',
  },
];

export const sampleCategories: Category[] = [
  {
    id: '1',
    name: 'Engine Components',
    description: 'Parts related to aircraft engine maintenance',
    partCount: 2,
  },
  {
    id: '2',
    name: 'Fuel System',
    description: 'Fuel pumps, filters, and transmitters',
    partCount: 2,
  },
  {
    id: '3',
    name: 'Landing Gear',
    description: 'Wheels, tires, and landing gear assemblies',
    partCount: 1,
  },
  {
    id: '4',
    name: 'Hydraulics',
    description: 'Fluids and hydraulic system components',
    partCount: 1,
  },
  {
    id: '5',
    name: 'Instruments',
    description: 'Altimeters, gyroscopes, pitot tubes, etc.',
    partCount: 3,
  },
  {
    id: '6',
    name: 'Brakes',
    description: 'Braking assemblies and related hardware',
    partCount: 1,
  },
  {
    id: '7',
    name: 'Avionics',
    description: 'Avionics parts and equipment',
    partCount: 1,
  },
  {
    id: '8',
    name: 'Electrical',
    description: 'Aircraft electrical components',
    partCount: 2,
  },
  {
    id: '9',
    name: 'Lighting',
    description: 'Lighting assemblies, bulbs, and LEDs',
    partCount: 2,
  },
  {
    id: '10',
    name: 'Cabin Supplies',
    description: 'Oxygen, air filters, and cabin hardware',
    partCount: 2,
  },
  {
    id: '11',
    name: 'Flight Controls',
    description: 'Cables, actuators, and control systems',
    partCount: 3,
  },
];

export const sampleLocations: Location[] = [
  {
    id: '1',
    name: 'Hangar A',
    description: 'Main hangar for engine and cabin components',
    partCount: 5,
  },
  {
    id: '2',
    name: 'Hangar B',
    description: 'Secondary hangar for flight control and landing gear parts',
    partCount: 6,
  },
  {
    id: '3',
    name: 'Hangar C',
    description: 'Avionics and instruments storage',
    partCount: 5,
  },
  {
    id: '4',
    name: 'Parts Depot',
    description: 'Central depot for lighting, tires, and supplies',
    partCount: 4,
  },
];

export const sampleMaintenanceRecords: MaintenanceRecord[] = [
  {
    id: '1',
    partId: '1',
    partName: 'Aircraft Oil Filter',
    maintenanceType: 'preventive',
    status: 'completed',
    technician: 'John Smith',
    startDate: '2025-04-15',
    completionDate: '2025-04-15',
    details: 'Regular oil filter replacement as per schedule',
    cost: 150.00,
    workOrderNumber: 'WO-2025-0415-001'
  },
  {
    id: '2',
    partId: '2',
    partName: 'Fuel Pump',
    maintenanceType: 'corrective',
    status: 'completed',
    technician: 'Maria Rodriguez',
    startDate: '2025-04-10',
    completionDate: '2025-04-12',
    details: 'Replaced faulty fuel pump that was causing pressure inconsistencies',
    cost: 750.00,
    workOrderNumber: 'WO-2025-0410-002'
  },
  {
    id: '3',
    partId: '3',
    partName: 'Landing Gear Tire',
    maintenanceType: 'preventive',
    status: 'completed',
    technician: 'Robert Chen',
    startDate: '2025-04-18',
    completionDate: '2025-04-18',
    details: 'Routine tire inspection and pressure check',
    cost: 95.00,
    workOrderNumber: 'WO-2025-0418-003'
  },
  {
    id: '4',
    partId: '18',
    partName: 'Starter Generator',
    maintenanceType: 'corrective',
    status: 'in-progress',
    technician: 'Emma Johnson',
    startDate: '2025-04-22',
    details: 'Troubleshooting intermittent startup issues',
    cost: 450.00,
    workOrderNumber: 'WO-2025-0422-004'
  },
  {
    id: '5',
    partId: '13',
    partName: 'Flap Actuator',
    maintenanceType: 'predictive',
    status: 'scheduled',
    technician: 'David Wilson',
    startDate: '2025-04-25',
    details: 'Preventive replacement based on usage data analysis',
    cost: 1200.00,
    workOrderNumber: 'WO-2025-0425-005'
  }
];

export const sampleActivities: Activity[] = [
  {
    id: '1',
    type: 'add',
    partName: 'Aircraft Oil Filter',
    quantity: 3,
    user: 'Sara Pilot',
    date: '2025-04-21 10:05',
  },
  {
    id: '2',
    type: 'remove',
    partName: 'Landing Gear Tire',
    quantity: 1,
    user: 'Paul Tech',
    date: '2025-04-20 14:31',
  },
  {
    id: '3',
    type: 'update',
    partName: 'Flap Actuator',
    user: 'Olivia Maint',
    date: '2025-04-19 08:13',
  },
  {
    id: '4',
    type: 'move',
    partName: 'Oxygen Cylinder',
    user: 'James Crew',
    date: '2025-04-18 09:40',
  },
  {
    id: '5',
    type: 'maintenance',
    partName: 'Aircraft Oil Filter',
    user: 'John Smith',
    date: '2025-04-15 13:22',
    maintenanceDetails: {
      maintenanceType: 'preventive',
      workOrderNumber: 'WO-2025-0415-001',
      description: 'Regular oil filter replacement as per schedule',
      cost: 150.00
    }
  },
  {
    id: '6',
    type: 'maintenance',
    partName: 'Fuel Pump',
    user: 'Maria Rodriguez',
    date: '2025-04-12 16:45',
    maintenanceDetails: {
      maintenanceType: 'corrective',
      workOrderNumber: 'WO-2025-0410-002',
      description: 'Replaced faulty fuel pump',
      cost: 750.00
    }
  },
];

export const navigationItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: "LayoutDashboard"
  },
  {
    title: "Parts",
    path: "/parts",
    icon: "Package"
  },
  {
    title: "Categories",
    path: "/categories",
    icon: "Tags"
  },
  {
    title: "Locations",
    path: "/locations",
    icon: "MapPin"
  },
  {
    title: "Maintenance",
    path: "/maintenance",
    icon: "Wrench"
  },
  {
    title: "Blockchain",
    path: "/blockchain",
    icon: "Cpu"
  },
];
