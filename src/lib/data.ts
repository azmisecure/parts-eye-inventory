
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
    name: 'Oil Filter',
    sku: 'OIL-FLT-001',
    category: 'Filters',
    location: 'Warehouse A',
    quantity: 24,
    minQuantity: 10,
    price: 12.99,
    lastUpdated: '2025-04-20',
    image: '/placeholder.svg',
  },
  {
    id: '2',
    name: 'Air Filter',
    sku: 'AIR-FLT-002',
    category: 'Filters',
    location: 'Warehouse A',
    quantity: 18,
    minQuantity: 8,
    price: 15.99,
    lastUpdated: '2025-04-19',
    image: '/placeholder.svg',
  },
  {
    id: '3',
    name: 'Brake Pad Set',
    sku: 'BRK-PAD-003',
    category: 'Brakes',
    location: 'Warehouse B',
    quantity: 8,
    minQuantity: 10,
    price: 45.50,
    lastUpdated: '2025-04-18',
    image: '/placeholder.svg',
  },
  {
    id: '4',
    name: 'Spark Plug',
    sku: 'SPK-PLG-004',
    category: 'Engine',
    location: 'Warehouse C',
    quantity: 50,
    minQuantity: 20,
    price: 5.99,
    lastUpdated: '2025-04-21',
    image: '/placeholder.svg',
  },
  {
    id: '5',
    name: 'Alternator',
    sku: 'ALT-005',
    category: 'Electrical',
    location: 'Warehouse B',
    quantity: 5,
    minQuantity: 3,
    price: 129.99,
    lastUpdated: '2025-04-20',
    image: '/placeholder.svg',
  },
];

export const sampleCategories: Category[] = [
  {
    id: '1',
    name: 'Filters',
    description: 'All types of filters including oil, air and fuel filters',
    partCount: 2,
  },
  {
    id: '2',
    name: 'Brakes',
    description: 'Brake components including pads, discs and calipers',
    partCount: 1,
  },
  {
    id: '3',
    name: 'Engine',
    description: 'Engine parts and components',
    partCount: 1,
  },
  {
    id: '4',
    name: 'Electrical',
    description: 'Electrical components and systems',
    partCount: 1,
  },
];

export const sampleLocations: Location[] = [
  {
    id: '1',
    name: 'Warehouse A',
    description: 'Main warehouse for filters and small parts',
    partCount: 2,
  },
  {
    id: '2',
    name: 'Warehouse B',
    description: 'Secondary warehouse for brakes and electrical components',
    partCount: 2,
  },
  {
    id: '3',
    name: 'Warehouse C',
    description: 'Special storage for engine and drivetrain parts',
    partCount: 1,
  },
];

export const sampleActivities: Activity[] = [
  {
    id: '1',
    type: 'add',
    partName: 'Oil Filter',
    quantity: 10,
    user: 'John Doe',
    date: '2025-04-22 14:30',
  },
  {
    id: '2',
    type: 'remove',
    partName: 'Brake Pad Set',
    quantity: 2,
    user: 'Jane Smith',
    date: '2025-04-22 11:45',
  },
  {
    id: '3',
    type: 'update',
    partName: 'Spark Plug',
    user: 'John Doe',
    date: '2025-04-21 09:15',
  },
  {
    id: '4',
    type: 'move',
    partName: 'Alternator',
    user: 'Jane Smith',
    date: '2025-04-21 15:20',
  },
];
