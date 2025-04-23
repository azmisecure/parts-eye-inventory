
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
  type: 'add' | 'remove' | 'update' | 'move';
  partName: string;
  quantity?: number;
  user: string;
  date: string;
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
];
