// Update the LeasingAgreement interface
export interface LeasingAgreement {
  id: string;
  partId: string;
  partName: string;
  asset_type: string;  // Add this field
  lessor: string;
  lessee: string;
  startDate: string;
  endDate: string;
  cost: number;
  status: 'active' | 'pending' | 'completed' | 'terminated';
  terms: string;
  contractHash: string;
}

// Update the sample leasing agreements
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
